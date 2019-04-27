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

describe('Service $wbWindow', function () {
    var WbDialogWindow;
    var $document;
    var $wbWindow; 


    // load the service's module
    beforeEach(module('am-wb-core'));

    // instantiate service
    beforeEach(inject(function (_WbDialogWindow_, _$document_, _$wbWindow_) {
        WbDialogWindow = _WbDialogWindow_;
        $document = _$document_;
        $wbWindow = _$wbWindow_;
    }));

    it(' $wbWindow is default parent', function () {
        // create default window
        var window = new WbDialogWindow();
        expect(window.getParent()).toBe($wbWindow);
    });
    
    it('should set title of the page', function () {
        // create default window
        var window = new WbDialogWindow();
        
        var title = 'new title:' + Math.random();
        window.setTitle(title);
        expect(window.getTitle()).toBe(title);
        expect($document.title).toBe(title);
    });

});
