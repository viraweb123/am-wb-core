/* 
 * The MIT License (MIT)
 * 
 * Copyright (c) 2016 weburger
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the 'Software'), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
'use strict';

angular.module('am-wb-core')

/**
 * Load default resources
 */
.run(function($resource) {
	$resource.newPage({
		type : 'wb-url',
		icon: 'link',
		label : 'URL',
		templateUrl : 'views/resources/wb-url.html',
		/*
		 * @ngInject
		 */
		controller : function($scope) {
			$scope.$watch('value', function(value) {
				$scope.$parent.setValue(value);
			});
		},
		controllerAs: 'ctrl',
		tags : [ 'file', 'image', 'vedio', 'audio', 'page', 'url','link']
	});
	$resource.newPage({
		type : 'wb-sheet',
		icon : 'border_all',
		label : 'Sheet',
		templateUrl : 'views/resources/wb-sheet.html',
		/*
		 * @ngInject
		 */
		controller : function($scope) {
			$scope.$watch('value', function(value) {
				if (angular.isDefined(value)) {
					$scope.$parent.setValue(value);
				} else {
					$scope.$parent.setValue({
						'key' : 'value',
						'values' : [ [ 1, 2 ], [ 1, 2 ] ]
					});
				}
			}, true);
		},
		controllerAs: 'ctrl',
		tags : [ 'data' ]
	});


	$resource.newPage({
		type : 'script',
		icon : 'script',
		label : 'Script',
		templateUrl : 'views/resources/wb-event-code-editor.html',
		/*
		 * @ngInject
		 */
		controller : function($scope, $wbLibs, $element) {
			var ctrl = this;
			this.value = $scope.value || {
				code: '',
				language: 'javascript',
				languages: [{
					text: 'HTML/XML',
					value: 'markup'
				},
				{
					text: 'JavaScript',
					value: 'javascript'
				},
				{
					text: 'CSS',
					value: 'css'
				}]
			};
			this.setCode = function(code) {
				this.value.code = code;
				$scope.$parent.setValue(this.value);
			};
			
			this.setLanguage = function(language){
				this.value.code = language;
				$scope.$parent.setValue(this.value);
			};
			
			this.setEditor = function(editor) {
				this.editor = editor;
				editor.setOptions({
					enableBasicAutocompletion: true, 
					enableLiveAutocompletion: true, 
					showPrintMargin: false, 
					maxLines: Infinity,
					fontSize: '100%'
				});
				$scope.editor = editor;
//				editor.setTheme('resources/libs/ace/theme/chrome');
//				editor.session.setMode('resources/libs/ace/mode/javascript');
				editor.setValue(ctrl.value.code || '');
				editor.on('change', function(){
					ctrl.setCode(editor.getValue());
				});
			};

//			var ctrl = this;
			$wbLibs.load('resources/libs/ace.js')
			.then(function(){
				ctrl.setEditor(ace.edit($element.find('div#am-wb-resources-script-editor')[0]));
			});
		},
		controllerAs: 'ctrl',
		tags : [ 'code', 'script']
	});
});