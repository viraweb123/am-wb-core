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

angular.module('am-wb-core')//

/**
 * @ngdoc Factories
 * @name WidgetEditorFake
 * @description Editor of a widget
 * 
 */

.factory('WidgetEditorTinymce', function ($q, WidgetEditor) {

    /**
     * TODO: maso, 2019: extends WidgetEditorFake
     * 
     * Creates new instace of an editor
     */
    function editor(widget, options) {
        options = options || {};
        WidgetEditor.apply(this, widget, options);
    }

    /**
     * remove all resources
     * 
     * @memberof WidgetEditorTinymce
     */
    editor.prototype.destroy = function () {
        this.hide();
        WidgetEditor.prototype.destroy.call(this);
    };
    
    /**
     * Remove editor
     */
    editor.prototype.hide = function () {
        if (this.isHidden()) {
            return;
        }
        this._hide = true;
        tinymce.remove(this.widget.getElement().getPath())
    };

    /**
     * Run and display editor for the current widget
     */
    editor.prototype.show = function () {
        this._hide = false;
        var ctrl = this;
        var selectorPath = this.widget.getElement().getPath();
        tinymce.init(_.merge(this.options, {
            selector : selectorPath,
            themes : 'modern',
            setup: function (editor) {
                editor.on('keydown', function(e) {
                    var tinyMceEditor = tinyMCE.get(selectorPath);
                    if (e.keyCode === 27) { // escape
                        ctrl.hide();
                    }
                })
            }
        }))
        .then(function () {
            ctrl.widget.getElement().focus();
        });
    };

    editor.prototype.isHidden = function () {
        return this._hide;
    };

    /**
     * Read value from element and set into the element
     */
    editor.prototype.updateView = function (editor) {
        var content = editor.getContent({
            format : options.format
        }).trim();
        content = $sce.trustAsHtml(content);
        this.widget.setModelProperty(this.property, content);
    };

//  the editor type
    return editor;
});
