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

angular.module('am-wb-core').run(function ($widget) {
	
	function loadWidgetAttributes(widget, attributes){
		var $element = widget.getElement();
		angular.forEach(attributes, function(key){
			var value = widget.getProperty(key) || widget.getModelProperty(key);
	        if(value){
	            $element.attr(key, value);
	        } else {
	            $element.removeAttr(key);
	        }
		});
	}

	var microdataAttributes = [
		'itemscope', // groups list of item properties
		'itemtype', // can use if it is item scope
		'itemprop',
		'itemref',
		'itemid',
		// extera properties
		'content',
		'value',
	];

	/**
	 * @ngdoc Widget Processors
	 * @name microdata
	 * @description Handle widget microdata specification
	 * 
	 * Widget microdata is an specification which makes the widget readable by
	 * search engines. This processor just run in ready mode.
	 */
	$widget.setProcessor('microdata', function(widget, event){
		if(widget.state !== 'ready') {
			return;
		}
		
		// 1- Handle model load
		if(event.type === 'modelChanged' || event.type === 'stateChanged'){
			loadWidgetAttributes(widget, microdataAttributes);
			return;
		}
		
		// 2- Handle model update
		if(event.key === 'modelUpdate'){
			loadWidgetAttributes(widget, microdataAttributes);
			return;
		}
	});

	/**
	 * @ngdoc Widget Processors
	 * @name microdata
	 * @description Handle widget microdata specification
	 * 
	 * Widget microdata is an specification which makes the widget readable by
	 * search engines. This processor just run in ready mode.
	 */
	$widget.setProcessor('style', function(widget, event){});

	/**
	 * @ngdoc Widget Processors
	 * @name microdata
	 * @description Handle widget microdata specification
	 * 
	 * Widget microdata is an specification which makes the widget readable by
	 * search engines. This processor just run in ready mode.
	 * 
	 */
	$widget.setProcessor('dnd', function(widget, event){});

});
