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

/**
 * @ngdoc module
 * @name ngDonate
 *
 */
angular
    .module('am-wb-core', [
        'ngMessages',//
        'ngAnimate',//
        'ngAria',//
        'ngMaterial',//
        'pascalprecht.translate',//
        'mdColorPicker',//
        //'ngMaterialWysiwyg',
        'ui.tinymce', //
        'dndLists',//
        'material.components.expansionPanels',//
        'ngMdIcons', // Material icons
        'ngHandsontable',
    ]);

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

/**
 * @ngdoc module
 * @name ngDonate
 * @description Defines icons to use every where.
 *
 */
angular.module('am-wb-core')
.config(['ngMdIconServiceProvider', function(ngMdIconServiceProvider) {
	ngMdIconServiceProvider
	// Add single icon
	.addShape('standby', '<path d="M13 3.5h-2v10h2v-10z"/><path d="M16.56 5.94l-1.45 1.45C16.84 8.44 18 10.33 18 12.5c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 5.94C5.36 7.38 4 9.78 4 12.5c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56z"/>')
	// Get an existing icon
	.addShape('custom-delete', ngMdIconServiceProvider.getShape('delete'))
	.addShape('vertical', ngMdIconServiceProvider.getShape('view_sequential'))
	
	.addShape('corner_bottom_left', '<path d="M 5,5 H 3 V 3 H 5 Z M 5,7 H 3 v 2 h 2 z m 16,4 h -2 v 2 h 2 z m 0,-4 h -2 v 2 h 2 z m 0,8 h -2 v 2 h 2 z m 0,4 h -2 v 2 h 2 z m -4,0 h -2 v 2 h 2 z M 9,3 H 7 v 2 h 2 z m 4,0 h -2 v 2 h 2 z M 9,3 H 7 v 2 h 2 z m 8,0 h -2 v 2 h 2 z m 4,0 h -2 v 2 h 2 z M 3,16 c 0,2.76 2.24,5 5,5 h 5 V 19 H 8 C 6.35,19 5,17.65 5,16 V 11 H 3 Z" />')
	.addShape('corner_bottom_right', '<path d="m 5,19 v 2 H 3 v -2 z m 2,0 v 2 h 2 v -2 z m 4,-16 0,2 2,0 0,-2 z M 7,3 V 5 L 9,5 9,3 Z m 8,0 0,2 2,0 V 3 Z m 4,0 v 2 h 2 V 3 Z m 0,4 v 2 l 2,0 V 7 Z M 3,15 v 2 h 2 v -2 z m 0,-4 v 2 h 2 v -2 z m 0,4 v 2 H 5 V 15 Z M 3,7 V 9 H 5 V 7 Z M 3,3 V 5 H 5 V 3 Z m 13,18 c 2.76,0 5,-2.24 5,-5 v -5 l -2,0 0,5 c 0,1.65 -1.35,3 -3,3 l -5,0 v 2 z" />')
	.addShape('corner_top_left', '<path d="M 19,5 V 3 h 2 V 5 Z M 17,5 V 3 h -2 v 2 z m -4,16 v -2 h -2 v 2 z m 4,0 v -2 h -2 v 2 z M 9,21 V 19 H 7 v 2 z M 5,21 V 19 H 3 l 0,2 z M 5,17 5,15 H 3 v 2 z M 21,9 V 7 h -2 v 2 z m 0,4 v -2 h -2 v 2 z M 21,9 V 7 h -2 v 2 z m 0,8 v -2 h -2 v 2 z m 0,4 v -2 h -2 v 2 z M 8,3 C 5.24,3 3,5.24 3,8 v 5 H 5 V 8 C 5,6.35 6.35,5 8,5 h 5 V 3 Z" />')
	.addShape('corner_top_right', '<path d="m 19,19 h 2 v 2 h -2 z m 0,-2 h 2 V 15 H 19 Z M 3,13 H 5 V 11 H 3 Z m 0,4 H 5 V 15 H 3 Z M 3,9 H 5 V 7 H 3 Z M 3,5 H 5 V 3 H 3 Z M 7,5 H 9 V 3 H 7 Z m 8,16 h 2 v -2 h -2 z m -4,0 h 2 v -2 h -2 z m 4,0 h 2 V 19 H 15 Z M 7,21 H 9 V 19 H 7 Z M 3,21 H 5 V 19 H 3 Z M 21,8 C 21,5.24 18.76,3 16,3 h -5 v 2 h 5 c 1.65,0 3,1.35 3,3 v 5 h 2 z" />')
//	.addShape('full_rounded', '<path d="M 8.0014104,3 C 5.24171,3 3.0019529,5.2696872 3.0019529,8.0664062 3.001871,10.700363 2.9999115,13.594641 3,15.933594 3,18.730313 5.2397571,21 7.9994576,21 10.666486,21 13.333514,21 16.000542,21 18.760243,21 21,18.730313 21,15.933594 21.001449,13.308911 20.998,10.689605 20.998,8.0664062 20.998047,5.2696872 18.75829,3 15.99859,3 13.32628,3 10.379799,3 8.0014104,3 Z m 0,2.0273438 c 2.6723096,0 5.6187916,0 7.9971796,0 1.649821,0 2.999674,1.3671108 2.999674,3.0390624 -0.0019,2.5827918 0.0022,5.4559078 0.002,7.8671878 0,1.671952 -1.349854,3.039062 -2.999675,3.039062 -2.67353,0 -5.621496,0 -8.0010844,0 -1.649821,0 -2.9996746,-1.36711 -2.9996746,-3.039062 8.18e-5,-2.633957 0.00204,-5.528236 0.00195,-7.8671878 0,-1.6719517 1.3498536,-3.0390624 2.9996745,-3.0390624 z" />')
	.addShape('full_rounded', ngMdIconServiceProvider.getShape('crop_free'))
	
	.addShape('align_justify_vertical', '<path d="M 21,21 V 3 h -2 v 18 z m -4,0 V 3 h -2 l 0,18 z m -4,0 0,-18 h -2 l 0,18 z M 9,21 9,3 H 7 L 7,21 Z M 3,21 H 5 L 5,3 H 3 Z" />')
	.addShape('align_center_vertical', '<path d="m 15,17 h 2 V 7 h -2 z m 6,4 V 3 h -2 v 18 z m -8,0 0,-18 h -2 l 0,18 z M 7,17 H 9 L 9,7 H 7 Z M 3,21 H 5 L 5,3 H 3 Z" />')
	.addShape('align_end_vertical', '<path d="m 15,9 0,12 h 2 V 9 Z M 7,9 7,21 H 9 L 9,9 Z m 6,12 0,-18 h -2 l 0,18 z m 8,0 V 3 H 19 V 21 Z M 3,21 H 5 L 5,3 H 3 Z" />')
	.addShape('align_start_vertical', '<path d="M 21,21 V 3 H 19 V 21 Z M 17,15 V 3 h -2 l 0,12 z m -4,6 0,-18 h -2 l 0,18 z M 9,15 9,3 H 7 V 15 Z M 3,21 H 5 L 5,3 H 3 Z" />')

	.addShape('sort_space_between_horiz', '<path d="M 4.5710877,3 C 3.7069894,3 3,3.7007772 3,4.5572828 V 19.442717 C 3,20.299223 3.7069895,21 4.5710877,21 H 19.428912 C 20.293011,21 21,20.299223 21,19.442717 V 4.5572828 C 21,3.7007772 20.293011,3 19.428912,3 Z m 0,1.5496789 H 19.428912 V 19.451841 H 4.5710877 Z m 1.5373337,1.999831 c -0.4320491,0 -0.7855438,0.3503886 -0.7855438,0.7786414 v 9.3436967 c 0,0.428253 0.3534947,0.778642 0.7855438,0.778642 H 8.465053 c 0.4320489,0 0.7855436,-0.350389 0.7855436,-0.778642 V 7.3281513 c 0,-0.4282528 -0.3534947,-0.7786414 -0.7855436,-0.7786414 z m 9.4265256,0 c -0.432049,0 -0.785544,0.3503886 -0.785544,0.7786414 v 9.3436967 c 0,0.428253 0.353495,0.778642 0.785544,0.778642 h 2.356632 c 0.432049,0 0.785544,-0.350389 0.785544,-0.778642 V 7.3281513 c 0,-0.4282528 -0.353495,-0.7786414 -0.785544,-0.7786414 z" />')
	.addShape('sort_space_around_horiz', '<path d="M 4.5710877,3 C 3.7069894,3 3,3.7007773 3,4.5572829 V 19.442717 C 3,20.299223 3.7069894,21 4.5710877,21 H 19.428912 C 20.293011,21 21,20.299223 21,19.442717 V 4.5572829 C 21,3.7007773 20.293011,3 19.428912,3 Z m 0,1.549679 H 19.428912 V 19.451842 H 4.5710877 Z m 2.6757586,1.9602906 c -0.4320491,0 -0.7855438,0.3503886 -0.7855438,0.7786414 v 9.343697 c 0,0.428253 0.3534947,0.778642 0.7855438,0.778642 h 2.3566315 c 0.4320492,0 0.7855442,-0.350389 0.7855442,-0.778642 V 7.288611 c 0,-0.4282528 -0.353495,-0.7786414 -0.7855442,-0.7786414 z m 7.0698947,0 c -0.432049,0 -0.785544,0.3503886 -0.785544,0.7786414 v 9.343697 c 0,0.428253 0.353495,0.778642 0.785544,0.778642 h 2.356631 c 0.432049,0 0.785544,-0.350389 0.785544,-0.778642 V 7.288611 c 0,-0.4282528 -0.353495,-0.7786414 -0.785544,-0.7786414 z" />')
	.addShape('sort_center_horiz', '<path d="M 4.5710877,3 C 3.7069894,3 3,3.7007772 3,4.5572828 V 19.442717 C 3,20.299223 3.7069895,21 4.5710877,21 H 19.428912 C 20.293011,21 21,20.299223 21,19.442717 V 4.5572828 C 21,3.7007772 20.293011,3 19.428912,3 Z m 0,1.5496789 H 19.428912 V 19.451841 H 4.5710877 Z m 3.7344017,1.999831 c -0.4320492,0 -0.7855438,0.3503886 -0.7855438,0.7786414 v 9.3436967 c 0,0.428253 0.3534946,0.778642 0.7855438,0.778642 h 2.3566316 c 0.432049,0 0.785543,-0.350389 0.785543,-0.778642 V 7.3281513 c 0,-0.4282528 -0.353494,-0.7786414 -0.785543,-0.7786414 z m 5.4988066,0 c -0.432049,0 -0.785544,0.3503886 -0.785544,0.7786414 v 9.3436967 c 0,0.428253 0.353495,0.778642 0.785544,0.778642 h 2.356631 c 0.43205,0 0.785544,-0.350389 0.785544,-0.778642 V 7.3281513 c 0,-0.4282528 -0.353494,-0.7786414 -0.785544,-0.7786414 z" />')
	.addShape('sort_start_horiz', '<path d="M 4.5710877,3 C 3.7069894,3 3,3.7007772 3,4.5572828 V 19.442717 C 3,20.299223 3.7069895,21 4.5710877,21 H 19.428912 C 20.293011,21 21,20.299223 21,19.442717 V 4.5572828 C 21,3.7007772 20.293011,3 19.428912,3 Z m 0,1.5496789 H 19.428912 V 19.451841 H 4.5710877 Z m 1.5373337,1.999831 c -0.4320491,0 -0.7855438,0.3503886 -0.7855438,0.7786414 v 9.3436967 c 0,0.428253 0.3534947,0.778642 0.7855438,0.778642 H 8.465053 c 0.4320489,0 0.7855436,-0.350389 0.7855436,-0.778642 V 7.3281513 c 0,-0.4282528 -0.3534947,-0.7786414 -0.7855436,-0.7786414 z m 5.4988066,0 c -0.432049,0 -0.785544,0.3503886 -0.785544,0.7786414 v 9.3436967 c 0,0.428253 0.353495,0.778642 0.785544,0.778642 h 2.356632 c 0.432049,0 0.785543,-0.350389 0.785543,-0.778642 V 7.3281513 c 0,-0.4282528 -0.353494,-0.7786414 -0.785543,-0.7786414 z" />')
	.addShape('sort_end_horiz', '<path d="M 4.5710877,3 C 3.7069894,3 3,3.7007772 3,4.5572828 V 19.442717 C 3,20.299223 3.7069895,21 4.5710877,21 H 19.428912 C 20.293011,21 21,20.299223 21,19.442717 V 4.5572828 C 21,3.7007772 20.293011,3 19.428912,3 Z m 0,1.5496789 H 19.428912 V 19.451841 H 4.5710877 Z m 5.4650523,1.999831 c -0.4320487,0 -0.7855434,0.3503886 -0.7855434,0.7786414 v 9.3436967 c 0,0.428253 0.3534947,0.778642 0.7855434,0.778642 h 2.356632 c 0.432049,0 0.785544,-0.350389 0.785544,-0.778642 V 7.3281513 c 0,-0.4282528 -0.353495,-0.7786414 -0.785544,-0.7786414 z m 5.498807,0 c -0.432049,0 -0.785544,0.3503886 -0.785544,0.7786414 v 9.3436967 c 0,0.428253 0.353495,0.778642 0.785544,0.778642 h 2.356632 c 0.432049,0 0.785544,-0.350389 0.785544,-0.778642 V 7.3281513 c 0,-0.4282528 -0.353495,-0.7786414 -0.785544,-0.7786414 z" />')
	
	.addShape('sort_space_between_vert', '<path d="M 3,19.428912 C 3,20.293011 3.7007772,21 4.5572828,21 H 19.442717 C 20.299223,21 21,20.29301 21,19.428912 V 4.571088 C 21,3.706989 20.299223,3 19.442717,3 H 4.5572828 C 3.7007772,3 3,3.706989 3,4.571088 Z m 1.5496789,0 0,-14.857824 H 19.451841 v 14.857824 z m 1.999831,-1.537333 c 0,0.432049 0.3503886,0.785543 0.7786414,0.785543 h 9.3436967 c 0.428253,0 0.778642,-0.353494 0.778642,-0.785543 v -2.356632 c 0,-0.432049 -0.350389,-0.785544 -0.778642,-0.785544 l -9.3436967,0 c -0.4282528,0 -0.7786414,0.353495 -0.7786414,0.785544 z m 0,-9.426526 c 0,0.432049 0.3503886,0.785544 0.7786414,0.785544 l 9.3436967,0 c 0.428253,0 0.778642,-0.353495 0.778642,-0.785544 V 6.108421 c 0,-0.432049 -0.350389,-0.785544 -0.778642,-0.785544 H 7.3281513 c -0.4282528,0 -0.7786414,0.353495 -0.7786414,0.785544 z" />')
	.addShape('sort_space_around_vert', '<path d="M 3,19.428912 C 3,20.293011 3.7007773,21 4.5572829,21 H 19.442717 C 20.299223,21 21,20.293011 21,19.428912 V 4.571088 C 21,3.706989 20.299223,3 19.442717,3 H 4.5572829 C 3.7007773,3 3,3.706989 3,4.571088 Z m 1.549679,0 0,-14.857824 h 14.902163 v 14.857824 z m 1.9602906,-2.675758 c 0,0.432049 0.3503886,0.785544 0.7786414,0.785544 h 9.343697 c 0.428253,0 0.778642,-0.353495 0.778642,-0.785544 v -2.356632 c 0,-0.432049 -0.350389,-0.785544 -0.778642,-0.785544 l -9.343697,0 c -0.4282528,0 -0.7786414,0.353495 -0.7786414,0.785544 z m 0,-7.069895 c 0,0.432049 0.3503886,0.785544 0.7786414,0.785544 l 9.343697,0 c 0.428253,0 0.778642,-0.353495 0.778642,-0.785544 V 7.326628 c 0,-0.432049 -0.350389,-0.785544 -0.778642,-0.785544 H 7.288611 c -0.4282528,0 -0.7786414,0.353495 -0.7786414,0.785544 z" />')
	.addShape('sort_center_vert', '<path d="M 3,19.428912 C 3,20.293011 3.7007772,21 4.5572828,21 H 19.442717 C 20.299223,21 21,20.29301 21,19.428912 V 4.571088 C 21,3.706989 20.299223,3 19.442717,3 H 4.5572828 C 3.7007772,3 3,3.706989 3,4.571088 Z m 1.5496789,0 0,-14.857824 H 19.451841 v 14.857824 z m 1.999831,-3.734401 c 0,0.432049 0.3503886,0.785543 0.7786414,0.785543 h 9.3436967 c 0.428253,0 0.778642,-0.353494 0.778642,-0.785543 v -2.356632 c 0,-0.432049 -0.350389,-0.785543 -0.778642,-0.785543 l -9.3436967,0 c -0.4282528,0 -0.7786414,0.353494 -0.7786414,0.785543 z m 0,-5.498807 c 0,0.432049 0.3503886,0.785544 0.7786414,0.785544 l 9.3436967,0 c 0.428253,0 0.778642,-0.353495 0.778642,-0.785544 V 7.839073 c 0,-0.43205 -0.350389,-0.785544 -0.778642,-0.785544 H 7.3281513 c -0.4282528,0 -0.7786414,0.353494 -0.7786414,0.785544 z" />')
	.addShape('sort_start_vert', '<path d="M 3,19.428912 C 3,20.293011 3.7007772,21 4.5572828,21 H 19.442717 C 20.299223,21 21,20.29301 21,19.428912 V 4.571088 C 21,3.706989 20.299223,3 19.442717,3 H 4.5572828 C 3.7007772,3 3,3.706989 3,4.571088 Z m 1.5496789,0 0,-14.857824 H 19.451841 v 14.857824 z m 1.999831,-5.465052 c 0,0.432049 0.3503886,0.785543 0.7786414,0.785543 l 9.3436967,0 c 0.428253,0 0.778642,-0.353494 0.778642,-0.785543 v -2.356632 c 0,-0.432049 -0.350389,-0.785544 -0.778642,-0.785544 l -9.3436967,0 c -0.4282528,0 -0.7786414,0.353495 -0.7786414,0.785544 z m 0,-5.498807 c 0,0.432049 0.3503886,0.785544 0.7786414,0.785544 l 9.3436967,0 c 0.428253,0 0.778642,-0.353495 0.778642,-0.785544 V 6.108421 c 0,-0.432049 -0.350389,-0.785544 -0.778642,-0.785544 H 7.3281513 c -0.4282528,0 -0.7786414,0.353495 -0.7786414,0.785544 z" />')
	.addShape('sort_end_vert', '<path d="M 3,19.428912 C 3,20.293011 3.7007772,21 4.5572828,21 H 19.442717 C 20.299223,21 21,20.29301 21,19.428912 V 4.571088 C 21,3.706989 20.299223,3 19.442717,3 H 4.5572828 C 3.7007772,3 3,3.706989 3,4.571088 Z m 1.5496789,0 0,-14.857824 H 19.451841 v 14.857824 z m 1.999831,-1.537333 c 0,0.432049 0.3503886,0.785543 0.7786414,0.785543 h 9.3436967 c 0.428253,0 0.778642,-0.353494 0.778642,-0.785543 v -2.356632 c 0,-0.432049 -0.350389,-0.785544 -0.778642,-0.785544 l -9.3436967,0 c -0.4282528,0 -0.7786414,0.353495 -0.7786414,0.785544 z m 0,-5.498807 c 0,0.432049 0.3503886,0.785544 0.7786414,0.785544 l 9.3436967,0 c 0.428253,0 0.778642,-0.353495 0.778642,-0.785544 V 10.03614 c 0,-0.432049 -0.350389,-0.785543 -0.778642,-0.785543 l -9.3436967,0 c -0.4282528,0 -0.7786414,0.353494 -0.7786414,0.785543 z" />')
        .addShape('download', '<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" id="Capa_1" x="0px" y="0px" width="18" height="18" viewBox="0 0 24 24" xml:space="preserve" sodipodi:docname="download11111.svg" inkscape:version="0.92.3(2405546, 2018-03-11)"><metadata id="metadata44"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" /><dc:title></dc:title></cc:Work></rdf:RDF></metadata><defs id="defs42" /><sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="1366" inkscape:window-height="706" id="namedview40" showgrid="false" inkscape:zoom="6.1592508" inkscape:cx="-15.061405" inkscape:cy="1.1743357" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="Capa_1" /><g id="g135" transform="matrix(0.06722689,0,0,0.05536332,-2.5714288,-4.45e-6)"><g id="g78"><g id="file-download"><path id="path75" d="m 395.25,153 h -102 V 0 h -153 v 153 h -102 l 178.5,178.5 z m -357,229.5 v 51 h 357 v -51 z" inkscape:connector-curvature="0" /></g></g></g></svg>')
	.addShape('upload', '<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" id="Capa_1" x="0px" y="0px" width="18" height="18" viewBox="0 0 24 24" xml:space="preserve" sodipodi:docname="upload-button.svg" inkscape:version="0.92.3 (2405546, 2018-03-11)"><metadata id="metadata44"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/><dc:title /></cc:Work></rdf:RDF></metadata><defs id="defs42" /><sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10"  guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="1366" inkscape:window-height="706" id="namedview40" showgrid="false" inkscape:zoom="2.177624" inkscape:cx="-53.237791" inkscape:cy="29.341367" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="Capa_1" /><g id="g73" transform="matrix(0.06722689,0,0,0.05536332,-2.5714288,-4.45e-6)"><g id="g15"><g   id="file-upload-8"><polygon id="polygon10" points="140.25,178.5 140.25,331.5 293.25,331.5 293.25,178.5 395.25,178.5 216.75,0 38.25,178.5 " /><rect id="rect12" height="51" width="357" y="382.5" x="38.25" /></g></g></g></svg>')
	// Add multiple icons
	.addShapes({
		'wb-opacity': '<path d="M3.55,18.54L4.96,19.95L6.76,18.16L5.34,16.74M11,22.45C11.32,22.45 13,22.45 13,22.45V19.5H11M12,5.5A6,6 0 0,0 6,11.5A6,6 0 0,0 12,17.5A6,6 0 0,0 18,11.5C18,8.18 15.31,5.5 12,5.5M20,12.5H23V10.5H20M17.24,18.16L19.04,19.95L20.45,18.54L18.66,16.74M20.45,4.46L19.04,3.05L17.24,4.84L18.66,6.26M13,0.55H11V3.5H13M4,10.5H1V12.5H4M6.76,4.84L4.96,3.05L3.55,4.46L5.34,6.26L6.76,4.84Z" />',
		'wb-vertical-boxes': '<path d="M4,21V3H8V21H4M10,21V3H14V21H10M16,21V3H20V21H16Z" />',
		'wb-horizontal-boxes': '<path d="M3,4H21V8H3V4M3,10H21V14H3V10M3,16H21V20H3V16Z" />',
		'wb-horizontal-arrows': '<path d="M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z" />',
		'wb-vertical-arrows': '<path d="M18.17,12L15,8.83L16.41,7.41L21,12L16.41,16.58L15,15.17L18.17,12M5.83,12L9,15.17L7.59,16.59L3,12L7.59,7.42L9,8.83L5.83,12Z" />',
		'wb-direction':'<path d="M13,6V11H18V7.75L22.25,12L18,16.25V13H13V18H16.25L12,22.25L7.75,18H11V13H6V16.25L1.75,12L6,7.75V11H11V6H7.75L12,1.75L16.25,6H13Z" />',

		'list_tree': '<path d="m 3.0063556,9.3749998 2.3368645,-1.125 -2.3432204,-1.25 z M 11,13 H 21 V 11 H 11 Z m 0,4 H 21 V 15 H 11 Z M 6.9999997,6.9999998 v 2 H 21 v -2 z" />',
		
		'wb-object-video': ngMdIconServiceProvider.getShape('video_library'),
		'wb-object-audio':  ngMdIconServiceProvider.getShape('audiotrack'),
		'wb-object-data': ngMdIconServiceProvider.getShape('storage'),
		
		'wb-widget-group': ngMdIconServiceProvider.getShape('pages'),
		'wb-widget-html': ngMdIconServiceProvider.getShape('settings_ethernet'),
	});
}]);

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
 * @ngdoc function
 * @name WbResourceCtrl
 * @description # WbResourceCtrl Controller of the am-wb-core
 */
