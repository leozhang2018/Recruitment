/*
 * @file gulp file
 * @author nighca <nighca@live.cn>
 */

var gulp = require('gulp')
var rm = require('gulp-rm')
var rename = require("gulp-rename")
var mustache = require("gulp-mustache")
var less = require('gulp-less')
var base64 = require('gulp-base64')
var minifyCss = require('gulp-minify-css')
var imagemin = require('gulp-imagemin')
var runSequence = require('run-sequence')
var uglify = require('gulp-uglify')
var LessAutoprefix = require('less-plugin-autoprefix')

var paths = {
  img: 'src/img/**/!(PiLi-SDK_PxCook.png|9-layers.png)',
  style: 'src/less/*.less',
  script:'src/js/*.js',
  page: 'src/*.mustache',
  partials: 'src/partials/*.mustache'
}

gulp.task('clean', function() {
  return gulp.src( 'dist/**', { read: false })
    .pipe(rm())
})

gulp.task('img', function() {
  return gulp.src(paths.img, { base: 'src/img' })
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'))
})

gulp.task('style', function() {
  var autoprefix = new LessAutoprefix({
    browsers: [
      'last 2 versions',
      'ie >= 9',
      'Firefox >= 20',
      'Chrome >= 45',
      'iOS >= 7',
      'Android >= 4.4'
    ]
  })

  return gulp.src(paths.style, { base: 'src/less' })
    .pipe(less({ plugins: [autoprefix] }))
    .pipe(base64({
      extensions: ['png', 'jpg'],
      // <= 10 KB
      maxImageSize: 10 * 1024,
      debug: false
    }))
    .pipe(minifyCss())
    .pipe(gulp.dest('./dist/css'))
})

gulp.task('script', function() {
  return gulp.src(paths.script, { base: 'src/js' })
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
})

gulp.task('page', function() {
  return gulp.src(paths.page, { base: 'src' })
    // .pipe(mustache())
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest('./dist'))
})

gulp.task('watch', ['build'], function() {
  gulp.watch([paths.style, paths.img], function() {
    runSequence('style')
  })
  gulp.watch(paths.script, function() {
    runSequence('script')
  })
  gulp.watch([paths.page, paths.partials], function() {
    runSequence('page')
  })
})

gulp.task('build', ['clean'], function(cb) {
  runSequence(['img', 'style','script', 'page'], cb)
})

gulp.task('default', ['build'])
