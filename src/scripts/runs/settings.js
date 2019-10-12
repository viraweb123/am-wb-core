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

angular.module('am-wb-core')

/**
 * Load widgets
 */
.run(function ($settings) {
    // utilities
    function setAllDim(dim, val) {
        dim.top = val;
        dim.right = val;
        dim.bottom = val;
        dim.left = val;
    }

    function createDimeStr(dim) {
        var output =
            dim.top + ' ' +
            dim.right + ' ' +
            dim.bottom + ' ' +
            dim.left;
        return output;
    }


    /*
     * splite margin/padding to its components
     * check different state Based on CSS rules. see for example:
     * https://www.w3schools.com/cssref/pr_margin.asp
     * https://www.w3schools.com/cssref/pr_padding.asp
     */
    function fillDimFromString(dim, str) {
        str = str || '';
        var dimAll;
        var dimsArray = str.split(' ');

        // 0px is selected
        if (dimsArray.length === 1) {
            dimAll = str;
        }

        //All 4 items is equal
        else if (dimsArray.length === 4 && _.uniq(dimsArray).length === 1) {
            dimAll = dimsArray[0];
        }

        //Items are 4 and different
        else if (dimsArray.length === 4 && _.uniq(dimsArray).length > 1) {
            dim.top = dimsArray[0];
            dim.right = dimsArray[1];
            dim.bottom = dimsArray[2];
            dim.left = dimsArray[3];
        }

        //Items are 3
        else if (dimsArray.length === 3) {
            dim.top = dimsArray[0];
            dim.right = dimsArray[1];
            dim.left = dimsArray[1];
            dim.bottom = dimsArray[2];
        }

        //Items are 2
        else if (dimsArray.length === 2) {
            dim.top = dimsArray[0];
            dim.bottom = dimsArray[0];
            dim.right = dimsArray[1];
            dim.left = dimsArray[1];
        }

        //Items are 1
        else if (dimsArray.length === 1) {
            dim.top = dimsArray[0];
            dim.right = dimsArray[0];
            dim.bottom = dimsArray[0];
            dim.left = dimsArray[0];
        }

        //All items are undefined. In this case default value is 0px.
        else if (!dimsArray.length) {
            dimAll = '0px';
        }

        // check dimAll
        if (dimAll) {
            setAllDim(dim, dimAll);
        }
    }

    function setAllCorner(dim, val) {
        dim.topLeft = val;
        dim.topRight = val;
        dim.bottomRight = val;
        dim.bottomLeft = val;
    }

    function createCornerStr(dim) {
        return dim.topLeft + ' ' + dim.topRight + ' ' + dim.bottomRight + ' ' + dim.bottomLeft;
    }

    /*
     * splite 'radius' to its components
     * check different state Based on CSS rules. see for example:
     * https://www.w3schools.com/CSSref/css3_pr_border-radius.asp
     */
    function fillCornerFromString(dim, str) {
        var newDom = {};
        fillDimFromString(newDom, str);

        dim.topLeft = newDom.topLeft;
        dim.topRight = newDom.topRight;
        dim.bottomRight = newDom.bottomRight;
        dim.bottomLeft = newDom.bottomLeft;
    }

    $settings.newPage({
        type: 'general',
        label: 'General',
        icon: 'opacity',
        templateUrl: 'views/settings/wb-general.html',
        controllerAs: 'ctrl',
        controller: 'MbSettingGeneralCtrl',
    });

    $settings.newPage({
        type: 'background',
        label: 'Background',
        icon: 'image',
        description: '',
        templateUrl: 'views/settings/wb-background.html',
        controllerAs: 'ctrl',

        /*
         * @ngInject
         * @description This controller controls the background attribute. If the user choose an image for 
         * the background then sets a default values to the background property. These values are used to show 
         * the image in a suitable form; and if the user remove the background image then remove those values 
         * from the background.
         */
        controller: function () {
            this.init = function (newWidget, oldWidget) {
                this.image = this.getStyleBackground('image');
                this.color = this.getStyleBackground('color');
                this.size = this.getStyleBackground('size');
                this.repeat = this.getStyleBackground('repeat');
                this.position = this.getStyleBackground('position');
            };

            this.setBackgroundImage = function (image) {
                this.image = image;
                if (!this.size) {
                    this.size = 'cover';
                }
                if (!this.repeat) {
                    this.repeat = 'no-repeat';
                }
                if (!this.position) {
                    this.position = 'center center';
                }
                this.updateBackground();
            };

            this.updateBackground = function () {
                this.setStyleBackground('image', this.image);
                this.setStyleBackground('color', this.color);
                this.setStyleBackground('size', this.size);
                this.setStyleBackground('repeat', this.image);
                this.setStyleBackground('position', this.position);
            };
        }
    });

    /**
     * Widget Microdata Editor
     * 
     * Manages widget microdata editor.
     */
    $settings.newPage({
        type: 'microdata',
        label: 'Widget Microdata',
        templateUrl: 'views/settings/wb-microdata.html',
        controllerAs: 'ctrl',
        controller: 'MbSettingMicrodataCtrl'
    });

    $settings.newPage({
        type: 'border',
        label: 'Border',
        icon: 'border_all',
        templateUrl: 'views/settings/wb-border.html',
        controllerAs: 'ctrl',
        /*
         * @ngInject
         */
        controller: function () {
            this.width = {};
            this.radius = {};

            this.styles = [{
                title: 'None',
                value: 'none'
            }, {
                title: 'Solid',
                value: 'solid'
            }, {
                title: 'Dotted',
                value: 'dotted'
            }, {
                title: 'Dashed',
                value: 'dashed'
            }, {
                title: 'Double',
                value: 'double'
            }, {
                title: 'Groove',
                value: 'groove'
            }, {
                title: 'Ridge',
                value: 'ridge'
            }, {
                title: 'Inset',
                value: 'inset'
            }, {
                title: 'Outset',
                value: 'outset'
            }];

            /*
             * watch 'wbModel' and apply the changes into setting panel
             */
            this.init = function () {
                this.style = this.getStyleBorder('style');
                this.color = this.getStyleBorder('color');
                /*
                 * Set width
                 * width is a string such as '10px 25% 2vh 4px'
                 */
                fillDimFromString(this.width, this.getStyleBorder('width') || 'medium');
                /*
                 * Set radius
                 * radius is a string such as '10px 25% 2vh 4px'
                 */
                fillCornerFromString(this.radius, this.getStyleBorder('radius') || '0px');
            };

            /*
             * Settings about border width
             */
            this.widthAllChanged = function (val) {
                //medium is default value of width
                setAllDim(this.width, val || 'medium');
                this.widthChanged();
            };

            this.widthChanged = function () {
                this.setStyleBorder('width', createDimeStr(this.width));
            };

            /*
             * Settings about border radius
             */
            this.radiusAllChanged = function (val) {
                //0px is default value of radius
                setAllCorner(this.radius, val || '0px');
                this.radiusChanged();
            };

            this.radiusChanged = function () {
                this.setStyleBorder('radius', createCornerStr(this.radius))
            };
        }
    });

    /**
     * @ngdoc Widget Settings
     * @name layout
     * @description Manages element layout
     * 
     * Layout is consists of the following attributes for a group:
     * 
     * <ul>
     *     <li>direction</li>
     *     <li>direction-inverse</li>
     *     <li>wrap</li>
     *     <li>wrap-inverse</li>
     *     <li>align</li>
     *     <li>justify</li>
     * </ul>
     * 
     * and following ones for a widget (or group):
     * 
     * <ul>
     *     <li>grow</li>
     *     <li>shrink</li>
     *     <li>order</li>
     * </ul>
     * 
     * See the layout documents for more details.
     * 
     * @see wb-layout
     */
    $settings.newPage({
        type: 'layout',
        label: 'Layout',
        icon: 'dashboard',
        description: 'Manages layout of the current item.',
        templateUrl: 'views/settings/wb-layout.html',
        controllerAs: 'ctrl',
        /*
         * Manages setting page 
         * 
         * @ngInject
         */
        controller: function () {
            this.direction_ = [{
                title: 'column',
                icon: 'wb-horizontal-boxes',
                value: 'column'
            }, {
                title: 'row',
                icon: 'wb-vertical-boxes',
                value: 'row'
            }];

            this.justify_ = {
                    'row': [{
                        title: 'Start',
                        icon: 'sort_start_horiz',
                        value: 'start'
                    }, {
                        title: 'End',
                        icon: 'sort_end_horiz',
                        value: 'end'
                    }, {
                        title: 'Center',
                        icon: 'sort_center_horiz',
                        value: 'center'
                    }, {
                        title: 'Space Around',
                        icon: 'sort_space_around_horiz',
                        value: 'space-around'
                    }, {
                        title: 'Space Between',
                        icon: 'sort_space_between_horiz',
                        value: 'space-between'
                    }],
                    'column': [{
                        title: 'Start',
                        icon: 'sort_start_vert',
                        value: 'start'
                    }, {
                        title: 'End',
                        icon: 'sort_end_vert',
                        value: 'end'
                    }, {
                        title: 'Center',
                        icon: 'sort_center_vert',
                        value: 'center'
                    }, {
                        title: 'Space Around',
                        icon: 'sort_space_around_vert',
                        value: 'space-around'
                    }, {
                        title: 'Space Between',
                        icon: 'sort_space_between_vert',
                        value: 'space-between'
                    }]
            };

            this.align_ = {
                    'column': [{
                        title: 'Stretch',
                        icon: 'format_align_justify',
                        value: 'stretch'
                    }, {
                        title: 'Start',
                        icon: 'format_align_left',
                        value: 'start'
                    }, {
                        title: 'End',
                        icon: 'format_align_right',
                        value: 'end'
                    }, {
                        title: 'Center',
                        icon: 'format_align_center',
                        value: 'center'
                    }],
                    'row': [{
                        title: 'Stretch',
                        icon: 'align_justify_vertical',
                        value: 'stretch'
                    }, {
                        title: 'Start',
                        icon: 'align_start_vertical',
                        value: 'start'
                    }, {
                        title: 'End',
                        icon: 'align_end_vertical',
                        value: 'end'
                    }, {
                        title: 'Center',
                        icon: 'align_center_vertical',
                        value: 'center'
                    }]
            };
            /*
             * watch 'wbModel' and apply the changes in setting panel
             */
            this.init = function () {
                this.direction = this.getStyleLayout('direction') || 'column';
                this.align = this.getStyleLayout('align');
                this.wrap = this.getStyleLayout('wrap');
                this.justify = this.getStyleLayout('justify');
            };

            /*
             * This part updates the wbModel whenever the layout properties are changed in view
             */
            this.directionChanged = function () {
                this.setStyleLayout('direction', this.direction);
            };

            this.wrapChanged = function () {
                this.setStyleLayout('wrap', this.wrap);
            };

            this.alignChanged = function () {
                this.setStyleLayout('align', this.align);
            };

            this.justifyChanged = function () {
                this.setStyleLayout('justify', this.justify);
            };
        }
    });

    $settings.newPage({
        type: 'layout-self',
        label: 'Self Layout',
        icon: 'dashboard',
        description: 'Manages layout of the current item.',
        templateUrl: 'views/settings/wb-layout-self.html',
        controllerAs: 'ctrl',
        /*
         * Manages setting page 
         * 
         * @ngInject
         */
        controller: function () {
            this.selfAlign_ = {
                    'column': [{
                        title: 'Stretch',
                        icon: 'format_align_justify',
                        value: 'stretch'
                    }, {
                        title: 'Start',
                        icon: 'format_align_left',
                        value: 'start'
                    }, {
                        title: 'End',
                        icon: 'format_align_right',
                        value: 'end'
                    }, {
                        title: 'Center',
                        icon: 'format_align_center',
                        value: 'center'
                    }, {
                        title: 'Automatic',
                        icon: 'brightness_auto',
                        value: 'auto'
                    }],
                    'row': [{
                        title: 'Stretch',
                        icon: 'align_justify_vertical',
                        value: 'stretch'
                    }, {
                        title: 'Start',
                        icon: 'align_start_vertical',
                        value: 'start'
                    }, {
                        title: 'End',
                        icon: 'align_end_vertical',
                        value: 'end'
                    }, {
                        title: 'Center',
                        icon: 'align_center_vertical',
                        value: 'center'
                    }, {
                        title: 'Automatic',
                        icon: 'brightness_auto',
                        value: 'auto'
                    }]
            };

            /*
             * watch 'wbModel' and apply the changes in setting panel
             */
            this.init = function () {
                this.alignSelf = this.getStyleLayout('align_self', 'auto');
                this.order = this.getStyleLayout('order', 0);
                // SEE: https://www.w3schools.com/cssreF/css3_pr_flex-basis.asp
                this.basis = this.getStyleLayout('basis', 'auto');
                this.grow = this.getStyleLayout('grow', 0);
                this.shrink = this.getStyleLayout('shrink', 1);
            };

            /*
             * Fetchs parent direction
             */
            this.getParentDirection = function () {
                var widget = this.getWidget();
                if (!widget || !widget.getParent()) {
                    return;
                }
                return widget.getParent().getDirection();
            };

            /*
             * This part updates the wbModel whenever the layout-self property is changed in view
             */
            this.alignSelfChanged = function () {
                this.setStyleLayout('align_self', this.alignSelf);
            };
            this.updateOrder = function (order) {
                this.setStyleLayout('order', order);
            };
            this.updateBasis = function (basis) {
                this.setStyleLayout('basis', basis);
            };
            this.updateGrow = function (grow) {
                this.setStyleLayout('grow', grow);
            };
            this.updateShrink = function (shrink) {
                this.setStyleLayout('shrink', shrink);
            };
        }
    });

    //TODO: Masood, 2018: Move this controller to a separated controller.
    $settings.newPage({
        type: 'marginPadding',
        label: 'Margin/Padding',
        icon: 'border_clear',
        templateUrl: 'views/settings/wb-margin-padding.html',
        controllerAs: 'ctrl',
        /** 
         * @ngInject
         * @ngDoc Controllers
         * @name marginPaddingCtrl
         * @description manages settings view of margin and padding
         * 
         * Manage view with multiple editor of margin elements.
         */
        controller: function () {
            this.margin = {};
            this.padding = {};

            /**
             * All settings about margin and padding
             * 
             * Note: we normally add JSDoc to the global functions.
             * 
             * @memberof marginPaddingCtrl
             */
            this.updateAllMargin = function (val) {
                // default value of margin is 0px
                setAllDim(this.margin, val || '0px');
                this.updateMargin(this.margin);
            };

            /**
             * Sets all padding to the equal value
             * 
             * @memberof marginPaddingCtrl
             */
            this.updateAllPadding = function (val) {
                //default value of padding is 0px
                setAllDim(this.padding, val);
                this.updatePadding(this.padding)
            };

            this.updateMargin = function (newMargin) {
                this.setStyle('margin', createDimeStr(newMargin));
            };

            this.updatePadding = function (newPadding) {
                this.setStyle('padding', createDimeStr(newPadding));
            };

            this.init = function () {
                //margin is a string such as '10px 25% 2vh 4px'
                fillDimFromString(this.margin, this.getStyle('margin'));
                fillDimFromString(this.padding, this.getStyle('padding'));
            };
        }
    });

    $settings.newPage({
        type: 'size',
        label: 'Size',
        icon: 'photo_size_select_large',
        templateUrl: 'views/settings/wb-size.html',
        controllerAs: 'ctrl',

        /*
         * @ngInject
         */
        controller: function () {
            /*
             * watch 'wbModel' and apply the changes in setting panel
             */
            this.init = function () {
                this.width = this.getStyleSize('width');
                this.height = this.getStyleSize('height');
                this.minWidth = this.getStyleSize('minWidth');
                this.minHeight = this.getStyleSize('minHeight');
                this.maxWidth = this.getStyleSize('maxWidth');
                this.maxHeight = this.getStyleSize('maxHeight');
            };

            /*
             * This part updates the wbModel whenever the size properties are changed in view
             */
            this.widthChanged = function () {
                this.setStyleSize('width', this.width);
            };

            this.heightChanged = function () {
                this.setStyleSize('height', this.height);
            };

            this.minWidthChanged = function () {
                this.setStyleSize('minWidth', this.minWidth);
            };

            this.minHeightChanged = function () {
                this.setStyleSize('minHeight', this.minHeight);
            };

            this.maxWidthChanged = function () {
                this.setStyleSize('maxWidth', this.maxWidth);
            };

            this.maxHeightChanged = function () {
                this.setStyleSize('maxHeight', this.maxHeight);
            };
        }
    });

    $settings.newPage({
        type: 'shadow',
        label: 'Shadow',
        icon: 'brightness_low',
        description: 'Show different shadows (zero or more) around the widget',
        templateUrl: 'views/settings/wb-shadow.html',
        controllerAs: 'ctrl',
        /*
         * @ngInject
         */
        controller: function () {

            /*
             * watch 'wbModel' and apply the changes in setting panel
             */
            this.init = function () {
                var shadows = this.getProperty('style.shadows');
                // this is an object we have to make a clone.
                this.shadows = _.cloneDeep(shadows);
            };

            this.updateShadows = function () {
                this.setProperty('style.shadows', this.shadows);
                this.init();
            };

            this.remove = function (index) {
                this.shadows.splice(index, 1);
                this.updateShadows();
            };

            this.addShadow = function () {
                if (!this.shadows) {
                    this.shadows = [];
                }
                this.shadows.push({
                    hShift: '0px',
                    vShift: '0px',
                    blur: '0px',
                    spread: '0px',
                    color: 'rgb(0,0,0)'
                });
                this.updateShadows();
            };

        }
    });
    $settings.newPage({
        type: 'transform',
        label: 'Transform',
        icon: 'brightness_low',
        description: 'Transform widget shape',
        templateUrl: 'views/settings/wb-transform.html',
        controllerAs: 'ctrl',
        /*
         * @ngInject
         */
        controller: function () {

            /*
             * watch 'wbModel' and apply the changes in setting panel
             */
            this.init = function () {
                this.origin = this.getProperty('style.transform.origin');
                this.style = this.getProperty('style.transform.style');
                this.perspective = this.getProperty('style.transform.perspective');

                // X:2D
                this.translateX = this.getProperty('style.transform.x.translate');
                this.scaleX = this.getProperty('style.transform.x.scale');
                this.rotateX = this.getProperty('style.transform.x.rotate');
                this.skewX = this.getProperty('style.transform.x.skew');

                // Y:2D
                this.translateY = this.getProperty('style.transform.y.translate');
                this.scaleY = this.getProperty('style.transform.y.scale');
                this.rotateY = this.getProperty('style.transform.y.rotate');
                this.skewY = this.getProperty('style.transform.y.skew');

                // Z:3D
                this.translateZ = this.getProperty('style.transform.z.translate');
                this.scaleZ = this.getProperty('style.transform.z.scale');
                this.rotateZ = this.getProperty('style.transform.z.rotate');
            };

            this.updateOrigin = function () {
                this.setProperty('style.transform.origin', this.origin);
            };

//          flat: Specifies that child elements will NOT preserve its 3D position. This is default
//          preserve-3d: Specifies that child elements will preserve its 3D position
//          initial: Sets this property to its default value. Read about initial
//          inherit: Inherits this property from its parent element. Read about inherit
            this.updateStyle = function () {
                this.setProperty('style.transform.style', this.style);
            };
            this.updatePerspective = function () {
                this.setProperty('style.transform.perspective', this.perspective);
            };

            // X
            this.updateTranslateX = function () {
                this.setProperty('style.transform.x.translate', this.translateX);
            };
            this.updateScaleX = function () {
                this.setProperty('style.transform.x.scale', this.scaleX);
            };
            this.updateRotateX = function () {
                this.setProperty('style.transform.x.rotate', this.rotateX);
            };
            this.updateSkewX = function () {
                this.setProperty('style.transform.x.skew', this.skewX);
            };

            // Y
            this.updateTranslateY = function () {
                this.setProperty('style.transform.y.translate', this.translateY);
            };
            this.updateScaleY = function () {
                this.setProperty('style.transform.y.scale', this.scaleY);
            };
            this.updateRotateY = function () {
                this.setProperty('style.transform.y.rotate', this.rotateY);
            };
            this.updateSkewY = function () {
                this.setProperty('style.transform.y.skew', this.skewY);
            };

            // Z
            this.updateTranslateZ = function () {
                this.setProperty('style.transform.z.translate', this.translateZ);
            };
            this.updateScaleZ = function () {
                this.setProperty('style.transform.z.scale', this.scaleZ);
            };
            this.updateRotateZ = function () {
                this.setProperty('style.transform.z.rotate', this.rotateZ);
            };
        }
    });



    $settings.newPage({
        type: 'iframe',
        label: 'Inline Frame',
        icon: 'wb-setting-iframe',
        description: 'Inline Frame settings',
        templateUrl: 'views/settings/wb-iframe.html',
        controllerAs: 'ctrl',
        /*
         * @ngInject
         */
        controller: function ($scope) {
            var iframeElementAttribute = [
                'name',
                'src', 
                'srcdoc', 
                'sandbox', 
                ];
            /*
             * watch 'wbModel' and apply the changes in setting panel
             */
            this.init = function () {
                for(var i =0; i < iframeElementAttribute.length;i++){
                    var key = iframeElementAttribute[i];
                    $scope[key] =  this.getProperty(key);
                }
                // TODO: whatch changes of the model
            };
        }
    });
    $settings.newPage({
        type: 'input',
        label: 'Input',
        icon: 'wb-setting-input',
        description: 'Input settings',
        templateUrl: 'views/settings/wb-input.html',
        controllerAs: 'ctrl',
        /*
         * @ngInject
         */
        controller: function ($scope) {
            // list of element attributes
            var elementAttributes = [
                'accept',
                'alt', 
                'autocomplete', 
                'autofocus', 
                'checked', 
                'dirname', 
                'disabled', 
                'form',
                'max', 
                'maxlength', 
                'min', 
                'multiple', 
                'name', 
                'pattern', 
                'placeholder', 
                'readonly', 
                'required', 
                'size', 
                'src', 
                'step',
                'inputType',
                'value',
                ];

            /*
             * watch 'wbModel' and apply the changes in setting panel
             */
            this.init = function () {
                for(var i =0; i < elementAttributes.length;i++){
                    var key = elementAttributes[i];
                    this[key] =  this.getProperty(key);
                }
                // TODO:
            };
        }
    });
    $settings.newPage({
        type: 'textarea',
        label: 'Text Area',
        icon: 'wb-setting-textarea',
        description: 'Text Area Settings',
        templateUrl: 'views/settings/wb-textarea.html',
        controllerAs: 'ctrl',
        /*
         * @ngInject
         */
        controller: function () {
            var elementAttributes = [
                'autofocus',
                'cols',
                'dirname',
                'disabled',
                'form',
                'maxlength',
                'name',
                'placeholder',
                'readonly',
                'required',
                'rows',
                'wrap',
                'value',
                ];

            /*
             * watch 'wbModel' and apply the changes in setting panel
             */
            this.init = function () {
                for(var i =0; i < elementAttributes.length;i++){
                    var key = elementAttributes[i];
                    this[key] =  this.getProperty(key);
                }
                // TODO:
            };
        }
    });

    /**
     * @ngDoc Settings
     * @name amh-common-link
     * @description Link setting page
     */
    $settings.newPage({
        type: 'a',
        label: 'Link',
        description: 'Manage link in the current widget.',
        icon: 'settings',
        templateUrl: 'views/settings/wb-a.html',
        controllerAs: 'ctrl',
        controller: 'MbSettingACtrl'
    });
    
    /**
     * @ngDoc Settings
     * @name style.text
     * @description Text setting
     */
    $settings.newPage({
    	type: 'style.text',
    	label: 'Text',
    	description: 'Text style.',
    	icon: 'settings',
    	templateUrl: 'views/settings/wb-style-text.html',
    	controllerAs: 'ctrl',
    	controller: 'MbSettingStyleTextCtrl'
    });
});