.controller('WbResourceDataCtrl', function($scope) {
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
});

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
 * @ngdoc function
 * @name WbResourceCtrl
 * @description # WbResourceCtrl Controller of the am-wb-core
 */
.controller('WbResourceUrlCtrl', function($scope) {
	$scope.$watch('value', function(value) {
		$scope.$parent.setValue(value);
	});
});

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
//'use strict';
//
//angular.module('am-wb-core')
///**
// * @ngdoc function
// * @name WbResourceCtrl
// * @description # WbResourceCtrl Controller of the am-wb-core
// */
//.controller('WbResourceCtrl', function($scope, $rootScope,  $mdDialog, 
//		$wbUtil, $q, $controller, $compile, pages, style, data, $element, $window) {
//    
//	var CHILDREN_AUNCHOR = 'wb-select-resource-children';
//	$scope.value = angular.copy(data);
//	$scope.style = style;
//	var currentScope = null;
//	
//	function hide() {
//		$mdDialog.hide();
//	}
//
//	function cancel() {
//		$mdDialog.cancel();
//	}
//
//	/**
//	 * Answer the dialog
//	 * 
//	 * If there is an answer function in the current page controller
//	 * then the result of the answer function will be returned as 
//	 * the main result.
//	 * 
//	 * @memberof WbResourceCtrl
//	 */
//	function answer() {
//	    $scope.loadingAnswer = true;
//	    var res = null;
//	    if(currentScope && angular.isFunction(currentScope.answer)){
//	        res =  $q.when(currentScope.answer())
//	        .then($mdDialog.hide);
//	    } else {
//	        res = $mdDialog.hide($scope.value);
//	    }
//        return res.finally(function(){
//            $scope.loadingAnswer = false;
//        });
//	}
//	
//	/**
//	 * Sets value to the real var
//	 * 
//	 */
//	function setValue(value){
//		$scope.value = value;
//	}
//
//	/**
//	 * encapsulate template srce with panel widget template.
//	 * 
//	 * @param page
//	 *            setting page config
//	 * @param tempateSrc
//	 *            setting page html template
//	 * @returns encapsulate html template
//	 */
//	function _encapsulatePanel(page, template) {
//		// TODO: maso, 2017: pass all paramter to the setting
//		// panel.
//		return template;
//	}
//
//	/**
//	 * تنظیمات را به عنوان تنظیم‌های جاری سیستم لود می‌کند.
//	 * 
//	 * @returns
//	 */
//	function loadPage(page) {
//		var widget = null;
//		var jobs = [];
//		var pages2 = [];
//
//		$scope._selectedIndex = pages.indexOf(page);
//
//		// 1- Find element
//		var target = $element.find('#' + CHILDREN_AUNCHOR);
//
//		// 2- Clear childrens
//		target.empty();
//		currentScope = null;
//
//
//		// 3- load pages
////		var page = pages[index];
//		var template = $wbUtil.getTemplateFor(page);
//		if (angular.isDefined(template)) {
//			jobs.push($q.when(template).then(function(templateSrc) {
//				templateSrc = _encapsulatePanel(page, templateSrc);
//				var element = angular.element(templateSrc);
//				var scope = $rootScope.$new(false, $scope);
//				currentScope = scope;
//				scope.page = page;
//				scope.value = $scope.value;
//				if (angular .isDefined(page.controller)) {
//					 $controller(page.controller, {
//						$scope : scope,
//						$element : element,
//					});
//				}
//				$compile(element)(scope);
//				pages2.push(element);
//			}));
//		}
//
//		$q.all(jobs).then(function() {
//			angular.forEach(pages2, function(element) {
//				target.append(element);
//			});
//		});
//	}
//	
//	if(angular.isFunction($window.openHelp)){
//        $scope.openHelp = function(widget, $event){
//            $window.openHelp(widget, $event);
//        }
//    }
//	
//	$scope.pages = pages;
//	
//	$scope.loadPage = loadPage;
//	
//	$scope.hide = hide;
//	$scope.cancel = cancel;
//	$scope.answer = answer;
//	$scope.setValue = setValue;
//	
//	if(pages.length){
//	    loadPage(pages[0]);
//	}
//});

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
 * @ngdoc controller
 * @name WbTemplatesSheetCtrl
 * @description # WbTemplatesSheetCtrl manages templates in sheet
 * 
 */
.controller('WbTemplatesSheetCtrl', function($scope, $mdBottomSheet, $wbUi) {

	function loadTemplate(themplate) {
		$mdBottomSheet.hide(themplate);
	}
	
	function hideTemplates($event){
		$mdBottomSheet.hide();
	}

	// load templates
	$wbUi.templates()
	.then(function(page){
		$scope.templates = page.items;
	});
	
	$scope.hideTemplates = hideTemplates;
	$scope.loadTemplate = loadTemplate;

});
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
 * @ngdoc function
 * @name WbBorderSettingCtrl
 * @description # WbBorderSettingCtrl Controller of the am-wb-core
 */
.controller(
	'WbBorderSettingCtrl',
	function($scope) {
	    var scope = $scope;
	    if (!$scope.wbModel.style) {
		$scope.wbModel.style = {

		};
	    }
	    if (!$scope.wbModel.style.borderColor) {
		$scope.wbModel.style.borderColor = {
		    bottom : 'none'
		};
	    }
	    if ($scope.wbModel.style.borderColor.bottom == null
		    || $scope.wbModel.style.borderColor.bottom == undefined) {
		$scope.wbModel.style.borderColor.bottom = 'none';
	    }

	    scope.styles = [ {
		title : 'No Border',
		value : 'none'
	    }, {
		title : 'Solid',
		value : 'solid'
	    }, {
		title : 'Dotted',
		value : 'dotted'
	    }, {
		title : 'Dashed',
		value : 'dashed'
	    }, {
		title : 'Double',
		value : 'double'
	    }, {
		title : 'Groove',
		value : 'groove'
	    }, {
		title : 'Ridge',
		value : 'ridge'
	    }, {
		title : 'Inset',
		value : 'inset'
	    }, {
		title : 'Outset',
		value : 'outset'
	    } ];
	});

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
 * @ngdoc function
 * @name WbWbDialogsCtrl
 * @description # WbWbDialogsCtrl Controller of the donateMainApp
 */
.controller('WbDialogsCtrl', function($scope, $mdDialog, wbModel, style) {
    function hide() {
	$mdDialog.hide();
    }

    function cancel() {
	$mdDialog.cancel();
    }

    function answer(response) {
	$mdDialog.hide(response);
    }

    $scope.wbModel = wbModel;
    $scope.style = style;
    $scope.hide = hide;
    $scope.cancel = cancel;
    $scope.answer = answer;
});

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
 * @ngdoc controller
 * @name WbLayoutWbSettingsCtrl
 * @memberof am-wb-core
 * @description کنترلر یک عمل برای مدیریت و ویرایش آن ایجاد شده است. این کنترل
 *              در دیالوگ و یا نمایش‌های دیگر کاربرد دارد.
 * 
 * این کنترل علاوه بر امکانات ویرایشی، داده‌های اولیه هم برای نمایش فراهم
 * می‌کند.
 */
.controller('WbLayoutWbSettingsCtrl', function($scope, $settings) {
	var scope = $scope;

	scope.directions = [ {
		title : 'row',
		icon : 'view_column',
		value : 'row'
	}, {
		title : 'column',
		icon : 'view_agenda',
		value : 'column'
	} ];

	scope.directionAlignments = [ {
		title : 'none',
		value : 'none'
	}, {
		title : 'start',
		value : 'start'
	}, {
		title : 'center',
		value : 'center'
	}, {
		title : 'end',
		value : 'end'
	}, {
		title : 'space-around',
		value : 'space-around'
	}, {
		title : 'space-between',
		value : 'space-between'
	} ];

	scope.perpendicularAlignments = [ {
		title : 'none',
		value : 'none'
	}, {
		title : 'start',
		value : 'start'
	}, {
		title : 'center',
		value : 'center'
	}, {
		title : 'end',
		value : 'end'
	}, {
		title : 'stretch',
		value : 'stretch'
	}, ]
});

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
angular

/**
 * 
 * @date 2016
 * @author mgh
 */
.module('am-wb-core')

.controller('WbPageLayoutWbSettingsCtrl', function($scope, $settings) {
	var wbModel = $scope.wbModel;
	if (!wbModel.style) {
		wbModel.style = {};
	}
	$scope.flexDirection = [ {
		title : 'row',
		icon : 'wb-vertical-boxes',
		value : 'wb-flex-row'
	}, {
		title : 'column',
		icon : 'wb-horizontal-boxes',
		value : 'wb-flex-column'
	} ];

	$scope.justifyContent = {
		'wb-flex-row' : [ {
			title : 'Start',
			icon : 'sort_start_horiz',
			value : 'wb-flex-justify-content-start'
		}, {
			title : 'End',
			icon : 'sort_end_horiz',
			value : 'wb-flex-justify-content-end'
		}, {
			title : 'Center',
			icon : 'sort_center_horiz',
			value : 'wb-flex-justify-content-center'
		}, {
			title : 'Space Around',
			icon : 'sort_space_around_horiz',
			value : 'wb-flex-justify-content-space-around'
		}, {
			title : 'Space Between',
			icon : 'sort_space_between_horiz',
			value : 'wb-flex-justify-content-space-between'
		} ],
		'wb-flex-column' : [ {
			title : 'Start',
			icon : 'sort_start_vert',
			value : 'wb-flex-justify-content-start'
		}, {
			title : 'End',
			icon : 'sort_end_vert',
			value : 'wb-flex-justify-content-end'
		}, {
			title : 'Center',
			icon : 'sort_center_vert',
			value : 'wb-flex-justify-content-center'
		}, {
			title : 'Space Around',
			icon : 'sort_space_around_vert',
			value : 'wb-flex-justify-content-space-around'
		}, {
			title : 'Space Between',
			icon : 'sort_space_between_vert',
			value : 'wb-flex-justify-content-space-between'
		} ]
	};

	$scope.alignItems = {
		'wb-flex-column' : [ 
				{
					title : 'Stretch',
					icon : 'format_align_justify',
					value : 'wb-flex-align-items-stretch'
				}, {
					title : 'Start',
					icon : 'format_align_left',
					value : 'wb-flex-align-items-start'
				}, {
					title : 'End',
					icon : 'format_align_right',
					value : 'wb-flex-align-items-end'
				}, {
					title : 'Center',
					icon : 'format_align_center',
					value : 'wb-flex-align-items-center'
				} 
			],
		'wb-flex-row': [ 
				{
					title : 'Stretch',
					icon : 'align_justify_vertical',
					value : 'wb-flex-align-items-stretch'
				}, {
					title : 'Start',
					icon : 'align_start_vertical',
					value : 'wb-flex-align-items-start'
				}, {
					title : 'End',
					icon : 'align_end_vertical',
					value : 'wb-flex-align-items-end'
				}, {
					title : 'Center',
					icon : 'align_center_vertical',
					value : 'wb-flex-align-items-center'
				} 
			]
	};
});

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
angular

/**
 * Created by mgh on 8/10/2016.
 */
.module('am-wb-core')

.controller('WbSelfLayoutWbSettingsCtrl', function($scope, $settings) {
    var scope = $scope;

    scope.flexAlignItem = [ {
	title : 'auto',
	icon: 'looks_one',
	value : 'wb-flex-item-auto'
    }, {
	title : 'Start',
	icon: 'looks_two',
	value : 'wb-flex-item-start'
    }, {
	title : 'End',
		icon: 'looks_3',
	value : 'wb-flex-item-end'
    }, {
	title : 'Center',
		icon: 'looks_4',
	value : 'wb-flex-item-center'
    }, {
	title : 'stretch',
		icon: 'looks_5',
	value : 'wb-flex-item-stretch'
    } ];
});

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
 * Created by mgh on 8/10/2016.
 */
.controller(
	'WbTextSettingsCtrl',
	function($scope) {
	    var scope = $scope;
	    scope.tinymceOptions = {
		    /*
		     * onChange: function(e) { // put logic here for
		     * keypress and cut/paste changes },
		     */
		    /*
		     * selector: 'textarea', inline: false, plugins :
		     * 'advlist autolink link image lists charmap print
		     * preview', skin: 'lightgray', theme : 'modern',
		     * font_formats: 'Arial=arial,helvetica,sans-serif;'
		     */
		    selector : 'textarea',
		    height : 500,
		    theme : 'modern',
		    plugins : [
			'advlist autolink lists link image charmap print preview hr anchor pagebreak',
			'searchreplace wordcount visualblocks visualchars code fullscreen',
			'insertdatetime media nonbreaking save table contextmenu directionality',
			'emoticons template paste textcolor colorpicker textpattern imagetools' ],
			toolbar1 : 'fontselect fontsizeselect | insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
			toolbar2 : 'print preview media | forecolor backcolor emoticons',
			image_advtab : true,
			templates : [ {
			    title : 'Test template 1',
			    content : 'Test 1'
			}, {
			    title : 'Test template 2',
			    content : 'Test 2'
			} ],
			content_css : [
			    '//fast.fonts.net/cssapi/e6dc9b99-64fe-4292-ad98-6974f93cd2a2.css',
			    '//www.tinymce.com/css/codepen.min.css' ]
	    };

	});

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
 * @ngdoc controller
 * @name WbWidgetSelectCtrl
 * @memberof am-wb-core
 * @description مدیریتی برای انتخاب ویجت‌های جدید
 * 
 * در این کنترل امکاناتی فراهم شده که کاربر بتواند از میان ویجت‌های موجودی یکی
 * را انتخاب کند.
 */
