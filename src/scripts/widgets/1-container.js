
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
//submit the controller
/**
 * @ngdoc Widget
 * @name WbWidgetContainer
 * @description Manages a group widgets
 * 
 * This is a group controller
 * 
 */
angular.module('am-wb-core').factory('WbWidgetContainer', function($wbUtil, $widget, $q, WbWidget) {

	/**
	 * Creates new instance of the group
	 * 
	 * @memberof WbWidgetGroupCtrl
	 * @ngInject
	 */
	function WbWidgetGroupCtrl($element, $parent) {
		// call super constractor
		WbWidget.apply(this, [$element, $parent]);

		// init group
	}

	// extend functionality
	WbWidgetGroupCtrl.prototype = Object.create(WbWidget.prototype);


	/**
	 * Set model to a group
	 * 
	 * Setting model to a group is differs from setting in widget. In group 
	 * we try to load children and finally loading the group itself.
	 * 
	 * @memberof WbWidgetGroupCtrl
	 * @param model Object to set into the group
	 */
	WbWidgetGroupCtrl.prototype.setModel = function(model) {
		if (model === this.model) {
			return;
		}
		this.setState('init');
		this.model = model;
		this.fire('modelChanged');

		var ctrl = this;
		return this.loadWidgets()
			.then(function() {
				return ctrl;
			});
	};

	/**
	 * Delete the widget
	 * 
	 * This function just used in edit mode
	 * 
	 * @memberof WbWidgetGroupCtrl
	 */
	WbWidgetGroupCtrl.prototype.delete = function() {
		this.removeChildren();
		this.fire('delete');
		if (!this.isRoot()) {
			this.getParent()
				.removeChild(this);
		}
	};

	WbWidgetGroupCtrl.prototype.getChildById = function(id) {
		var widgets = this.childWidgets;
		for (var i = 0; i < widgets.length; i++) {
			if (widgets[i].getId() === id) {
				return widgets[i];
			}
		}
	};

	/**
	 * Gets all children of the group
	 * 
	 * @return list of all widgets
	 */
	WbWidgetGroupCtrl.prototype.getChildren = function() {
		return this.childWidgets;
	};

	/**
	 * Removes a widget
	 * 
	 * Data model and visual element related to the input model will be removed.
	 * 
	 * @memberof WbWidgetGroupCtrl
	 */
	WbWidgetGroupCtrl.prototype.removeChild = function(widget) {
		var index = this.indexOfChild(widget);

		if (index > -1) {
			// remove model
			this.childWidgets.splice(index, 1);

			var model = this.getModel();
			index = model.children.indexOf(widget.getModel());
			model.children.splice(index, 1);

			// destroy widget
			widget.destroy();
			return true;
		}
		return false;
	};

	/**
	 * Removes all children of the group.
	 * 
	 * @memberof WbWidgetGroupCtrl
	 */
	WbWidgetGroupCtrl.prototype.removeChildren = function() {
		// remove all children
		var widgets = _.clone(this.getChildren());
		_.forEach(widgets, function(w) {
			w.delete();
		});
	};


	WbWidgetGroupCtrl.prototype.loadWidgets = function() {
		// destroy all children
		angular.forEach(this.childWidgets, function(widget) {
			widget.destroy();
		});
		this.childWidgets = [];


		var ctrl = this;
		var loadState = function() {
			ctrl.fire('loaded');
			ctrl.setState('ready');
		};

		// check for new child
		if (!this.model || !angular.isArray(this.model.children)) {
			return $q.resolve()
				.finally(loadState);
		}

		// create child
		var parentWidget = this;
		return this.__compileChildren(this.model.children).then(function(widgets) {
			parentWidget.childWidgets = widgets;
			var $element = parentWidget.getElement();
			$element.empty();
			_.forEach(parentWidget.childWidgets, function(widget) {
				widget.setEditable(ctrl.isEditable());
				$element.append(widget.getElement());
			});
		}).finally(loadState);
	};


	/**
	 * Adds child model
	 * 
	 * @memberof WbWidgetGroupCtrl
	 */
	WbWidgetGroupCtrl.prototype.addChildModel = function(index, item) {
		var items = [item];
		return this.addChildrenModel(index, items);
	};

	/**
	 * Adds children at specified index
	 * 
	 * Change data model and the view.
	 * 
	 * @memberof WbWidgetGroupCtrl
	 */
	WbWidgetGroupCtrl.prototype.addChildrenModel = function(index, children) {
		var model = this.getModel();
		var ctrl = this;
		index = this.__cleanInsertIndex(index);

		// compile all
		return this.__compileChildren(children).then(function(widgets) {
			for (var i = 0; i < widgets.length; i++) {
				var newWidget = widgets[i];

				var j = i + index;

				if (j < ctrl.childWidgets.length) {
					newWidget.getElement().insertBefore(ctrl.childWidgets[j].getElement());
				} else {
					ctrl.getElement().append(newWidget.getElement());
				}
				if (!angular.isArray(model.children)) {
					model.children = [];
				}
				model.children.splice(j, 0, newWidget.getModel());
				ctrl.childWidgets.splice(j, 0, newWidget);

				// init the widget
				newWidget.setEditable(ctrl.isEditable());
			}
			ctrl.fire('newchild', {
				widgets: widgets
			});
		});
	};

	/**
	 * Adds a child model to the group
	 * 
	 * @deprecated
	 */
	WbWidgetGroupCtrl.prototype.addChild = WbWidgetGroupCtrl.prototype.addChildModel;

	/**
	 * Adds a children model to the group
	 * 
	 * @deprecated
	 */
	WbWidgetGroupCtrl.prototype.addChildren = WbWidgetGroupCtrl.prototype.addChildrenModel;

	/*
	 * Internal:
	 * 
	 * convert children model into a list of widgets.
	 */
	WbWidgetGroupCtrl.prototype.__compileChildren = function(children) {
		var jobs = [];
		var widgets = [];
		var ctrl = this;
		angular.forEach(children, function(item, i) {
			item = $wbUtil.clean(item);
			jobs.push($widget.compile(item, ctrl)//
				.then(function(widget) {
					widgets[i] = widget;
				}));
		});

		// add widget
		return $q.all(jobs).then(function() {
			return widgets;
		});
	};

	WbWidgetGroupCtrl.prototype.__cleanInsertIndex = function(index) {
		if (!angular.isDefined(index) || index > this.childWidgets.length) {
			return this.childWidgets.length;
		}
		if (index < 0) {
			return 0;
		}
		return index;
	};

	/**
	 * Finds index of child element
	 * 
	 * @memberof WbWidgetGroupCtrl
	 */
	WbWidgetGroupCtrl.prototype.moveChild = function(widget, index) {
		function arraymove(arr, fromIndex, toIndex) {
			var element = arr[fromIndex];
			arr.splice(fromIndex, 1);
			arr.splice(toIndex, 0, element);
		}

		if (index < 0 || index > this.getChildren().length - 1 || this.getChildren().length === 1) {
			return;
		}
		if (this.getModel().children.indexOf(widget.getModel()) === index) {
			return;
		}
		var positionWidget = this.getChildren()[index];
		// move element
		if (this.getModel().children.indexOf(widget.getModel()) < index) {
			positionWidget.getElement().after(widget.getElement());
		} else {
			positionWidget.getElement().before(widget.getElement());
		}

		// move model
		arraymove(this.getModel().children, this.getModel().children.indexOf(widget.getModel()), index);

		// move controller
		arraymove(this.getChildren(), this.indexOfChild(widget), index);
	};

	/**
	 * Finds index of child element
	 * 
	 * @memberof WbWidgetGroupCtrl
	 */
	WbWidgetGroupCtrl.prototype.indexOfChild = function(widget) {
		if (!this.childWidgets || !this.childWidgets.length) {
			return -1;
		}
		return this.childWidgets.indexOf(widget);
	};

	return WbWidgetGroupCtrl;
});

