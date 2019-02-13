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
'use strict';

angular
.module('am-wb-core')


/**
 * @ngdoc Factories
 * @name CursorWidgetLocator
 * @description Manages list of locators
 * 
 * 
 * There are two type of widgets locator: selection and bound.
 * 
 * For each widget a bound locator will be created.
 * 
 * For each item in selection a selection locator will be created.
 */
.factory('WidgetLocatorManager',function ($widget, BoundWidgetLocator, SelectionWidgetLocator) {


    /**
     * Get path of a widget to the root
     */
    function getPathOf(widget) {
        var widgets = [];
        while (widget != null) {
            widgets.push(widget);
            widget = widget.getParent();
        }
        return widgets;
    }

    /**
     * Creates new instance of the manager
     * 
     * @memberof CursorWidgetLocator
     */
    function WidgetLocatorManager(options) {
        options = options || {};
        this.setEnable(false);
        // attributes
        this.selectionLocators = [];
        this.boundLocators = [];

        this.locatorsMap = new Map();
        this.widgetMap = new Map();

        // selection options
        this.SelectionLocator = options.selectionLocator || SelectionWidgetLocator;
        this.SelectionLocatorOption = options.selectionLocatorOption || {};
        this.selectionEnable = true;
        if (angular.isDefined(options.selectionEnable)) {
            this.selectionEnable = options.selectionEnable;
        }

        // bound options
        this.BoundLocator = options.boundLocator || BoundWidgetLocator;
        this.BoundLocatorOption = options.boundLocatorOption || {};
        this.boundEnable = true;
        if (angular.isDefined(options.boundEnable)) {
            this.boundEnable = options.boundEnable;
        }
    }

    /**
     * Distracts all locators and remove from view
     * 
     * @memberof CursorWidgetLocator
     */
    WidgetLocatorManager.prototype.destroy = function () {
        angular.forEach(this.selectionLocators, function (
                locator) {
            locator.destroy();
        });
        angular.forEach(this.boundLocators, function (locator) {
            locator.destroy();
        });

        // create locators
        this.selectionLocators = [];
        this.boundLocators = [];

        // clean maps
        this.locatorsMap = new Map();
        this.widgetMap = new Map();
    };

    /**
     * Sets visibility of locators
     * 
     * @param visible
     *            {boolean} defines the visibility of the
     *            locators
     * @memberof CursorWidgetLocator
     */
    WidgetLocatorManager.prototype.setVisible = function (visible) {
        if (this.visible === visible) {
            return;
        }
        this.visible = visible;
        this.updateBoundLocators();
        this.updateSelectionLocators();
    }

    /**
     * Checks if the manager is in visible state
     * 
     * @return true if the manager is visible.
     * @memberof CursorWidgetLocator
     */
    WidgetLocatorManager.prototype.isVisible = function () {
        return this.visible;
    };


    WidgetLocatorManager.prototype.setEnable = function (enable) {
        if (this.enable === enable) {
            return;
        }
        this.enable = enable;
        if(this.enable){
            this.updateSelectionLocators();
            this.updateBoundLocators();
        }
    };

    WidgetLocatorManager.prototype.isEnable = function () {
        return this.enable;
    };

    /**
     * Sets widgets which are selected
     * 
     * @param widgets
     *            {WbWidgetCtr} which are selected
     * @memberof CursorWidgetLocator
     */
    WidgetLocatorManager.prototype.setSelectedWidgets = function (widgets) {
        var rootWidget = this.getRootWidget();
        if(!rootWidget && widgets.length){
            rootWidget = widgets[0].getRoot();
            this.setRootWidget(rootWidget);
        }
        this.selectedWidgets = widgets;
        if (this.isEnable()) {
            this.updateSelectionLocators();
        }
    };

    /**
     * Gets selected widgets
     * 
     * @return widgets
     * @memberof CursorWidgetLocator
     */
    WidgetLocatorManager.prototype.getSelectedWidgets = function () {
        return this.selectedWidgets || [];
    };

    /**
     * Sets the root widget
     * 
     * @param rootWidget
     *            {WbWidgetCtrl} root widget
     * @memberof WidgetLocatorManager
     */
    WidgetLocatorManager.prototype.setRootWidget = function (rootWidget) {
        if(this.rootWidget) {
            this.destroy();
        }
        this.rootWidget = rootWidget;
        if(this.rootWidget) {
            var element = this.rootWidget.getElement();
        }
        if (this.isEnable()) {
            this.updateBoundLocators();
        }
    };

    /**
     * Gets the root widget
     * 
     * @return the root widget
     * @memberof WidgetLocatorManager
     */
    WidgetLocatorManager.prototype.getRootWidget = function () {
        return this.rootWidget;
    };

    WidgetLocatorManager.prototype.updateSelectionLocators = function () {
        var widgets = this.getSelectedWidgets();
        var locator;
        var i;
        // disable extra
        for (i = 0; i < this.selectionLocators.length; i++) {
            this.selectionLocators[i]
            .setEnable(i < widgets.length);
        }

        // add new
        while (this.selectionLocators.length < widgets.length) {
            locator = new this.SelectionLocator(this.SelectionLocatorOption);
            locator.setEnable(true);
            this.selectionLocators.push(locator);
        }

        // set widgets
        for (i = 0; i < widgets.length; i++) {
            locator = this.selectionLocators[i];
            locator.setWidget(widgets[i]);
            locator.setVisible(this.visible);
        }
    };

    /**
     * Update all locators
     * 
     * @memberof WidgetLocatorManager
     */
    WidgetLocatorManager.prototype.updateBoundLocators = function () {
        var widgets;
        var i;
        var locator;
        var widget;

        /*
         * Adds new locator for new widget
         */
        var ctrl = this;
        if(!this.newLocatorListener) {
            this.newLocatorListener = $widget.debounce(function($event){
                ctrl.updateBoundLocators();
                ctrl.updateSelectionLocators();
            }, 100);
        }
        if(!this.styleChangeListener){
            this.styleChangeListener = $widget.debounce(function($event) {
                if(angular.equals($event.newValue.layout, $event.oldValue.layout)){
                    return;
                }
                ctrl.updateBoundLocators();
                ctrl.updateSelectionLocators();
            }, 100);
        }

        // list widgets
        var rootWidget = this.getRootWidget();
        if(!rootWidget){
            return;
        }
        widgets = $widget.getChildren(rootWidget);
        widgets.push(rootWidget);
        this.activeBoundLocators = widgets.length;

        // disable extra
        angular.forEach(this.boundLocators, function(locator){
            locator.setEnable(i < widgets.length);
            // remove listener
            var widget = locator.getWidget();
            if(widget){
                widget.off('newchild', ctrl.newLocatorListener);
                widget.off('styleChanged', ctrl.styleChangeListener);
            }
        });

        // add new
        while (this.boundLocators.length < widgets.length) {
            locator = new this.BoundLocator(this.BoundLocatorOption);
            this.boundLocators.push(locator);
        }

        // set widgets
        for (i = 0; i < widgets.length; i++) {
            var locator = this.boundLocators[i];
            locator.setWidget(widgets[i]);
            locator.setEnable(true);
            locator.setVisible(this.visible);

            // add listener
            widgets[i].on('newchild', ctrl.newLocatorListener);
            widgets[i].on('styleChanged', ctrl.styleChangeListener);
        }
    };

    return WidgetLocatorManager;
});