.controller('WbWidgetSelectCtrl',
		function($scope, $widget) {
	var scope = $scope;

	/**
	 * ویجت‌های موجود را لود می‌کند
	 * 
	 * تمام ویجت‌های لود شده در متغیری به نام widgets توی اسکپ بار
	 * می‌شود.
	 * 
	 */
	function loadWidgets() {
		$widget.widgets().then(function(widgets) {
			scope.widgets = widgets;
			selectWidget(widgets.items[0]);
		});
	}

	/**
	 * ویجت پیش فرض را تعیین می‌کند
	 * 
	 * با انتخاب یک ویجت به عنوان ویجت پیش فرض می‌توان نمایش خاصی از آن
	 * را در سیستم ایجاد کرد.
	 * 
	 * @memberof WbWidgetSelectCtrl
	 * @param {Widget}
	 *                widget ویجت پیش فرض را تعیین می‌کند
	 * @returns
	 */
	function selectWidget(widget) {
		scope.cwidget = widget;
		// TODO: bind the widget
	}

	/**
	 * ویجت را به عنوان ویجت انتخاب شده تعیین می‌کندs
	 * 
	 * @memberof WbWidgetSelectCtrl
	 * @param widget
	 * @returns
	 */
	function answerWidget(widget) {
		$scope.answer($widget.widgetData(widget));
	}

	// تعیین خصوصیت‌های اسکوپ
	scope.selectWidget = selectWidget;
	scope.answerWidget = answerWidget;
	loadWidgets();
});

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
 * @ngdoc directive
 * @memberof am-wb-core
 * @description Apply background into the element
 */
.directive("wbBackground", function() {
	/**
	 * Sets background attributes into element
	 * 
	 * @param element
	 * @param style
	 * @returns
	 */
	function setBackgroud(element, style){
		if (!style) {
			return;
		}
		var cssValue = {};
		if(style.background){
			cssValue['background'] = style.background;
		}
		if(style.backgroundImage){
			cssValue['background-image'] = 'url(\''+style.backgroundImage+'\')';
		}

		if(style.backgroundColor){
			cssValue['background-color'] = style.backgroundColor;
		}
		if(style.backgroundSize) {
			cssValue['background-size'] = style.backgroundSize;
		}
		if(style.backgroundRepeat) {
			cssValue['background-repeat'] = style.backgroundRepeat;
		}
		if(style.backgroundPosition){
			cssValue['background-position'] = style.backgroundPosition;
		}
		if(style.backgroundAttachment){
			cssValue['background-attachment'] = style.backgroundAttachment;
		}
		if(style.backgroundOrigin){
			cssValue['background-origin'] = style.backgroundOrigin;
		}
		if(style.backgroundClip){
			cssValue['background-clip'] = style.backgroundClip;
		}
		
		// FIXME: maso, 1395: thies are not background parameter
		if(style.color){
			cssValue['color'] = style.color;
		}
		if(style.opacity){
			cssValue['opacity'] = (style.isTransparent) ? style.opacity/100 : 1;
		}
		element.css(cssValue);
	}

	function postLink(scope, element, attributes) {
		return scope.$watch(attributes.wbBackground, function(style){
			return setBackgroud(element, style);
		}, true);
	}

	return {
		restrict : 'A',
		link : postLink
	};
});
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
 * @description Apply border into the element
 */
.directive("wbBorder", function() {
    return {
	restrict : 'A',
	link : function(scope, element, attributes) {
		//TODO: mgh, 1395: for efficiency, don't use ternary-operation in css. use if-condition on "uniform" and assign proper css-attributes.
	    return scope.$watch(attributes.wbBorder, function(style) {
		if(!style){
		    return;
		}
		if(!style.borderRadius){
		    style.borderRadius={};
		}
		if(!style.borderStyleColorWidth){
		    style.borderStyleColorWidth={};
		}
		if(!style.borderStyle){
		    style.borderStyle = {};
		}
		if(!style.borderWidth){
		    style.borderWidth = {};
		}
		if(!style.borderColor){
		    style.borderColor = {};
		}
		element.css({
	            'border-top-left-radius':(style.borderRadius.uniform) ? style.borderRadius.all : style.borderRadius.topLeft,
	            'border-top-right-radius':(style.borderRadius.uniform) ? style.borderRadius.all : style.borderRadius.topRight,
	            'border-bottom-left-radius':(style.borderRadius.uniform) ? style.borderRadius.all : style.borderRadius.bottomLeft,
	            'border-bottom-right-radius':(style.borderRadius.uniform) ? style.borderRadius.all : style.borderRadius.bottomRight,

	            'border-left-style':(style.borderStyleColorWidth.uniform) ? style.borderStyle.all : style.borderStyle.left,
	            'border-right-style':(style.borderStyleColorWidth.uniform) ? style.borderStyle.all : style.borderStyle.right,
	            'border-top-style':(style.borderStyleColorWidth.uniform) ? style.borderStyle.all : style.borderStyle.top,
	            'border-bottom-style':(style.borderStyleColorWidth.uniform) ? style.borderStyle.all : style.borderStyle.bottom,

	            'border-left-width':(style.borderStyleColorWidth.uniform) ? style.borderWidth.all : style.borderWidth.left,
	            'border-right-width':(style.borderStyleColorWidth.uniform) ? style.borderWidth.all : style.borderWidth.right,
	            'border-top-width':(style.borderStyleColorWidth.uniform) ? style.borderWidth.all : style.borderWidth.top,
	            'border-bottom-width':(style.borderStyleColorWidth.uniform) ? style.borderWidth.all : style.borderWidth.bottom,

	            'border-left-color':(style.borderStyleColorWidth.uniform) ? style.borderColor.all : style.borderColor.left,
	            'border-right-color':(style.borderStyleColorWidth.uniform) ? style.borderColor.all : style.borderColor.right,
	            'border-top-color':(style.borderStyleColorWidth.uniform) ? style.borderColor.all : style.borderColor.top,
	            'border-bottom-color':(style.borderStyleColorWidth.uniform) ? style.borderColor.all : style.borderColor.bottom,
	            });
	    }, true);
	}
    };
});
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
 * Apply layout into an element
 * 
 * Group and page are the main goles of this directive. By adding the wbLayout,
 * widget are able to manages it layout automatically.
 * 
 * Note that, in smal screen devices, the colume layout apply as default.
 * 
 * @ngdoc directive
 * @memberof am-wb-core
 * @description Apply layout into an element
 */
.directive("wbLayout", function() {
	/*
	 * FIXME: maso, 2017: replace class with term
	 * 
	 * It is hard to port final design, while it is fulle tied into the
	 * CSS classes. We must replace layout CSS classes with general terms
	 * as soon as posible.
	 */
	/**
	 * Remove layout config from element
	 * 
	 * @param element
	 * @param config
	 * @returns
	 */
	function removeLayout(element, config) {
		// Remove old class
		element.removeClass(config.flexDirection);
		element.removeClass(config.justifyContent);
		element.removeClass(config.alignItems);
	}

	/**
	 * Adds layout config into the element
	 * 
	 * @param element
	 * @param config
	 * @returns
	 */
	function addLayout(element, config) {
		// Add new class
		element.addClass(config.flexDirection);
		element.addClass(config.justifyContent);
		element.addClass(config.alignItems);
	}

	/**
	 * Link view with attributes
	 * 
	 * 
	 * @param scope
	 * @param element
	 * @param attrs
	 * @returns
	 */
	function postLink(scope, element, attrs) {
		return scope.$watch(attrs.wbLayout, function(newValue, oldValue) {
			if (oldValue) {
				removeLayout(element, oldValue);
			}
			if (newValue) {
				addLayout(element, newValue);
			}
		}, true);
	}

	/*
	 * Directive
	 */
	return {
		restrict : 'A',
		link : postLink
	};
});
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
 * @description Apply margin into the element
 */
.directive("wbMargin", function() {
	return {
		restrict : 'A',
		link : function(scope, element, attributes) {
			return scope.$watch(attributes.wbMargin, function(style) {
				if(!style){
					return;
				}
				if(!style.margin){
					style.margin ={};
				}
				if (style.margin.isUniform) {
					element.css({
						'margin-left':style.margin.uniform,
						'margin-right':style.margin.uniform,
						'margin-top':style.margin.uniform,
						'margin-bottom':style.margin.uniform,
					});
				} else {
					element.css({
						'margin-left': style.margin.left,
						'margin-right':style.margin.right,
						'margin-top': style.margin.top,
						'margin-bottom': style.margin.bottom
					});
				}
			}, true);
		}
	};
});
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
 * @description Apply padding into the element
 */
.directive("wbPadding", function() {
	return {
		restrict : 'A',
		link : function(scope, element, attributes) {
			return scope.$watch(attributes.wbPadding, function(style) {
				if(!style || !style.padding){
					return;
				}
				if(style.padding.isUniform){
					element.css({
						'padding': style.padding.uniform
					});
				} else {
					element.css({
						'padding-left':style.padding.left,
						'padding-right':style.padding.right,
						'padding-top':style.padding.top,
						'padding-bottom':style.padding.bottom
					});
				}
			}, true);
		}
	};
});
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
 * @description Apply margin into the element
 */
.directive("wbSize", function() {
	return {
		restrict : 'A',
		link : function(scope, element, attributes) {
			return scope.$watch(attributes.wbSize, function(style) {
				if(!style){
					return;
				}
				element.css({
					'width': !style.width ? 'auto' : style.width,
					'height': !style.height ? 'auto' : style.height,
					'min-width': !style.minWidth ? 'auto' : style.minWidth,
					'min-height': !style.minHeight ? 'auto' : style.minHeight,
					'max-width': !(style.maxWidth) ? 'none' : style.maxWidth,
					'max-height': !(style.maxHeight) ? 'none':style.maxHeight,
				});
			}, true);
		}
	};
});
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

var dragClass = 'wb-content-dragenter';
var bodyElementSelector = 'div#wb-content-body';
var placeholderElementSelector = 'div#wb-content-placeholder';

angular.module('am-wb-core')
/**
 * 
 */
.directive('wbPanel', function($compile, $widget, $controller, $settings, $q, $mdTheming) {
	function postLink(scope, element, attrs, ctrls, transclud) {

		/**
		 * Remove panel from parent
		 */
		function remove() {
			return scope.$parent.removeChild(scope.wbModel);
		}

		/**
		 * Empty view
		 * 
		 * Remove all widgets from the view.
		 */
		function cleanView() {
			element//
			.children(bodyElementSelector)//
			.children(placeholderElementSelector)//
			.empty();
		}

		/**
		 * Find aunchor
		 * 
		 * Find and return anchor element.
		 */
		function getAnchor() {
			return element//
			.children(bodyElementSelector)//
			.children(placeholderElementSelector);
		}

		/**
		 * Relaod view
		 */
		function reloadView() {
			cleanView();
			var anchor = getAnchor();
			var compilesJob = [];
			var elements = [];
			scope.wbModel.contents.forEach(function(item, index) {
				scope.objectId(item);
				compilesJob.push($widget.compile(item, scope)//
						.then(function(element) {
							element.attr('id', scope.objectId(item));
							$mdTheming(element);
							elements[index] = element;
						}));
			});
			return $q.all(compilesJob)//
			.then(function() {
				var anchor = getAnchor();
				elements.forEach(function(item) {
					anchor.append(item);
				});
			});
		}

		/**
		 * Adds dragged widget
		 */
		function dropCallback(event, index, item, external, type) {
			// add widget
			$widget.compile(item, scope)//
			.then(function(newElement) {
				var list = element//
				.children(bodyElementSelector)//
				.children(placeholderElementSelector);
				newElement.attr('id', scope.objectId(item));
				if (index < list[0].childNodes.length) {
					newElement.insertBefore(list[0].childNodes[index]);
				} else {
					list.append(newElement);
				}
				scope.wbModel.contents.splice(index, 0, item);
			});
			return true;
		}

		/**
		 * Removes a widget
		 * 
		 * Data model and visual element related to the input model will be
		 * removed.
		 */
		function removeChild(model) {
			var index = scope.wbModel.contents.indexOf(model);
			if (index > -1) {
				var a = element//
				.children(bodyElementSelector)//
				.children(placeholderElementSelector)
				.children('#'+scope.objectId(model));
				a.remove();
				scope.wbModel.contents.splice(index, 1);
			}
		}

		/**
		 * Insert new model befor selecte model
		 */
		function insertBefore(model, newModel){
			var index = scope.wbModel.contents.indexOf(model);
			if (index > -1) {
				$widget.compile(newModel, scope)//
				.then(function(newElement) {
					var a = element//
					.children(bodyElementSelector)//
					.children(placeholderElementSelector)//
					.children('#'+scope.objectId(model));
					newElement.insertBefore(a);
					scope.wbModel.contents.splice(index, 0, newModel);
				})
			}
		}

		function settings() {
			return $settings.load({
				wbModel : scope.wbModel,
				wbParent : scope.$parent
			}, scope.$parent.settingAnchor());
		}

		/**
		 * Clone current widget
		 */
		function clone() {
			var newObject = angular.copy(scope.wbModel);
			return scope.$parent.insertBefore(scope.wbModel, newObject);
		}

		// Set element ID after compile
		element.attr('id', scope.objectId(scope.wbModel));
		scope.wbModel.name = scope.wbModel.name || 'Panel';
		scope.getAllowedTypes = $widget.widgetsKey;

		scope.removeChild = removeChild;
		scope.remove = remove;
		scope.insertBefore = insertBefore;

		scope.settings = settings;
		scope.dropCallback = dropCallback;
		scope.clone = clone;

		if (!angular.isArray(scope.wbModel.contents)) {
			scope.wbModel.contents = [];
			return;
		}
		reloadView();
	}

	return {
		templateUrl : 'views/directives/wb-group.html',
		restrict : 'E',
		replace : true,
		transclude : true,
		link : postLink,
		controllerAs: 'ctrl',
		controller : function() {
			var _hoveringDelBtn;
			
			/**
			 * Hover delete button
			 * 
			 * @memberof wbPanel
			 */
			function setHoverDelBtn(flag){
				_hoveringDelBtn = flag;
			}
			
			/**
			 * Is hover delete button 
			 * 
			 * @memberof wbPanel
			 */
			function isHoverDelBtn(){
				return _hoveringDelBtn;
			}
			
			this.setHoverDelBtn = setHoverDelBtn;
			this.isHoverDelBtn = isHoverDelBtn;
		}
	};
});//


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
 */
.directive('wbIcon', function($interpolate) {
	function postLink(scope, element, attr, ctrl, transclude) {
		// Looking for icon
		var attrName = attr.$normalize(attr.$attr.wbIconName
				|| '');
		var contentValue = null;

		transclude(scope, function(clone) {
			var text = clone.text();
			if (text && text.trim()) {
				scope.$watch(function() {
					return $interpolate(text.trim())(scope);
				}, function(value) {
					scope.iconValue = value;
				});
			}
		});

		if (attrName) {
			attr.$observe('wbIconName', iconChange);
		}

		/*
		 * change icon
		 */
		function iconChange() {
			scope.iconValue = scope.contentValue
			|| attr.wbIconName || '';
		}
	}

	return {
		restrict : 'E',
		template : '<ng-md-icon style="height: auto;width: auto;" icon="{{iconValue}}"></ng-md-icon>',
		scope : true,
		replace : true,
		transclude : true,
		link : postLink
	};

})

.directive('mdIconFloat', function($mdTheming) {

	var INPUT_TAGS = [ 'INPUT', 'TEXTAREA', 'SELECT',
		'MD-SELECT' ];

	var LEFT_SELECTORS = INPUT_TAGS.reduce(
			function(selectors, isel) {
				return selectors.concat([ 'wb-icon ~ ' + isel,
					'.wb-icon ~ ' + isel ]);
			}, []).join(",");

	var RIGHT_SELECTORS = INPUT_TAGS.reduce(
			function(selectors, isel) {
				return selectors.concat([ isel + ' ~ wb-icon',
					isel + ' ~ .wb-icon' ]);
			}, []).join(",");

	function compile(tElement) {
		// Check for both a left & right icon
		var leftIcon = tElement[0]
		.querySelector(LEFT_SELECTORS);
		var rightIcon = tElement[0]
		.querySelector(RIGHT_SELECTORS);

		if (leftIcon) {
			tElement.addClass('md-icon-left');
		}
		if (rightIcon) {
			tElement.addClass('md-icon-right');
		}

		return function postLink(scope, element) {
			$mdTheming(element);
		};
	}

	return {
		restrict : 'C',
		compile : compile,
	};
});

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
 * @ngdoc directive
 * @name wbInfinateScroll
 * @description
 *  # wbInfinateScroll
 */
.directive('wbInfinateScroll', function($q, $timeout) {

	function postLink(scope, elem, attrs) {
		var raw = elem[0];

		/**
		 * 
		 */
		function loadNextPage() {
		  var value = scope.loadPage();
			return $q.when(value)//
			.then(checkScroll);
		}

		function checkScroll(value) {
		  if(value){
  			return $timeout(function(){
  				if(raw.scrollHeight <= raw.offsetHeight){
  					return loadNextPage();
  				}
  			}, 100);
		  }
		}

		function scrollChange(evt) {
			if (!(raw.scrollTop + raw.offsetHeight + 5 >= raw.scrollHeight)) {
				return;
			}
			loadNextPage();
		}

		elem.on('scroll', scrollChange);
		loadNextPage();
	}

	return {
		restrict : 'A',
		scope : {
			loadPage : '=wbInfinateScroll'
		},
		link : postLink
	};
});

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
 * @ngdoc directive
 * @name donateMainApp.directive:wbContent
 * @description
 * 
 * A container widget
 * 
 * This is an container widget to list and manage widgets. This is equal to a
 * group or a page of widgets.
 * 
 * Widget data is bind into the wbModel automatically.
 * 
 */
