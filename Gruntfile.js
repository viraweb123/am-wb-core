/*
 * Copyright (c) 2015-2025 Phoinex Scholars Co. http://dpq.co.ir
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

//# Globbing
//برای کارایی خوب، از ساختار زیر برای تعیین منابع استفاده شده که به شما امکان
//تعریف دو سطحی داده‌ها رو می‌ده.
//'test/spec/{,*/}*.js'
//اگر می‌خواهید همه منابعی رو که تعریف کردید استفاده کنید ادرسی دهی‌ها رو به
//صورت
//زیر تغییر بدید.
//'test/spec/**/*.js'

module.exports = function(grunt) {

    /*
     * زمان‌هایی که در فرآیند‌ها استفاده می‌شه رو تعیین می‌کنه. این افزونه سربار
     * توی ساخت ایجاد می‌کنه اگر می‌خواهید ساخت با سرعت بیشتری انجام ب
     */
    require('time-grunt')(grunt);
    //MODIFIED: add require for connect-modewrite
    var modRewrite = require('connect-modrewrite');

    /*
     * به صورت خودکار تمام افزونه‌های مورد نیاز بار گذاری می‌شود. در صورتی که
     * این افزونه‌ها نامگذاری grunt را رعایت نمی‌کنند باید نام وظایف آنها نیز
     * تعیین شود.
     */
    require('jit-grunt')(grunt, {
        useminPrepare : 'grunt-usemin',
        ngtemplates : 'grunt-angular-templates',
        configureProxies : 'grunt-connect-proxy',
        uglify: 'grunt-contrib-uglify-es'
    });

    /*
     * تنظیم‌های کلی بسته را ایجاد می‌کند. این تنظیم‌ها بر اساس خصوصیت‌های تعیین
     * شده در پرونده bower.json تعیین می‌شود.
     */
    var appConfig = {
            app : require('./bower.json').appPath || 'src',
            demo : require('./bower.json').demoPath || 'demo',
            dist : 'dist',
            pkg : require('./bower.json')
    };

    // تنظیم تمام وظایف مورد نیاز در پروژه
    grunt.initConfig({

        /*
         * تنظیم‌های پروژه: تمام تنظیم‌هایی که در وظایف استفاده می‌شود بر اساس
         * این متغیر است.
         */
        yeoman : appConfig,

        /*
         * در فرآیند توسعه پرونده‌های موجود در سیستم به روز رسانی می‌شود و در
         * نتیجه آن باید پردازش‌هایی انجام شود. برای نمونه زمانی که یک نمایش به
         * روز می‌شود کاوشگر باید به روز شود تا این به روز رسانی مشاهد شود. این
         * وظیفه پرونده‌ها را مشاهده و کارهای لازم را انجام می‌دهد.
         */
        watch : {
            bower : {
                files : [ 'bower.json' ],
                tasks : [ 'wiredep' ]
            },
            js : {
                files : [
                	'<%= yeoman.app %>/libs/*.js',
                    '<%= yeoman.app %>/scripts/**/*.js',
                    '<%= yeoman.demo %>/scripts/**/*.js'
                    ],
                    tasks : [
                        'injector',
                        'newer:eslint:all'
                        ],
                        options : {
                            livereload : '<%= connect.options.livereload %>'
                        }
            },
            jsTest : {
                files : [ 'test/spec/{,*/}*.js' ],
                tasks : [
                    'injector',
                    'newer:eslint:test', 
                    'karma' ]
            },
            styles : {
                files : [
                    '<%= yeoman.app %>/styles/**/*.css',
                    '<%= yeoman.demo %>/styles/**/*.css'
                    ],
                    tasks : [
                        'injector',
                        'newer:copy:styles', 
                        'postcss'
                        ]
            },
            gruntfile : {
                files : [ 'Gruntfile.js' ]
            },
            livereload : {
                options : {
                    livereload : '<%= connect.options.livereload %>'
                },
                files : [
                    '<%= yeoman.demo %>/**/*.html',
                    '<%= yeoman.app %>/views/**/*.html',
                    '.tmp/styles/{,*/}*.css',
                    '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                    '<%= yeoman.demo %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                    ]
            }
        },

        /*
         * تنظیم‌های سرور اصلی گرانت را ایجاد می‌کند. این سرور در تست و راه
         * اندازی اولیه پروژه کاربرد دارد.
         */

        // The actual grunt server settings
        connect : {
            options : {
                port : 9001,
                // Change this to '0.0.0.0' to access the server from
                // outside.
                hostname : 'localhost',
                livereload : 35729
            },
//            proxies : [ {
//                context : '/', // the context of the data service
//                // wherever the data service is running
//                host : '<%= yeoman.pkg.backend.host %>',
//                // the port that the data service is running on
//                port : '<%= yeoman.pkg.backend.port %>',
//                changeOrigin : true,
//                headers : {
//                    host : '<%= yeoman.pkg.backend.host %>'
//                }
//            } ],
            livereload : {
                options : {
                    open : true,
                    middleware : function(connect, options) {
                        var middlewares = [];
                        //Matches everything that does not contain a '.' (period)
//                        middlewares.push(modRewrite([ '!/api/.*|^.*\\..*$ /index.html [L]' ]));
                        middlewares.push(connect.static('.tmp'));
                        middlewares.push(
                                connect()
                                .use('/bower_components', connect.static('./bower_components')));
                        middlewares.push(
                                connect()
                                .use('/app/styles', connect.static('./app/styles')));
                        middlewares.push(connect.static('demo'));
                        middlewares.push(connect.static(appConfig.app));
                        options.base.forEach(function(base) {
                            middlewares.push(connect.static(base));
                        });
                        if (!Array.isArray(options.base)) {
                            options.base = [ options.base ];
                        }

//                        // Setup the proxy
//                        middlewares
//                        .push(require('grunt-connect-proxy/lib/utils').proxyRequest);

                        // Serve static files
                        options.base.forEach(function(base) {
                            middlewares.push(connect.static(base));
                        });

                        return middlewares;
                    }
                }
            },
            test : {
                options : {
                    port : 9001,
                    middleware : function(connect) {
                        return [
                            connect.static('.tmp'),
                            connect.static('test'),
                            connect().use('/bower_components', connect.static('./bower_components')),
                            connect.static(appConfig.app) ];
                    }
                }
            },
            dist : {
                options : {
                    open : true,
                    base : '<%= yeoman.dist %>'
                }
            }
        },

        /*
         * ESLint is an open source project originally created by Nicholas C. Zakas in June 2013. 
         * Its goal is to provide a pluggable linting utility for JavaScript.
         * 
         * 
         * https://eslint.org/
         */
        eslint : {
            options: {
                configFile: '.eslintrc.json'
            },
            target : [ '<%= yeoman.app %>/scripts/**/*.js' ]
        },

        /*
         * Generate document
         * 
         * This is one of the task in the rlease phease.
         * 
         * @see https://github.com/krampstudio/grunt-jsdoc
         * @see https://github.com/krampstudio/grunt-jsdoc-plugin
         */
        jsdoc : {
            all : {
                src : [ '<%= yeoman.app %>/scripts/**/*.js' ],
                options : {
                    destination : 'doc',
                    configure : 'node_modules/angular-jsdoc/common/conf.json',
                    template : 'node_modules/angular-jsdoc/default',
                    tutorial : 'tutorials',
                    readme : 'README.md'
                }
            }
        },

        /*
         * مسیرها و داده‌های موقت را حذف می‌کند تا شرایط برای اجرای دوباره مراحل
         * ساخت آماده شود. خیلی از این فایل‌ها به عنوان محصول و یا مستند ایجاد
         * می‌شن و باید اونها رو قبل از هر بار تولید نسخه جدید حذف کنیم. پاک
         * کردن با استفاده از این ماژول انجام می‌شه. اطلاعات بشتر رو از پیوند
         * زیر مطالعه کنید:
         * 
         * https://github.com/gruntjs/grunt-contrib-clean
         * 
         * تمام پرونده‌هایی که در مسیر .tmp و یا مسیر محصول نهایی ایجاد می‌شن به
         * عنوان پرنده‌های اضافه در نظر گرفته می‌شوند و به صورت خودکار حذف
         * می‌شوند.
         */
        clean : {
            dist : {
                files : [ {
                    dot : true,
                    src : [ //
                        '.tmp', '<%= yeoman.dist %>/{,*/}*', //
                        '!<%= yeoman.dist %>/.git{,*/}*' //
                        ]
                } ]
            },
            server : '.tmp'
        },

        /*
         * تمام وابستگی‌هایی که با استفاده از مدیریت بسته‌های bower نصب می‌شود
         * شامل فایلهای هست که باید توی برنامه‌ها اضافه بشه. این کار رو می‌شه به
         * صورت خودکار انجام داد. بسته wiredep توی بخشه‌های متفاوتی از برنامه
         * می‌تونه این وابستگی‌های جدید رو تزریق کنه و شما رو از انجام این کار
         * بی نیاز کنه. برای اطلاع بیشتر در مورد این افزونه پیونده زیر رو
         * ببیندی: ؟؟
         * 
         * این کار روش ساده‌ای داره، یه الگو پیدا می‌شه و بعد وسط اون الگو با
         * فهرست فایلهایی وابستگی‌ها پر می‌شه.
         */
        wiredep : {
            app : {
                devDependencies : true,
                src : [ 'demo/index.html' ],
                ignorePath : /\.\.\//
            },
            test : {
                devDependencies : true,
                src : [
                    '<%= karma.unit.configFile %>',
                    '<%= karma.build.configFile %>'
                    ],
                    ignorePath : /\.\.\//,
                    fileTypes : {
                        js : {
                            block : /(([\s\t]*)\/{2}\s*?bower:\s*?(\S*))(\n|\r|.)*?(\/{2}\s*endbower)/gi,
                            detect : {
                                js : /'(.*\.js)'/gi
                            },
                            replace : {
                                js : '\'{{filePath}}\','
                            }
                        }
                    }
            }
        },

        // The following *-min tasks will produce minified files in the
        // dist folder
        // By default, your `index.html`'s <!-- Usemin block --> will
        // take care of
        // minification. These next options are pre-configured if you do
        // not wish
        // to use the Usemin blocks.
        cssmin : {
            dist : {
                files : {
                    '<%= yeoman.dist %>/<%= yeoman.pkg.name %>.min.css' : [ //
                        '.tmp/styles/{,*/}*.css' //
                        ]
                }
            }
        },



	uglify: {
		dist: {
			options: {
				sourceMap: true,
				sourceMapName: '<%= yeoman.dist %>/<%= yeoman.pkg.name %>.map'
			},
			files: {
				'<%= yeoman.dist %>/<%= yeoman.pkg.name %>.min.js' : [ //
					'.tmp/{,*/}*.js' //
				]
			}
		}
	},

        imagemin : {
            dist : {
                files : [ {
                    expand : true,
                    cwd : '<%= yeoman.app %>/images',
                    src : '{,*/}*.{png,jpg,jpeg,gif}',
                    dest : '<%= yeoman.dist %>/images'
                } ]
            }
        },

        svgmin : {
            dist : {
                files : [ {
                    expand : true,
                    cwd : '<%= yeoman.app %>/images',
                    src : '{,*/}*.svg',
                    dest : '<%= yeoman.dist %>/images'
                } ]
            }
        },
        /*
         * کتابخونه‌ها از مجموعه‌ای از پرونده‌های اسکریپتی تشکیل شدن که در نهایت
         * باید با هم ترکیب بشن و به صورت یک پرونده یکتا ذخیره بشن. این کار با
         * استفاده از افزونه concat انجام می‌شه. اطلاعات بیشتر در این مورد تو
         * مسیر زیر وجود داره:
         * 
         * https://github.com/gruntjs/grunt-contrib-concat
         * 
         * ما تمام فایلها رو سر هم می‌زنیم و دوتا پرونده ایجاد می‌کنیم، یکی
         * مستقیم به عنوان محصول ارائه می‌شه ولی یکی تو پوشه موقت ایجاد می‌شه تا
         * بتونیم کارهای دیگه‌ای روش انجام بدیم.
         */
        concat : {
            tmp : {
                src : [ 
                	'<%= yeoman.app %>/libs/*.js',
                	'<%= yeoman.app %>/scripts/**/*.js' 
                ],
                dest : '.tmp/<%= yeoman.pkg.name %>.js'
            },
            distcss : {
                src : [ '<%= yeoman.app %>/{,*/}*.css' ],
                dest : '<%= yeoman.dist %>/<%= yeoman.pkg.name %>.css'
            },
            dist : {
                src : [ '.tmp/{,*/}*.js' ],
                dest : '<%= yeoman.dist %>/<%= yeoman.pkg.name %>.js'
            }
        },

        /*
         * 
         * 
         */
        htmlmin : {
            dist : {
                options : {
                    conservativeCollapse : true,
                    removeCommentsFromCDATA : true,
                    collapseBooleanAttributes : true,
                    collapseWhitespace : true,
                    removeAttributeQuotes : true,
                    removeComments : true, // Only if you don't use comment
                    // directives!
                    removeEmptyAttributes : true,
                    removeRedundantAttributes : true,
                    removeScriptTypeAttributes : true,
                    removeStyleLinkTypeAttributes : true
                },
                files : [ {
                    expand : true,
                    cwd : '<%= yeoman.dist %>',
                    src : [ '*.html' ],
                    dest : '<%= yeoman.dist %>'
                } ]
            }
        },

        /*
         * الگوهای متفاوتی در یک بسته طراحی می‌شه اما باید این الگوها رو بزنیم
         * سر هم و حجمش رو کم کنی تا به یک کتابخونه مناسب برسیم. یکی از
         * ابزارهایی که می‌تونه الگوهای ایجاد شده برای انگولار رو مدیریت کن بسته
         * ngtemplates هست. برای اطلاع بیشتر در مورد این بسته پیوند زیر رو
         * ببینید:
         * 
         * https://github.com/ericclemmons/grunt-angular-templates
         * 
         * این بسته رو می‌تونیم با سایر بسته‌ها ترکیب کنیم.
         */
        ngtemplates : {
            dist : {
                options : {
                    module : '<%= yeoman.pkg.moduleName %>',
                    htmlmin : '<%= htmlmin.dist.options %>',
                    usemin : 'scripts/scripts.js'
                },
                cwd : '<%= yeoman.app %>',
                src : 'views/{,*/}*.html',
                dest : '.tmp/templateCache.js'
            }
        },

        /*
         * یکی از مشکلاتی که داریم دزدی کدها است و این جایی سخت تر می‌شه که
         * نمی‌شه به سادگی کدهای انگولار رو به هم ریخت. البته توی بسته انگولار
         * راهکارهایی برای این منظور در نظر گرفته شده. با استفاده از افزونه
         * ngAnnotate ما ساختار کد رو تغییر می‌دیم و در نهایت به یک مدلی تبدیل
         * می‌کنیم که بشه بهمش ریخت. برای اطلاع بیشتر در این زمینه یپوند زیر رو
         * مشاهد کنید:
         * 
         * https://github.com/mgol/grunt-ng-annotate
         * https://github.com/olov/ng-annotate
         * 
         * این کار روی پرونده‌هایی انجام می‌شه که توی مسیر .tmp ایجاد شده اند و
         * همگی پرونده‌های موقت هستن. به این ترتیب می‌تونیم تمام پرونده‌های
         * موجود در این مسیر رو کامل به هم بریزیم.
         */
        ngAnnotate : {
            options: {
                singleQuotes: true 
            }, 
            dist : {
                files : [ {
                    expand : true,
                    cwd : '.tmp/',
                    src : '*.js',
                    dest : '.tmp/'
                } ]
            }
        },

        // Copies remaining files to places other tasks can use
        copy : {
            dist : {
                files : [
                    {
                        expand : true,
                        dot : true,
                        cwd : '<%= yeoman.app %>',
                        dest : '<%= yeoman.dist %>',
                        src : [ '*.{ico,png,txt}',
                            'images/{,*/}*.{webp}',
                            'styles/fonts/{,*/}*.*' ]
                    }, {
                        expand : true,
                        cwd : '.tmp/images',
                        dest : '<%= yeoman.dist %>/images',
                        src : [ 'generated/*' ]
                    },{
                        // TODO: maso, 2018: optimize resource
                        dot : true,
                        expand : true,
                        cwd : '<%= yeoman.app %>/resources',
                        dest : '<%= yeoman.dist %>/resources',
                        src : '**/*.*'
                    }]
            },
            styles : {
                expand : true,
                cwd : '<%= yeoman.app %>/styles',
                dest : '.tmp/styles/',
                src : '{,*/}*.css'
            }
        },

        // Add vendor prefixed styles
        postcss : {
            options : {
                processors : [ 
                    require('pixrem')(),
                    require('autoprefixer')({browsers: 'last 2 versions'})
                    ]
            },
            server : {
                options : {
                    map : true
                },
                files : [ {
                    expand : true,
                    cwd : '.tmp/styles/',
                    src : '{,*/}*.css',
                    dest : '.tmp/styles/'
                } ]
            },
            dist : {
                files : [ {
                    expand : true,
                    cwd : '.tmp/styles/',
                    src : '{,*/}*.css',
                    dest : '.tmp/styles/'
                } ]
            }
        },

        // Run some tasks in parallel to speed up the build process
        concurrent : {
            server : [ 'copy:styles'],
            test : [ 'copy:styles' ],
            dist : [ 'copy:styles', 'concat:tmp', 'imagemin', 'svgmin' ]
        },

        /*
         * اجرای تست‌ها با بسته karma هست.
         * 
         * https://github.com/karma-runner/grunt-karma
         * 
         * مدلهای متفاوتی می‌شه تست‌ها رو اجرا کرد. در صورتی که بخواهید کدها رو
         * روی یک کاوشگر خاص به صورت رفع خطا اجرا کنید پیوند زیر اطالعات خوبی
         * برای این کار ارائه کرده است:
         * 
         * http://bahmutov.calepin.co/debugging-karma-unit-tests.html
         * 
         */
        karma : {
            unit : {
                configFile : 'test/karma.unit.conf.js',
                singleRun : true,
        	    preprocessors: {
        	        'src/scripts/**/*.js': ['coverage']
        	    },
        		reporters: [
        			'progress', 
        			'coverage'
        		],
            },
            build : {
                configFile : 'test/karma.build.conf.js',
                singleRun : true
            },
            debug : {
                configFile : 'test/karma.unit.conf.js',
                port : 9999,
                singleRun : false,
                browsers : [ 'Chrome' ],
                preprocessors: {}
            }
        },


        /*
         * Inject project files into the HTMLS
         * 
         * SEE: https://github.com/klei/grunt-injector
         */
        injector : {
            options : {
                // Task-specific options go here.
                relative : true,
                addRootSlash : false,
                ignorePath : [
                    '../<%= yeoman.app %>/',
                    '<%= yeoman.demo %>/'
                    ]
            },
            project_files : {
                files : {
                    '<%= yeoman.demo %>/index.html' : [
                        '<%= yeoman.app %>/libs/*.js',
                        '<%= yeoman.app %>/scripts/**/*.js',
                        '<%= yeoman.app %>/styles/**/*.css',
                        '<%= yeoman.demo %>/scripts/**/*.js',
                        '<%= yeoman.demo %>/styles/**/*.css'
                        ]
                }
            }
        }
    });

    grunt.registerTask('demo', 'Compile then start a connect web server',
            function(target) {
        if (target === 'dist') {
            return grunt.task.run([ 
                'build',
                // added just before connect
                'configureProxies:server',
                'connect:dist:keepalive'
                ]);
        }

        grunt.task.run([
            'clean:server',
            'wiredep',
            'injector',
            'concurrent:server',
            'postcss:server',
            'configureProxies:server', // added just before connect
            'connect:livereload',
            'watch'
            ]);
    });

    grunt.registerTask('setversion', function(arg1) {
        console.log(`Attempting to update version to ${arg1}`);
        var parsedJson= grunt.file.readJSON('bower.json');//read in the current
        parsedJson.version = arg1; //set the top level version field to arg1
        grunt.file.write('bower.json', JSON.stringify(parsedJson, null, 2));
    });

    grunt.registerTask('test', [ //
        'clean', //
        'wiredep', //
        'injector', //
        'concurrent:test', //
        'postcss:server', //
        'ngtemplates', //
        'karma:unit' //
        ]);

    grunt.registerTask('debug', [ //
        'clean', //
        'wiredep', //
        'injector', //
        'concurrent:server', //
        'postcss', //
        'ngtemplates', //
        'karma:debug' //
        ]);

    grunt.registerTask('build', [ //
        'wiredep', //
        'injector', //
        'clean:dist', //
        'concurrent:dist', //
        'concat:distcss', //
        'postcss', //
        'ngtemplates', //
        'concat:dist', //
        'ngAnnotate', //
        'copy:dist', //
        'uglify', //
//        'cssmin' //
        ]);

    grunt.registerTask('default', [ //
        'newer:eslint', //
        'test', //
        'build' //
        ]);

    grunt.registerTask('release', [ //
        'default', 
        'karma:build',
        'jsdoc'
        ]);
};
