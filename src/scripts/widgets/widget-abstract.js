/* 
 * The MIT License (MIT)
 * 
 * Copyright (c) 2016 weburger
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */



//submit the controller
angular.module('am-wb-core')//
/**
 * @ngdoc Widgets
 * @name WbWidgetAbstract
 * @descreption Abstract widget
 * 
 * This is an abstract implementation of the widgets. ## Models
 * 
 * The model of the widget is consist of two main part:
 * 
 * <ul>
 * <li>User data</li>
 * <li>Runtime data</li>
 * </ul>
 * 
 * User data is set as input data model and the runtime data is managed by
 * events and user functions.
 * 
 * Finally the combination of user and runtime data is used to update the view.
 * 
 * The setModelProperty changes the user data model.
 * 
 * The setProperty changes the runtime properties.
 *  ## Events
 * 
 * 
 * Here is list of allowed types:
 * 
 * <ul>
 * <li>modelChanged: some properties of the model is changed.</li>
 * <li>modelUpdated: A new data model is replaced with the current one.</li>
 * <li>styleChanged: Computed style of the current widget is update.</li>
 * <li>widgetIsEditable: Widget is in editable state (so the result of
 * isEditable() is true)</li>
 * <li>widgetIsNotEditable: widget is not in editable mode any more(so the
 * result of isEditable() is false)</li>
 * <li>widgetDeleted: the widgets is removed.</li>
 * <li>widgetUnderCursor: The widget is under the mouse</li>
 * <li>widgetSelected: the widget is selected</li>
 * <li>widgetUnselected: the widget is unselected</li>
 * </ul>
 * 
 * Following event propagate on the root too
 * 
 * <ul>
 * <li>widgetUnderCursor</li>
 * <li>widgetSelected</li>
 * </ul>
 */