.directive('wbContent', function($compile, $widget, $controller, $settings, $q, $mdBottomSheet, $wbUi) {
	var dragClass = 'wb-content-dragenter';
	var bodyElementSelector = 'div#wb-content-body';
	var placeholderElementSelector = 'div#wb-content-placeholder';
	function postLink(scope, element, attrs) {
		// Note that object must be an object or array,
		// NOT a primitive value like string, number, etc.
		// Note: id must be incremental
		var objIdMap=new WeakMap();
		var objectCount = 0;
		function objectId(object){
			if (!objIdMap.has(object)) 
				objIdMap.set(object,++objectCount);
			return objIdMap.get(object);
		}

		/**
		 * Find the aunchor
		 * 
		 * The anchor is an element where widgets are added into.
		 * 
		 * @returns element anchor
		 */
		function getAnchor() {
			return element//
			.children(bodyElementSelector)//
			.children(placeholderElementSelector);
		}

		/**
		 * Reload view
		 * 
		 * Removes all widgets and load the view agin.
		 */
		function reloadView() {
			cleanView();
			var anchor = getAnchor();
			var compilesJob = [];
			var elements = [];
			scope.wbModel.contents.forEach(function(item, index) {
				compilesJob.push($widget.compile(item, scope)//
						.then(function(elem) {
							elem.attr('id', objectId(item));
							elements[index] = elem;
						}));
			});
			return $q.all(compilesJob)//
			.then(function() {
				var anchor = getAnchor();
				elements.forEach(function(item){
					anchor.append(item);
				});
			});
		}

		/**
		 * New widget
		 */
		function newWidget() {
			return $widget.select({
				wbModel : {},
				style : {}
			})//
			.then(function(model) {
				$widget.compile(model, scope)//
				.then(function(element) {
					element.attr('id', objectId(model));
					scope.wbModel.contents.push(model);
					getAnchor().append(element);
				});
			});
		}

		/**
		 * Clean view
		 * 
		 * Remove all widgets from the veiw and clean the tmeplate.
		 * 
		 */
		function cleanView() {
			element//
			.children(bodyElementSelector)//
			.children(placeholderElementSelector)//
			.empty();
		}

		/*
		 * Removes a widget
		 * 
		 * Data model and visual element related to the input model will be
		 * removed.
		 */
		function removeChild(model) {
			var index = scope.wbModel.contents.indexOf(model);
			if (index > -1) {
				var anchor = getAnchor();
				var a = anchor.children('#'+objectId(model));
				if(a.length > 0){
					a.remove();
					scope.wbModel.contents.splice(index, 1);
				} else {
					console.log('node not found');
				}
			}
		}

		/**
		 * Load container settings
		 * 
		 * Loads settings of the current container.
		 */
		function settings() {
			return $settings.load({
				wbModel : scope.wbModel,
				wbParent : scope.wbParent
			}, scope.settingAnchor());
		}

		/**
		 * Adds dragged widget
		 */
		function dropCallback(event, index, item, external, type) {
			// add widget
			$widget.compile(item, scope)//
			.then(function(newElement) {
				var list = element//
				.children(bodyElementSelector)//
				.children(placeholderElementSelector);
				newElement.attr('id', objectId(item));
				if (index < list[0].childNodes.length) {
					newElement.insertBefore(list[0].childNodes[index]);
				} else {
					list.append(newElement);
				}
				scope.wbModel.contents.splice(index, 0, item);
				console.log('widget add to list');
			});
			return true;
		}

		/**
		 * Insert new model befor selecte model
		 */
		function insertBefore(model, newModel){
			var index = scope.wbModel.contents.indexOf(model);
			if (index > -1) {
				$widget.compile(newModel, scope)//
				.then(function(newElement) {
					var a = element//
					.children(bodyElementSelector)//
					.children(placeholderElementSelector)//
					.children('#'+scope.objectId(model));
					newElement.insertBefore(a);
					scope.wbModel.contents.splice(index, 0, newModel);
				})
			}
		}

		function settingAnchor(){
			return attrs['wbSettingAnchor'];
		}

		/*
		 * Watch the model for modification.
		 */
		scope.$watch('wbModel', function() {
			scope.wbModelLoadeding = true;
			if (!scope.wbModel) {
				// XXX: maso, 1395: هنوز مدل تعیین نشده
				return;
			}
			if (!angular.isArray(scope.wbModel.contents)) {
				scope.wbModel.contents = [];
			}
			scope.wbModel.type = 'Page';
			reloadView().then(function(){
				scope.wbModelLoadeding = false;
			});
		});
		
		// Watch editable
		scope.$watch('wbEditable', function(editable){
			if(scope.wbEditable && (!scope.wbModel || !scope.wbModel.contents.length)){
				loadTemplate();
			}
		});
		
		/**
		 * Load a template
		 */
		function loadTemplate(){
			scope.alert = '';
		    return $mdBottomSheet.show({
		      templateUrl: 'views/sheets/wb-themplates.html',
		      controller: 'WbTemplatesSheetCtrl',
		      clickOutsideToClose: false
		    }).then(function(template) {
		    	return $wbUi.loadTemplate(template);
		    })
		    .then(function(newModel){
		    	scope.wbModel = newModel;
		    })
//		    .catch(function(error) {
//		      // User clicked outside or hit escape
//		    });

		}
		
		scope.getAllowedTypes = $widget.widgetsKey;
		scope.loadTemplate = loadTemplate;

		scope.settingAnchor = settingAnchor;
		scope.removeChild = removeChild;
		scope.insertBefore = insertBefore;
		scope.settings = settings;
		scope.dropCallback = dropCallback;
		scope.newWidget = newWidget;
		scope.objectId = objectId;
	}

	return {
		templateUrl : 'views/directives/wb-page.html',
		transclude : true,
		restrict : 'E',
		replace : true,
		scope : {
			wbModel : '=?',
			wbEditable : '=?',
			wbModelLoaded : '='
		},
		link : postLink
	};
});//


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
 * @ngdoc directive
 * @name wbWidget
 * @memberof am-wb-core
 * @description Widgets container
 * 
 * This is widget containers.
 * 
 * All primary actions of a widget are supported (such as remove and setting).
 */
.directive('wbSettingPanelGroup', function($settings, $widget) {
	
	/**
	 * Init settings
	 */
	function postLink(scope, element, attrs, ctrl, transclude) {
		$widget.widgets()//
		.then(function(ws){
			scope.widgets = ws.items;
		});
	}
	
	return {
		restrict : 'E',
		templateUrl: 'views/directives/wb-setting-panel-group.html',
		scope : {},
		link : postLink
	};
});

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
 * @ngdoc directive
 * @name wbWidget
 * @memberof am-wb-core
 * @description Widgets container
 * 
 * This is widget containers.
 * 
 * All primary actions of a widget are supported (such as remove and setting).
 */
.directive('wbSettingPanel', function($settings) {
    return {
	restrict : 'E',
	transclude : true,
	templateUrl : 'views/directives/wb-setting-panel.html',
	// This create an isolated scope
	scope : {
	    label : '@label',
	    description : '@?',
	    icon : '@?',
	},
    };
});

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
     * @ngdoc directive
     * @name wbWidget
     * @memberof am-wb-core
     * @description Widgets container
     *
     * This is widget containers.
     *
     * All primary actions of a widget are supported (such as remove and setting).
     */
    .directive('wbUiChoose', function () {
        return {
            templateUrl: 'views/directives/wb-ui-choose.html',
            restrict: 'E',
            scope: {
                items: '=items',
                selected: '=selected'
            },
            link: function (scope, element, attrs, ctrl, transclude) {

            },
            controller: function ($scope, $element, $settings, $widget) {
                $scope.selectedIndex = 0;
                if ($scope.selected != null)
                    for (var item in $scope.items) {
                        if (item.value == $scope.selected)
                            $scope.selectedIndex = $scope.items.indexOf(item);
                    }
                else
                    $scope.selected = $scope.items[0].value;

                // listen to active tab and update selected attribute.
                $scope.$watch('selectedIndex', function (current, old) {
                    $scope.selected = $scope.items[current].value;
                });
            }
        };
    });

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
 * @ngdoc directive
 * @name wbUiSettingAudio
 * @memberof am-wb-core
 * @author maso<mostafa.barmshory@dpq.co.ir>
 * @author hadi<mohammad.hadi.mansouri@dpq.co.ir>
 * @description a setting section to select audio file.
 *
 */
.directive('wbUiSettingAudio', function () {
	return {
		templateUrl: 'views/directives/wb-ui-setting-audio.html',
		restrict: 'E',
		scope: {
			title: '@title',
			value: '=value',
			icon: '@icon'
		},
		controller: function($scope, $resource){
			function selectAudio(){
				return $resource.get('audio', {
					style: {
						title: 'Select Audio',
					},
					data: $scope.value
				})//
				.then(function(value){
					$scope.value = value;
				});
			}
			
			$scope.edit = selectAudio;
		}
	};
});

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module('am-wb-core')

        /**
         * @ngdoc directive
         * @name wbUiSettingColor
         * @memberof am-wb-core
         * @description a setting section to set color.
         *
         */
        .directive('wbUiSettingBackgroundRepeat', function () {
            return {
                templateUrl: 'views/directives/wb-ui-setting-background-repeat.html',
                restrict: 'E',
                replace: true,
                scope: {
                    title: '@title',
                    value: '=value',
                }
                ,
                controller: function ($scope) {
                    $scope.items = [
                        { name: 'Repeat', value: 'repeat' },
                        { name: 'Repeat-x', value: 'repeat-x' },
                       { name: 'Repeat-y', value: 'repeat-y' },
                       { name: 'No-repeat', value: 'no-repeat' },
                       { name: 'Space', value: 'space' },
                       { name: 'Round', value: 'round' },
                       { name: 'Initial', value: 'initial' },
                       { name: 'Inherit', value: 'inherit' },
                       { name: 'Nothing', value: '' }
                                                                       
                    ];

                }
            };
        });
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/**
 * Created by mgh on 2/26/17.
 */
angular.module('am-wb-core')

        /**
         * @ngdoc directive
         * @name wbUiSettingColor
         * @memberof am-wb-core
         * @description a setting section to set color.
         *
         */
        .directive('wbUiSettingBackgroundSize', function () {
            return {
                templateUrl: 'views/directives/wb-ui-setting-background-size.html',
                restrict: 'E',
                replace: true,
                scope: {
                    title: '@title',
                    value: '=value',
                }
                ,
                controller: function ($scope) {
                    $scope.items = [
                        { name: 'Automatic', value: 'auto' },
                        { name: 'Length', value: 'length' },
                       { name: 'Cover', value: 'cover' },
                       { name: 'Contain', value: 'contain' },
                       { name: 'Initial', value: 'initial' },
                       { name: 'Inherit', value: 'inherit' },
                       { name: 'Nothing', value: '' }
                                                                       
                    ];

                }
            };
        });

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
 * @ngdoc directive
 * @name wbUiSettingChoose
 * @memberof am-wb-core
 * @description a setting section for choosing values.
 *
 */
.directive('wbUiSettingChoose', function ($mdTheming, $mdUtil) {

    // **********************************************************
    // Private Methods
    // **********************************************************
    function postLink(scope, element, attr, ctrls) {
//	scope.xitems = scope.$eval(attr.items);
//	attr.$observe('title', function(title){
//	    scope.title = title;
//	});
//	attr.$observe('icon', function(icon){
//	    scope.icon = icon;
//	});
	var ngModelCtrl = ctrls[0] || $mdUtil.fakeNgModel();
	var unregisterWatch = null;
	$mdTheming(element);

	ngModelCtrl.$render = render;

	scope.$watch('selectedIndex', function () {
	    if(angular.isDefined(scope.selectedIndex)){
		ngModelCtrl.$setViewValue(scope.xitems[scope.selectedIndex].value);
	    }
	});

	function render() {
	    scope.selectedIndex = toIndex(ngModelCtrl.$modelValue);
	    ngModelCtrl.$setViewValue(scope.xitems[scope.selectedIndex].value);
	}
	
	function toIndex (value){
	    for (var index = 0; index < scope.xitems.length; index++) {
		if (scope.xitems[index].value == value){
		    return index;
		}
	    }
	    // TODO: maso, 2017: update default value.
	    return 0;
	}
    }

    /*
     * Directive info
     */
    return {
	templateUrl: 'views/directives/wb-ui-setting-choose.html',
	restrict: 'E',
	scope: {
		icon: '@',
		title: '@',
		xitems: '<items'
	},
	require: ['?ngModel'],
	priority: 210, // Run before ngAria
	link: postLink
    };
});

/**
 * Created by mgh on 2/26/17.
 */
angular.module('am-wb-core')

    /**
     * @ngdoc directive
     * @name wbUiSettingColor
     * @memberof am-wb-core
     * @description a setting section to set color.
     *
     */
    .directive('wbUiSettingColor', function () {
        return {
            templateUrl: 'views/directives/wb-ui-setting-color.html',
            restrict: 'E',
            scope: {
                title: '@title',
                value: '=value',
                icon: '@icon'
            }
        };
    });

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
 * @ngdoc directive
 * @name wbUiSettingData
 * @memberof am-wb-core
 * @author maso<mostafa.barmshory@dpq.co.ir>
 * @author hadi<mohammad.hadi.mansouri@dpq.co.ir>
 * @description a setting section to manage data.
 *
 */
.directive('wbUiSettingData', function() {
	return {
		templateUrl : 'views/directives/wb-ui-setting-data.html',
		restrict : 'E',
		scope : {
			title : '@title',
			value : '=value',
			icon : '@icon'
		},
		controller : function($scope, $resource) {
			function editData(data) {
				return $resource.get('data', {
					style : {
					    icon: 'insert_chart',
						title : 'Data sheet',
						description: 'Edit data of the current sheet',
					},
					data : $scope.value
				}) //
				.then(function(data) {
					if(!angular.isDefined($scope.value)){
						$scope.value = {};
					}
					// Just copy data values
					$scope.value.key = data.key;
					$scope.value.values = data.values;
				});
			}
			$scope.edit = editData;
		}
	};
});
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
     * @ngdoc directive
     * @name wbUiSettingDropdown
     * @memberof am-wb-core
     * @description a setting section for choosing values.
     *
     */
    .directive('wbUiSettingDropdown', function () {
        return {
            templateUrl: 'views/directives/wb-ui-setting-dropdown.html',
            restrict: 'E',
            scope: {
                title: '@title',
                value: '=value',
                icon: '@icon',
                items:'=items'
            }
        };
    });

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
 * @ngdoc directive
 * @name wbUiSettingColor
 * @memberof am-wb-core
 * @author maso<mostafa.barmshory@dpq.co.ir>
 * @description a setting section to set color.
 *
 */
.directive('wbUiSettingImage', function () {
	return {
		templateUrl: 'views/directives/wb-ui-setting-image.html',
		restrict: 'E',
		scope: {
			title: '@title',
			value: '=value',
			icon: '@icon'
		},
		controller: function($scope, $resource){
			function selectImage(){
				return $resource.get('image', {
					style: {
					    icon: 'image',
						title: 'Select image',
						description: 'Select image from resources.'
					},
					data: $scope.value
				})//
				.then(function(value){
					$scope.value = value;
				});
			}
			
			$scope.selectImage = selectImage;
		}
	};
});

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
 * @ngdoc directive
 * @name wbUiSettingLength
 * @author maso<mostafa.barmshory@dpq.co.ir>
 * @author hadi<mohammad.hadi.mansouri@dpq.co.ir>
 * @description Set length (css based)
 * 
 * @see https://www.w3schools.com/cssref/css_units.asp
 */
.directive('wbUiSettingLength', function() {
	return {
	    templateUrl : 'views/directives/wb-ui-setting-length.html',
	    restrict : 'E',
	    scope : {
	        title : '@?',
	        value : '=?',
	        icon : '@?',
	        description : '@?',
	    },
	    /**
		 * 
		 * @gnInject
		 */
	    controller : function($scope, $resource) {
	    }
	};
});

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
 * @ngdoc directive
 * @name wbUiSettingColor
 * @memberof am-wb-core
 * @author maso<mostafa.barmshory@dpq.co.ir>
 * @description a setting section to set color.
 *
 */
.directive('wbUiSettingLink', function () {
	return {
		templateUrl: 'views/directives/wb-ui-setting-link.html',
		restrict: 'E',
                replace:true,
		scope: {
			title: '@title',
			url: '=url',
			icon: '@icon'
		},
		controller: function($scope, $resource){
			function selectlink(){
				return $resource.get('link', {
					style: {
					    icon: 'link',
						title: 'add url',
						description: 'Select url from resources.'
					},
					data: $scope.url
				})//
				.then(function(value){
					$scope.url = value;
				});
			}
			
			$scope.selectlink = selectlink;
		}
	};
});

/**
 * Created by mgh on 2/26/17.
 */
angular.module('am-wb-core')

    /**
     * @ngdoc directive
     * @name wbUiSettingNumber
     * @memberof am-wb-core
     * @description a setting section to set a number.
     *
     */
    .directive('wbUiSettingNumber', function () {
        return {
            templateUrl: 'views/directives/wb-ui-setting-number.html',
            restrict: 'E',
            scope: {
                title: '@title',
                value: '=value',
                icon: '@icon',
                slider:'@slider'
            }
        };
    });

/**
 * Created by mgh on 2/26/17.
 */
angular.module('am-wb-core')

    /**
     * @ngdoc directive
     * @name wbUiSettingOnOffSwitch
     * @memberof am-wb-core
     * @description a setting section for on/off switch.
     *
     */
    .directive('wbUiSettingOnOffSwitch', function () {
        return {
            templateUrl: 'views/directives/wb-ui-setting-on-off-switch.html',
            restrict: 'E',
            scope: {
                title: '@title',
                value: '=value',
                icon: '@icon'
            }
        };
    });

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
 * @ngdoc directive
 * @name wbUiSettingVideo
 * @memberof am-wb-core
 * @author maso<mostafa.barmshory@dpq.co.ir>
 * @author hadi<mohammad.hadi.mansouri@dpq.co.ir>
 * @description a setting section to select audio file.
 *
 */
.directive('wbUiSettingVideo', function () {
	return {
		templateUrl: 'views/directives/wb-ui-setting-video.html',
		restrict: 'E',
		scope: {
			title: '@title',
                        lable: '@lable',
			value: '=value',
			icon: '@icon'
		},
		controller: function($scope, $resource){
			function selectVideo(){
				return $resource.get('video', {
					style: {
						title: 'Select audio'
					},
					data: $scope.value
				})//
				.then(function(value){
					$scope.value = value;
				});
			}

			$scope.edit = selectVideo;
		}
	};
});

