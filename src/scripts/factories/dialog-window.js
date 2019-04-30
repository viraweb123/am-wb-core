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

angular.module('am-wb-core')
.factory('WbDialogWindow', function($wbWindow, $document, $wbFloat) {
    'use strict';


    // Utils
    function covertToFloadConfig(dialogWindow) {
        var options = {
                closeOnEscape: dialogWindow.closeOnEscape,
                header: true,
                headerTitle: dialogWindow.title,
                headerLogo: '',
                headerControls: {
//                  close: 'remove',
//                  maximize: 'remove',
//                  normalize: 'remove',
//                  minimize: 'remove',
//                  smallify: 'remove',
//                  smallifyrev: 'remove',
                }
        };

        if(angular.isDefined(dialogWindow.x)){
            options.position = {
                    type: 'fixed',
                    my: 'left-top',
                    at: 'left-top',
                    of: 'body',
                    container: 'body',
                    offsetX: dialogWindow.x,
                    offsetY: dialogWindow.y
            }
        }

        return options;
    }

    /**
     * @ngdoc Factory
     * @name WbDialogWindow
     * @description WbDialogWindow a dialog manager
     * 
     */
    var wbWindow = function(parent){
        this.parent = parent || $wbWindow;
        this.floatDialogElement = null;
    };

    /**
     * Gets parent of the window
     * 
     * @memberof WbDialogWindow
     */
    wbWindow.prototype.getParent = function(){
        return this.parent;
    }

    /**
     * Sets title of the window
     * 
     * @memberof WbDialogWindow
     * @params title {string} the window title
     */
    wbWindow.prototype.setTitle = function(title){
        this.title = title;
        if(this.isVisible()){
            // TODO: maso, 2019: set title of the current dialog
        }
    };

    /**
     * Sets title of the window
     * 
     * @memberof WbDialogWindow
     * @return {string} the window title
     */
    wbWindow.prototype.getTitle = function(){
        return this.title;
    };


    /**
     * Sets language of the window
     * 
     * @memberof WbDialogWindow
     * @params language {string} the window language
     */
    wbWindow.prototype.setLanguage = function(language){
        this.language = language;
        if(this.isVisible()){
            // TODO: maso, 2019: set title of the current dialog
        }
    };

    /**
     * Sets title of the window
     * 
     * @memberof WbDialogWindow
     * @return {string} the window language
     */
    wbWindow.prototype.getLanguage = function(){
        return this.language;
    };

    /**
     * 
     * The open() method opens a new browser window, or a new tab, depending 
     * on your browser settings.
     * 
     * Tip: Use the close() method to close the window.
     * 
     * @memberof WbDialogWindow
     * @return window object
     */
    wbWindow.prototype.open = function(url, name, options, replace){
        return $wbWindow.open(url, name, options, replace);
    }

    /**
     * Sets visible of the window
     * 
     * 
     * @memberof WbDialogWindow
     * @params visible {boolean} of the window
     */
    wbWindow.prototype.setVisible = function(visible){
        if(!this.floatDialogElement) {
            this.floatDialogElement = $wbFloat.create(covertToFloadConfig(this));
        } else if(this.floatDialogElement.isVisible() === visible) {
            return;
        }

        this.floatDialogElement.setVisible(visible);
    }

    /**
     * Gets visible of the window
     * 
     * 
     * @memberof WbDialogWindow
     * @returns true if the window is visible
     */
    wbWindow.prototype.isVisible = function(){
        if(! this.floatDialogElement){
            return false;
        }
        return this.floatDialogElement.isVisible();
    };

    /**
     * Sets position of the window
     * 
     * 
     * @memberof WbDialogWindow
     * @params x {string|int} absolute position
     * @params y {string|int} absolute position
     */
    wbWindow.prototype.setPosition = function(x, y) {
        this.x = x;
        this.y = y;
        if(this.floatDialogElement){
            // TODO: reload the window position
        }
    };

    /**
     * Close window on Escape
     * 
     * @memberof WbDialogWindow
     * @params x {string|int} absolute position
     * @params y {string|int} absolute position
     */
    wbWindow.prototype.setCloseOnEscape = function(closeOnEscape) {
        this.closeOnEscape = closeOnEscape;
        if(this.floatDialogElement){
            // TODO: reload the window close
        }
    }

    /**
     * Sets size of the window
     * 
     * @memberof WbDialogWindow
     * @params width {string|int} absolute position
     * @params height {string|int} absolute position
     */
    wbWindow.prototype.setSize = function(width, height) {
        this.width = width;
        this.height = height;
        if(this.floatDialogElement){
            // TODO: reload the window size
        }
    };

    /**
     * Loads a library
     * 
     * @memberof WbDialogWindow
     * @path path of library
     * @return promise to load the library
     */
    wbWindow.prototype.loadLibrary = function(path){
        return $wbLibs.load(path);
    };

    /**
     * Check if the library is loaded
     * 
     * @memberof WbDialogWindow
     * @return true if the library is loaded
     */
    wbWindow.prototype.isLibraryLoaded = function(path){
        return $wbLibs.isLoaded(path);
    };


    /**
     * Set meta
     * 
     * @memberof WbDialogWindow
     * @params key {string} the key of meta
     * @params value {string} the value of meta
     */
    wbWindow.prototype.setMeta = function (key, value){
        var parent = this.getParent();
        if(parent) {
            parent.setMeta(key, value);
        }
    };

    /**
     * Set link
     * 
     * @memberof WbDialogWindow
     * @params key {string} the key of link
     * @params data {string} the value of link
     */
    wbWindow.prototype.setLink = function (key, data){
        var parent = this.getParent();
        if(parent) {
            parent.setLink(key, data);
        }
    };

    return wbWindow;
});
