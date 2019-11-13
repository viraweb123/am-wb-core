///* 
// * The MIT License (MIT)
// * 
// * Copyright (c) 2016 weburger
// * 
// * Permission is hereby granted, free of charge, to any person obtaining a copy
// * of this software and associated documentation files (the "Software"), to deal
// * in the Software without restriction, including without limitation the rights
// * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// * copies of the Software, and to permit persons to whom the Software is
// * furnished to do so, subject to the following conditions:
// * 
// * The above copyright notice and this permission notice shall be included in all
// * copies or substantial portions of the Software.
// * 
// * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// * SOFTWARE.
// */
//angular.module('am-wb-core')//
//
///**
// * @ngdoc Factories
// * @name TinymcePluginImageToolxcx
// * @description Adding image plugin
// * 
// */
//.factory('TinymcePluginImageTool', function ($resource) {
//	'use strict';
//
//	var tinymcePluginImageTool = function (editor/*, pluginUrl*/) {
//		var factory = this;
//		this.setEditor(editor);
//		editor.addButton('image', {
//			icon: 'image',
//			tooltip: 'Insert/edit image',
//			onclick: function(url){
//				editor.insertContent('<img src="' + url + '" >');
//			},
//			stateSelector: 'img:not([data-mce-object],[data-mce-placeholder]),figure.image'
//		});
//
//		editor.addMenuItem('image', {
//			icon: 'image',
//			text: 'Image',
//			onclick: function(){
//				factory.insertImage();
//			},
//			context: 'insert',
//			prependToContext: true
//		});
//
//		editor.addCommand('mceImage', function(){
//			factory.insertImage();
//		});
//	}
//
//	tinymcePluginImageTool.prototype.insertImage = function() {
//		var editor = this.getEditor();
//		$resource.get('image')//
//		.then(function(value){
//			editor.insertContent('<img src="' + value + '" >');
//		});
//	};
//	
//	tinymcePluginImageTool.prototype.setEditor = function(editor) {
//		this._editor = editor;
//	};
//	
//	tinymcePluginImageTool.prototype.getEditor = function() {
//		return this._editor;
//	};
//
//	return tinymcePluginImageTool;
//});
//
//
//
//
//
//
//
//
//
//
//
//