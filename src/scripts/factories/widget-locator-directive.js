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

/**
 * @ngdoc Factories
 * @name AbstractWidgetLocator
 * @description Locates a widget on the view
 * 
 * It is used to display extra information about a widget on the screen. For
 * example it is used to show widget actions on the fly.
 * 
 * @ngInject
 */
function AbstractWidgetLocator() {
    var abstractWidgetLocator = function () {
        this.callbacks = [];
        this.element = null;
        // TODO:
    };

    abstractWidgetLocator.prototype.setVisible = function (visible) {
        this.visible = visible;
        if (visible) {
            this.fire('show');
        } else {
            this.fire('hide');
        }
    };

    abstractWidgetLocator.prototype.isVisible = function () {
        return this.visible;
    };

    abstractWidgetLocator.prototype.setWidget = function (widget) {
        this.widget = widget;
    };

    abstractWidgetLocator.prototype.getWidget = function () {
        return this.widget;
    };
    
    abstractWidgetLocator.prototype.setElement = function (element) {
        this.element = element;
    };
    
    abstractWidgetLocator.prototype.getElement = function () {
        return this.element;
    };

    abstractWidgetLocator.prototype.on = function (type, callback) {
        if (!angular.isArray(this.callbacks[type])) {
            this.callbacks[type] = [];
        }
        this.callbacks[type].push(callback);
    };

    abstractWidgetLocator.prototype.fire = function (type) {
        if (angular.isDefined(this.callbacks[type])) {
            for (var i = 0; i < this.callbacks[type].length; i++) {
                try {
                    this.callbacks[type][i]();
                } catch (error) {
                    console.log(error);
                }
            }
        }
    };

    return abstractWidgetLocator;
}

/**
 * @ngdoc Factories
 * @name AbstractWidgetLocator
 * @description Locates a widget on the view
 * 
 * It is used to display extra information about a widget on the screen. For
 * example it is used to show widget actions on the fly.
 * 
 * @ngInject
 */
function CursorWidgetLocator(AbstractWidgetLocator) {

    var cursorWidgetLocator = function () {
        // TODO:
        var element = angular
                .element('<div class="wb-widget-locator-cursor"></div>');
        this.setElement(element);
        var ctrl = this;
        this.on('show', function () {
            var el = ctrl.getElement();
            el.show();
        });
        this.on('hide', function () {
            var el = ctrl.getElement();
            el.hide();
        });
    };
    cursorWidgetLocator.prototype = new AbstractWidgetLocator();
    return cursorWidgetLocator;
}

/**
 * @ngdoc Factories
 * @name AbstractWidgetLocator
 * @description Locates a widget on the view
 * 
 * It is used to display extra information about a widget on the screen. For
 * example it is used to show widget actions on the fly.
 * 
 * @ngInject
 */
function BoundWidgetLocator() {

    var boundWidgetLocator = function () {
        // TODO:
    };

    boundWidgetLocator.prototype = new AbstractWidgetLocator();

    return boundWidgetLocator;
}

/**
 * @ngdoc Factories
 * @name AbstractWidgetLocator
 * @description Locates a widget on the view
 * 
 * It is used to display extra information about a widget on the screen. For
 * example it is used to show widget actions on the fly.
 * 
 * @ngInject
 */
function ActionsWidgetLocator() {
    var actionsWidgetLocator = function () {
        // TODO:
    }
    actionsWidgetLocator.prototype = new AbstractWidgetLocator();

    return actionsWidgetLocator;
}

angular.module('am-wb-core')//
.factory('CursorWidgetLocator', CursorWidgetLocator)//
.factory('BoundWidgetLocator', BoundWidgetLocator)//
.factory('ActionsWidgetLocator', ActionsWidgetLocator)//
.factory('AbstractWidgetLocator', AbstractWidgetLocator);
