/*
 * Copyright (c) 2015-2025 Phoinex Scholars Co. http://dpq.co.ir
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

angular.module('am-wb-core')//

/**
 * @ngdoc Widgets
 * @name a
 * @description Manage a link to other documents
 * 
 */
.factory('WbWidgetA', function (WbWidgetAbstractHtml) {
    'use strict';

    /**
     * Creates new instance of the group
     * 
     * @memberof WbWidgetGroupCtrl
     * @ngInject
     */
    function Widget($element, $parent){
        // call super constractor
        WbWidgetAbstractHtml.apply(this, [$element, $parent]);
        this.addElementAttributes('download', 'href',
                'hreflang', 'media', 'ping', 'referrerpolicy',
                'rel', 'target', 'type');

        // chack edit mode
        function removeDefaultAction($event){
            $event.preventDefault();
        }
        var ctrl = this;
        this.on('stateChanged', function(event){
            if(event.value === 'edit'){
                ctrl.getElement().on('click dblclick', removeDefaultAction);
            } else {
                ctrl.getElement().off('click dblclick', removeDefaultAction);
            }
        });
    };

    // extend functionality
    Widget.prototype = Object.create(WbWidgetAbstractHtml.prototype);
    return Widget;
});