angular.module('am-wb-core')

        /**
         * @ngdoc directive
         * @name wbUiSettingColor
         * @memberof am-wb-core
         * @description a setting section to set color.
         *
         */
        .directive('wbUiSettingBackgroundAttachment', function () {
            return {
                templateUrl: 'views/directives/wb-ui-setting-background-attachment.html',
                restrict: 'E',
                replace: true,
                scope: {
                    title: '@title',
                    value: '=value',
                }
                ,
                controller: function ($scope) {
                    $scope.items = [
                        {name: 'Scroll', value: 'scroll'},
                        {name: 'Fixed', value: 'fixed'},
                        {name: 'Local', value: 'local'},
                        {name: 'Initial', value: 'initial'},
                        {name: 'Inherit', value: 'inherit'},
                        {name: 'Nothing', value: ''}
                    ];

                }
            };
        });
angular.module('am-wb-core')

        /**
         * @ngdoc directive
         * @name wbUiSettingColor
         * @memberof am-wb-core
         * @description a setting section to set color.
         *
         */
        .directive('wbUiSettingBackgroundOrigin', function () {
            return {
                templateUrl: 'views/directives/wb-ui-setting-background-origin.html',
                restrict: 'E',
                replace: true,
                scope: {
                    title: '@title',
                    value: '=value',
                }
                ,
                controller: function ($scope) {
                    $scope.items = [
                        {name: 'Padding-box', value: 'padding-box'},
                        {name: 'Border-box', value: 'border-box'},
                        {name: 'Content-box', value: 'content-box'},
                        {name: 'No-repeat', value: 'no-repeat'},
                        {name: 'Initial', value: 'initial'},
                        {name: 'Inherit', value: 'inherit'},
                        {name: 'Nothing', value: ''}
                    ];

                }
            };
        });
angular.module('am-wb-core')

        /**
         * @ngdoc directive
         * @name wbUiSettingColor
         * @memberof am-wb-core
         * @description a setting section to set color.
         *
         */
        .directive('wbUiSettingBackgroundPosition', function () {
            return {
                templateUrl: 'views/directives/wb-ui-setting-background-position.html',
                restrict: 'E',
                scope: {
                    title: '@title',
                    value: '=value',
                }
                ,
                controllerAs: 'ctrl',
                controller: function DemoCtrl($timeout, $q) {
                    var self = this;
                    self.simulateQuery = false;
                    self.isDisabled = false;

                    // list of `state` value/display objects
                    self.states = loadAll();
                    self.querySearch = querySearch;
                    self.newState = newState;

                    function newState(state) {
                        alert("Sorry! You'll need to create a Constitution for " + state + " first!");
                    }

                    // ******************************
                    // Internal methods
                    // ******************************

                    /**
                     * Search for states... use $timeout to simulate
                     * remote dataservice call.
                     */
                    function querySearch(query) {
                        var results = query ? self.states.filter(createFilterFor(query)) : self.states,
                                deferred;
                        if (self.simulateQuery) {
                            deferred = $q.defer();
                            $timeout(function () {
                                deferred.resolve(results);
                            }, Math.random() * 1000, false);
                            return deferred.promise;
                        } else {
                            return results;
                        }
                    }

                    /**
                     * Build `states` list of key/value pairs
                     */
                    function loadAll() {
                            return[
                        {display: 'Left top', value: 'left top'},
                        {display: 'Left center', value: 'left center'},
                        {display: 'Left bottom', value: 'left bottom'},
                        {display: 'Right top', value: 'right top'},
                        {display: 'Right center', value: 'right center'},
                        {display: 'Center top', value: 'center top'},
                        {display: 'Center center', value: 'center center'},
                        {display: 'Center bottom', value: 'center bottom'},
                        {display: 'Initial', value: 'initial'},
                        {display: 'Inherit', value: 'inherit'},
                        {display: 'Nothing', value: ''}
                    ];
                    }

                    /**
                     * Create filter function for a query string
                     * @param {string} query to filter items 
                     */

                    function createFilterFor(query) {
                        var lowercaseQuery = query.toLowerCase();

                        return function (state) {
                            return (state.value.indexOf(lowercaseQuery) === 0);
                        };

                    }

                }
            };
        });
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
 * @ngdoc directive
 * @name wbWidget
 * @memberof am-wb-core
 * @description Widgets container
 * 
 * This is widget containers.
 * 
 * All primary actions of a widget are supported (such as remove and setting).
 */
.directive('wbWidget', function() {
	function postLink(scope, element, attrs, ctrl, transclude) {
		// Modify angular transclude function
		// see:
		// http://angular-tips.com/blog/2014/03/transclusion-and-scopes/
		// FIXME: maso, 2017: use regular dom insted of ng-transclude
		transclude(scope, function(clone, scope) {
			var node = element //
			.find('wb-transclude') //
			.append(clone);
		});
	}

	return {
		templateUrl : 'views/directives/wb-widget.html',
		restrict : 'E',
		transclude : true,
		replace : true,
		link : postLink,
		controllerAs: 'ctrl',
		controller : function($scope, $element, $settings, $widget) {
			var element = $element;
			var _hoveringDelBtn = false;
			/**
			 * Remove widget from parent
			 */
			function remove() {
				console.log('widget removed');
				return $scope.$parent.removeChild($scope.wbModel);
			}

			/**
			 * Load widget settings
			 * 
			 */
			function settings() {
				return $settings.load({
					wbModel : $scope.wbModel,
					wbParent : $scope.$parent,
				}, $scope.$parent.settingAnchor());
			}

			/**
			 * Notify this widget is selected
			 */
			function selected() {
				if (!$scope.wbEditable) {
					return;
				}
				return settings();
			}

			/**
			 * Check if the widget is selected one
			 */
			function isSelected() {
				return $scope.wbEditable && $settings.isCurrentModel($scope.wbModel);
			}

			/**
			 * Clone current widget
			 */
			function clone() {
				var newObject = angular.copy($scope.wbModel);
				return $scope.$parent.insertBefore($scope.wbModel, newObject);
			}

			function setHoverDelBtn(flag){
				_hoveringDelBtn = flag;
			}

			function isHoverDelBtn(){
				return _hoveringDelBtn;
			}

			/*
			 * Add to scope
			 */
			$scope.remove = remove;
			$scope.movedCallback = remove;
			$scope.settings = settings;
			$scope.selected = selected;
			// Sets widget id after compile
			element.attr('id', $scope.objectId($scope.wbModel));
			$scope.wbModel.name = $scope.wbModel.name || 'Widget';
			$scope.isSelected = isSelected;
			$scope.clone = clone;

			this.setHoverDelBtn = setHoverDelBtn;
			this.isHoverDelBtn = isHoverDelBtn;
		}
	};
});
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
 * @ngdoc directive
 * @name wb-widgets-explorer
 * @description Widgets explorers
 * 
 * This is widgets explorer list.
 * 
 */
.directive('wbWidgetsExplorer', function($widget, $rootScope) {
	/*
	 * link function
	 */
	function postLink(scope, element, attrs, ctrls) {
	    
		var ngModel = ctrls[0];
		var widgets = null;
		
		if($rootScope.app && $rootScope.app.setting) {
		    // save setting in root scope
		    if(!$rootScope.app.setting.wbWidgetExplorer){
		        $rootScope.app.setting.wbWidgetExplorer = {};
		    }
		    scope.wbWidgetExplorer = $rootScope.app.setting.wbWidgetExplorer;
		} else {
		    scope.wbWidgetExplorer = {};
		}
		
		/*
		 * Filter widgets width the query
		 */
		function _loadQuery(query, widgets){
			if(query) {
				var q = query.trim().toLowerCase();
				return widgets.filter(function(w){
					return w.title.toLowerCase().indexOf(q) > -1 || w.description.indexOf(q) > -1;
				});
			}
			return widgets;
		}
		
		/*
		 * Load widgets in groups
		 */
		function _loadGroups(widgets){
			var groups = [];
			var tmp = {};
			for(var i = 0; i < widgets.length; i++){
				var gl = widgets[i].groups || [];
				for(var j = 0; j < gl.length; j++){
					var gid = gl[j];
					if(!angular.isDefined(tmp[gid])){
						tmp[gid] = angular.copy($widget.group(gid));
						tmp[gid].widgets = [];
						groups.push(tmp[gid]);
					}
					tmp[gid].widgets.push(widgets[i]);
				}
			}
			return groups;
		}
		
		function _runQuery(query, $event){
			scope.widgets = _loadQuery(scope.query, widgets);
			scope.groups = _loadGroups(scope.widgets);
		}
		
		function _load(){
			if(!widgets){
				scope.widgets = [];
				return;
			}
			// maso, 2018: clear configs
			scope.query = '';
			scope.widgets = _loadQuery(scope.query, widgets);
			scope.groups = _loadGroups(scope.widgets);
		}
		
		// Load models
		ngModel.$render = function(){
			widgets = ngModel.$modelValue;
			_load();
		}
		
		scope.runQuery = _runQuery;
	}

	return {
		templateUrl : 'views/directives/wb-widgets-explorer.html',
		restrict : 'E',
		replace : true,
		scope: {},
		require: ['ngModel'],
		link : postLink,
	};
});
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
 * @ngdoc directive
 * @name wb-widgets-list
 * @description Widgets explorers
 * 
 * This is widgets explorer list.
 * 
 */
.directive('wbWidgetsList', function($window) {

	return {
		templateUrl : 'views/directives/wb-widgets-list.html',
		restrict : 'E',
		replace : true,
		scope: {
			widgets: '<'
		},
		/**
		 * 
		 * @ngInject
		 */
		controller: function($scope){
			if(angular.isFunction($window.openHelp)){
				$scope.openHelp = function(widget, $event){
					$window.openHelp(widget, $event);
				}
			}
		}
	};
});
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
 * @ngdoc directive
 * @name wb-widgets-module
 * @description Widgets explorers
 * 
 * This is widgets explorer list.
 * 
 */
.directive('wbWidgetsModule', function($window) {

	return {
		templateUrl : 'views/directives/wb-widgets-module.html',
		restrict : 'E',
		replace : true,
		scope: {
			widgets: '<'
		},
		controller: function($scope){
			if(angular.isFunction($window.openHelp)){
				$scope.openHelp = function(widget, $event){
					$window.openHelp(widget, $event);
				}
			}
		}
	};
});
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
 * @ngdoc filter
 * @name wbunsafe
 * @function
 * @description # unsafe Filter in the digidociMainApp.
 */
.filter('wbunsafe', function($sce) {
	return function(val) {
		return $sce.trustAsHtml(val);
	};
});

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
 * Load default resources
 */
.run(function($resource) {
	$resource.newPage({
		type : 'wb-url',
		icon: 'link',
		label : 'URL',
		templateUrl : 'views/resources/wb-url.html',
		controller : 'WbResourceUrlCtrl',
		tags : [ 'file', 'image', 'vedio', 'audio', 'page', 'url']
	});
	$resource.newPage({
		type : 'wb-sheet',
		icon : 'border_all',
		label : 'Sheet',
		templateUrl : 'views/resources/wb-sheet.html',
		controller : 'WbResourceDataCtrl',
		tags : [ 'data' ]
	});
});

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
.run(function($settings) {
	$settings.newPage({
		type: 'general',
		label : 'general',
		templateUrl : 'views/settings/wb-general.html'
	});
	$settings.newPage({
		type: 'background',
		label : 'Background',
		icon : 'image',
		description : 'manage',
		templateUrl : 'views/settings/wb-background.html'
	});
	$settings.newPage({
		type: 'text',
		label : 'Frontend text',
		controller: 'WbTextSettingsCtrl',
		templateUrl : 'views/settings/wb-text.html'
	});
	$settings.newPage({
		type: 'description',
		label : 'Description',
		templateUrl : 'views/settings/wb-description.html'
	});
	$settings.newPage({
		type: 'layout',
		label : 'Layout',
		icon: 'dashboard',
		controller: 'WbLayoutWbSettingsCtrl',
		templateUrl : 'views/settings/wb-layout.html'
	});
	$settings.newPage({
		type: 'border',
		label : 'Border',
		icon: 'border_all',
		controller: 'WbBorderSettingCtrl',
		templateUrl : 'views/settings/wb-border.html'
	});
	$settings.newPage({
		type: 'pageLayout',
		label : 'Page Layout',
		icon: 'dashboard',
		controller: 'WbPageLayoutWbSettingsCtrl',
		templateUrl : 'views/settings/wb-layout-page.html'
	});
	$settings.newPage({
		type: 'selfLayout',
		label : 'Self Layout',
		controller: 'WbSelfLayoutWbSettingsCtrl',
		templateUrl : 'views/settings/wb-layout-self.html'
	});
	$settings.newPage({
		type: 'marginPadding',
		label : 'Margin/Padding',
		templateUrl : 'views/settings/wb-margin-padding.html'
	});
	$settings.newPage({
		type: 'size',
		label : 'Size',
		templateUrl : 'views/settings/wb-size.html'
	});
});

/**
 * plugin.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2015 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

/*global tinymce:true */


angular.module('am-wb-core')

/**
 * Load default resources
 */
.run(function($resource) {

	function imageTool(editor) {

		function insertImage(url){
	          editor.insertContent('<img src="' + url + '" >');
		}
		
		function showDialog(){
			$resource.get('image')//
			.then(function(value){
				insertImage(value);
			});
		}
		
		editor.addButton('image', {
			icon: 'image',
			tooltip: 'Insert/edit image',
			onclick: showDialog,
			stateSelector: 'img:not([data-mce-object],[data-mce-placeholder]),figure.image'
		});

		editor.addMenuItem('image', {
			icon: 'image',
			text: 'Image',
			onclick: showDialog,
			context: 'insert',
			prependToContext: true
		});

		editor.addCommand('mceImage', showDialog);
	}

	tinymce.PluginManager.add('image', imageTool);

});

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
.run(function($widget) {
	
	// Widget 

//	type : 'http-get',
//	title : 'GET',
//	description : 'Requests a representation of the specified resource',
//	groups: ['http'],
//	icon : 'wb-widget-group',
//	iconUrl: '/link/to/image',
//	groups: ['basic'],
//	model:{},
	
	
	// Group
	$widget.newWidget({
		// widget description
		type: 'Group',
		title: 'Group',	
		description : 'Panel contains list of widgets.',
		icon : 'wb-widget-group',
		groups: ['basic'],
		model: {},
		// functional properties
		template : '<wb-panel></wb-panel>',
		help : 'http://dpq.co.ir/more-information-link',
		helpId: 'wb-widget-group'
	});
	// HTML text
	$widget.newWidget({
		// widget description
		type: 'HtmlText',
		title : 'Text',
		description : 'An text block.',
		icon : 'wb-widget-html',
		groups: ['basic'],
		model : {
			text : '<h2>Text element</h2><p>Click on the text box to edit.</p>',
		},
		// help id
		help : 'http://dpq.co.ir',
		helpId: 'wb-widget-html',
		// functional properties
		templateUrl : 'views/widgets/wb-html.html',
		setting:['text'],
	});
});

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
 * @ngdoc service
 * @name $widget
 * @memberof am-wb-core
 * @description Resource managment
 * 
 */
.service('$resource', function($wbUi, $rootScope) {
    var CHILDREN_AUNCHOR = 'wb-select-resource-children';
    var resourcePages = {};
    /*
     * Manages resource dialog
     * @ngInject
     */
    function wbResourceCtrl($scope,  $mdDialog, $wbUtil,
             $q, $controller, $compile, pages, style, data, $element, $window) {
        
        $scope.value = angular.copy(data);
        $scope.style = style;
        var currentScope = null;
        
        function hide() {
            $mdDialog.hide();
        }

        function cancel() {
            return $mdDialog.cancel();
        }

        /**
         * Answer the dialog
         * 
         * If there is an answer function in the current page controller
         * then the result of the answer function will be returned as 
         * the main result.
         * 
         * @memberof WbResourceCtrl
         */
        function answer() {
            $scope.loadingAnswer = true;
            var res = null;
            if(currentScope && angular.isFunction(currentScope.answer)){
                res =  $q.when(currentScope.answer())
                .then($mdDialog.hide);
            } else {
                res = $mdDialog.hide($scope.value);
            }
            return res.finally(function(){
                $scope.loadingAnswer = false;
            });
        }
        
        /**
         * Sets value to the real var
         * 
         */
        function setValue(value){
            $scope.value = value;
        }

        /**
         * encapsulate template srce with panel widget template.
         * 
         * @param page
         *            setting page config
         * @param tempateSrc
         *            setting page html template
         * @returns encapsulate html template
         */
        function _encapsulatePanel(page, template) {
            // TODO: maso, 2017: pass all paramter to the setting
            // panel.
            return template;
        }

        /**
         * تنظیمات را به عنوان تنظیم‌های جاری سیستم لود می‌کند.
         * 
         * @returns
         */
        function loadPage(page) {
            var widget = null;
            var jobs = [];
            var pages2 = [];

            $scope._selectedIndex = pages.indexOf(page);

            // 1- Find element
            var target = $element.find('#' + CHILDREN_AUNCHOR);

            // 2- Clear childrens
            target.empty();
            currentScope = null;


            // 3- load pages
//          var page = pages[index];
            var template = $wbUtil.getTemplateFor(page);
            if (angular.isDefined(template)) {
                jobs.push($q.when(template).then(function(templateSrc) {
                    templateSrc = _encapsulatePanel(page, templateSrc);
                    var element = angular.element(templateSrc);
                    var scope = $rootScope.$new(false, $scope);
                    currentScope = scope;
                    scope.page = page;
                    scope.value = $scope.value;
                    if (angular .isDefined(page.controller)) {
                         $controller(page.controller, {
                            $scope : scope,
                            $element : element,
                        });
                    }
                    $compile(element)(scope);
                    pages2.push(element);
                }));
            }

            $q.all(jobs).then(function() {
                angular.forEach(pages2, function(element) {
                    target.append(element);
                });
            });
        }
        
        if(angular.isFunction($window.openHelp)){
            $scope.openHelp = function($event){
                cancel().then(function(){
                    $window.openHelp(pages[$scope._selectedIndex], $event);
                });
            }
        }
        
        $scope.pages = pages;
        
        $scope.loadPage = loadPage;
        
        $scope.hide = hide;
        $scope.cancel = cancel;
        $scope.answer = answer;
        $scope.setValue = setValue;
        
        if(pages.length){
            loadPage(pages[0]);
        }
    }


	/**
	 * Fetchs a page.
	 * 
	 * @param model
	 * @returns
	 */
	function page(type) {
		var widget = notFound;
		if (type in resourcePages) {
			widget = resourcePages[type];
		}
		return widget;
	}

	/**
	 * Adds new page.
	 * 
	 * @returns
	 */
	function newPage(page) {
		resourcePages[page.type] = page;
	}

	/**
	 * Finds and lists all pages.
	 * 
	 * @returns
	 */
	function pages() {
		// TODO: maso, 1395:
	}

	/**
	 * Get a resource 
	 * 
	 * @param tags
	 * @returns
	 */
	function get(tag, option){
		if(!option){
			option = {};
		}
		var pages = [];
		if(tag){
			angular.forEach(resourcePages, function(page) {
				if(angular.isArray(page.tags) && page.tags.includes(tag)){
					this.push(page);
				}
			}, pages);
		} else {
			pages = resourcePages;
		}
		var tmplUrl = pages.length > 1 ? 'views/dialogs/wb-select-resource.html' : 'views/dialogs/wb-select-resource-single-page.html'

		return $wbUi.openDialog({
			controller : wbResourceCtrl,
			templateUrl : tmplUrl,
			parent : angular.element(document.body),
			clickOutsideToClose : true,
			fullscreen : true,
            multiple:true,
			locals : {
				'pages' : pages,
				'style' : option.style || {
					title: tag
				},
				'data' : option.data
			}
		});
	}


	this.get = get;
	this.newPage = newPage;
	this.page = page;
	this.pages = pages;
});

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
 * @ngdoc service
 * @name $widget
 * @memberof am-wb-core
 * @description مدیریت ویجت‌های سیستم
 * 
 * این سرویس تمام ویجت‌های قابل استفاده در سیستم را تعیین می‌کند.
 */
