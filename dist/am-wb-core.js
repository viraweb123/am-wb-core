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

angular.module('am-wb-core', [
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
	'ngHandsontable'
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
		'wb-widget-html': ngMdIconServiceProvider.getShape('settings_ethernet')
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
 * @ngdoc Directives
 * @name wb-align
 * @description Apply layout align into an element
 * 
 */
.directive('wbAlign', function() {
	var classPrefix = 'wb-flex-item-';

	function removeLayout(element, config) {
		element.removeClass(classPrefix + config.align);
	}

	/**
	 * Adds layout config into the element
	 * 
	 * @param element
	 * @param config
	 * @returns
	 */
	function addLayout(element, config) {
		element.addClass(classPrefix + config.align);
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
	function postLink($scope, $element, $attrs) {
		// Watch for layout
		$scope.$watch($attrs.wbLayout+'.align', function(newValue, oldValue) {
			if(newValue===oldValue){
				return;
			}
			if (oldValue) {
				removeLayout($element, oldValue);
			}
			if (newValue) {
				addLayout($element, newValue);
			}
		}, true);
	}

	/*
	 * Directive
	 */
	return {
		restrict : 'A',
		link : postLink,
		require:[]
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
 * @ngdoc Directives
 * @name wb-background
 * @description Apply background into the element
 */
.directive('wbBackground', function() {
	/*
	 * Sets background attributes into element
	 * 
	 */
	function setBackgroud($element, style){
		if (!style) {
			return;
		}
		var cssValue = {};
		if(style.background){
			cssValue.background = style.background;
		}
		if(style.image){
			cssValue['background-image'] = 'url(\''+style.image+'\')';
		}

		if(style.color){
			cssValue['background-color'] = style.color;
		}
		if(style.size) {
			cssValue['background-size'] = style.size;
		}
		if(style.repeat) {
			cssValue['background-repeat'] = style.repeat;
		}
		if(style.position){
			cssValue['background-position'] = style.position;
		}
		if(style.attachment){
			cssValue['background-attachment'] = style.attachment;
		}
		if(style.origin){
			cssValue['background-origin'] = style.origin;
		}
		if(style.clip){
			cssValue['background-clip'] = style.clip;
		}
		
//		// FIXME: maso, 1395: thies are not background parameter
//		if(style.color){
//			cssValue['color'] = style.color;
//		}
//		if(style.opacity){
//			cssValue['opacity'] = (style.isTransparent) ? style.opacity/100 : 1;
//		}
		$element.css(cssValue);
	}

	function postLink($scope, $element, $attrs) {
		return $scope.$watch($attrs.wbBackground + '.background', function(config){
			return setBackgroud($element, config);
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
 * @ngdoc Directives
 * @name wb-border
 * @description Apply border into the element
 * 
 * Following attributes from CSS is set:
 * <ul>
 * <li>border-style from style</li>
 * <li>border-width from width</li>
 * <li>border-color from color</li>
 * <li>border-radius from radius</li>
 * </ul>
 * 
 * CSS model from CSS3 is accepted as standard
 * 
 * <pre><code>
 * 	{
 * 		style: solid,
 * 		width: 2px,
 * 		color: lightgrey,
 * 		radius: 5px
 * 	}
 * </code></pre>
 * 
 * @see https://www.w3schools.com/css/css_border.asp
 */
.directive('wbBorder', function() {
	return {
		restrict : 'A',
		link : function($scope, $element, $attrs) {
			$scope.$watch($attrs.wbBorder + '.border', function(style) {
				if (!style) {
					return;
				}
				var conf = {};
				if (style.style) {
					conf['border-style'] = style.style;
				}
				if (style.width) {
					conf['border-width'] = style.width;
				}
				if (style.color) {
					conf['border-color'] = style.color;
				}
				if (style.radius) {
					conf['border-radius'] = style.radius;
				}
				$element.css(conf);
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
 * @ngdoc Directives
 * @name wb-events
 * @description Applies events to the current element
 * 
 * If there is an event section in the data model, then this directive parses
 * and applies to the current element.
 * 
 * 	<div
 * 		wb-events="events">
 * 	</div>
 */
.directive('wbEvents', function() {
	function postLink($scope, $element, $attrs, $ctrls) {
		// load ctrl
		var ctrl = $ctrls[0] || $ctrls[1];

		$element.on('click', function (event) {
			// Check edit mode
			if(ctrl && ctrl.isEditable()){
				ctrl.setSelected(true);
				event.stopPropagation();
				$scope.$apply();
				return;
			}
			// TODO: maso, 2018: do actions
		});
	}
	return {
		restrict : 'A',
		link : postLink,
		require:['?wbWidget', '?wbGroup']
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
 * @ngdoc Directives
 * @name wb-layout
 * @description Apply layout into an element
 * 
 * Group and page are the main goles of this directive. By adding the wbLayout,
 * widget are able to manages it layout automatically.
 * 
 * Note that, in smal screen devices, the colume layout apply as default.
 */
.directive('wbLayout', function() {
	var classDirectionPrefix = 'wb-flex-';
	var classJustifyPrefix = 'wb-flex-justify-content-';
	var classAlignPrefix = 'wb-flex-align-items-';
	/*
	 * FIXME: maso, 2017: replace class with term
	 * 
	 * It is hard to port final design, while it is fulle tied into the
	 * CSS classes. We must replace layout CSS classes with general terms
	 * as soon as posible.
	 */
	/**
	 * Remove layout configuration from element
	 * 
	 * @param element
	 * @param config
	 * @returns
	 */
	function removeLayout(element, config) {
		element.removeClass(classDirectionPrefix + config.direction);
		element.removeClass(classJustifyPrefix + config.justify);
		element.removeClass(classAlignPrefix + config.align);
	}

	/**
	 * Adds layout config into the element
	 * 
	 * @param element
	 * @param config
	 * @returns
	 */
	function addLayout(element, config) {
		element.addClass(classDirectionPrefix + config.direction);
		element.addClass(classJustifyPrefix + config.justify);
		element.addClass(classAlignPrefix + config.align);
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
	function postLink($scope, $element, $attrs) {
		// Watch for layout
		$scope.$watch($attrs.wbLayout+'.layout', function(newValue, oldValue) {
			if (oldValue) {
				removeLayout($element, oldValue);
			}
			if (newValue) {
				addLayout($element, newValue);
			}
		}, true);
	}

	/*
	 * Directive
	 */
	return {
		restrict : 'A',
		link : postLink,
		require:[]
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
 * @ngdoc Directives
 * @name wb-margin
 * @description Apply margin into the element
 */
.directive('wbMargin', function() {
	return {
		restrict : 'A',
		link : function(scope, element, attributes) {
			return scope.$watch(attributes.wbMargin, function(style) {
				if (!style) {
					return;
				}
				if (style.margin) {
					element.css('margin', style.margin);
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
 * @ngdoc Directives
 * @name wb-padding
 * @description Apply padding into the element
 */
.directive('wbPadding', function() {
	return {
		restrict : 'A',
		link : function(scope, element, attributes) {
			return scope.$watch(attributes.wbPadding, function(style) {
				if (!style) {
					return;
				}
				if (style.padding) {
					element.css('padding', style.padding);
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
 * @ngdoc Directives
 * @name wb-size
 * @description Apply margin into the element
 */
.directive('wbSize', function($q, $wbUtil, $rootElement, $document, $compile) {

	function postLink($scope, $element, $attrs, $ctrls){
		var button;
		var optionButton;
		var dimension = {};
		var position = {};
		var lock = false;
		var watchSelection = null;
		var watchSize = null;

		// main ctrl
		var ctrl = $ctrls[0];
		
		
		function isRoot(){
			return ctrl.isRoot();
		}

		function distroy(){
			watchSize();
			watchSelection();

			if(button){
				button.remove();
			}
			if(optionButton){
				optionButton.remove();
			}
		}

		function getBound(){
			var off = $element.offset();
			return {
				left: off.left,
				top: off.top,
				width: $element.innerWidth(),
				height: $element.innerHeight()
			};
		}

		function bindToElement(bound){
			button.css('left', bound.left + bound.width - 15 + 'px');
			button.css('top', bound.top + bound.height - 16 + 'px');

			optionButton.css('left', bound.left + 'px');
			optionButton.css('top', bound.top + 'px');
		}

		function mousemove($event) {
			var deltaWidth = dimension.width - (position.x - $event.clientX);
			var deltaHeight = dimension.height - (position.y - $event.clientY);
			var newDimensions = {
					width:  deltaWidth + 'px',
					height: deltaHeight + 'px'
			};

			$element.css(newDimensions);
			if($scope.wbModel){
				$scope.wbModel.style.size.width = newDimensions.width;
				$scope.wbModel.style.size.height = newDimensions.height;
			}
			bindToElement(getBound());
			$scope.$apply();
			return false;
		}

		function mouseup() {
			$document.unbind('mousemove', mousemove);
			$document.unbind('mouseup', mouseup);
			lock = false;
		}

		function mousedown($event) {
			$event.stopImmediatePropagation();
			position.x = $event.clientX;
			position.y = $event.clientY;
			lock = true;
			dimension.width = $element.prop('offsetWidth');
			dimension.height = $element.prop('offsetHeight');
			$document.bind('mousemove', mousemove);
			$document.bind('mouseup', mouseup);
			return false;
		}

		function checkButton(){
			if(button) {
				return $q.resolve();
			}
			button = angular.element('<span></span>');
			$rootElement.append(button);
			button.css({
				width: '15px',
				height: '15px',
				position: 'absolute',
				visibility: 'hidden',
				cursor: 'nwse-resize'
			});
			button.html('<svg version="1.1" viewBox="0 0 15 15" height="15" width="15"><circle cx="12.5" cy="2.5" r="2" fill="#777777"></circle><circle cx="7.5" cy="7.5" r="2" fill="#777777"></circle><circle cx="12.5" cy="7.5" r="2" fill="#424242"></circle><circle cx="2.5" cy="12.5" r="2" fill="#777777"></circle><circle cx="7.5" cy="12.5" r="2" fill="#424242"></circle><circle cx="12.5" cy="12.5" r="2" fill="#212121"></circle></svg>');
			button.on('mousedown', mousedown);

			var oj = $wbUtil.getTemplateFor({
				templateUrl: 'views/partials/wb-widget-options.html'
			}).then(function(template){
				optionButton = angular.element(template);
				$rootElement.append(optionButton);
				optionButton.css({
					position: 'absolute',
					visibility: 'hidden'
				});
				$compile(optionButton)($scope);
				bindToElement(getBound());
			});

			return $q.all([oj]).then(function(){
				$scope.$watch(getBound, function (bound) {
					if(!bound) {
						return;
					}
					bindToElement(getBound());
				}, true);

			});
		}


		// Watch size
		watchSize = $scope.$watch($attrs.wbSize+'.size', function(size) {
			if(isRoot() || !size || lock){
				return;
			}
			$element.css(size);
			if(optionButton){
				bindToElement(getBound());
			}
		}, true);

		ctrl.on('delete', distroy);
		watchSelection = $scope.$watch(function(){
			return ctrl.isSelected();
		}, function(value){
			if(value){
				checkButton()
				.then(function(){
					if(!isRoot()){
						button.css('visibility', 'visible');
					}
					optionButton.css('visibility', 'visible');
				});
			} else {
				if(optionButton) {
					button.css('visibility', 'hidden');
					optionButton.css('visibility', 'hidden');
				}
			}
		});
	}

	return {
		restrict : 'A',
		link : postLink,
		priority: 1,
		require:['^wbGroup']
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
 * @ngdoc Directives
 * @name wb-widget-size
 * @description Apply margin into the element
 */
.directive('wbWidgetSize', function($q, $wbUtil, $rootElement, $document, $compile) {

	function postLink($scope, $element, $attrs, $ctrls){
		var button;
		var optionButton;
		var dimension = {};
		var position = {};
		var lock = false;
		var watchSize = null;
		var watchSelection = null;

		// main ctrl
		var ctrl = $ctrls[0];

		function distroy(){
			watchSize();
			watchSelection();

			if(button){
				button.remove();
			}
			if(optionButton){
				optionButton.remove();
			}
		}
		
		function getBound(){
			var off = $element.offset();
			return {
				left: off.left,
				top: off.top,
				width: $element.innerWidth(),
				height: $element.innerHeight()
			};
		}

		function bindToElement(bound){
			button.css('left', bound.left + bound.width - 15 + 'px');
			button.css('top', bound.top + bound.height - 16 + 'px');

			optionButton.css('left', bound.left + 'px');
			optionButton.css('top', bound.top + 'px');
		}

		function mousemove($event) {
			var deltaWidth = dimension.width - (position.x - $event.clientX);
			var deltaHeight = dimension.height - (position.y - $event.clientY);
			var newDimensions = {
					width:  deltaWidth + 'px',
					height: deltaHeight + 'px'
			};

			$element.css(newDimensions);
			if($scope.wbModel){
				$scope.wbModel.style.size.width = newDimensions.width;
				$scope.wbModel.style.size.height = newDimensions.height;
			}
			bindToElement(getBound());
			$scope.$apply();
			return false;
		}

		function mouseup() {
			$document.unbind('mousemove', mousemove);
			$document.unbind('mouseup', mouseup);
			lock = false;
		}

		function mousedown($event) {
			$event.stopImmediatePropagation();
			position.x = $event.clientX;
			position.y = $event.clientY;
			lock = true;
			dimension.width = $element.prop('offsetWidth');
			dimension.height = $element.prop('offsetHeight');
			$document.bind('mousemove', mousemove);
			$document.bind('mouseup', mouseup);
			return false;
		}

		function checkButton(){
			if(button) {
				return $q.resolve();
			}
			button = angular.element('<span></span>');
			$rootElement.append(button);
			button.css({
				width: '15px',
				height: '15px',
				position: 'absolute',
				visibility: 'hidden',
				cursor: 'nwse-resize'
			});
			button.html('<svg version="1.1" viewBox="0 0 15 15" height="15" width="15"><circle cx="12.5" cy="2.5" r="2" fill="#777777"></circle><circle cx="7.5" cy="7.5" r="2" fill="#777777"></circle><circle cx="12.5" cy="7.5" r="2" fill="#424242"></circle><circle cx="2.5" cy="12.5" r="2" fill="#777777"></circle><circle cx="7.5" cy="12.5" r="2" fill="#424242"></circle><circle cx="12.5" cy="12.5" r="2" fill="#212121"></circle></svg>');
			button.on('mousedown', mousedown);

			var oj = $wbUtil.getTemplateFor({
				templateUrl: 'views/partials/wb-widget-options.html'
			}).then(function(template){
				optionButton = angular.element(template);
				$rootElement.append(optionButton);
				optionButton.css({
					position: 'absolute',
					visibility: 'hidden'
				});
				$compile(optionButton)($scope);
				bindToElement(getBound());
			});

			return $q.all([oj]).then(function(){
				$scope.$watch(getBound, function (bound) {
					if(!bound) {
						return;
					}
					bindToElement(getBound());
				}, true);

			});
		}

		
		ctrl.on('delete', distroy);
		// Watch size
		watchSize = $scope.$watch($attrs.wbWidgetSize+'.size', function(size) {
			if(!size || lock){
				return;
			}
			$element.css(size);
			if(optionButton){
				bindToElement(getBound());
			}
		}, true);

		watchSelection = $scope.$watch(function(){
			return ctrl.isSelected();
		}, function(value){
			if(value){
				checkButton()
				.then(function(){
					button.css('visibility', 'visible');
					optionButton.css('visibility', 'visible');
				});
			} else {
				if(optionButton) {
					button.css('visibility', 'hidden');
					optionButton.css('visibility', 'hidden');
				}
			}
		});
	}

	return {
		restrict : 'A',
		link : postLink,
		require:['^wbWidget']
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
 * @ngdoc Directives
 * @name wb-group
 * @description Render a list of widget
 * 
 */
.directive('wbGroup', function($compile, $widget, $wbUtil, $controller, $settings, $q, $mdTheming, $parse) {

	/*
	 * Link widget view
	 */
	function wbGroupLink($scope, $element, $attrs, $ctrls) {

		// Loads wbGroup
		var ctrl = $ctrls[0];

		// Loads wbGroup
		var wbGroupCtrl = $ctrls[1];
		$scope.parentCtrl = wbGroupCtrl;

		// Load ngModel
		var ngModelCtrl = $ctrls[2];
		ngModelCtrl.$render = function() {
			reloadView(ngModelCtrl.$viewValue);
		};

		/*
		 * Loads view
		 */
		function reloadView(model) {
			$element.empty();
			$scope.wbModel = model;
			if(!model || !angular.isArray(model.contents)){
				return;
			}
			var compilesJob = [];
			var elements = [];
			var locals = ctrl.getLocals();
			model.contents.forEach(function(item, index) {
				compilesJob.push($widget.compile(item, $scope, $element, locals)//
						.then(function(element) {
							$mdTheming(element);
							elements[index] = element;
						}));
			});
			return $q.all(compilesJob)//
			.then(function() {
				elements.forEach(function(element) {
					$element.append(element);
				});
			});
		}

		/*
		 * Load edit mode
		 */
		function loadEditMode(){
			$scope.editable = true;
			if(ctrl.isRoot()) {
				delete $scope.lastSelectedItem;
			}
		}

		/*
		 * Removes edit mode
		 */
		function removeEditMode(){
			$scope.editable = false;
			ctrl.childSelected(null);
		}


		/*
		 * Watch for editable
		 */
		if(!wbGroupCtrl){
			$scope.$watch('wbEditable', function(value, old){
				if(value === old){
					return;
				}
				if(value){
					loadEditMode();
				} else {
					removeEditMode();
				}
			});
			$scope.root = true;
		}

		$scope.dropCallback = function(index, item/*, external, type*/){
			return ctrl.addChild(index, item);
		};
	}

	/**
	 * @ngdoc Controllers
	 * @name wbGroupCtrl
	 * @description Adding basic functionality into a widget.
	 * 
	 * Manages model data of a widget.
	 * 
	 * @ngInject
	 */
	function wbGroupCtrl($scope, $element) {
		var ctrl = this;
		var callbacks = {};
		var onModelSelectionFu = null;
		if($scope.wbOnModelSelect) {
			onModelSelectionFu = $parse($scope.wbOnModelSelect);
		}

		function fire(type){
			if(angular.isDefined(callbacks[type])){
				for(var i = 0; i < callbacks[type].length; i++){
					try{
						callbacks[type][i]();
					} catch (e){
						/*console.log(error);*/
					}
				}
			}
		}

		/**
		 * Delete data model and widget display
		 * 
		 * @name delete
		 * @memberof wbGroupCtrl
		 */
		ctrl.delete = function(){
			if(ctrl.isRoot()){
				// TODO: mao, 2018: clear all elements
				return;
			}
			$scope.parentCtrl.removeChild($scope.wbModel, ctrl);
			fire('delete');
		};

		/**
		 * Clone and return a new model from the current one
		 * 
		 * NOTE: this is a deep clone of the current widget.
		 * 
		 * @name cloneModel
		 * @memberof wbGroupCtrl
		 * @return model {Object} which is cloned from the current one
		 */
		ctrl.clone = function(){
			return $wbUtil.clean(angular.copy($scope.wbModel));
		};

		ctrl.getModel = function(){
			return $scope.wbModel;
		};

		ctrl.getParent = function(){
			return $scope.parentCtrl;
		};

		ctrl.isRoot = function(){
			return !$scope.parentCtrl;
		};

		ctrl.isEditable = function(){
			if($scope.parentCtrl){
				return $scope.parentCtrl.isEditable();
			}
			return $scope.editable;
		};

		ctrl.isSelected = function(){
			return ctrl.isChildSelected(ctrl);
		};

		ctrl.setSelected = function(flag) {
			if($scope.parentCtrl){
				return $scope.parentCtrl.childSelected(ctrl);
			}
			if(flag) {
				ctrl.childSelected(ctrl);
			}
		};

		ctrl.isChildSelected = function(ctrl){
			if($scope.parentCtrl){
				return $scope.parentCtrl.isChildSelected(ctrl);
			}
			return ctrl === $scope.lastSelectedItem;
		};

		ctrl.childSelected = function(ctrl) {
			if($scope.parentCtrl){
				return $scope.parentCtrl.childSelected(ctrl);
			}
			if(ctrl === $scope.lastSelectedItem) {
				return;
			}
			$scope.lastSelectedItem = ctrl;
			// maso, 2018: call the parent controller function
			if(onModelSelectionFu) {
				var callback = function() {
					var local = {};
					if(ctrl) {
						local = {
								'$model': ctrl.getModel(),
								'$ctrl': ctrl
						};
					}
					onModelSelectionFu($scope.$parent, local);
				};
				$scope.$eval(callback);
			}
		};


		/**
		 * Removes a widget
		 * 
		 * Data model and visual element related to the input model will be
		 * removed.
		 */
		ctrl.removeChild = function(model, childCtrl) {
			var index = ctrl.indexOfChild(model);
			if (index > -1) {
				if(ctrl.isChildSelected(childCtrl)){
					ctrl.childSelected(null);
					// delete controller
				}
				$element.children(':nth-child('+(index+1)+')').remove();
				$scope.wbModel.contents.splice(index, 1);
				return true;
			}
			return false;
		};

		ctrl.getLocals = function(){
			if($scope.parentCtrl){
				return $scope.parentCtrl.getLocals();
			}
			return $scope.wbLocals;
		};

		/**
		 * Adds dragged widget
		 */
		ctrl.addChild = function(index, item) {
			$wbUtil.clean(item);
			// add widget
			$widget.compile(item, $scope, null, ctrl.getLocals())//
			.then(function(newElement) {
				var nodes  = $element[0].childNodes;
				if (index < nodes.length) {
					newElement.insertBefore(nodes[index]);
				} else {
					$element.append(newElement);
				}
				if(!angular.isArray($scope.wbModel.contents)){
					$scope.wbModel.contents = [];
				}
				$scope.wbModel.contents.splice(index, 0, item);
			});
			return true;
		};

		ctrl.indexOfChild = function(item) {
			return $scope.wbModel.contents.indexOf(item);
		};

		ctrl.getAllowedTypes = function(){
			return $scope.wbAllowedTypesl;
		};

		ctrl.on = function(type, callback){
			if(!angular.isArray(callbacks[type])){
				callbacks[type] = [];
			}
			callbacks[type].push(callback);
		};

		ctrl.getActions = function(){
			return [{
				title: 'Delete',
				icon: 'delete',
				action: ctrl.delete
			},{
				title: 'Clone',
				icon: 'content_copy',
				action: function(){
					if(ctrl.isRoot()){
						return;
					}
					var model = ctrl.clone();
					var index = $scope.parentCtrl.indexOfChild($scope.wbModel);
					$scope.parentCtrl.addChild(index, model);
				}
			}];
		};
	}

	return {
		templateUrl : 'views/directives/wb-group.html',
		restrict : 'E',
		replace : true,
		scope : {
			wbEditable : '=?',
			wbOnModelSelect : '@?',
			wbAllowedTypes: '<?',
			wbLocals: '<?'
		},
		link : wbGroupLink,
		controllerAs: 'ctrl',
		controller: wbGroupCtrl,
		require:['wbGroup', '?^^wbGroup', 'ngModel']
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
 * @ngdoc Directives
 * @name wb-icon
 * @description Icon for WB
 */
.directive('wbIcon', function($interpolate) {
	function postLink(scope, element, attr, ctrl, transclude) {
		// Looking for icon
		var attrName = attr.$normalize(attr.$attr.wbIconName || '');
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
			}, []).join(',');

	var RIGHT_SELECTORS = INPUT_TAGS.reduce(
			function(selectors, isel) {
				return selectors.concat([ isel + ' ~ wb-icon',
					isel + ' ~ .wb-icon' ]);
			}, []).join(',');

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
		compile : compile
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
 * @ngdoc Directives
 * @name wb-infinate-scroll
 * @description wbInfinateScroll
 * 
 * This is deprecated please use mb-infinate-scroll
 */
.directive('wbInfinateScroll', function($q, $timeout) {

	function postLink(scope, elem) {
		var raw = elem[0];

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

		function scrollChange() {
			if (raw.scrollTop + raw.offsetHeight + 5 >= raw.scrollHeight) {
				loadNextPage();
			}
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
 * @ngdoc Directives
 * @name wb-setting-page
 * @description Display a setting of a model
 * 
 */
.directive('wbSettingPage', function($widget, $settings, $wbUtil, $controller, $compile, $mdTheming) {
	function postLink($scope, $element, $attrs, $ctrls) {


		function loadSetting(page){
            $wbUtil.getTemplateFor(page)
            .then(function(templateSrc){
                var element = angular.element(templateSrc);
                var scope = $scope.$new();
                if (angular.isDefined(page.controller)) {
                    var controller = $controller(page.controller, {
                        $scope : scope,
                        $element : element
                    });
                    if (page.controllerAs) {
                        scope[page.controllerAs] = controller;
                    }
                    element.data('$ngControllerController', controller);
                }
                $compile(element)(scope);
                $mdTheming(element);
                $element.empty();
                $element.append(element);
            });
		}

		function loadModel(model) {
			$scope.wbModel = model;
		}
		
		$scope.$watch('type',  function(type) {
			if (!type) {
				return;
			}
			var setting = $settings.page(type);
			loadSetting(setting);
		});

		// Load ngModel
		var ngModelCtrl = $ctrls[0];
		ngModelCtrl.$render = function() {
			if (ngModelCtrl.$viewValue) {
				loadModel(ngModelCtrl.$viewValue);
			}
		};
	}

	// create directive
	return {
		restrict : 'E',
		replace : true,
		template : '<div layout="column"></div>',
		link : postLink,
		scope : {
			type : '@wbType'
		},
		require : [ 'ngModel' ]
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
 * @ngdoc Directives
 * @name wb-setting-panel-group
 * @description Widgets settings
 * 
 * Loads list of settings.
 * 
 */
.directive('wbSettingPanelGroup', function($settings, $widget) {

	/**
	 * Init settings
	 */
	function postLink($scope, $element, $attrs, $ctrls) {

		// Load ngModel
		var ngModelCtrl = $ctrls[0];
		var settingMap = [];
		$scope.settings = [];

		/**
		 * تنظیمات را به عنوان تنظیم‌های جاری سیستم لود می‌کند.
		 * 
		 * @returns
		 */
		function loadSetting(model) {
			// load pages
			var widget = $widget.getWidget(model);
			var settingKeys = $settings.getSettingsFor(widget);

			// hide all settings
			var i;
			for(i = 0; i < $scope.settings.length; i++){
				$scope.settings[i].visible = false;
			}

			// visible new ones
			for(i = 0; i < settingKeys.length; i++){
				var key = settingKeys[i];
				if(!settingMap[key]){
					var setting = $settings.getPage(key);
					settingMap[key] = angular.copy(setting);
					$scope.settings.push(settingMap[key]);
				}
				settingMap[key].visible = true;
			}
			
			// set model in view
			$scope.wbModel = model;
		}


		ngModelCtrl.$render = function() {
			if(ngModelCtrl.$viewValue) {
				loadSetting(ngModelCtrl.$viewValue);
			}
		};
	}
	
	return {
		restrict : 'E',
		replace: true,
		templateUrl: function($element, $attr){
			var link = 'views/directives/wb-setting-panel-';
			if(angular.isDefined($attr.wbTabMode)){
				link += 'tabs.html';
			} else {
				link += 'expansion.html';
			}
			return link;
		},
		scope : {},
		link : postLink,
		require:['ngModel']
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
 * @ngdoc Directives
 * @name wbWidget
 * @description Widgets container
 * 
 * This is widget containers.
 * 
 * All primary actions of a widget are supported (such as remove and setting).
 */
.directive('wbUiChoose', function() {
	return {
		templateUrl : 'views/directives/wb-ui-choose.html',
		restrict : 'E',
		scope : {
			items : '=items',
			selected : '=selected'
		},
		controller : function($scope) {
			$scope.selectedIndex = 0;
			if ($scope.selected !== null) {
				for ( var item in $scope.items) {
					if (item.value === $scope.selected) {
						$scope.selectedIndex = $scope.items.indexOf(item);
					}
				}
			} else {
				$scope.selected = $scope.items[0].value;
			}

			// listen to active tab and update selected attribute.
			$scope.$watch('selectedIndex', function(current) {
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
 * @ngdoc Directives
 * @name wbUiSettingAudio
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
						title: 'Select Audio'
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
 * @ngdoc Directives
 * @name wbUiSettingColor
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
			value: '=value'
		},
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
 * @ngdoc Directives
 * @name wbUiSettingColor
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
			value: '=value'
		},
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
 * @ngdoc Directives
 * @name wbUiSettingColor
 * @description a setting section to set color.
 *
 */
.directive('wbUiSettingBackgroundPosition', function () {
	return {
		templateUrl: 'views/directives/wb-ui-setting-background-position.html',
		restrict: 'E',
		scope: {
			title: '@title',
			value: '=value'
		},
		controllerAs: 'ctrl',
		/*
		 * 
		 * @ngInject
		 */
		controller: function ($scope) {
			$scope.items = [
				{title: 'Left top', value: 'left top'},
				{title: 'Left center', value: 'left center'},
				{title: 'Left bottom', value: 'left bottom'},
				{title: 'Right top', value: 'right top'},
				{title: 'Right center', value: 'right center'},
				{title: 'Center top', value: 'center top'},
				{title: 'Center center', value: 'center center'},
				{title: 'Center bottom', value: 'center bottom'},
				{title: 'Initial', value: 'initial'},
				{title: 'Inherit', value: 'inherit'},
				{title: 'Nothing', value: ''}
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
 * @ngdoc Directives
 * @name wbUiSettingColor
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
			value: '=value'
		},
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
 * @ngdoc Directives
 * @name wbUiSettingColor
 * @description a setting section to set color.
 * 
 */
.directive('wbUiSettingBackgroundSize', function() {
	return {
		templateUrl : 'views/directives/wb-ui-setting-background-size.html',
		restrict : 'E',
		replace : true,
		scope : {
			title : '@title',
			value : '=value'
		},
		/*
		 * @ngInject
		 */
		controller : function($scope) {
			$scope.items = [ {
				name : 'Automatic',
				value : 'auto'
			}, {
				name : 'Length',
				value : 'length'
			}, {
				name : 'Cover',
				value : 'cover'
			}, {
				name : 'Contain',
				value : 'contain'
			}, {
				name : 'Initial',
				value : 'initial'
			}, {
				name : 'Inherit',
				value : 'inherit'
			}, {
				name : 'Nothing',
				value : ''
			}];

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
 * @ngdoc Directives
 * @name wbUiSettingChoose
 * @description a setting section for choosing values.
 *
 */
.directive('wbUiSettingChoose', function ($mdTheming, $mdUtil) {

	function postLink(scope, element, attr, ctrls) {
		var ngModelCtrl = ctrls[0] || $mdUtil.fakeNgModel();
		$mdTheming(element);

		/*
		 * convert to index
		 */
		function toIndex (value){
			for (var index = 0; index < scope.xitems.length; index++) {
				if (scope.xitems[index].value === value){
					return index;
				}
			}
			// TODO: maso, 2017: update default value.
			return 0;
		}

		/*
		 * render the data
		 */
		function render() {
			scope.selectedIndex = toIndex(ngModelCtrl.$modelValue);
			ngModelCtrl.$setViewValue(scope.xitems[scope.selectedIndex].value);
		}

		ngModelCtrl.$render = render;

		scope.$watch('selectedIndex', function () {
			if(angular.isDefined(scope.selectedIndex)){
				ngModelCtrl.$setViewValue(scope.xitems[scope.selectedIndex].value);
			}
		});
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
 * @ngdoc Directives
 * @name wbUiSettingColor
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
 * @ngdoc Directives
 * @name wbUiSettingData
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
			function editData(/*data*/) {
				return $resource.get('data', {
					style : {
						icon: 'insert_chart',
						title : 'Data sheet',
						description: 'Edit data of the current sheet'
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
 * @ngdoc Directives
 * @name wb-ui-setting-dropdown
 * @description a setting section for choosing values.
 *
 */
.directive('wbUiSettingDropdownValue', function () {
	return {
		templateUrl: 'views/directives/wb-ui-setting-dropdown-value.html',
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
 * @ngdoc Directives
 * @name wbUiSettingDropdown
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
 * @ngdoc Directives
 * @name wbUiSettingImage
 * @author maso(mostafa.barmshory@dpq.co.ir)
 * @description Set an image into a value
 * 
 * URL of the image is set as result.
 *
 */
.directive('wbUiSettingImage', function () {
	return {
		templateUrl: 'views/directives/wb-ui-setting-image.html',
		restrict: 'E',
		scope: {
			title: '@title',
			icon: '@icon'
		},
		require:['ngModel'],
		link: function($scope, $element, $attrs, $ctrl){
			var ngModelCtrl = $ctrl[0];
			ngModelCtrl.$render = function(){
				$scope.value = ngModelCtrl.$viewValue;
			};
			$scope.$watch('value', function(value){
				ngModelCtrl.$setViewValue(value);
			});
		},
		/*
		 * @ngInject
		 */
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
 * @ngdoc Directives
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
		replace: true,
		scope : {
			title : '@?',
			value : '=?',
			icon : '@?',
			description : '@?'
		},
		/*
		 * @gnInject
		 */
		controller : function(/*$scope, $resource*/) {
		},
		controllerAs: 'ctrl'
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
 * @ngdoc Directives
 * @name wbUiSettingColor
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
				return $resource.get('url', {
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
 * @ngdoc Directives
 * @name wbUiSettingNumber
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
 * @ngdoc Directives
 * @name wbUiSettingOnOffSwitch
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
 * @ngdoc Directives
 * @name wb-ui-setting-text
 * @description Setting for a text
 *
 */
.directive('wbUiSettingText', function () {
	return {
		templateUrl: 'views/directives/wb-ui-setting-text.html',
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
 * @ngdoc Directives
 * @name wbUiSettingVideo
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
 * @ngdoc Directives
 * @name wbWidget
 * @description Widgets container
 * 
 * This is widget containers.
 * 
 * All primary actions of a widget are supported (such as remove and setting).
 */
.directive('wbWidget', function($wbUtil) {
	function postLink($scope, $element, $attrs, $ctrls, $transclude) {
		// Modify angular transclude function
		// see:
		// http://angular-tips.com/blog/2014/03/transclusion-and-scopes/
		// FIXME: maso, 2017: use regular dom insted of ng-transclude
		$transclude($scope, function(clone/*, $scope*/) {
			$element.append(clone);
		});

		// set wbGroup
		var group = $ctrls[1];
		$scope.group = group;
	}

	/**
	 * @ngdoc Controllers
	 * @name wbWidgetCtrl
	 * @description Controller of a widget
	 * 
	 * 
	 * @ngInject
	 */
	function wbWidgetCtrl($scope/*, $element*/) {
		var callbacks = {};
		var ctrl = this;

		function fire(type){
			if(angular.isDefined(callbacks[type])){
				for(var i = 0; i < callbacks[type].length; i++){
					try{
						callbacks[type][i]();
					} catch (error){
//						console.log(error);
					}
				}
			}
		}

		ctrl.delete = function(){
			fire('delete');
			$scope.group.removeChild($scope.wbModel, ctrl);
			callbacks = {};
		};

		ctrl.clone = function(){
			return $wbUtil.clean(angular.copy($scope.wbModel));
		};

		ctrl.getModel = function(){
			return $scope.wbModel;
		};

		ctrl.getParent = function(){
			return $scope.group;
		};

		ctrl.isEditable = function(){
			return  $scope.group.isEditable();
		};

		ctrl.isSelected = function(){
			return $scope.group.isChildSelected(ctrl);
		};

		ctrl.setSelected = function(flag) {
			if(flag) {
				$scope.group.childSelected(this);
			}
		};

		ctrl.getActions = function(){
			return [{
				title: 'Delete',
				icon: 'delete',
				action: ctrl.delete,
				description: 'Delete widget'
			},{
				title: 'Clone',
				icon: 'content_copy',
				action: function(){
					var model = $wbUtil.clean(angular.copy($scope.wbModel));
					var index = $scope.group.indexOfChild($scope.wbModel);
					$scope.group.addChild(index, model);
				},
				description: 'Duplicate widget'
			}];
		};

		ctrl.on = function(type, callback){
			if(!angular.isArray(callbacks[type])){
				callbacks[type] = [];
			}
			callbacks[type].push(callback);
		};
	}

	return {
		templateUrl : 'views/directives/wb-widget.html',
		restrict : 'E',
		replace : true,
		transclude: true,
		link : postLink,
		controller : wbWidgetCtrl,
		controllerAs: 'ctrl',
		require:['wbWidget', '^^wbGroup', 'ngModel']
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
 * @ngdoc Directives
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

		function _runQuery(/*query, $event*/){
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
		};

		scope.runQuery = _runQuery;
	}

	return {
		templateUrl : 'views/directives/wb-widgets-explorer.html',
		restrict : 'E',
		replace : true,
		scope: {},
		require: ['ngModel'],
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
 * @ngdoc Directives
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
		scope : {
			widgets : '<'
		},
		/*
		 * @ngInject
		 */
		controller : function($scope) {
			if (angular.isFunction($window.openHelp)) {
				$scope.openHelp = function(widget, $event) {
					$window.openHelp(widget, $event);
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
 * @ngdoc Directives
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
		/*
		 * @ngInject
		 */
		controller: function($scope){
			if(angular.isFunction($window.openHelp)){
				$scope.openHelp = function(widget, $event){
					$window.openHelp(widget, $event);
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
 * @ngdoc filter
 * @name wbunsafe
 * @function
 * @description # unsafe Filter
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
		type : 'general',
		label : 'general',
		templateUrl : 'views/settings/wb-general.html'
	});
	$settings.newPage({
		type : 'background',
		label : 'Background',
		icon : 'image',
		description : '',
		templateUrl : 'views/settings/wb-background.html'
	});
	$settings.newPage({
		type : 'text',
		label : 'Text',
		icon: 'text_fields',
		/*
		 * @ngInject
		 */
		controller : function($scope) {
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

		},
		templateUrl : 'views/settings/wb-text.html'
	});
	
	$settings.newPage({
		type : 'description',
		label : 'Description',
		templateUrl : 'views/settings/wb-description.html'
	});

	$settings.newPage({
		type : 'layout',
		label : 'Layout',
		description : 'Manages layout of the current item.',
		icon : 'dashboard',
		templateUrl : 'views/settings/wb-layout.html'
	});
	$settings.newPage({
		type : 'border',
		label : 'Border',
		icon : 'border_all',
		/*
		 * @ngInject
		 */
		controller : function($scope) {
			var scope = $scope;
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
		},
		templateUrl : 'views/settings/wb-border.html'
	});

	/**
	 * @ngdoc WB-Settings
	 * @name pageLayout
	 * @description Manages element layout
	 * 
	 * Layout part is consists of the following attributes:
	 * 
	 * <ul>
	 * <li>direction</li>
	 * <li>align</li>
	 * <li>justify</li>
	 * </ul>
	 * 
	 * @see wb-layout
	 */
	$settings.newPage({
		type : 'pageLayout',
		label : 'Page Layout',
		icon : 'dashboard',
		templateUrl : 'views/settings/wb-layout-page.html',
		controllerAs : 'ctrl',
		/*
		 * Manages setting page @ngInject
		 */
		controller : function($scope) {
			$scope.direction = [ {
				title : 'column',
				icon : 'wb-horizontal-boxes',
				value : 'column'
			}, {
				title : 'row',
				icon : 'wb-vertical-boxes',
				value : 'row'
			} ];

			$scope.justify = {
					'row' : [ {
						title : 'Start',
						icon : 'sort_start_horiz',
						value : 'start'
					}, {
						title : 'End',
						icon : 'sort_end_horiz',
						value : 'end'
					}, {
						title : 'Center',
						icon : 'sort_center_horiz',
						value : 'center'
					}, {
						title : 'Space Around',
						icon : 'sort_space_around_horiz',
						value : 'space-around'
					}, {
						title : 'Space Between',
						icon : 'sort_space_between_horiz',
						value : 'space-between'
					} ],
					'column' : [ {
						title : 'Start',
						icon : 'sort_start_vert',
						value : 'start'
					}, {
						title : 'End',
						icon : 'sort_end_vert',
						value : 'end'
					}, {
						title : 'Center',
						icon : 'sort_center_vert',
						value : 'center'
					}, {
						title : 'Space Around',
						icon : 'sort_space_around_vert',
						value : 'space-around'
					}, {
						title : 'Space Between',
						icon : 'sort_space_between_vert',
						value : 'space-between'
					} ]
			};

			$scope.align = {
					'column' : [ {
						title : 'Stretch',
						icon : 'format_align_justify',
						value : 'stretch'
					}, {
						title : 'Start',
						icon : 'format_align_left',
						value : 'start'
					}, {
						title : 'End',
						icon : 'format_align_right',
						value : 'end'
					}, {
						title : 'Center',
						icon : 'format_align_center',
						value : 'center'
					} ],
					'row' : [ {
						title : 'Stretch',
						icon : 'align_justify_vertical',
						value : 'stretch'
					}, {
						title : 'Start',
						icon : 'align_start_vertical',
						value : 'start'
					}, {
						title : 'End',
						icon : 'align_end_vertical',
						value : 'end'
					}, {
						title : 'Center',
						icon : 'align_center_vertical',
						value : 'center'
					} ]
			};
		}
	});
//	$settings.newPage({
//		type : 'selfLayout',
//		label : 'Self Layout',
//		controllerAs : 'ctrl',
//		/*
//		 * @ngInject
//		 */
//		controller : function($scope) {
//			$scope.selfAlign = [ {
//				title : 'auto',
//				icon : 'looks_one',
//				value : 'auto'
//			}, {
//				title : 'Start',
//				icon : 'looks_two',
//				value : 'start'
//			}, {
//				title : 'End',
//				icon : 'looks_3',
//				value : 'end'
//			}, {
//				title : 'Center',
//				icon : 'looks_4',
//				value : 'center'
//			}, {
//				title : 'stretch',
//				icon : 'looks_5',
//				value : 'stretch'
//			} ];
//		},
//		templateUrl : 'views/settings/wb-layout-self.html'
//	});
	$settings.newPage({
		type : 'marginPadding',
		label : 'Margin/Padding',
		icon: 'border_clear',
		templateUrl : 'views/settings/wb-margin-padding.html'
	});
	$settings.newPage({
		type : 'size',
		label : 'Size',
		icon: 'photo_size_select_large',
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
'use strict';
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
		template : '<wb-group ng-model="wbModel"></wb-group>',
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
			text : '<h2>Text element</h2><p>Click on the text box to edit.</p>'
		},
		// help id
		help : 'http://dpq.co.ir',
		helpId: 'wb-widget-html',
		// functional properties
		templateUrl : 'views/widgets/wb-html.html',
		setting:['text']
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
 * @ngdoc Services
 * @name $wbFloat
 * @description Open and manage float panels
 * 
 * 
 * The base of this implementation is https://jspanel.de/api.html
 */
.service('$wbFloat', function($q, $wbUtil, $rootScope, $compile, $controller) {

	/**
	 * Hide an existing float and resolve the promise returned from
	 * $wbFloat.show()
	 * 
	 * @name hide
	 * @memberof $wbFloat
	 * @param response
	 *            An argument for the resolved promise.
	 * @return promise A promise that is resolved when the float has been
	 *         closed.
	 */
	/**
	 * Hide an existing float and reject the promise returned from
	 * $wbFloat.show().
	 * 
	 * @name hide
	 * @memberof $wbFloat
	 * @param response
	 *            An argument for the rejected promise.
	 * @return promise A promise that is resolved when the float has been
	 *         closed.
	 */
	/**
	 * Display an element with a float dialog
	 * 
	 * @name show
	 * @memberof $wbFloat
	 * @param optionsOrPreset
	 *            {object}
	 *            <ul>
	 *            <li>title - {=string}: title of the float</li>
	 *            <li></li>
	 *            <li></li>
	 *            
	 *            
	 *            <li>templateUrl - {string=}: The URL of a template that will
	 *            be used as the content of the dialog.</li>
	 *            <li>template- {string=}: HTML template to show in the dialog.
	 *            This must be trusted HTML with respect to Angular's $sce
	 *            service. This template should never be constructed with any
	 *            kind of user input or user data.</li>
	 *            <li>contentElement:</li>
	 *            <li>scope - {object=}: the scope to link the template
	 *            controller to. If none is specified, it will create a new
	 *            isolate scope. This scope will be destroyed when the dialog is
	 *            removed unless preserveScope is set to true.</li>
	 *            <li>controller - {function|string=}: The controller to
	 *            associate with the dialog. The controller will be injected
	 *            with the local $mdDialog, which passes along a scope for the
	 *            dialog.</li>
	 *            <li>controllerAs - {string=}: An alias to assign the
	 *            controller to on the scope.</li>
	 *            <li>parent - {element=}: The element to append the dialog to.
	 *            Defaults to appending to the root element of the application.</li>
	 *            </ul>
	 * @return promise A promise that can be resolved with $mdFloat.hide() or
	 *         rejected with $mdFloat.cancel().
	 */
	this.show = function(optionsOrPreset) {
		var deferred = $q.defer();
		// create scopse
		var parenScope = optionsOrPreset.parent || $rootScope;
		var childScope = optionsOrPreset.scope || parenScope.$new(false, parenScope);

		var panel = jsPanel.create({
			theme: 'primary',
			headerTitle : optionsOrPreset.title || 'my panel #1',
			position : optionsOrPreset.position || 'center-top 0 58',
			panelSize : optionsOrPreset.panelSize || '400 400',
			contentSize : optionsOrPreset.contentSize || '450 250',
			headerControls: optionsOrPreset.headerControls || 'all',
			content : '<div style="border-top: 1px solid;width: 100%;height: 250px;padding: 0px;pointer-events: inherit;"></div>',
			callback : function() {
				var parentElement = angular.element(this.content);

				// 2- create element
				return $wbUtil.getTemplateFor(optionsOrPreset)//
				.then(function(template) {
					var element = angular.element(template);

					// 3- bind controller
					var link = $compile(element);
					if (angular.isDefined(optionsOrPreset.controller)) {
						var wbFloat = {
								hide: function(response) {
									panel.close();
									deferred.resolve(response);
								},
								cancel: function(response) {
									panel.close();
									deferred.reject(response);
								}
						};
						var locals = {
								$scope : childScope,
								$element : element,
								$wbFloat : wbFloat
						};
						var controller = $controller(optionsOrPreset.controller, locals);
						if (optionsOrPreset.controllerAs) {
							childScope[optionsOrPreset.controllerAs] = controller;
						}
						element.data('$ngControllerController', controller);
					}
					link(childScope);
					parentElement.children('div').append(element);
					return element;
				});
			},			
			onclosed: function(){
				/*
				 * Remove scope
				 * 
				 * NOTE: if there is a $watch, then this return an error
				 */
				if(!optionsOrPreset.scope){
					childScope.$destroy();
				}
			}
		});
		return deferred.promise;
	};


	this.create = function(optionsOrPreset) {
		// create scopse
		var parenScope = optionsOrPreset.parent || $rootScope;
		var childScope = optionsOrPreset.scope || parenScope.$new(false, parenScope);
		

		var panel = jsPanel.create({
			theme: 'primary',
			headerTitle : optionsOrPreset.title || 'my panel #1',
			position : optionsOrPreset.position || 'center-top 0 58',
			panelSize : optionsOrPreset.panelSize || '400 400',
			contentSize : optionsOrPreset.contentSize || '450 250',
			headerControls: optionsOrPreset.headerControls || 'all',
			content : '<div style="border-top: 1px solid;width: 100%;height: 250px;padding: 0px;pointer-events: inherit;"></div>',
			callback : function() {
				var parentElement = angular.element(this.content);

				// 2- create element
				return $wbUtil.getTemplateFor(optionsOrPreset)//
				.then(function(template) {
					var element = angular.element(template);

					// 3- bind controller
					var link = $compile(element);
					if (angular.isDefined(optionsOrPreset.controller)) {
						var locals = {
								$scope : childScope,
								$element : element
						};
						var controller = $controller(optionsOrPreset.controller, locals);
						if (optionsOrPreset.controllerAs) {
							childScope[optionsOrPreset.controllerAs] = controller;
						}
						element.data('$ngControllerController', controller);
					}
					link(childScope);
					parentElement.children('div').append(element);
					return element;
				});
			},
			onclosed: function(){
				/*
				 * Remove scope
				 * 
				 * NOTE: if there is a $watch, then this return an error
				 */
				if(!optionsOrPreset.scope){
					childScope.$destroy();
				}
			}
		});

		var rootElement = angular.element(panel);
		panel.setVisible = function(flag){
			this._isVisible = flag;
			rootElement.css('visibility', this._isVisible ? 'visible' : 'hidden');
		};

		panel.isVisible = function(){
			return this._isVisible;
		};

		return panel;
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
 * @ngdoc Services
 * @name $widget
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
			var jobs = [];
			var pages2 = [];

			$scope._selectedIndex = pages.indexOf(page);

			// 1- Find element
			var target = $element.find('#' + CHILDREN_AUNCHOR);

			// 2- Clear childrens
			target.empty();
			currentScope = null;


			// 3- load pages
//			var page = pages[index];
			var template = $wbUtil.getTemplateFor(page);
			if (angular.isDefined(template)) {
				jobs.push($q.when(template).then(function(templateSrc) {
					templateSrc = _encapsulatePanel(page, templateSrc);
					var element = angular.element(templateSrc);
					var scope = $rootScope.$new(false, $scope);
					currentScope = scope;
					scope.page = page;
					scope.value = $scope.value;
					if (angular.isDefined(page.controller)) {
						var controller = $controller(page.controller, {
							$scope : scope,
							$element : element
						});
						if (page.controllerAs) {
							scope[page.controllerAs] = controller;
						}
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
			};
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
	 * Fetches a page.
	 * 
	 * @param model
	 * @returns
	 */
	function page(type) {
		// TODO: maso, 2018: replace with not found resource
		var widget = null;
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
		var tmplUrl = pages.length > 1 ? 'views/dialogs/wb-select-resource.html' : 'views/dialogs/wb-select-resource-single-page.html';
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
 * @ngdoc Services
 * @name $widget
 * @description مدیریت ویجت‌های سیستم
 * 
 * این سرویس تمام ویجت‌های قابل استفاده در سیستم را تعیین می‌کند.
 */
.service('$settings',function() {
	/*
	 * Default settings
	 */
//	var WB_SETTINGS_PAGE_DEFAULT = ['description', 'border',
//	'background', 'pageLayout', 'marginPadding'];

	var WB_SETTINGS_GROUP_DEFAULT = [ 'description', 'border',
		'background', 'pageLayout',
		'marginPadding', 'size' ];
	var WB_SETTINGS_WIDGET_DEFAULT = [ 'border',
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

	/**
	 * Fetchs a setting page.
	 * 
	 * @param model
	 * @returns
	 */
	function page(type) {
		var pageResult = notFound;
		if (type in settingPages) {
			pageResult = settingPages[type];
		}
		return pageResult;
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
	function getSettingsFor(widget) {
		var widgetSettings = [];
		if (widget.type === 'Group') {
			widgetSettings = widgetSettings
			.concat(WB_SETTINGS_GROUP_DEFAULT);
		} else {
			widgetSettings = widgetSettings
			.concat(WB_SETTINGS_WIDGET_DEFAULT);
		}

		if (angular.isArray(widget.setting)) {
			widgetSettings = widgetSettings
			.concat(widget.setting);
		}
		return widgetSettings;
	}


	// تعیین سرویس‌ها
	this.page = page;
	this.getPage = page;
	this.getPages = pages;
	this.newPage = newPage;
	this.getSettingsFor = getSettingsFor;
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

/**
 * @ngdoc Services
 * @name $widget
 * @description Resource managment
 * 
 */
class WbUi {

	constructor($mdDialog, $q, $http)
	{
		this.$mdDialog = $mdDialog;
		this.$q = $q;
		this.$http = $http;
		this.templates = [];
	}


	/**
	 * Opens dialog
	 * @returns
	 */
	openDialog(dialogData){
		return this.$mdDialog.show(dialogData);
	}


	/**
	 * Get list of registered templates
	 * 
	 * @memberof $wbUi
	 */
	templates(){
		return this.$q.when({
			items: this.templates
		});
	}

	getTemplates(){
		return this.templates;
	}

	/**
	 * Adds new template
	 * 
	 * @memberof $wbUi
	 */
	newTemplate(template){
		this.templates.push(template);
		return this;
	}


	/**
	 * Load a template
	 * 
	 * @memberof $wbUi
	 */
	loadTemplate(template){
		// TODO: maso, 2018: check if template is a function
		if(angular.isDefined(template.template)){
			return this.$q.when(JSON.parse(template.template));
		}
		return this.$http.get(template.templateUrl)
		.then(function(res){
			return res.data;
		});
	}
}

/*
 * Add to angularjs
 */
WbUi.$inject=['$mdDialog', '$q', '$http'];
angular.module('am-wb-core')
.service('$wbUi', WbUi);

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

/**
 * Utility class of WB
 */
class WbUtil {

	constructor($q, $sce, $templateRequest) {
		this.$q = $q;
		this.$sce = $sce; 
		this.$templateRequest = $templateRequest;
	}
	
	cleanMap(oldStyle, newStyle, map) {
		for (var i = 0; i < map.length; i++) {
			if (oldStyle[map[i][0]]) {
				newStyle[map[i][1]] = oldStyle[map[i][0]];
				delete oldStyle[map[i][0]];
			}
		}
	}
	
	/**
	 * Loading template of the page
	 * 
	 * @name getTemplateFor
	 * @memberof $wbUtil
	 * @param page
	 *            {object} properties of a page, widget , ..
	 * @return promise to load template on resolve.
	 */
	getTemplateFor(page) {
		return this.$q.when(this.getTemplateOf(page));
	}
	
	getTemplateOf(page) {
		var template;
		var templateUrl;
		if (angular.isDefined(template = page.template)) {
			if (angular.isFunction(template)) {
				template = template(page.params);
			}
		} else if (angular.isDefined(templateUrl = page.templateUrl)) {
			if (angular.isFunction(templateUrl)) {
				templateUrl = templateUrl(page.params);
			}
			if (angular.isDefined(templateUrl)) {
				page.loadedTemplateUrl = this.$sce.valueOf(templateUrl);
				template = this.$templateRequest(templateUrl);
			}
		}
		return template;
	}


	cleanEvetns(model) {
		// event
		if (!model.event) {
			model.event = {};
		}
	}


	cleanLayout(model) {
		if (model.type !== 'Group' && model.type !== 'Page') {
			return;
		}
		if (!model.style.layout) {
			model.style.layout = {};
		}
		// convert
		var newStyle = model.style.layout;
		var oldStyle = model.style;

		if (oldStyle.flexDirection) {
			if (oldStyle.flexDirection === 'wb-flex-row') {
				newStyle.direction = 'row';
			} else {
				newStyle.direction = 'column';
			}
			delete oldStyle.flexDirection;
		}
		if (!newStyle.direction) {
			newStyle.direction = 'column';
		}

		switch (oldStyle.flexAlignItem) {
			case 'wb-flex-align-items-center':
				newStyle.align = 'center';
				break;
			case 'wb-flex-align-items-end':
				newStyle.align = 'end';
				break;
			case 'wb-flex-align-items-start':
				newStyle.align = 'start';
				break;
			case 'wb-flex-align-items-stretch':
				newStyle.align = 'stretch';
				break;
			default:
				newStyle.align = 'stretch';
		}
		delete oldStyle.flexAlignItem;

		switch (oldStyle.justifyContent) {
			case 'wb-flex-justify-content-center':
				newStyle.justify = 'center';
				break;
			case 'wb-flex-justify-content-end':
				newStyle.justify = 'end';
				break;
			case 'wb-flex-justify-content-start':
				newStyle.justify = 'start';
				break;
			case 'wb-flex-justify-content-space-between':
				newStyle.justify = 'space-between';
				break;
			case 'wb-flex-justify-content-space-around':
				newStyle.justify = 'space-around';
				break;
			default:
				newStyle.justify = 'center';
		}
		delete oldStyle.justifyContent;
	}

	cleanSize(model) {
		if (!model.style.size) {
			model.style.size = {};
		}
		var newStyle = model.style.size;
		var oldStyle = model.style;
		var map = [
			['width', 'width'],
			['height', 'height']
			];
		this.cleanMap(oldStyle, newStyle, map);
	}

	cleanBackground(model) {
		if (!model.style.background) {
			model.style.background = {};
		}
		var newStyle = model.style.background;
		var oldStyle = model.style;
		var map = [
			['backgroundImage', 'image'],
			['backgroundColor', 'color'],
			['backgroundSize', 'size'],
			['backgroundRepeat', 'repeat'],
			['backgroundPosition', 'position']
			];
		this.cleanMap(oldStyle, newStyle, map);
	}


	cleanBorder(model) {
		if (!model.style.border) {
			model.style.border = {};
		}
		var oldStyle = model.style;
		var newStyle = model.style.border;
		
		if(oldStyle.borderRadius){
			if(oldStyle.borderRadius.uniform){
				newStyle.radius = oldStyle.borderRadius.all + 'px';
			}
			// TODO: maso, 2018: support other models
		}
		// delete old values
		delete model.style.borderColor;
		delete model.style.borderRadius;
		delete model.style.borderStyleColorWidth;
		delete model.style.borderStyle;
		delete model.style.borderWidth;
	}

	cleanSpace(model) {
		// Margin and padding
		if (model.style.padding && angular.isObject(model.style.padding)) {
			var padding = '';
			if (model.style.padding.isUniform) {
				padding = model.style.padding.uniform;
			} else {
				padding = model.style.padding.top || '0px' + ' ' +
				model.style.padding.right || '0px' + ' ' +
				model.style.padding.bottom || '0px' + ' ' +
				model.style.padding.left || '0px' + ' ';
			}
			model.style.padding = padding;
		}

		if (model.style.margin && angular.isObject(model.style.margin)) {
			var margin = '';
			if (model.style.margin.isUniform) {
				margin = model.style.margin.uniform;
			} else {
				margin = model.style.margin.top || '0px' + ' ' +
				model.style.margin.right || '0px' + ' ' +
				model.style.margin.bottom || '0px' + ' ' +
				model.style.margin.left || '0px' + ' ';
			}
			model.style.margin = margin;
		}

	}

	cleanAlign(model) {
		if (!model.style.align) {
			model.style.align = {};
		}
	}

	cleanStyle(model) {
		if (!model.style) {
			model.style = {};
		}
		this.cleanLayout(model);
		this.cleanSize(model);
		this.cleanBackground(model);
		this.cleanBorder(model);
		this.cleanSpace(model);
		this.cleanAlign(model);
	}

	cleanInternal(model) {
		this.cleanEvetns(model);
		this.cleanStyle(model);
		if (model.type === 'Group' || model.type === 'Page') {
			if (!model.contents) {
				model.contents = [];
			}
			if (model.contents.length) {
				for (var i = 0; i < model.contents.length; i++) {
					this.cleanInternal(model.contents[i]);
				}
			}
		}
		return model;
	}
	
	/**
	 * Clean data model
	 */
	clean(model, force) {
		if(model.version === 'wb1' && !force){
			return model;
		}
		var newModel = this.cleanInternal(model);
		newModel.version = 'wb1';
		return newModel;
	}


}

/*
 * Add to angular
 */
WbUtil.$inject=['$q', '$sce', '$templateRequest'];
angular.module('am-wb-core')
	.service('$wbUtil', WbUtil);

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
 * @ngdoc Services
 * @name $widget
 * @description مدیریت ویجت‌های سیستم
 * 
 * این سرویس تمام ویجت‌های قابل استفاده در سیستم را تعیین می‌کند.
 */
.service('$widget', function(
		$wbUtil,
		$q, $sce, $templateRequest, $compile, $controller) {

	var _group_repo = [];
	var contentElementAsso = [];
	var elementKey = [];

	var notFoundWidget = {
			templateUrl : 'views/widgets/wb-notfound.html',
			label : 'Not found',
			description : 'Element not found'
	};
	var container = {
			type : 'Page',
			label : 'Page',
			description : 'Panel contains list of widgets.',
			image : 'images/wb/content.svg'
	};

	function _group(groupId){
		for(var i = 0; i < _group_repo.length; i++){
			if(_group_repo[i].id === groupId){
				return _group_repo[i];
			}
		}
		var group = {
				id: groupId
		};
		_group_repo.push(group);
		return group;
	}

	function _newGroup(group){
		var g = _group(group.id);
		angular.extend(g, group);
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
	 * @memberof $widget
	 * @param model to find a widget
	 * @returns promise to find a widget
	 */
	function widget(model) {
		return $q.when(_widget(model));
	}

	/**
	 * Returns list of all registerd widgets.
	 * 
	 * @memberof $widget
	 * @returns promise to load all widgets
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
	function getWidgetsKey(){
		return elementKey;
	}

	/**
	 * Registers new widget
	 * 
	 * @See the following page for more information:
	 * 
	 *    https://gitlab.com/weburger/angular-material-weburger/wikis/create-new-widget
	 * 
	 * @memberof $widget
	 * @param widget to add
	 * @return the service
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
		return this;
	}

	/**
	 * Compile element 
	 * 
	 * @name show
	 * @memberof $widget
	 * @param optionsOrPreset
	 *            {object}
	 *            <ul>
	 *            <li>templateUrl - {string=}: The URL of a template that will
	 *            be used as the content of the dialog.</li>
	 *            <li>template- {string=}: HTML template to show in the dialog.
	 *            This must be trusted HTML with respect to Angular's $sce
	 *            service. This template should never be constructed with any
	 *            kind of user input or user data.</li>
	 *            <li>contentElement:</li>
	 *            <li>scope - {object=}: the scope to link the template
	 *            controller to. If none is specified, it will create a new
	 *            isolate scope. This scope will be destroyed when the dialog is
	 *            removed unless preserveScope is set to true.</li>
	 *            <li>controller - {function|string=}: The controller to
	 *            associate with the dialog. The controller will be injected
	 *            with the local $mdDialog, which passes along a scope for the
	 *            dialog.</li>
	 *            <li>controllerAs - {string=}: An alias to assign the
	 *            controller to on the scope.</li>
	 *            <li>parent - {element=}: The element to append the dialog to.
	 *            Defaults to appending to the root element of the application.</li>
	 *            </ul>
	 * @param parenScope
	 * @return promise A promise that resolve created element
	 */
	function compile(model, parenScope, parentElement, locals){
		var widget = _widget(model);
		var childScope = null;
		var element = null;

		// 1- create scope
		childScope = parenScope.$new(false, parenScope);
		childScope.wbModel = model;

		// 2- create element
		return $q.when($wbUtil.getTemplateFor(widget))//
		.then(function(template) {
			if (model.type !== 'Group') {
				template = '<wb-widget ng-model="wbModel">' + template + '</wb-widget>';
			}
			element = angular.element(template);
			if(parentElement) {
				parentElement.append(element);
			}
			// 3- bind controller
			var link = $compile(element);
			if (angular.isDefined(widget.controller)) {
				var wlocals = _.merge({
					// TODO: maso, 2017: bind wbModel, wbParent,
					// and wbEditable
					$scope : childScope,
					$element : element
				}, locals || {});
				var controller = $controller(widget.controller, wlocals);
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
	 * 
	 * @memberof $widget
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
	this.getWidgetsKey = getWidgetsKey;

	// new api
	this.getWidget = _widget;
	this.getWidgets =  function(){
		var widgets = {};
		// XXX: maso, 1395: تعیین خصوصیت‌ها به صورت دستی است
		widgets.items = [];
		elementKey.forEach(function(type) {
			widgets.items.push(contentElementAsso[type]);
		});
		return widgets;
	};

	// widget groups
	this.group = _group;
	this.groups = _groups;
	this.newGroup = _newGroup;

	// utils
	this.compile = compile;
});

angular.module('am-wb-core').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/dialogs/wb-select-resource-single-page.html',
    "<md-dialog aria-label=\"Select item/items\" style=\"width:50%; height:70%\"> <form ng-cloak layout=column flex> <md-dialog-content mb-preloading=loadingAnswer flex layout=row> <div layout=column flex> <div id=wb-select-resource-children style=\"margin: 0px; padding: 0px; overflow: auto\" layout=column flex> </div> </div> </md-dialog-content> <md-dialog-actions layout=row> <md-button ng-if=openHelp ng-click=openHelp($event) aria-label=\"Show help\"> <span translate>Learn more</span> </md-button> <span flex></span> <md-button ng-click=cancel()> <span translate>Close</span> </md-button> <md-button class=md-primary ng-click=answer()> <span translate>OK</span> </md-button> </md-dialog-actions> </form> </md-dialog>"
  );


  $templateCache.put('views/dialogs/wb-select-resource.html',
    "<md-dialog aria-label=\"Select item/items\" style=\"width:70%; height:70%\"> <form ng-cloak layout=column flex> <md-dialog-content mb-preloading=loadingAnswer flex layout=row> <md-sidenav class=md-sidenav-left md-component-id=left md-is-locked-open=true md-whiteframe=4 layout=column ng-hide=\"pages.length === 1\"> <div style=\"text-align: center\"> <wb-icon size=64px ng-if=style.icon>{{style.icon}}</wb-icon> <h2 style=\"text-align: center\" translate>{{style.title}}</h2> <p style=\"text-align: center\" translate>{{style.description}}</p> </div> <md-devider></md-devider> <md-content> <md-list style=\"padding:0px; margin: 0px\"> <md-list-item ng-repeat=\"page in pages | orderBy:priority\" ng-click=\"loadPage(page, $event);\" md-colors=\"_selectedIndex===$index ? {background:'accent'} : {}\"> <wb-icon>{{page.icon || 'attachment'}}</wb-icon> <p>{{page.label | translate}}</p> </md-list-item> </md-list> </md-content> </md-sidenav> <div layout=column flex> <div id=wb-select-resource-children style=\"margin: 0px; padding: 0px; overflow: auto\" layout=column flex> </div> </div> </md-dialog-content> <md-dialog-actions layout=row> <span flex></span> <md-button ng-click=cancel()> <span translate>Close</span> </md-button> <md-button class=md-primary ng-click=answer()> <span translate>OK</span> </md-button> </md-dialog-actions> </form> </md-dialog>"
  );


  $templateCache.put('views/directives/wb-group.html',
    "<div class=wb-group dir=\"{{wbModel.direction || wbModel.style.dir}}\" name={{wbModel.name}} id={{wbModel.id}} dnd-disable-if=!ctrl.isEditable() dnd-draggable=wbModel dnd-effect-allowed=copyMove dnd-type=\"'Group'\" dnd-moved=ctrl.delete() dnd-list=wbModel.contents dnd-allowed-types=ctrl.getAllowedTypes() dnd-external-sources=true dnd-drop=\"dropCallback(index, item, external, type)\" dnd-horizontal-list=\"wbModel.style.layout.direction==='row'\" wb-size=wbModel.style wb-layout=wbModel.style wb-align=wbModel.style wb-margin=wbModel.style wb-padding=wbModel.style wb-background=wbModel.style wb-border=wbModel.style wb-events=wbModel.event ng-class=\"{\n" +
    "\t\t'wb-group-root': ctrl.isRoot(),\n" +
    "\t\t'wb-group-edit': ctrl.isEditable(),\n" +
    "\t\t'wb-group-select': ctrl.isSelected()\n" +
    "\t}\" md-theme-watch=true></div>"
  );


  $templateCache.put('views/directives/wb-setting-panel-expansion.html',
    "<div id=WB-SETTING-PANEL> <md-expansion-panel ng-repeat=\"setting in settings | orderBy:priority track by setting.type\" ng-show=setting.visible> <md-expansion-panel-collapsed> <div class=md-title>{{setting.label}}</div> </md-expansion-panel-collapsed> <md-expansion-panel-expanded> <md-expansion-panel-header ng-click=$panel.collapse()> <div class=md-title>{{setting.label}}</div> <div class=md-summary>{{setting.description}}</div> </md-expansion-panel-header> <md-expansion-panel-content layout=column style=\"padding: 2px\"> <wb-setting-page ng-model=wbModel wb-type={{setting.type}}> </wb-setting-page> </md-expansion-panel-content> </md-expansion-panel-expanded> </md-expansion-panel> </div>"
  );


  $templateCache.put('views/directives/wb-setting-panel-tabs.html',
    "<div id=am-wb-widget-setting> <md-tabs md-dynamic-height md-border-bottom> <md-tab ng-repeat=\"setting in settings | orderBy:priority track by setting.type\" ng-disabled=!setting.visible id={{setting.key}}> <md-tab-label> <span ng-if=!setting.icon translate=\"\">{{setting.label}}</span> <wb-icon ng-if=setting.icon>{{setting.icon}}</wb-icon> </md-tab-label> <md-tab-body layout-margin> <wb-setting-page ng-model=wbModel wb-type={{setting.type}}> </wb-setting-page> </md-tab-body> </md-tab> </md-tabs> </div>"
  );


  $templateCache.put('views/directives/wb-ui-choose.html',
    "<md-tabs class=wb-tab-as-choose-button md-selected=selectedIndex> <md-tab ng-repeat=\"item in items\"> <md-tab-label> <wb-icon>{{item.icon}}</wb-icon> </md-tab-label> </md-tab> </md-tabs>"
  );


  $templateCache.put('views/directives/wb-ui-setting-audio.html',
    "<md-list-item> <md-button class=md-icon-button aria-label=Edit ng-click=edit(value)> <wb-icon>wb-object-audio</wb-icon> </md-button> <md-input-container> <input ng-model=value> </md-input-container> </md-list-item>"
  );


  $templateCache.put('views/directives/wb-ui-setting-background-attachment.html',
    "<md-input-container> <label translate=\"\">Background attachment</label> <md-select ng-model=value> <md-option ng-repeat=\"value in items\" value={{value.value}} translate=\"\">{{value.name}}</md-option> </md-select> </md-input-container>"
  );


  $templateCache.put('views/directives/wb-ui-setting-background-origin.html',
    "<md-input-container> <label translate=\"\">Background origin</label> <md-select ng-model=value> <md-option ng-repeat=\"value in items\" value={{value.value}} translate=\"\">{{value.name}}</md-option> </md-select> </md-input-container>"
  );


  $templateCache.put('views/directives/wb-ui-setting-background-position.html',
    "<md-input-container> <label translate=\"\">Background position</label> <md-select ng-model=value> <md-option ng-repeat=\"value in items\" value={{value.value}} translate=\"\">{{value.title}}</md-option> </md-select> </md-input-container>"
  );


  $templateCache.put('views/directives/wb-ui-setting-background-repeat.html',
    "<md-input-container> <label translate=\"\">Background repeat</label> <md-select ng-model=value> <md-option ng-repeat=\"value in items\" value={{value.value}} translate=\"\">{{value.name}}</md-option> </md-select> </md-input-container>"
  );


  $templateCache.put('views/directives/wb-ui-setting-background-size.html',
    "<md-input-container> <label translate=\"\">Background Size</label> <md-select ng-model=value> <md-option ng-repeat=\"value in items\" value={{value.value}} translate=\"\">{{value.name}}</md-option> </md-select> </md-input-container>"
  );


  $templateCache.put('views/directives/wb-ui-setting-background.html',
    "<md-input-container> <label translate=\"\">Background Size</label> <md-select ng-model=value> <md-option ng-repeat=\"value in items\" value={{value.value}} translate=\"\">{{value.name}}</md-option> </md-select> </md-input-container>"
  );


  $templateCache.put('views/directives/wb-ui-setting-choose.html',
    "<md-list-item> <wb-icon ng-hide=\"icon === undefined || icon === null || icon === ''\" wb-icon-name={{icon}}> </wb-icon> <p ng-hide=\"title === undefined || title === null || title === ''\">{{title}}</p> <md-tabs flex=100 class=wb-tab-as-choose-button md-selected=selectedIndex> <md-tab ng-repeat=\"item in xitems\"> <md-tab-label> <md-tooltip ng-show=item.title>{{item.title | translate}}</md-tooltip> <wb-icon>{{item.icon}}</wb-icon> </md-tab-label> </md-tab> </md-tabs> </md-list-item> "
  );


  $templateCache.put('views/directives/wb-ui-setting-color.html',
    "<div layout=row> <wb-icon ng-hide=\"icon==undefined || icon==null || icon=='title'\" layout-padding>{{icon}}</wb-icon> <p ng-hide=\"title==undefined || title==null || title==''\" flex>{{title}}</p> <md-color-picker class=color-picker-hide-textbox md-color-clear-button=false ng-model=value> </md-color-picker> </div>"
  );


  $templateCache.put('views/directives/wb-ui-setting-data.html',
    "<md-list-item> <md-button class=md-icon-button aria-label=Edit ng-click=edit(value)> <wb-icon>{{icon || 'wb-object-data'}}</wb-icon> </md-button> <md-input-container> <input ng-model=value.key> </md-input-container> </md-list-item>"
  );


  $templateCache.put('views/directives/wb-ui-setting-dropdown-value.html',
    " <md-list-item> <wb-icon ng-hide=\"icon==undefined || icon==null || icon==''\">{{icon}}</wb-icon> <p ng-hide=\"title==undefined || title==null || title==''\">{{title}}</p> <md-select style=\"margin: 0px\" ng-model=value> <md-option ng-repeat=\"item in items\" ng-value=item.value> {{item.title}} </md-option> </md-select> </md-list-item>"
  );


  $templateCache.put('views/directives/wb-ui-setting-dropdown.html',
    "<md-list-item> <wb-icon ng-hide=\"icon === undefined || icon === null || icon === ''\">{{icon}}</wb-icon> <p ng-hide=\"title === undefined || title === null || title === ''\">{{title}}</p> <md-select style=\"margin: 0px\" ng-model=value> <md-option ng-repeat=\"item in items\" value={{item.value}}> {{item.title}} </md-option> </md-select> </md-list-item>"
  );


  $templateCache.put('views/directives/wb-ui-setting-image.html',
    "<div layout-align=\"center center\" layout=row class=wb-ui-setting-image> <img ng-click=selectImage() ng-src={{value}} md-colors=\"{'borderColor': 'accent'}\" class=wb-ui-setting-image-preview style=\"border-size: 1px; border-style: solid\"> <md-input-container class=md-icon-float flex> <label ng-if=title translate=\"\">{{title}}</label> <input ng-model=value> <wb-icon ng-click=selectImage()>more_horiz</wb-icon> </md-input-container> </div>"
  );


  $templateCache.put('views/directives/wb-ui-setting-length.html',
    "<md-input-container> <label ng-if=title translate=\"\">{{title}}</label> <input ng-model=\"value\"> <div class=hint ng-if=description translate=\"\">{{description}}</div> </md-input-container>"
  );


  $templateCache.put('views/directives/wb-ui-setting-link.html',
    "<md-input-container class=md-icon-float> <input ng-model=url placeholder={{title}}> <wb-icon ng-click=selectlink() style=\"display:inline-block; cursor: pointer\">more_horiz</wb-icon> </md-input-container>"
  );


  $templateCache.put('views/directives/wb-ui-setting-number.html',
    "<md-list-item ng-show=\"slider==undefined\"> <wb-icon ng-hide=\"icon==undefined || icon==null || icon==''\">{{icon}}</wb-icon> <p ng-hide=\"title==undefined || title==null  || title==''\">{{title}}</p> <md-input-container style=\"margin: 0px\"> <input style=\"width: 50px\" type=number ng-model=value flex> </md-input-container> </md-list-item> <md-list-item ng-show=\"slider!=undefined\"> <wb-icon ng-hide=\"icon==undefined || icon==null || icon=='' || icon=='wb-blank'\">{{icon}}</wb-icon> <div ng-show=\"icon=='wb-blank'\" style=\"display: inline-block; width: 32px; opacity: 0.0\"></div> <p ng-hide=\"title==undefined || title==null || title==''\">{{title}}</p> <md-slider min=0 max=100 ng-model=value flex></md-slider> </md-list-item>"
  );


  $templateCache.put('views/directives/wb-ui-setting-on-off-switch.html',
    "<md-list-item> <wb-icon ng-hide=\"icon==undefined || icon==null || icon==''\">{{icon}}</wb-icon> <p ng-hide=\"title==undefined || title==null || title==''\">{{title}}</p> <md-switch class=md-secondary ng-model=value></md-switch> </md-list-item>"
  );


  $templateCache.put('views/directives/wb-ui-setting-text.html',
    "<md-list-item> <wb-icon ng-hide=\"icon==undefined || icon==null || icon==''\">{{icon}}</wb-icon> <p ng-hide=\"title==undefined || title==null  || title==''\">{{title}}</p> <md-input-container style=\"margin: 0px\"> <input style=\"width: 200px\" ng-model=value flex> </md-input-container> </md-list-item>"
  );


  $templateCache.put('views/directives/wb-ui-setting-video.html',
    "<md-list-item> <md-button class=md-icon-button aria-label=Edit ng-click=edit(value)> <wb-icon>wb-object-video</wb-icon> </md-button> <md-input-container> <input ng-model=value> </md-input-container> </md-list-item>"
  );


  $templateCache.put('views/directives/wb-widget.html',
    "<div class=wb-widget name={{wbModel.name}} dnd-disable-if=!ctrl.isEditable() dnd-draggable=wbModel dnd-type=wbModel.type dnd-effect-allowed=copyMove dnd-callback=1 dnd-moved=ctrl.delete() wb-widget-size=wbModel.style wb-align=wbModel.style wb-margin=wbModel.style wb-padding=wbModel.style wb-background=wbModel.style wb-border=wbModel.style wb-events=wbModel.event md-theme-watch=true ng-class=\"{\n" +
    "\t\t'wb-widget-edit': ctrl.isEditable(),\n" +
    "\t\t'wb-widget-select': ctrl.isSelected()\n" +
    "\t}\" transclude></div>"
  );


  $templateCache.put('views/directives/wb-widgets-explorer.html',
    "<div> <script src=../../scripts/directives/wb-widgets-explorer.js></script> <div layout=column>  <md-toolbar ng-show=!(showSearch||showSort||showState)> <div class=md-toolbar-tools> <h3 flex translate>Widgets</h3> <md-button class=md-icon-button aria-label=Search ng-click=\"showSearch = !showSearch\"> <wb-icon>search</wb-icon> </md-button> <md-divider></md-divider> <md-button ng-click=\"wbWidgetExplorer._view_list=!wbWidgetExplorer._view_list\" class=md-icon-button aria-label=\"View mode\"> <wb-icon>{{wbWidgetExplorer._view_list ? 'view_module' : 'view_list'}}</wb-icon> </md-button> <md-button ng-click=\"wbWidgetExplorer._tree_mode=!wbWidgetExplorer._tree_mode\" class=md-icon-button aria-label=\"Tree mode\"> <wb-icon>{{wbWidgetExplorer._tree_mode? 'list' : 'list_tree'}}</wb-icon> </md-button> </div> </md-toolbar>  <md-toolbar class=md-hue-1 ng-show=showSearch> <div class=md-toolbar-tools> <md-button class=md-icon-button ng-click=\"showSearch = !showSearch\" aria-label=Back> <wb-icon>arrow_back</wb-icon> </md-button> <md-input-container md-theme=input flex> <label>&nbsp;</label> <input ng-model=query ng-keyup=\"runQuery(query, $event)\"> </md-input-container> <md-button class=md-icon-button aria-label=Search ng-click=\"showSearch = !showSearch\"> <wb-icon>search</wb-icon> </md-button> </div> </md-toolbar> <md-expansion-panel-group ng-if=wbWidgetExplorer._tree_mode> <md-expansion-panel ng-repeat=\"group in groups\"> <md-expansion-panel-collapsed> <span translate>{{group.title || group.id}}</span> </md-expansion-panel-collapsed> <md-expansion-panel-expanded> <md-expansion-panel-header> <span translate>{{group.title || group.id}}</span> </md-expansion-panel-header> <md-expansion-panel-content style=\"padding: 0px; margin: 0px\"> <wb-widgets-list ng-if=wbWidgetExplorer._view_list widgets=group.widgets> </wb-widgets-list> <wb-widgets-module ng-if=!wbWidgetExplorer._view_list widgets=group.widgets> </wb-widgets-module> </md-expansion-panel-content> </md-expansion-panel-expanded> </md-expansion-panel> </md-expansion-panel-group> <wb-widgets-list ng-if=\"!wbWidgetExplorer._tree_mode &amp;&amp; wbWidgetExplorer._view_list\" widgets=widgets> </wb-widgets-list> <wb-widgets-module ng-if=\"!wbWidgetExplorer._tree_mode &amp;&amp; !wbWidgetExplorer._view_list\" widgets=widgets> </wb-widgets-module> </div> </div>"
  );


  $templateCache.put('views/directives/wb-widgets-list.html',
    "<md-list flex> <md-list-item class=md-2-line ng-repeat=\"widget in widgets\" dnd-draggable=\"widget.model || {}\" dnd-type=widget.type dnd-effect-allowed=copy> <wb-icon wb-icon-name={{widget.icon}}></wb-icon> <div class=md-list-item-text layout=column> <h3 translate>{{widget.title}}</h3> <p translate>{{widget.description}}</p> </div> <wb-icon ng-if=openHelp class=md-secondary ng-click=\"openHelp(widget, $event)\" aria-label=\"Show help\">help</wb-icon> </md-list-item> </md-list>"
  );


  $templateCache.put('views/directives/wb-widgets-module.html',
    "<div layout=column layout-gt-sm=row layout-align=space-around layout-wrap> <div class=\"wb-widgets-module md-whiteframe-1dp\" ng-repeat=\"widget in widgets\" dnd-draggable=\"widget.model || {}\" dnd-type=widget.type dnd-effect-allowed=copy flex=none flex-gt-sm=30 layout=column layout-align=\"start center\" layout-padding> <wb-icon size=32px wb-icon-name={{widget.icon}}></wb-icon> <p flex class=wb-text-truncate translate=\"\">{{widget.title}}</p> <md-tooltip md-delay=1000>{{widget.description | translate}}</md-tooltip> </div> </div>"
  );


  $templateCache.put('views/partials/wb-widget-options.html',
    ""
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
    " <md-input-container class=\"md-icon-float md-block\"> <label>Background</label> <input ng-model=wbModel.style.background.background> </md-input-container> <wb-ui-setting-image title=\"Background image\" ng-model=wbModel.style.background.image> </wb-ui-setting-image> <wb-ui-setting-color title=\"Background Color\" icon=format_color_fill value=wbModel.style.background.color> </wb-ui-setting-color> <wb-ui-setting-background-size value=wbModel.style.background.size> </wb-ui-setting-background-size> <wb-ui-setting-background-repeat value=wbModel.style.background.repeat> </wb-ui-setting-background-repeat> <wb-ui-setting-background-attachment value=wbModel.style.background.attachment> </wb-ui-setting-background-attachment> <wb-ui-setting-background-origin value=wbModel.style.background.origin> </wb-ui-setting-background-origin> <wb-ui-setting-background-position value=wbModel.style.background.position> </wb-ui-setting-background-position>"
  );


  $templateCache.put('views/settings/wb-border.html',
    " <wb-ui-setting-length title=\"{{'Style' | translate}}\" slider=\"\" icon=wb-blank value=wbModel.style.border.style> </wb-ui-setting-length> <wb-ui-setting-length title=\"{{'Width' | translate}}\" slider=\"\" icon=wb-blank value=wbModel.style.border.width> </wb-ui-setting-length> <wb-ui-setting-length title=\"{{'Color' | translate}}\" slider=\"\" icon=wb-blank value=wbModel.style.border.color> </wb-ui-setting-length> <wb-ui-setting-length title=\"{{'Radius' | translate}}\" slider=\"\" icon=wb-blank value=wbModel.style.border.radius> </wb-ui-setting-length>"
  );


  $templateCache.put('views/settings/wb-description.html',
    " <md-input-container> <label translate>Lable</label> <input ng-model=wbModel.label> </md-input-container> <md-input-container> <label translate>Description</label> <input ng-model=wbModel.description> </md-input-container> <md-input-container> <label translate>Keywords</label> <input ng-model=wbModel.keywords> </md-input-container> <wb-ui-setting-image title=\"{{Cover | translate}}\" ng-model=wbModel.cover> </wb-ui-setting-image>"
  );


  $templateCache.put('views/settings/wb-general.html',
    ""
  );


  $templateCache.put('views/settings/wb-layout-page.html',
    " <wb-ui-setting-choose title=Direction icon=wb-direction items=direction ng-model=wbModel.style.layout.direction> </wb-ui-setting-choose>  <wb-ui-setting-choose title=\"{{(wbModel.style.layout.direction=='row')?'Vert.':'Horz.'}}\" icon=\"{{(wbModel.style.layout.direction=='row')?'wb-vertical-arrows':'wb-horizontal-arrows'}}\" items=align[wbModel.style.layout.direction] ng-model=wbModel.style.layout.align> </wb-ui-setting-choose>  <wb-ui-setting-choose title=\"{{(wbModel.style.layout.direction!='row')?'Vert.':'Horz.'}}\" icon=\"{{(wbModel.style.layout.direction!='row')?'wb-vertical-arrows':'wb-horizontal-arrows'}}\" items=justify[wbModel.style.layout.direction] ng-model=wbModel.style.layout.justify> </wb-ui-setting-choose>"
  );


  $templateCache.put('views/settings/wb-layout-self.html',
    " <wb-ui-setting-choose title=\"{{(wbModel.style.layout.direction!='row')?'Vert.':'Horz.'}}\" icon=\"{{(wbModel.style.layout.direction!='row')?'swap_vert':'swap_horiz'}}\" items=selfAlign ng-model=wbModel.style.align.align> </wb-ui-setting-choose>"
  );


  $templateCache.put('views/settings/wb-margin-padding.html',
    " <wb-ui-setting-length title=\"{{'Margin' | translate}}\" slider=\"\" icon=wb-blank value=wbModel.style.margin> </wb-ui-setting-length> <wb-ui-setting-length title=\"{{'Padding' | translate}}\" slider=\"\" icon=wb-blank value=wbModel.style.padding> </wb-ui-setting-length>"
  );


  $templateCache.put('views/settings/wb-notfound.html',
    " <wb-icon>bug</wb-icon> <h2>Settings page not found</h2>"
  );


  $templateCache.put('views/settings/wb-size.html',
    " <wb-ui-setting-length title=Width value=wbModel.style.size.width> </wb-ui-setting-length> <wb-ui-setting-length title=Height value=wbModel.style.size.height> </wb-ui-setting-length>  <md-subheader class=md-no-sticky> <span translate=\"\">Min</span> </md-subheader> <wb-ui-setting-length title=\"Min width\" value=\"wbModel.style.size['min-width']\"> </wb-ui-setting-length> <wb-ui-setting-length title=\"Min height\" value=\"wbModel.style.size['min-height']\"> </wb-ui-setting-length>  <md-subheader class=md-no-sticky> <span translate=\"\">Max</span> </md-subheader> <wb-ui-setting-length title=\"Max width\" value=\"wbModel.style.size['max-width']\"> </wb-ui-setting-length> <wb-ui-setting-length title=\"Max height\" value=\"wbModel.style.size['max-height']\"> </wb-ui-setting-length>"
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
    " <div ng-if=!ctrl.isSelected() ng-bind-html=\"wbModel.text | wbunsafe\" class=wb-widget-fill> </div> <div ui-tinymce=\"{\n" +
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
    "\t}\" ng-model=wbModel.text ng-show=ctrl.isSelected() ng-if=ctrl.isEditable() class=wb-widget-fill> </div>"
  );


  $templateCache.put('views/widgets/wb-notfound.html',
    "<div ng-show=wbEditable> Unsuported widget?! </div>"
  );

}]);