.factory('WbWidgetAbstract', function($wbUtil, $widget, $timeout, $wbWindow ){
    'use strict';




    function debounce(func, wait) {
        var timeout;
        return function() {
            var context = this;
            var args = arguments;
            var later = function() {
                timeout = null;
                func.apply(context, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }



    function WbWidgetAbstract ($scope, $element, $parent){
        this.elementAttributes = [
            // identification
            'id',
            'name',
            'title',
            'class',
            // access
            'accesskey',
            'contenteditable',
            'hidden',
            'tabindex',
            // language
            'dir',
            'lang',
            'translate',
            'spellcheck',
            /*
             * NOTE: We must manage D&D internally to mange user D&D codes
             * TODO: maso, 2019: move dnd into a processor
             */
            //  'draggable',
            //  'dropzone',
            ];
        this.$scope = $scope;
        this.$element = $element;
        this.$parent = $parent;
        /**
         * State of the widget
         * 
         * - init
         * - edit
         * - ready
         * - deleted
         * 
         * @memberof WbAbstractWidget
         */
        this.state = 'init';

        this.actions = [];
        this.callbacks = [];
        this.childWidgets = [];

        /*
         * This is a cache of customer function
         * 
         */
        this.eventFunctions = {};
        this.computedStyle = {};

        // models
        this.runtimeModel = {};
        this.model = {};
        // event listeners
        var ctrl = this;
        /*
         * TODO: maso, 2019: move to event manager.
         */
        this.eventListeners = {
                scroll: function($event){
                    ctrl.fire('scroll', $event);
                },
                click: function ($event) {
                    if (ctrl.isEditable()) {
                        ctrl.setSelected(true, $event);
                        $event.stopPropagation();
                    }
                    ctrl.fire('click', $event);
                },
                dblclick: function ($event) {
                    if (ctrl.isEditable()) {
                        ctrl.setSelected(true, $event);
                        $event.stopPropagation();
                        $event.preventDefault();
                        // Open an editor 
                        var editor = $widget.getEditor(ctrl);
                        editor.show();
                    }
                    ctrl.fire('dblclick', $event);
                },
                mouseout: function ($event) {
                    ctrl.fire('mouseout', $event);
                },
                mouseover: function ($event) {
                    ctrl.fire('mouseover', $event);
                },
                mousedown: function ($event) {
                    ctrl.fire('mousedown', $event);
                },
                mouseup: function ($event) {
                    ctrl.fire('mouseup', $event);
                },
                mouseenter: function ($event) {
                    ctrl.fire('mouseenter', $event);
                },
                mouseleave: function ($event) {
                    ctrl.fire('mouseleave', $event);
                },

                // Media events
                error: function ($event) {
                    ctrl.fire('error', $event);
                },
                success: function ($event) {
                    ctrl.fire('success', $event);
                },
                load: function ($event) {
                    ctrl.fire('load', $event);
                }
        };

        /*
         * Add resize observer to the element
         */
        this.resizeObserver = new ResizeObserver(debounce(function ($event) {
            if(angular.isArray($event)){
                $event = $event[0];
            }
            ctrl.fire('resize', $event);
        }, 300));

        var options = {
                root: null,
                rootMargin: '0px',
        };

        this.intersectionObserver = new IntersectionObserver(function ($event) {
            if(angular.isArray($event)){
                $event = $event[0];
            }
            ctrl.setIntersecting($event.isIntersecting, $event);
        }, options);

        // Init the widget
        this.connect();
    }



    /**
     * Loads all basic elements attributes.
     * 
     * TODO: move to processor
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.loadBasicProperties = function () {
        var model = this.getModel();
        if (!model) {
            return;
        }
        var $element = this.getElement();
        for(var i =0; i < this.elementAttributes.length; i++){
            var key = this.elementAttributes[i];
            var value = this.getProperty(key) || this.getModelProperty(key);
            if(value){
                $element.attr(key, value);
            } else {
                $element.removeAttr(key);
            }
            // NOTE: html is special value
            if(key === 'html'){
                $element.html(value);
            }
            if(key === 'inputType'){
                this.setElementAttribute('type', value);
            }
            if(key === 'inputType'){
                this.setElementAttribute('type', value);
            }
            if(key === 'value'){
                $element.val(value);
            }
        }
    };

    /**
     * Loads style from the input model.
     * 
     * The style is a part of widget data model.
     * 
     * NOTE: this is an internal function and supposed not to call from outside.
     * 
     * @param style
     *            {object} part of widget model
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.loadStyle = function () {
        var model = this.getModel();
        var runtimeModel = this.getRuntimeModel();
        if (!model) {
            return;
        }
        var computedStyle = angular.merge({}, model.style, runtimeModel.style);
        if(angular.equals(computedStyle, this.computedStyle)){
            return;
        }
        // TODO: maso, 2018:Create event
        var $event = {}
        $event.source = this;
        $event.oldValue = this.computedStyle;
        $event.newValue = computedStyle;

        // save computedStyle
        this.computedStyle = computedStyle;

        // load style
        var css;
        if(model.type == 'Group' || model.type == 'ObjectCollection'){
            css = $wbUtil.convertToGroupCss(this.computedStyle || {});
        } else {
            css = $wbUtil.convertToWidgetCss(this.computedStyle || {});
        }
        this.$element.css(css);
        this.fire('styleChanged', $event);
    };

    /**
     * Refreshes the view based on the current data
     * 
     * It used runtime and model data to update the view.
     * 
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.refresh = function($event) {
        if(this.isSilent()) {
            return;
        }
        // to support old widget
        var model = this.getModel();
        this.getScope().wbModel = model;

        if($event){
            var key = $event.key || 'xxx';
            // update event
            if(key.startsWith('event')){
                this.eventFunctions = {};
            } else if(key.startsWith('style')) {
                this.loadStyle();
            } else if(_.includes(this.elementAttributes, key)){
                var value = this.getProperty(key) || this.getModelProperty(key);
                this.setElementAttribute(key, value);
            }
            return;
        } 
        this.eventFunctions = {};
        this.loadStyle();
        this.loadBasicProperties();
    };

    /**
     * Reload all data to run the widget from the start
     * 
     * This function clean the runtime data and refresh the widget. On the other
     * hand the init event will be fired.
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.reload = function(){
        this.runtimeModel = {};
        this.refresh();
    };


    /**
     * Returns model of the widget
     * 
     * The model is managed by other entity and used as read only part in the
     * widget.
     * 
     * By the way it is supposed that the model is used just in a widget and to
     * modify the model, a method of the widget is called. In this case the widget
     * fire the changes of the model.
     * 
     * @see #setModelProperty(key, value)
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.getModel = function () {
        return this.wbModel;
    };

    /**
     * Sets model of the widget
     * 
     * @see #getModel()
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.setModel = function (model) {
        this.setState('init');
        if (model === this.wbModel) {
            return;
        }
        this.wbModel = model;
        this.fire('modelChanged');
        this.reload();
        this.setState('ready');
    };

    /**
     * Checks if the key exist in the widget model
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.hasModelProperty = function(key){
        return objectPath.has(this.getModel(), key);
    };

    /**
     * Get model property
     * 
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.getModelProperty = function(key){
        return objectPath.get(this.getModel(), key);
    };

    /**
     * Sets new model property value
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.setModelProperty = function (key, value){
        // create the event
        var $event = {};
        $event.source = this;
        $event.key = key;
        $event.oldValue = this.getModelProperty(key);
        $event.newValue =  value;

        // check if value changed
        if(angular.equals($event.oldValue, $event.newValue)){
            return;
        }

        // Set the address
        if(value){
            objectPath.set(this.getModel(), key, value);
        } else {
            objectPath.del(this.getModel(), key);
        }

        // refresh the view
        this.refresh($event);
        this.fire('modelUpdated', $event);
    };

    /**
     * Gets runtime model
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.getRuntimeModel = function () {
        return this.runtimeModel;
    };

    /**
     * Checks if property exist
     * 
     * NOTE: just look for runtime property
     * 
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.hasProperty = function (key){
        return objectPath.has(this.getRuntimeModel(), key);
    };

    /**
     * Gets property of the model
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.getProperty = function (key){
        return objectPath.get(this.getRuntimeModel(), key);
    };

    /**
     * Remove property
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.removeProperty = function (key){
        var model = this.getRuntimeModel();
        objectPath.del(model, key);
    };

    /**
     * Changes property value
     * 
     * If the change cause the view to update then this function will update and
     * render the view.
     * 
     * @memberof WbAbstractWidget
     * @name setProperty
     */
    WbWidgetAbstract.prototype.setProperty = function (key, value){
        // create the event
        var $event = {};
        $event.source = this;
        $event.key = key;
        $event.oldValue = this.getProperty(key);
        $event.newValue =  value;
        $event.value =  value;

        // check if value changed
        if(angular.equals($event.oldValue, $event.value)){
            return;
        }

        // Set the address
        var model = this.getRuntimeModel();
        if(angular.isDefined(value)){
            objectPath.set(model, key, value);
        } else {
            objectPath.del(model, key);
        }


        // refresh the view
        this.refresh($event);
        this.fire('runtimeModelUpdated', $event);
        //To change the view in runtime
        var ctrl = this;
        // Update angular
        // TODO: maso, 2019: replace with this model
//      if (!$rootScope.$$phase) {
//      scope.$digest();
//      }
        $timeout( function() {
            ctrl.getScope().$digest();
        });

    };

    /**
     * Sets or gets style of the widget
     * 
     * The function effect on runtime style not the model. To change the model use
     * #setModelProperty(key,value).
     * 
     * NOTE: this function is part of widget API.
     * 
     * Set style by key:
     * 
     * widget.style('background.color', '#ff00aa');
     * 
     * Get style by key:
     * 
     * var color = widget.style('background.color');
     * 
     * Remove style by key:
     * 
     * widget.style('background.color', null);
     * 
     * Set style by object:
     * 
     * widgt.style({ background: { color: 'red', image: null } });
     * 
     * The style object is read only and you can get it as follow:
     * 
     * var style = widget.style();
     * 
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.style = function (style, value) {
        // there is no argument so act as get
        if(!angular.isDefined(style)){
            return angular.copy(this.getProperty('style'));
        }
        // style is a key
        if(angular.isString(style)){
            if(angular.isDefined(value)){
                return this.setStyle(style, value);
            } else {
                return this.getStyle(style);
            }
        }
    };

    /**
     * Sets style of the widget
     * 
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.setStyle = function(key, value) {
        this.setProperty('style.' + key, value);
    };

    /**
     * Get style from widget
     * 
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.getStyle = function(key) {
        return this.getProperty('style.' + key);
    };

    /**
     * Remove the widgets
     * 
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.destroy = function ($event) {
        // remove callbacks
        this.callbacks = [];
        this.actions = [];

        // destroy children
        angular.forEach(this.childWidgets, function (widget) {
            widget.destroy();
        });
        this.childWidgets = [];

        // destroy view
        var $element = this.getElement();
        $element.remove();
        $element = null;

        // remove scope
        var $scope = this.getScope();
        $scope.$destroy();
        $scope = null;
        this.fire('destroy', $event);
    };

    /**
     * Disconnect view with the widget
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.disconnect = function () {
        var $element = this.getElement();
        if (!$element) {
            return;
        }
        this.resizeObserver.unobserve($element[0]);
        this.intersectionObserver.unobserve($element[0]);
        angular.forEach(this.eventListeners, function (listener, key) {
            $element.off(key, listener);
        });
    };

    /**
     * Connects view with widget
     * 
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.connect = function () {
        var $element = this.getElement();
        if (!$element) {
            return;
        }
        angular.forEach(this.eventListeners, function (listener, key) {
            $element.on(key, listener);
        });
        this.resizeObserver.observe($element[0]);
        this.intersectionObserver.observe($element[0]);
    };

    /**
     * Get elements of the widget
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.getElement = function () {
        return this.$element;
    };

    /**
     * Sets element attributes
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.setElementAttribute = function(key, value){
        var $element = this.$element;
        if(value){
            $element.attr(key, value);
        } else {
            $element.removeAttr(key);
        }
    };

    /**
     * Get element attribute
     * 
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.getElementAttribute = function(key){
        return this.$element.attr(key);
    };

    /**
     * Remove element attribute
     * 
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.removeElementAttribute = function(key){
        this.$element.removeAttr(key);
    };

    /**
     * Set widget silent
     * 
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.setSilent = function(silent) {
        this.silent = silent;
    };

    /**
     * Checks if the element is silent
     * 
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.isSilent = function() {
        return this.silent;
    };

    /**
     * Adds new callback of type
     * 
     * @param typeof
     *            the event
     * @param callback
     *            to call on the event
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.on = function (type, callback) {
        if (!angular.isFunction(callback)) {
            throw {
                message: 'Callback must be a function'
            };
        }
        if (!angular.isArray(this.callbacks[type])) {
            this.callbacks[type] = [];
        }
        if(this.callbacks[type].includes(callback)){
            return;
        }
        this.callbacks[type].push(callback);
    };

    /**
     * Remove the callback
     * 
     * @param type
     *            of the event
     * @param callback
     *            to remove
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.off = function (type, callback) {
        if (!angular.isArray(this.callbacks[type])) {
            return;
        }
        // remove callback
        var callbacks = this.callbacks[type];
        var index = callbacks.indexOf(callback);
        if (index > -1) {
            callbacks.splice(index, 1);
        }
    };

    /**
     * Call all callbacks on the given event type.
     * 
     * Before callbacks, widget processors will process the widget and event.
     * 
     * @param type
     *            of the event
     * @param params
     *            to add to the event
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.fire = function (type, params) {
        // 1- Call processors
        var event = _.merge({
            source: this,
            type: type
        }, params || {});
        $widget.applyProcessors(this, event);

        // 2- call listeners
        if (this.isSilent() || !angular.isDefined(this.callbacks[type])) {
            return;
        }
        var callbacks = this.callbacks[type];
        var resultData = null;
        for(var i = 0; i < callbacks.length; i++){
            // TODO: maso, 2018: check if the event is stopped to propagate
            try {
                resultData = callbacks[i](event) || resultData;
            } catch (error) {
                // NOTE: remove on release
                console.log(error);
            }
        }
        return resultData;
    };

    /**
     * Gets direction of the widget
     * 
     * This function get direction from user model and is equals to:
     * 
     * widget.getModelProperty('style.layout.direction');
     * 
     * NOTE: default layout direction is column.
     * 
     * @returns {WbAbstractWidget.wbModel.style.layout.direction|undefined}
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.getDirection = function () {
        return this.getModelProperty('style.layout.direction') || 'column';
    };

    /**
     * Get events of the widget
     * 
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.getEvent = function () {
        return this.getModelProperty('event') || {};
    };

    /**
     * Get title of the widget
     * 
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.getTitle = function () {
        return this.getModelProperty('label');
    };

    /**
     * Gets type
     * 
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.getType = function () {
        return this.getModelProperty('type');
    };

    /**
     * Gets Id of the model
     * 
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.getId = function () {
        return this.getModelProperty('id');
    };

    /**
     * Get parent widget
     * 
     * Parent widget is called container in this model. It is attached dynamically
     * on the render phease.
     * 
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.getParent = function () {
        return this.$parent;
    };

    /**
     * Gets Scope data
     * 
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.getScope = function () {
        return this.$scope;
    };

    /**
     * Sets the state of the widget
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.setState = function (state) {
        var oldState = this.state;
        this.state = state;
        this.fire('stateChanged', {
            oldValue: oldState,
            value: state
        });
    };



    /**
     * Checks if the editable mode is enable
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.isEditable = function () {
        return this.editable;
    };

    /**
     * Set edit mode
     * 
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.setEditable = function (editable) {
        if (this.editable === editable) {
            return;
        }
        this.editable = editable;
        if (this.isRoot()) {
            delete this.lastSelectedItem;
            this.setSelected(true);
        }
        // propagate to child
        angular.forEach(this.childWidgets, function (widget) {
            widget.setEditable(editable);
        });

        // TODO: maso, 2019: add event data
        if (editable) {
            this.setState('edit');
            this.fire('editable'); // depricated
        } else {
            this.setState('ready');
            this.fire('noneditable'); // depricated
        }
        // TODO: no need to reload?!!
        var ctrl = this;
        $timeout(function(){
            ctrl.reload();
        }, 100);
    };

    /**
     * Check if intersecting
     * 
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.isIntersecting = function(){
        return this.intersecting;
    };

    /**
     * Set intersecting true
     * 
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.setIntersecting = function(intersecting, $event){
        this.intersecting = intersecting;
        this.fire('intersection', $event);
    };


    /**
     * Delete the widget
     * 
     * This function just used in edit mode
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.delete = function () {
        // remove itself
        this.fire('delete');
        var $parent = this.getParent();
        $parent.removeChild(this);
    };

    /**
     * Clone current widget This method works in edit mode only.
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.clone = function () {
        var $parent = this.getParent();
        var index = $parent.indexOfChild(this);
        $parent.addChild(index, angular.copy(this.getModel()));
    };

    /**
     * This method moves widget one to next.
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.moveNext = function () {
        var $parent = this.getParent();
        $parent.moveChild(this, $parent.indexOfChild(this) + 1);
    };

    /**
     * This method moves widget one to before
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.moveBefore = function () {
        var $parent = this.getParent();
        $parent.moveChild(this, $parent.indexOfChild(this) - 1);
    };

    /**
     * This method moves widget to the first of it's parent
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.moveFirst = function () {
        var $parent = this.getParent();
        $parent.moveChild(this, 0);
    };

    /**
     * This method moves widget to the last of it's parent
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.moveLast = function () {
        var $parent = this.getParent();
        $parent.moveChild(this, $parent.getChildren().length - 1);
    };

    /**
     * Checks if the widget is root
     * 
     * If there is no parent controller then this is a root one.
     * 
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.isRoot = function () {
        var $parent = this.getParent();
        return angular.isUndefined($parent) || $parent === null;
    };

    /**
     * Gets root widgets of the widget
     * 
     * @return the root widget
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.getRoot = function () {
        // check if the root is set
        if (this.rootWidget) {
            return this.rootWidget;
        }
        // find root if is empty
        this.rootWidget = this;
        while (!this.rootWidget.isRoot()) {
            this.rootWidget = this.rootWidget.getParent();
        }
        return this.rootWidget;
    };


    /**
     * Checks if the widget is selected.
     * 
     * NOTE: it is not possible to select root widget
     * 
     * @return true if the widget is selected.
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.isSelected = function () {
        return this.selected;
    };

    WbWidgetAbstract.prototype.setSelected = function (flag, $event) {
        if (this.isRoot()) {
            return;
        }
        if (this.selected === flag) {
            return;
        }

        // fire events
        this.selected = flag;
        if (flag) {
            this.getRoot().childSelected(this, $event);
            this.fire('select');
        } else {
            this.getRoot().childUnSelected(this, {});
            this.fire('unselect');
            // Open an editor 
            var editor = $widget.getEditor(this);
            editor.hide();
        }
    };

    /**
     * Add new action in actions list
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.addAction = function (action) {
        this.actions.push(action);
    };

    /**
     * Gets widget actions
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.getActions = function () {
        return this.actions;
    };


    /**
     * Returns bounding client rectangle to parent
     * 
     * @return bounding rectangle
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.getBoundingClientRect = function () {
        var element = this.getElement();
        if(!element){
            return {
                width: 0,
                height: 0,
                top: 0,
                left: 0
            };
        }

        var offset = element.offset();
        var width = element.outerWidth();
        var height = element.outerHeight();

        return {
            // rect
            width: width,
            height: height,
            // offset
            top: offset.top /*+ parseInt(element.css('marginTop'), 10)*/ + element.scrollTop(),
            left: offset.left /*+ parseInt(element.css('marginLeft'), 10)*/ + element.scrollLeft()
        };
    };


    /**
     * Adds animation to the page
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.animate = function (options) {
        var ctrl = this;
        var keys = [];
        var animation = {
                targets: this.getRuntimeModel(),
                update: function(/* anim */) {
                    // XXX: maso, 2019: support multiple key in event
                    ctrl.refresh();
                }
        };

        // copy animation properties
        if(options.duration){
            animation.duration = options.duration;
        }
        if(options.loop){
            animation.loop = options.loop;
        }
        if(options.autoplay){
            animation.autoplay = options.autoplay;
        }
        if(options.delay){
            animation.delay = options.delay;
        }
        if(options.easing){
            animation.easing = options.easing;
        }

        // Create list of attributes
        for(var key in options){
            // ignore keys
            if(key === 'duration'|| 
                    key === 'loop'|| 
                    key === 'autoplay'||
                    key === 'delay'||
                    key === 'easing'){
                continue;
            }
            keys.push(key);
            animation[key] = options[key];

            // set initial value
            var val = this.getProperty(key);
            if(!val) {
                this.setProperty(key, this.getModelProperty(key));
            }

            // NOTE: if the value is empty then you have to set from values
        }

        return anime(animation);
    };

    /**
     * Remove animations from the widget
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.removeAnimation = function () {
        // The animation will not add to element so there is no need to remove
    };

    /**
     * Sets window of the widget
     * 
     * @memberof WbAbstractWidget
     * @params window {WbWindow} of the current widget
     */
    WbWidgetAbstract.prototype.setWindow = function (window) {
        this.window = window;
    };

    /**
     * Gets window of the widget
     * 
     * @memberof WbAbstractWidget
     * @return window of the current widget or from the root
     */
    WbWidgetAbstract.prototype.getWindow = function () {
        return this.window || this.getRoot().getWindow() || $wbWindow;
    };


    /**
     * Adds attributes into the element attributes
     * 
     * $widget.addElementAttributes('a', 'b');
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.addElementAttributes = function(){
        this.elementAttributes = _.union(this.elementAttributes, arguments);
    };

    /**
     * Gets element attributes
     * 
     * @memberof WbAbstractWidget
     */
    WbWidgetAbstract.prototype.getElementAttributes = function(){
        return this.elementAttributes;
    }

    return WbWidgetAbstract;

});
