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

describe('WbWidget textarea ', function () {
	// instantiate service
	var $rootScope;
	var $widget;
	var $httpBackend;

	function MockRootWidget() {
		// TODO;
		this.scope = $rootScope.$new();
	};

	MockRootWidget.prototype.getScope = function(){
		return this.scope;
	}

	// load the service's module
	beforeEach(module('am-wb-core'));
	beforeEach(inject(function (_$rootScope_, _$widget_, _$httpBackend_) {
		$rootScope = _$rootScope_;
		$widget = _$widget_;
		$httpBackend = _$httpBackend_;
	}));

	it('should set form from model', function (done) {
		var root = new MockRootWidget();
		// Create new instance
		var model = {
				type: 'textarea',
				form: 'test-form'
		};
		$widget.compile(model, root)
		.then(function(widget){
			expect(widget.getElementAttribute('form')).toBe(model.form);
			done();
		});
		$rootScope.$apply();
	});
	
	it('should set value from model', function (done) {
		var root = new MockRootWidget();
		// Create new instance
		var model = {
				type: 'textarea',
				value: 'inpt-test-value',
		};
		$widget.compile(model, root)
		.then(function(widget){
			expect(widget.val()).toBe(model.value);
			expect(widget.getElementAttribute('value')).toBe(model.value);
			done();
		});
		$rootScope.$apply();
	});
	
	it('should set value from code model', function (done) {
		var root = new MockRootWidget();
		// Create new instance
		var model = {
				type: 'textarea',
				value: 'inpt-test-value',
		};
		$widget.compile(model, root)
		.then(function(widget){
			// loaded values
			expect(widget.val()).toBe(model.value);
			expect(widget.getElementAttribute('value')).toBe(model.value);
			// set value
			widget.val('text-00');
			expect(widget.val()).toBe('text-00');
			expect(widget.getElementAttribute('value')).toBe('text-00');
			done();
		});
		$rootScope.$apply();
	});
	
});
