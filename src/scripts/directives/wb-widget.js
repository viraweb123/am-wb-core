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

angular.module('ngMaterialWeburger')

/**
 * @ngdoc directive
 * @name wbWidget
 * @memberof ngMaterialWeburger
 * @description Widgets container
 * 
 * This is widget containers.
 * 
 * All primary widgets are supported by default (such as remove and setting).
 */
.directive('wbWidget', function() {
    return {
	templateUrl : 'views/directives/wb-widget.html',
	restrict : 'E',
	transclude : true,
	scope : false,
	link: function(scope, element, attrs){
//	    element.attr('draggable', 'true');
	},
	controller : function($scope, $settings, $widget) {

	    /**
	     * Remove widget from parent
	     */
	    function removeWidget() {
		if ($scope.wbParent) {
		    $scope.wbParent.removeWidget($scope.wbModel);
		}
	    }

	    /**
	     * Load widget settings
	     * 
	     */
	    function settings() {
		return $widget.widget($scope.wbModel)//
		.then(function(widget) {
		    return $settings.load({
			wbModel : $scope.wbModel,
			wbParent : $scope.wbParent,
			style : {
			    pages : widget.setting
			}
		    });
		});
	    }

	    /*
	     * Add to scope
	     */
	    $scope.removeWidget = removeWidget;
	    $scope.settings = settings;
	}
    };
});