.service('$settings',function($rootScope, $controller, $widget, $q, $sce, $compile,
		$document, $templateRequest, $wbUtil) {
	var WB_SETTING_PANEL_ID = 'WB-SETTING-PANEL';

	/*
	 * Default settings
	 */
	var WB_SETTINGS_PAGE_DEFAULT = ['description', 'border',
		'background', 'pageLayout', 'marginPadding'];
	var WB_SETTINGS_GROUP_DEFAULT = [ 'description', 'border',
		'background', 'pageLayout', 'selfLayout',
		'marginPadding', 'size' ];
	var WB_SETTINGS_WIDGET_DEFAULT = [ 'selfLayout', 'border',
		'background', 'marginPadding', 'size' ];
	/**
	 * Setting page storage
	 * 
	 */
	var settingPages = {};
	var notFound = {
			label : 'Settings not found',
			templateUrl : 'views/settings/wb-notfound.html'
	};

	var oldScope;

	/**
	 * Fetchs a setting page.
	 * 
	 * @param model
	 * @returns
	 */
	function page(type) {
		var widget = notFound;
		if (type in settingPages) {
			widget = settingPages[type];
		}
		return widget;
	}

	/**
	 * Adds new setting page.
	 * 
	 * @returns
	 */
	function newPage(page) {
		settingPages[page.type] = page;
	}

	/**
	 * Finds and lists all setting pages.
	 * 
	 * @returns
	 */
	function pages() {
		// TODO: maso, 1395:
	}

	/**
	 * Defines default settings for widget
	 * 
	 * @param widget
	 * @returns
	 */
	function getDefaultSettingsFor(widget) {
		if (widget.type === 'Page') {
			return WB_SETTINGS_PAGE_DEFAULT;
		}
		if (widget.type === 'Group') {
			return WB_SETTINGS_GROUP_DEFAULT;
		}
		return WB_SETTINGS_WIDGET_DEFAULT;
	}

	/**
	 * encapsulate template srce with panel widget template.
	 * 
	 * @param page
	 *            setting page config
	 * @param tempateSrc
	 *            setting page html template
	 * @returns encapsulate html template
	 */
	function _encapsulateSettingPanel(page, templateSrc) {
		// TODO: maso, 2017: pass all paramter to the setting
		// panel.
		var attr = ' ';
		if (page.label) {
			attr += ' label=\"' + page.label + '\"';
		}
		if (page.icon) {
			attr += ' icon=\"' + page.icon + '\"';
		}
		if (page.description) {
			attr += ' description=\"' + page.description + '\"';
		}
		return '<wb-setting-panel ' + attr + '>' + templateSrc
		+ '</wb-setting-panel>';
	}

	/**
	 * Check if this is the current model
	 */
	function isLoaded(wbModel) {
    	return oldScope && oldScope.wbModel == wbModel;
    }
	
	/**
	 * تنظیمات را به عنوان تنظیم‌های جاری سیستم لود می‌کند.
	 * 
	 * @returns
	 */
	function loadSetting(models, panelId) {
		var widget = null;
		var jobs = [];
		var pages = [];

		// 0- destroy old resource
		if(isLoaded(models.wbModel)){
			return;
		}
		if (angular.isDefined(oldScope)) {
			oldScope.$destroy();
		}
		var scope = $rootScope.$new(true, $rootScope);
		scope.wbModel = models.wbModel;
		scope.wbParent = models.wbParent;
		oldScope = scope;

		// 1- Find element

		var target;
		if(panelId){
			target = $document.find('#'+panelId).find('#' + WB_SETTING_PANEL_ID);
		} else {
			target = $document.find('#' + WB_SETTING_PANEL_ID);
		}

		// 2- Clear childrens
		target.empty();

		// 3- load pages
		$widget.widget(models.wbModel)//
		.then(function(w) {
			widget = w;
			var widgetSettings = getDefaultSettingsFor(w);
			if (angular.isArray(widget.setting)) {
				widgetSettings = widgetSettings
				.concat(widget.setting);
			}
			angular.forEach(widgetSettings, function(type) {
				var page = notFound;
				if (type in settingPages) {
					page = settingPages[type];
				}
				var template = $wbUtil.getTemplateFor(page);
				if (angular.isDefined(template)) {
					var job = template.then(function(templateSrc) {
						templateSrc = _encapsulateSettingPanel(page, templateSrc);
						var element = angular.element(templateSrc);
						if (angular .isDefined(page.controller)) {
							$controller(page.controller, {
								$scope : scope,
								$element : element,
							});
						}
						$compile(element)(scope);
						element.attr('label',page.lable);
						pages.push(element);
					});
					jobs.push(job);
				}
			});

		})
		//
		.then(function() {
			$q.all(jobs)//
			.then(function() {
				pages.sort(function(a, b) {
					if (a.attr('label') < b.attr('label'))
						return -1;
					if (a.attr('label') > b.attr('label'))
						return 1;
					return 0;
				});
				angular.forEach(pages, function(element) {
					target
					.append(element);
				});
			});
		});
	}

	// تعیین سرویس‌ها
	this.WB_SETTING_PANEL_ID = WB_SETTING_PANEL_ID;
	this.page = page;
	this.load = loadSetting;
	this.newPage = newPage;
	this.isCurrentModel = isLoaded;
});

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
 * @ngdoc service
 * @name $widget
 * @memberof am-wb-core
 * @description Resource managment
 * 
 */
.service('$wbUi', function($mdDialog, $q, $http) {

	var _templates = [];

	/**
	 * Opens dialog
	 * @returns
	 */
	function openDialog(dialogData){
		return $mdDialog.show(dialogData);
	}

	/**
	 * Get list of registered templates
	 * 
	 * @memberof $wbUi
	 */
	function templates(){
		return $q.when({
			items: _templates
		});
	}
	
	/**
	 * Adds new template
	 * 
	 * @memberof $wbUi
	 */
	function newTemplate(template){
		_templates.push(template);
		return this;
	}
	
	/**
	 * Load a template
	 * 
	 * @memberof $wbUi
	 */
	function loadTemplate(template){
		// TODO: maso, 2018: check if template is a function
		if(angular.isDefined(template.template)){
			return $q.when(JSON.parse(template.template));
		}
		return $http.get(template.templateUrl)
		.then(function(res){
			return res.data;
		});
	}

	this.openDialog = openDialog;
	this.templates = templates;
	this.newTemplate = newTemplate;
	this.loadTemplate = loadTemplate;
});

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

angular
.module('am-wb-core')

/**
 * @ngdoc service
 * @name $wbUtil
 * @memberof am-wb-core
 * @description کدهای پایه
 * 
 */
.service('$wbUtil',function($rootScope, $controller, $widget, $q, $sce, $compile,
		$document, $templateRequest) {
	/*
	 * get setting page template
	 */
	function getTemplateFor(page) {
		var template, templateUrl;
		if (angular.isDefined(template = page.template)) {
			if (angular.isFunction(template)) {
				template = template(page.params);
			}
		} else if (angular
				.isDefined(templateUrl = page.templateUrl)) {
			if (angular.isFunction(templateUrl)) {
				templateUrl = templateUrl(page.params);
			}
			if (angular.isDefined(templateUrl)) {
				page.loadedTemplateUrl = $sce
				.valueOf(templateUrl);
				template = $templateRequest(templateUrl);
			}
		}
		return template;
	}

	this.getTemplateFor = getTemplateFor;
});

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
 * @ngdoc service
 * @name $widget
 * @memberof am-wb-core
 * @description مدیریت ویجت‌های سیستم
 * 
 * این سرویس تمام ویجت‌های قابل استفاده در سیستم را تعیین می‌کند.
 */
.service('$widget', function(
		$q, $sce, $templateRequest, $compile, $controller, $rootScope,
		$timeout, $mdDialog) {

	var _group_repo = [];
	var contentElementAsso = [];
	var elementKey = [];
	
	var notFoundWidget = {
			templateUrl : 'views/widgets/wb-notfound.html',
			label : 'Not found',
			description : 'Element not found',
	};
	var container = {
			type : 'Page',
			label : 'Page',
			description : 'Panel contains list of widgets.',
			image : 'images/wb/content.svg',
	};
	
	function _newGroup(group){
		var g = _group(group.id);
		angular.extend(g, group);
	}
	
	function _group(groupId){
		for(var i = 0; i < _group_repo.length; i++){
			if(_group_repo[i].id == groupId){
				return _group_repo[i];
			}
		}
		var group = {
				id: groupId
		};
		_group_repo.push(group);
		return group;
	}
	
	function _groups(){
		return _group_repo;
	}

	function _widget(model){
		if (model.type in contentElementAsso) {
			return contentElementAsso[model.type];
		}
		if (model.type === 'Page') {
			return container;
		}
		return notFoundWidget;
	}
	/**
	 * Finds a widget related to the input model.
	 * 
	 * Widget type is stored in the widget data model. This function get the
	 * model type from the input data type and return related widget.
	 * 
	 * NotFoundElement widget is returned if the widget type is not found.
	 * 
	 * @param model
	 * @returns
	 */
	function widget(model) {
		return $q.when(_widget(model));
	}

	/**
	 * Returns list of all registerd widgets.
	 * 
	 * @returns
	 */
	function widgets() {
		var widgets = {};
		// XXX: maso, 1395: تعیین خصوصیت‌ها به صورت دستی است
		widgets.items = [];
		elementKey.forEach(function(type) {
			widgets.items.push(contentElementAsso[type]);
		});
		return $q.when(widgets);
	}
	
	/**
	 * List of all registered widgets
	 * 
	 * @memberof $widget
	 * @returns keys {array} list of all keys
	 */
	function widgetsKey(){
		return elementKey;
	}

	/**
	 * Registers new widget
	 * 
	 * @See the following page for more information:
	 * 
	 *    https://gitlab.com/weburger/angular-material-weburger/wikis/create-new-widget
	 * 
	 * @param type
	 * @param model
	 * @returns
	 */
	function newWidget(widget) {
		if (widget.type in contentElementAsso) {
			// XXX: maso, 2017: throw exception
			return;
		}
		// fix widget data
		widget.model = widget.model || {style:{}};
		widget.model.type = widget.type;
		widget.model.name = widget.model.name || widget.title; 
		
		contentElementAsso[widget.type] = widget;
		elementKey.push(widget.type);
	}

	/**
	 * Selects a widgetd
	 * 
	 * This is an utility method to help a user to select a widget.
	 * 
	 * @param locals
	 * @returns
	 */
	function select(locals) {
		// TODO: maso, 1394: just prepare data for view
		return $mdDialog.show({
			controller : 'WbDialogsCtrl',
			templateUrl : 'views/dialogs/wb-selectwidget.html',
			parent : angular.element(document.body),
			clickOutsideToClose : true,
			fullscreen : true,
			locals : locals,
		});
	}


	/*
	 * get setting page template
	 */
	function getTemplateFor(widget) {
		var template, templateUrl;
		if (angular.isDefined(template = widget.template)) {
			if (angular.isFunction(template)) {
				template = template(widget.params);
			}
		} else if (angular.isDefined(templateUrl = widget.templateUrl)) {
			if (angular.isFunction(templateUrl)) {
				templateUrl = templateUrl(widget.params);
			}
			if (angular.isDefined(templateUrl)) {
				widget.loadedTemplateUrl = $sce.valueOf(templateUrl);
				template = $templateRequest(templateUrl);
			}
		}
		return $q.when(template);
	}

	function compile(model, parenScope){
		var widget = _widget(model);
		var childScope = null;
		var element = null;

		// 1- create scope
		childScope = parenScope.$new(false, parenScope);
		childScope.wbModel = model;

		// 2- create element
		return $q.when(getTemplateFor(widget))//
		.then(function(template) {
			if (model.type != 'Group') {
				template = '<wb-widget>' + template + '</wb-widget>';
			}
			element = angular.element(template);

			// 3- bind controller
			var link = $compile(element);
			if (angular.isDefined(widget.controller)) {
				var locals = {
						$scope : childScope,
						$element : element,
						// TODO: maso, 2017: bind wbModel, wbParent,
						// and wbEditable
				};
				var controller = $controller(widget.controller, locals);
				if (widget.controllerAs) {
					childScope[widget.controllerAs] = controller;
				}
				element.data('$ngControllerController', controller);
			}
			link(childScope);
			return element;
		});
	}
	
	/**
	 * Creates new serialized data of widget
	 * @param widget
	 * @returns
	 */
	function widgetData(widget){
		return angular.copy(widget.model);
	}

	// widgets
	this.newWidget = newWidget;
	this.widget = widget;
	this.widgets = widgets;
	this.widgetData = widgetData;
	
	// widget groups
	this.group = _group;
	this.groups = _groups;
	this.newGroup = _newGroup;
	
	// utils
	this.select = select;
	this.getTemplateFor = getTemplateFor;
	this.compile = compile;
});

