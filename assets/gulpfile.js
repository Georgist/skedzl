var gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins(),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;

// paths congif
var path = {
    sassSrc: './sass/**/*.scss',
    cssDest: '../public/css',
    jsSrc: './js/**/*.js',
    jsDest: '../public/js'
};

// console.log(Object.keys(plugins));

// compile sass files
gulp.task('sass:compile', function() {
    return gulp.src(path.sassSrc)
        .pipe(plugins.wait(250))
        .pipe(plugins.plumber())
        .pipe(plugins.sass().on('error', plugins.sass.logError))
        .pipe(plugins.autoprefixer({browsers: ['last 2 versions', 'Safari 7', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']}))
        .pipe(plugins.mergeMediaQueries())
        .pipe(plugins.cleanCss())
        .pipe(gulp.dest(path.cssDest));
});

// compile sass files
gulp.task('js:compile', function() {
    return gulp.src(path.jsSrc)
        .pipe(plugins.wait(250))
        .pipe(plugins.plumber())
        .pipe(plugins.uglify())
        .pipe(plugins.rename(function(path) {
            path.extname = ".min.js"
        }))
        .pipe(gulp.dest(path.jsDest));
});

// default task watcher
gulp.task('default', function() {
    gulp.watch(path.sassSrc, gulp.series('sass:compile'));
    gulp.watch(path.jsSrc, gulp.series('js:compile'));
});