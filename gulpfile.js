var gulp = require('gulp'),
	sass = require('gulp-sass'),
	gutil = require('gulp-util'),
	jshint = require('gulp-jshint'),
	concat = require('gulp-concat'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload;

var path = {
	sass:'app/assets/scss/*.scss',
	sassOutput:'public/assets/css',
	js:['app/assets/**/*.js'],
	jsBase:"app",
	jsOutput:'public',
	html:'app/**/*.html',
	htmlOutput:'public/',
}

//compile our scripts
gulp.task('scripts', function() {
  return gulp.src(path.js,{base:path.jsBase})
    .pipe(jshint.reporter('default'))
    .pipe(gulp.dest(path.jsOutput));
});

// Compile Our HTML
gulp.task('html',function(){
	gulp.src(path.html)
		.pipe(gulp.dest(path.htmlOutput));
});


// Compile Our Sass to CSS
gulp.task('sass',function(){
	gulp.src(path.sass)
		.pipe(sass({
			errLogToConsole:true
		}))
		.pipe(gulp.dest(path.sassOutput));
});

//BrowserSync
gulp.task('browser-sync', function() {
    browserSync.init(["../css/*.css", "../js/*.js"],{
        server: {
            baseDir: "./public",            
            index: "index.html"
        }
    });
});

//Watch Tasks
gulp.task('watch',function(){
	gulp.watch([path.sass],['sass',reload]);
	gulp.watch([path.html],['html',reload]);
	gulp.watch([path.js],['scripts',reload]);
})

gulp.task('default', ['sass', 'scripts','html','watch','browser-sync']);