angular.module('am-wb-core').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/dialogs/wb-select-resource-single-page.html',
    "<md-dialog aria-label=\"Select item/items\" style=\"width:50%; height:70%\"> <form ng-cloak layout=column flex> <md-dialog-content mb-preloading=loadingAnswer flex layout=row> <div layout=column flex> <div id=wb-select-resource-children style=\"margin: 0px; padding: 0px; overflow: auto\" layout=column flex> </div> </div> </md-dialog-content> <md-dialog-actions layout=row> <md-button ng-if=openHelp ng-click=openHelp($event) aria-label=\"Show help\"> <span translate>Learn more</span> </md-button> <span flex></span> <md-button ng-click=cancel()> <span translate>Close</span> </md-button> <md-button class=md-primary ng-click=answer()> <span translate>OK</span> </md-button> </md-dialog-actions> </form> </md-dialog>"
  );


  $templateCache.put('views/dialogs/wb-select-resource.html',
    "<md-dialog aria-label=\"Select item/items\" style=\"width:70%; height:70%\"> <form ng-cloak layout=column flex> <md-dialog-content mb-preloading=loadingAnswer flex layout=row> <md-sidenav class=md-sidenav-left md-component-id=left md-is-locked-open=true md-whiteframe=4 layout=column ng-hide=\"pages.length === 1\"> <div style=\"text-align: center\"> <wb-icon size=64px ng-if=style.icon>{{style.icon}}</wb-icon> <h2 style=\"text-align: center\" translate>{{style.title}}</h2> <p style=\"text-align: center\" translate>{{style.description}}</p> </div> <md-devider></md-devider> <md-content> <md-list style=\"padding:0px; margin: 0px\"> <md-list-item ng-repeat=\"page in pages | orderBy:priority\" ng-click=\"loadPage(page, $event);\" md-colors=\"_selectedIndex===$index ? {background:'accent'} : {}\"> <wb-icon>{{page.icon || 'attachment'}}</wb-icon> <p>{{page.label | translate}}</p> </md-list-item> </md-list> </md-content> </md-sidenav> <div layout=column flex> <div id=wb-select-resource-children style=\"margin: 0px; padding: 0px; overflow: auto\" layout=column flex> </div> </div> </md-dialog-content> <md-dialog-actions layout=row> <md-button ng-if=openHelp ng-click=openHelp($event) aria-label=\"Show help\"> <span translate>Learn more</span> </md-button> <span flex></span> <md-button ng-click=cancel()> <span translate>Close</span> </md-button> <md-button class=md-primary ng-click=answer()> <span translate>OK</span> </md-button> </md-dialog-actions> </form> </md-dialog>"
  );


  $templateCache.put('views/dialogs/wb-selectwidget.html',
    "<md-dialog aria-label=\"Select widget\" ng-controller=WbWidgetSelectCtrl ng-cloak>  <md-toolbar> <div class=md-toolbar-tools> <h2 translate>Widget list</h2> <span flex></span> <md-button class=md-icon-button ng-click=cancel()> <wb-icon aria-label=\"Close dialog\">close</wb-icon> </md-button> </div> </md-toolbar>    <md-dialog-content> <md-content class=\"md-padding md-dialog-content\" layout-xs=column layout=row layout-wrap>    <md-card ng-repeat=\"widget in widgets.items\" flex-xs flex-gt-xs=45 md-theme-watch> <md-card-title> <md-card-title-text> <span class=md-headline>{{widget.label}}</span> <span class=md-subhead>{{widget.description}}</span> </md-card-title-text> <md-card-title-media> <img ng-show=widget.image src=\"{{widget.image}}\"> <wb-icon ng-show=!widget.image&&widget.icon wb-icon-size=64>{{widget.icon}}</wb-icon> </md-card-title-media> </md-card-title> <md-card-actions layout=row layout-align=\"end center\"> <md-button ng-click=answerWidget(widget)> <wb-icon>add</wb-icon> {{ 'Add' | translate }} </md-button>  </md-card-actions> </md-card> </md-content> </md-dialog-content> </md-dialog>"
  );


  $templateCache.put('views/directives/wb-group.html',
    "<div dnd-disable-if=!wbEditable dnd-draggable=wbModel dnd-type=\"'wb.widget'\" dnd-moved=remove() wb-size=wbModel.style wb-margin=wbModel.style wb-background=wbModel.style wb-border=wbModel.style ng-class=\"{'wb-panel wb-widget-edit': wbEditable}\" name={{wbModel.name}} md-theme-watch=true>  <div ng-if=wbEditable class=wb-panel-header layout=row> <span translate> {{wbModel.name}}</span> <span flex></span>  <md-button ng-disabled=\"wbModel.direction!='rtl'\" ng-click=\"wbModel.direction='ltr'\" class=\"md-icon-button md-mini\"> <md-tooltip> <span translate>Left to right direction</span> </md-tooltip> <wb-icon class=wb-icon-mini>format_textdirection_l_to_r</wb-icon> </md-button> <md-button ng-disabled=\"wbModel.direction=='rtl'\" ng-click=\"wbModel.direction='rtl'\" class=\"md-icon-button md-mini\"> <md-tooltip> <span translate>Right to left direction</span> </md-tooltip> <wb-icon class=wb-icon-mini>format_textdirection_r_to_l</wb-icon> </md-button> <md-divider></md-divider> <md-button ng-click=clone() class=\"md-icon-button md-mini\"> <md-tooltip> <span translate>Clone current group</span> </md-tooltip> <wb-icon class=mde-icon-mini>content_copy</wb-icon> </md-button> <md-button ng-click=settings() class=\"md-icon-button md-mini\"> <md-tooltip> <span translate>Load settings</span> </md-tooltip> <wb-icon class=wb-icon-mini>settings</wb-icon> </md-button> <md-button class=\"md-icon-button md-mini\" ng-mouseenter=ctrl.setHoverDelBtn(true) ng-mouseleave=ctrl.setHoverDelBtn(false) ng-click=remove()> <md-tooltip> <span translate>Remove current group</span> </md-tooltip> <wb-icon class=wb-icon-mini>delete</wb-icon>{{_hoveringDelBtn}} </md-button> </div>  <div class=wb-panel-body id=wb-content-body>      <div id=wb-content-placeholder ng-class=\"{'wb-panel-overlay': ctrl.isHoverDelBtn()}\" class=wb-panel-container dir={{wbModel.direction}} wb-layout=wbModel.style wb-padding=wbModel.style dnd-external-sources=true dnd-list=wbModel.contents dnd-allowed-types=getAllowedTypes() dnd-drop=\"dropCallback(event, index, item, external, type)\"> </div> </div> </div>"
  );


  $templateCache.put('views/directives/wb-page.html',
    "<div class=wb-page wb-margin=wbModel.style wb-size=wbModel.style wb-background=wbModel.style wb-border=wbModel.style dnd-disable-if=!wbEditable ng-class=\"{'wb-page-edit': wbEditable}\" md-theme-watch=true>  <div ng-if=wbEditable class=wb-panel-header layout=row> <span translate> Content</span> <span flex></span>  <md-button ng-disabled=\"wbModel.direction!='rtl'\" ng-click=\"wbModel.direction='ltr'\" class=\"md-icon-button md-mini\"> <md-tooltip>Left to right direction</md-tooltip> <wb-icon class=wb-icon-mini>format_textdirection_l_to_r</wb-icon> </md-button> <md-button ng-disabled=\"wbModel.direction=='rtl'\" ng-click=\"wbModel.direction='rtl'\" class=\"md-icon-button md-mini\"> <md-tooltip>Right to left direction</md-tooltip> <wb-icon class=wb-icon-mini>format_textdirection_r_to_l</wb-icon> </md-button> <md-divider></md-divider> <md-button ng-click=settings() class=\"md-icon-button md-mini\"> <wb-icon class=wb-icon-mini>settings</wb-icon> </md-button> <md-button ng-click=loadTemplate() class=\"md-icon-button md-mini\"> <wb-icon class=wb-icon-mini>photo_album</wb-icon> </md-button> </div>  <div class=wb-panel-body id=wb-content-body>      <div id=wb-content-placeholder ng-class=\"{'wb-panel-overlay': hoveringDelBtn}\" class=wb-panel-container dir={{wbModel.direction}} wb-layout=wbModel.style wb-padding=wbModel.style dnd-external-sources=true dnd-list=wbModel.contents dnd-allowed-types=getAllowedTypes() dnd-drop=\"dropCallback(event, index, item, external, type)\"> </div> </div> </div>"
  );


  $templateCache.put('views/directives/wb-setting-panel-group.html',
    "<div layout=column> <md-nav-bar ng-init=\"page='widget'\" md-selected-nav-item=page nav-bar-aria-label=\"navigation links\"> <md-nav-item md-nav-click=\"goto('widget')\" name=widget>Widgets</md-nav-item> <md-nav-item md-nav-click=\"goto('setting')\" name=setting>Settings</md-nav-item> </md-nav-bar> <wb-widgets-explorer ng-show=\"page=='widget'\" ng-model=widgets> </wb-widgets-explorer> <div ng-show=\"page=='setting'\" id=WB-SETTING-PANEL>  </div> </div>"
  );


  $templateCache.put('views/directives/wb-setting-panel.html',
    " <md-expansion-panel> <md-expansion-panel-collapsed>  <div class=md-title>{{label}}</div> <div class=md-summary></div> <md-expansion-panel-icon></md-expansion-panel-icon> </md-expansion-panel-collapsed> <md-expansion-panel-expanded> <md-expansion-panel-header> <div class=md-title>{{label}}</div> <div class=md-summary></div> <md-expansion-panel-icon ng-click=$panel.collapse()></md-expansion-panel-icon> </md-expansion-panel-header> <md-expansion-panel-content style=\"padding: 0px\"> <ng-transclude></ng-transclude> </md-expansion-panel-content> </md-expansion-panel-expanded> </md-expansion-panel>"
  );


  $templateCache.put('views/directives/wb-ui-choose.html',
    "<md-tabs class=wb-tab-as-choose-button md-selected=selectedIndex> <md-tab ng-repeat=\"item in items\"> <md-tab-label> <wb-icon>{{item.icon}}</wb-icon> </md-tab-label> </md-tab> </md-tabs>"
  );


  $templateCache.put('views/directives/wb-ui-setting-audio.html',
    "<md-list-item> <md-button class=md-icon-button aria-label=Edit ng-click=edit(value)> <wb-icon>wb-object-audio</wb-icon> </md-button> <md-input-container> <input ng-model=value> </md-input-container> </md-list-item>"
  );


  $templateCache.put('views/directives/wb-ui-setting-background-.html',
    "<md-input-container> <label>background Size</label> <md-select ng-model=value> <md-option ng-repeat=\"value in items\" value={{value.value}} translate>{{value.name}}</md-option> </md-select> </md-input-container>"
  );


  $templateCache.put('views/directives/wb-ui-setting-background-attachment.html',
    "<md-input-container> <label>background Attachment</label> <md-select ng-model=value> <md-option ng-repeat=\"value in items\" value={{value.value}} translate>{{value.name}}</md-option> </md-select> </md-input-container>"
  );


  $templateCache.put('views/directives/wb-ui-setting-background-origin.html',
    "<md-input-container> <label>background Origin</label> <md-select ng-model=value> <md-option ng-repeat=\"value in items\" value={{value.value}} translate>{{value.name}}</md-option> </md-select> </md-input-container>"
  );


  $templateCache.put('views/directives/wb-ui-setting-background-position.html',
    "<md-autocomplete md-selected-item=ctrl.selectedItem md-search-text=ctrl.searchText md-selected-item-change=ctrl.selectedItemChange(item) md-items=\"item in ctrl.querySearch(ctrl.searchText)\" md-item-text=item.display md-min-length=0 placeholder=\"background position\"> <md-item-template> <span md-highlight-text=ctrl.searchText md-highlight-flags=^i>{{item.display}}</span> </md-item-template> <md-not-found> No states matching \"{{ctrl.searchText}}\" were found.  </md-not-found> </md-autocomplete>"
  );


  $templateCache.put('views/directives/wb-ui-setting-background-repeat.html',
    "<md-input-container> <label>background Repeat</label> <md-select ng-model=value> <md-option ng-repeat=\"value in items\" value={{value.value}} translate>{{value.name}}</md-option> </md-select> </md-input-container>"
  );


  $templateCache.put('views/directives/wb-ui-setting-background-size.html',
    "<md-input-container> <label>background Size</label> <md-select ng-model=value> <md-option ng-repeat=\"value in items\" value={{value.value}} translate>{{value.name}}</md-option> </md-select> </md-input-container>"
  );


  $templateCache.put('views/directives/wb-ui-setting-choose.html',
    "<md-list-item> <wb-icon ng-hide=\"icon==undefined || icon==null || icon==''\" wb-icon-name={{icon}}> </wb-icon> <p ng-hide=\"title==undefined || title==null || title==''\">{{title}}</p> <md-tabs flex=100 class=wb-tab-as-choose-button md-selected=selectedIndex> <md-tab ng-repeat=\"item in xitems\"> <md-tab-label> <md-tooltip ng-show=item.title>{{item.title | translate}}</md-tooltip> <wb-icon>{{item.icon}}</wb-icon> </md-tab-label> </md-tab> </md-tabs> </md-list-item> "
  );


  $templateCache.put('views/directives/wb-ui-setting-color.html',
    "<div layout=row> <wb-icon ng-hide=\"icon==undefined || icon==null || icon=='title'\" layout-padding>{{icon}}</wb-icon> <p ng-hide=\"title==undefined || title==null || title==''\" flex>{{title}}</p> <md-color-picker class=color-picker-hide-textbox md-color-clear-button=false ng-model=value> </md-color-picker> </div>"
  );


  $templateCache.put('views/directives/wb-ui-setting-data.html',
    "<md-list-item> <md-button class=md-icon-button aria-label=Edit ng-click=edit(value)> <wb-icon>{{icon || 'wb-object-data'}}</wb-icon> </md-button> <md-input-container> <input ng-model=value.key> </md-input-container> </md-list-item>"
  );


  $templateCache.put('views/directives/wb-ui-setting-dropdown.html',
    "<md-list-item> <wb-icon ng-hide=\"icon==undefined || icon==null || icon==''\">{{icon}}</wb-icon> <p ng-hide=\"title==undefined || title==null || title==''\">{{title}}</p> <md-select style=\"margin: 0px\" ng-model=value> <md-option ng-repeat=\"item in items\" value={{item.value}}> {{item.title}} </md-option> </md-select> </md-list-item>"
  );


  $templateCache.put('views/directives/wb-ui-setting-image.html',
    "<div layout-align=\"center center\" layout=row class=wb-ui-setting-image> <img ng-click=selectImage() ng-src={{value}} md-colors=\"{borderColor: 'primary-hue1'}\" class=\"wb-ui-setting-image-preview\"> <md-input-container flex> <label ng-if=\"title==undefined || title==null || title==''\"> {{title | translate}} </label> <input ng-model=value> </md-input-container> </div>"
  );


  $templateCache.put('views/directives/wb-ui-setting-length.html',
    "<div> <md-input-container> <label ng-if=title translate=\"\">{{title}}</label> <input ng-model=\"value\"> <div class=hint ng-if=description translate=\"\">{{description}}</div> </md-input-container> </div>"
  );


  $templateCache.put('views/directives/wb-ui-setting-link.html',
    "<md-input-container class=md-icon-float> <input ng-model=url placeholder={{title}}> <wb-icon style=\"display:inline-block; cursor: pointer\">more_horiz</wb-icon> </md-input-container>"
  );


  $templateCache.put('views/directives/wb-ui-setting-number.html',
    "<md-list-item ng-show=\"slider==undefined\"> <wb-icon ng-hide=\"icon==undefined || icon==null || icon==''\">{{icon}}</wb-icon> <p ng-hide=\"title==undefined || title==null  || title==''\">{{title}}</p> <md-input-container style=\"margin: 0px\"> <input style=\"width: 50px\" type=number ng-model=value flex> </md-input-container> </md-list-item> <md-list-item ng-show=\"slider!=undefined\"> <wb-icon ng-hide=\"icon==undefined || icon==null || icon=='' || icon=='wb-blank'\">{{icon}}</wb-icon> <div ng-show=\"icon=='wb-blank'\" style=\"display: inline-block; width: 32px; opacity: 0.0\"></div> <p ng-hide=\"title==undefined || title==null || title==''\">{{title}}</p> <md-slider min=0 max=100 ng-model=value flex></md-slider> </md-list-item>"
  );


  $templateCache.put('views/directives/wb-ui-setting-on-off-switch.html',
    "<md-list-item> <wb-icon ng-hide=\"icon==undefined || icon==null || icon==''\">{{icon}}</wb-icon> <p ng-hide=\"title==undefined || title==null || title==''\">{{title}}</p> <md-switch class=md-secondary ng-model=value></md-switch> </md-list-item>"
  );


  $templateCache.put('views/directives/wb-ui-setting-video.html',
    "<md-list-item> <md-button class=md-icon-button aria-label=Edit ng-click=edit(value)> <wb-icon>wb-object-video</wb-icon> </md-button> <md-input-container> <input ng-model=value> </md-input-container> </md-list-item>"
  );


  $templateCache.put('views/directives/wb-widget.html',
    "<div dnd-disable-if=!wbEditable dnd-selected=selected() dnd-draggable=wbModel dnd-type=\"'wb.widget'\" dnd-moved=movedCallback() wb-size=wbModel.style wb-margin=wbModel.style wb-background=wbModel.style wb-border=wbModel.style class=wb-widget ng-class=\"{'wb-widget-edit': wbEditable}\" layout=column name={{wbModel.name}} md-theme-watch=true>  <div ng-if=isSelected() layout=row class=wb-widget-header> <span translate>{{wbModel.name}}</span> <span flex></span>  <md-button class=\"md-icon-button md-mini\" ng-repeat=\"item in extraActions\" ng-hide=item.hide() ng-disabled=item.disable() ng-click=item.action()> <wb-icon class=mde-icon-mini>{{item.icon}}</wb-icon> </md-button> <md-divider></md-divider> <md-button ng-if=add ng-click=add() class=\"md-icon-button md-mini\"> <wb-icon class=mde-icon-mini>add_circle</wb-icon> </md-button> <md-button ng-click=clone() class=\"md-icon-button md-mini\"> <wb-icon class=mde-icon-mini>content_copy</wb-icon> </md-button> <md-button class=\"md-icon-button md-mini\" ng-click=remove() ng-show=remove ng-mouseenter=ctrl.setHoverDelBtn(true) ng-mouseleave=ctrl.setHoverDelBtn(false)> <wb-icon class=mde-icon-mini>delete</wb-icon> </md-button> </div>  <div class=wb-widget-body>    <wb-transclude ng-class=\"{'wb-widget-overlay': ctrl.isHoverDelBtn()}\" class=wb-widget-container wb-layout=wbModel.style wb-padding=wbModel.style> </wb-transclude> </div> </div>"
  );


  $templateCache.put('views/directives/wb-widgets-explorer.html',
    "<div layout=column>  <md-toolbar ng-show=!(showSearch||showSort||showState)> <div class=md-toolbar-tools> <h3 flex translate>Widgets</h3> <md-button class=md-icon-button aria-label=Search ng-click=\"showSearch = !showSearch\"> <wb-icon>search</wb-icon> </md-button> <md-divider></md-divider> <md-button ng-click=\"wbWidgetExplorer._view_list=!wbWidgetExplorer._view_list\" class=md-icon-button aria-label=\"View mode\"> <wb-icon>{{wbWidgetExplorer._view_list ? 'view_module' : 'view_list'}}</wb-icon> </md-button> <md-button ng-click=\"wbWidgetExplorer._tree_mode=!wbWidgetExplorer._tree_mode\" class=md-icon-button aria-label=\"Tree mode\"> <wb-icon>{{wbWidgetExplorer._tree_mode? 'list' : 'list_tree'}}</wb-icon> </md-button> </div> </md-toolbar>  <md-toolbar class=md-hue-1 ng-show=showSearch> <div class=md-toolbar-tools> <md-button class=md-icon-button ng-click=\"showSearch = !showSearch\" aria-label=Back> <wb-icon>arrow_back</wb-icon> </md-button> <md-input-container md-theme=input flex> <label>&nbsp;</label> <input ng-model=query ng-keyup=\"runQuery(query, $event)\"> </md-input-container> <md-button class=md-icon-button aria-label=Search ng-click=\"showSearch = !showSearch\"> <wb-icon>search</wb-icon> </md-button> </div> </md-toolbar> <md-expansion-panel-group ng-if=wbWidgetExplorer._tree_mode> <md-expansion-panel ng-repeat=\"group in groups\"> <md-expansion-panel-collapsed> <span translate>{{group.title || group.id}}</span> </md-expansion-panel-collapsed> <md-expansion-panel-expanded> <md-expansion-panel-header> <span translate>{{group.title || group.id}}</span> </md-expansion-panel-header> <md-expansion-panel-content style=\"padding: 0px; margin: 0px\"> <wb-widgets-list ng-if=wbWidgetExplorer._view_list widgets=group.widgets> </wb-widgets-list> <wb-widgets-module ng-if=!wbWidgetExplorer._view_list widgets=group.widgets> </wb-widgets-module> </md-expansion-panel-content> </md-expansion-panel-expanded> </md-expansion-panel> </md-expansion-panel-group> <wb-widgets-list ng-if=\"!wbWidgetExplorer._tree_mode &amp;&amp; wbWidgetExplorer._view_list\" widgets=widgets> </wb-widgets-list> <wb-widgets-module ng-if=\"!wbWidgetExplorer._tree_mode &amp;&amp; !wbWidgetExplorer._view_list\" widgets=widgets> </wb-widgets-module> </div>"
  );


  $templateCache.put('views/directives/wb-widgets-list.html',
    "<md-list flex> <md-list-item class=md-2-line ng-repeat=\"widget in widgets\" dnd-draggable=\"widget.model || {}\" dnd-type=widget.type dnd-effect-allowed=copy> <wb-icon wb-icon-name={{widget.icon}}></wb-icon> <div class=md-list-item-text layout=column> <h3 translate>{{widget.title}}</h3> <p translate>{{widget.description}}</p> </div> <wb-icon ng-if=openHelp class=md-secondary ng-click=\"openHelp(widget, $event)\" aria-label=\"Show help\">help</wb-icon> </md-list-item> </md-list>"
  );


  $templateCache.put('views/directives/wb-widgets-module.html',
    "<div layout=column layout-gt-sm=row layout-align=space-around layout-wrap> <div class=\"wb-widgets-module md-whiteframe-1dp\" ng-repeat=\"widget in widgets\" dnd-draggable=\"widget.model || {}\" dnd-type=widget.type dnd-effect-allowed=copy flex=none flex-gt-sm=30 layout=column layout-align=\"start center\" layout-padding> <wb-icon size=32px wb-icon-name={{widget.icon}}></wb-icon> <p flex class=wb-text-truncate translate=\"\">{{widget.title}}</p> <md-tooltip md-delay=1000>{{widget.description | translate}}</md-tooltip> </div> </div>"
  );


  $templateCache.put('views/resources/wb-sheet.html',
    "<hot-table settings=\"{\n" +
    "\t \tcolHeaders: true, \n" +
    "\t \tcontextMenu: ['row_above', 'row_below', 'remove_row', 'hsep1', 'col_left', 'col_right', 'hsep2', 'remove_row', 'remove_col', 'hsep3', 'undo', 'redo', 'make_read_only', 'alignment', 'borders'], \n" +
    "\t \tafterChange: true\n" +
    "\t }\" row-headers=true min-spare-rows=minSpareRows datarows=value.values height=300 width=500 flex> </hot-table>"
  );


  $templateCache.put('views/resources/wb-url.html',
    "<div layout=column layout-padding flex> <p translate>Insert a valid URL, please.</p> <md-input-container class=\"md-icon-float md-block\"> <label translate>URL</label> <input ng-model=value> </md-input-container> </div>"
  );


  $templateCache.put('views/settings/wb-background.html',
    " <div layout=column layout-align=\"start stretch\">  <wb-ui-setting-on-off-switch title=Transparent? icon=blur_on value=wbModel.style.isTransparent> </wb-ui-setting-on-off-switch>  <wb-ui-setting-number ng-show=wbModel.style.isTransparent title=Opacity icon=wb-opacity value=wbModel.style.opacity> </wb-ui-setting-number>  <wb-ui-setting-number ng-show=wbModel.style.isTransparent slider=\"\" icon=wb-blank value=wbModel.style.opacity> </wb-ui-setting-number>  <wb-ui-setting-image title=\"Background image\" value=wbModel.style.backgroundImage> </wb-ui-setting-image> <wb-ui-setting-color title=\"Background Color\" icon=format_color_fill value=wbModel.style.backgroundColor> </wb-ui-setting-color>  <wb-ui-setting-on-off-switch title=\"Advance Background options\" value=_abo> </wb-ui-setting-on-off-switch> <md-input-container ng-show=_abo class=\"md-icon-float md-block\"> <label>Background</label> <input ng-model=wbModel.style.background> </md-input-container> <wb-ui-setting-background-size value=wbModel.style.backgroundSize ng-show=_abo> </wb-ui-setting-background-size> <wb-ui-setting-background-repeat value=wbModel.style.backgroundRepeat ng-show=_abo> </wb-ui-setting-background-repeat> <wb-ui-setting-background-position value=wbModel.style.backgroundPosition ng-show=_abo> </wb-ui-setting-background-position> <wb-ui-setting-background-attachment value=wbModel.style.backgroundAttachment ng-show=_abo> </wb-ui-setting-background-attachment> <wb-ui-setting-background-origin value=wbModel.style.backgroundOrigin ng-show=_abo> </wb-ui-setting-background-origin> </div>"
  );


  $templateCache.put('views/settings/wb-border.html',
    " <md-list class=wb-setting-panel>   <md-subheader class=md-no-sticky>Corner Radius</md-subheader>  <wb-ui-setting-on-off-switch title=\"All Equal?\" icon=full_rounded value=wbModel.style.borderRadius.uniform> </wb-ui-setting-on-off-switch>  <wb-ui-setting-number ng-show=wbModel.style.borderRadius.uniform title=Radius icon=rounded_corner value=wbModel.style.borderRadius.all> </wb-ui-setting-number>  <wb-ui-setting-number ng-show=wbModel.style.borderRadius.uniform slider=\"\" icon=wb-blank value=wbModel.style.borderRadius.all> </wb-ui-setting-number>   <wb-ui-setting-number ng-show=!wbModel.style.borderRadius.uniform title=Top-Left icon=corner_top_left value=wbModel.style.borderRadius.topLeft> </wb-ui-setting-number>  <wb-ui-setting-number ng-show=!wbModel.style.borderRadius.uniform title=Top-Right icon=corner_top_right value=wbModel.style.borderRadius.topRight> </wb-ui-setting-number>  <wb-ui-setting-number ng-show=!wbModel.style.borderRadius.uniform title=Bottom-left icon=corner_bottom_left value=wbModel.style.borderRadius.bottomLeft> </wb-ui-setting-number>  <wb-ui-setting-number ng-show=!wbModel.style.borderRadius.uniform title=Bottom-Right icon=corner_bottom_right value=wbModel.style.borderRadius.bottomRight> </wb-ui-setting-number>  <md-divider></md-divider> <md-subheader>Style/Color/Thickness</md-subheader>  <wb-ui-setting-on-off-switch title=\"All Equal?\" title=\"All Eaual?\" icon=border_all value=wbModel.style.borderStyleColorWidth.uniform> </wb-ui-setting-on-off-switch>  <wb-ui-setting-dropdown ng-show=wbModel.style.borderStyleColorWidth.uniform title=Border icon=line_style items=styles value=wbModel.style.borderStyle.all></wb-ui-setting-dropdown>  <wb-ui-setting-number ng-show=\"wbModel.style.borderStyleColorWidth.uniform && wbModel.style.borderStyle.all!='none'\" title=Thickness icon=line_weight value=wbModel.style.borderWidth.all></wb-ui-setting-number>  <wb-ui-setting-color ng-show=\"wbModel.style.borderStyleColorWidth.uniform && wbModel.style.borderStyle.all!='none'\" title=Color icon=format_color_fill value=wbModel.style.borderColor.all></wb-ui-setting-color>   <wb-ui-setting-dropdown ng-show=!wbModel.style.borderStyleColorWidth.uniform title=Left-Border icon=border_left items=styles value=wbModel.style.borderStyle.left></wb-ui-setting-dropdown> <wb-ui-setting-number ng-show=\"(!wbModel.style.borderStyleColorWidth.uniform) && wbModel.style.borderStyle.left!='none'\" title=Thickness icon=line_weight value=wbModel.style.borderWidth.left></wb-ui-setting-number> <wb-ui-setting-color ng-show=\"(!wbModel.style.borderStyleColorWidth.uniform) && wbModel.style.borderStyle.left!='none'\" title=Color icon=format_color_fill value=wbModel.style.borderColor.left></wb-ui-setting-color>  <md-divider class=wb-sub-divider ng-show=!wbModel.style.borderStyleColorWidth.uniform></md-divider> <wb-ui-setting-dropdown ng-show=!wbModel.style.borderStyleColorWidth.uniform title=Right-Border icon=border_right items=styles value=wbModel.style.borderStyle.right></wb-ui-setting-dropdown> <wb-ui-setting-number ng-show=\"(!wbModel.style.borderStyleColorWidth.uniform) && wbModel.style.borderStyle.right!='none'\" title=Thickness icon=line_weight value=wbModel.style.borderWidth.right></wb-ui-setting-number> <wb-ui-setting-color ng-show=\"(!wbModel.style.borderStyleColorWidth.uniform) && wbModel.style.borderStyle.right!='none'\" title=Color icon=format_color_fill value=wbModel.style.borderColor.right></wb-ui-setting-color>  <md-divider class=wb-sub-divider ng-show=!wbModel.style.borderStyleColorWidth.uniform></md-divider> <wb-ui-setting-dropdown ng-show=!wbModel.style.borderStyleColorWidth.uniform title=Top-Border icon=border_top items=styles value=wbModel.style.borderStyle.top></wb-ui-setting-dropdown> <wb-ui-setting-number ng-show=\"(!wbModel.style.borderStyleColorWidth.uniform) && wbModel.style.borderStyle.top!='none'\" title=Thickness icon=line_weight value=wbModel.style.borderWidth.top></wb-ui-setting-number> <wb-ui-setting-color ng-show=\"(!wbModel.style.borderStyleColorWidth.uniform) && wbModel.style.borderStyle.top!='none'\" title=Color icon=format_color_fill value=wbModel.style.borderColor.top></wb-ui-setting-color>  <md-divider class=wb-sub-divider ng-show=!wbModel.style.borderStyleColorWidth.uniform></md-divider> <wb-ui-setting-dropdown ng-show=!wbModel.style.borderStyleColorWidth.uniform title=Bottom-Border icon=border_bottom items=styles value=wbModel.style.borderStyle.bottom></wb-ui-setting-dropdown> <wb-ui-setting-number ng-show=\"(!wbModel.style.borderStyleColorWidth.uniform) && wbModel.style.borderStyle.bottom!='none'\" title=Thickness icon=line_weight value=wbModel.style.borderWidth.bottom></wb-ui-setting-number> <wb-ui-setting-color ng-show=\"(!wbModel.style.borderStyleColorWidth.uniform) && wbModel.style.borderStyle.bottom!='none'\" title=Color icon=format_color_fill value=wbModel.style.borderColor.bottom></wb-ui-setting-color> </md-list>"
  );


  $templateCache.put('views/settings/wb-description.html',
    " <div layout=column style=width:100%> <md-input-container> <label translate>Lable</label> <input ng-model=wbModel.label> </md-input-container> <md-input-container> <label translate>Description</label> <input ng-model=wbModel.description> </md-input-container> <md-input-container> <label translate>Keywords</label> <input ng-model=wbModel.keywords> </md-input-container> <wb-ui-setting-image title=Cover value=wbModel.cover> </wb-ui-setting-image> </div>"
  );


  $templateCache.put('views/settings/wb-layout-page.html',
    " <md-list class=wb-setting-panel>  <wb-ui-setting-choose title=Direction icon=wb-direction items=flexDirection ng-model=wbModel.style.flexDirection> </wb-ui-setting-choose>  <wb-ui-setting-choose title=\"{{(wbModel.style.flexDirection=='wb-flex-row')?'Vert.':'Horz.'}}\" icon=\"{{(wbModel.style.flexDirection=='wb-flex-row')?'wb-vertical-arrows':'wb-horizontal-arrows'}}\" items=alignItems[wbModel.style.flexDirection] ng-model=wbModel.style.alignItems> </wb-ui-setting-choose>  <wb-ui-setting-choose title=\"{{(wbModel.style.flexDirection!='wb-flex-row')?'Vert.':'Horz.'}}\" icon=\"{{(wbModel.style.flexDirection!='wb-flex-row')?'wb-vertical-arrows':'wb-horizontal-arrows'}}\" items=justifyContent[wbModel.style.flexDirection] ng-model=wbModel.style.justifyContent> </wb-ui-setting-choose> </md-list>"
  );


  $templateCache.put('views/settings/wb-layout-self.html',
    " <md-list class=wb-setting-panel>  <wb-ui-setting-choose title=\"{{(wbModel.style.flexDirection!='wb-flex-row')?'Vert.':'Horz.'}}\" icon=\"{{(wbModel.style.flexDirection!='wb-flex-row')?'swap_vert':'swap_horiz'}}\" items=flexAlignItem ng-model=wbModel.style.flexAlignItem> </wb-ui-setting-choose>   <wb-ui-setting-on-off-switch title=\"Fill Space?\" icon=border_all value=wbModel.style.flexItemGrowEnabled> </wb-ui-setting-on-off-switch>  <wb-ui-setting-number slider=\"\" ng-show=wbModel.style.flexItemGrowEnabled title=Weight icon=face value=wbModel.style.flexItemGrow></wb-ui-setting-number> </md-list>"
  );


  $templateCache.put('views/settings/wb-margin-padding.html',
    " <md-list class=wb-setting-panel>   <md-subheader class=md-no-sticky>Margin</md-subheader>  <wb-ui-setting-on-off-switch title=\"All Equal?\" icon=filter_none value=wbModel.style.margin.isUniform> </wb-ui-setting-on-off-switch>  <md-input-container ng-show=wbModel.style.margin.isUniform class=\"md-icon-float md-block\"> <label>Margin Value</label> <input ng-model=wbModel.style.margin.uniform> </md-input-container>  <wb-ui-setting-length ng-show=wbModel.style.margin.isUniform slider=\"\" icon=wb-blank value=wbModel.style.margin.uniform> </wb-ui-setting-length>  <md-input-container ng-show=!wbModel.style.margin.isUniform class=\"md-icon-float md-block\"> <label>Left Margin</label> <input ng-model=wbModel.style.margin.left> </md-input-container> <md-input-container ng-show=!wbModel.style.margin.isUniform class=\"md-icon-float md-block\"> <label>Right Margin</label> <input ng-model=wbModel.style.margin.right> </md-input-container> <md-input-container ng-show=!wbModel.style.margin.isUniform class=\"md-icon-float md-block\"> <label>Top Margin</label> <input ng-model=wbModel.style.margin.top> </md-input-container> <md-input-container ng-show=!wbModel.style.margin.isUniform class=\"md-icon-float md-block\"> <label>Bottom Margin</label> <input ng-model=wbModel.style.margin.bottom> </md-input-container>   <md-subheader class=md-no-sticky>Padding</md-subheader>  <wb-ui-setting-on-off-switch title=\"All Equal?\" icon=settings_overscan value=wbModel.style.padding.isUniform> </wb-ui-setting-on-off-switch>  <md-input-container ng-show=wbModel.style.padding.isUniform class=\"md-icon-float md-block\"> <label>Padding Value</label> <input ng-model=wbModel.style.padding.uniform> </md-input-container>  <wb-ui-setting-length ng-show=wbModel.style.padding.isUniform slider=\"\" icon=wb-blank value=wbModel.style.padding.uniform> </wb-ui-setting-length>  <md-input-container ng-show=!wbModel.style.padding.isUniform class=\"md-icon-float md-block\"> <label>Left Padding</label> <input ng-model=wbModel.style.padding.left> </md-input-container> <md-input-container ng-show=!wbModel.style.padding.isUniform class=\"md-icon-float md-block\"> <label>Right Padding</label> <input ng-model=wbModel.style.padding.right> </md-input-container> <md-input-container ng-show=!wbModel.style.padding.isUniform class=\"md-icon-float md-block\"> <label>Top Padding</label> <input ng-model=wbModel.style.padding.top> </md-input-container> <md-input-container ng-show=!wbModel.style.padding.isUniform class=\"md-icon-float md-block\"> <label>Bottom Padding</label> <input ng-model=wbModel.style.padding.bottom> </md-input-container> </md-list>"
  );


  $templateCache.put('views/settings/wb-notfound.html',
    " <wb-icon>bug</wb-icon> <h2>Settings page not found</h2>"
  );


  $templateCache.put('views/settings/wb-size.html',
    " <md-list class=wb-setting-panel> <wb-ui-setting-length title=Width value=wbModel.style.width> </wb-ui-setting-length> <wb-ui-setting-length title=Height value=wbModel.style.height> </wb-ui-setting-length>  <md-subheader class=md-no-sticky> <span translate=\"\">Min</span> </md-subheader> <wb-ui-setting-length title=\"Min width\" value=wbModel.style.minWidth> </wb-ui-setting-length> <wb-ui-setting-length title=\"Min height\" value=wbModel.style.minHeight> </wb-ui-setting-length>  <md-subheader class=md-no-sticky> <span translate=\"\">Max</span> </md-subheader> <wb-ui-setting-length title=\"Max width\" value=wbModel.style.maxWidth> </wb-ui-setting-length> <wb-ui-setting-length title=\"Max height\" value=wbModel.style.maxHeight> </wb-ui-setting-length> </md-list>"
  );


  $templateCache.put('views/settings/wb-text.html',
    " <textarea ui-tinymce=\"{\n" +
    "\t\t plugins : 'directionality contextmenu table link paste hr emoticons advlist autolink link lists advlist charmap print preview code anchor image imagetools visualchars',\n" +
    "\t\t toolbar: [\n" +
    "\t\t \t'undo redo visualchars | styleselect | link image emoticons | hr ',\n" +
    "\t\t \t'alignleft aligncenter alignright | ltr rtl | bold italic | numlist bullist ',\n" +
    "\t\t ],\n" +
    "\t\t contextmenu: 'link image inserttable | cell row column deletetable',\n" +
    "\t\t elementpath: true,\n" +
    "\t\t branding: false,\n" +
    "\t\t image_advtab: false\n" +
    "\t}\" ng-model=wbModel.text flex>\n" +
    "</textarea>"
  );


  $templateCache.put('views/sheets/wb-themplates.html',
    "<md-bottom-sheet class=\"md-list md-has-header\" md-colors=\"{backgroundColor: 'background-900'}\"> <div style=\"padding: 16px\">  <div layout=row layout-align=\"start center\" style=\"padding: 0px 8px; margin: 0px\"> <span translate>Start a new page</span> <span flex></span> <span translate>Template gallery</span> <md-divider></md-divider> <md-button aria-label=\"Hide template sheet\" class=md-icon-button ng-click=hideTemplates($event)> <wb-icon>keyboard_arrow_down </wb-icon></md-button> <md-menu> <md-button aria-label=\"Open them interactions menu\" class=md-icon-button ng-click=$mdMenu.open($event)> <wb-icon>more_vert </wb-icon></md-button> <md-menu-content width=4 md-colors=\"{backgroundColor: 'background'}\"> <md-menu-item> <md-button ng-click=hideTemplates($event)> <span translate>Hide templates</span> </md-button> </md-menu-item> </md-menu-content> </md-menu> </div>  <md-content layout=row md-colors=\"{backgroundColor: 'background-900'}\"> <div layout=column ng-repeat=\"template in templates\" ng-click=loadTemplate(template) layout-padding style=\"cursor: pointer\"> <img width=215px height=152px ng-src={{template.thumbnail}} style=\"border-bottom-width: 1px; border: solid\"> {{template.name}} </div> </md-content> </div> </md-bottom-sheet>"
  );


  $templateCache.put('views/widgets/wb-html.html',
    " <div ng-hide=isSelected() ng-bind-html=\"wbModel.text | wbunsafe\"> </div> <div ui-tinymce=\"{\n" +
    "\t\tselector : 'div.tinymce',\n" +
    "\t\ttheme : 'inlite',\n" +
    "\t\tplugins : 'directionality contextmenu table link paste image imagetools hr textpattern autolink textcolor colorpicker',\n" +
    "\t\tinsert_toolbar : 'quickimage quicktable',\n" +
    "\t\tselection_toolbar : 'bold italic | quicklink h1 h2 h3 blockquote | ltr rtl | forecolor',\n" +
    "\t\tinsert_button_items: 'image link | inserttable | hr',\n" +
    "\t\tinline : true,\n" +
    "\t\tpaste_data_images : true,\n" +
    "\t\tbranding: false,\n" +
    "\t\timagetools_toolbar: 'rotateleft rotateright | flipv fliph | editimage imageoptions'\n" +
    "\t}\" ng-model=wbModel.text ng-show=isSelected() ng-if=wbEditable flex> </div>"
  );


  $templateCache.put('views/widgets/wb-notfound.html',
    "<div ng-show=wbEditable> Unsuported widget?! </div>"
  );

}]);
