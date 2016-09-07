/*
 * @file gulp file
 * @author leozhang2018 <leozhang2018@gmail.com>
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
var rev = require('gulp-rev')
var revCollector = require("gulp-rev-collector")

var paths = {
  img: 'src/img/**/!(PiLi-SDK_PxCook.png|9-layers.png)',
  style: 'src/less/*.less',
  font:'src/less/*.ttf',
  script:'src/js/*.js',
  page: 'src/*.mustache',
  partials: 'src/partials/*.mustache'
}

var dist = {
  img: 'dist/img/**',
  style: 'dist/css/!(*.ttf)',
  script:'dist/js/*.js',
  page: 'dist/*.html',
  font:'dist/css/*.ttf'
}


gulp.task('clean', function() {
  return gulp.src( 'dist/**', { read: false })
    .pipe(rm())
})

gulp.task('deploy-clean', function() {
  return gulp.src( 'deploy/**', { read: false })
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
      // <= 20 KB
      maxImageSize: 20 * 1024,
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


gulp.task('font', function() {
  return gulp.src(paths.font, { base: 'src/less' })
    .pipe(gulp.dest('./dist/css'))
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
  runSequence(['img', 'style','script', 'page','font'], cb)
})

gulp.task('hashjs', function(){
    return gulp.src(dist.script)
        .pipe(rev())  //set hash key
        .pipe(gulp.dest('./deploy/js/'))
        .pipe(rev.manifest()) //set hash key json
        .pipe(gulp.dest('./deploy/js/revJson')); //dest hash key json
});

gulp.task('hashcss', function(){
    return gulp.src(dist.style)
        .pipe(rev())  //set hash key
        .pipe(gulp.dest('./deploy/css/'))
        .pipe(rev.manifest()) //set hash key json
        .pipe(gulp.dest('./deploy/css/revJson')); //dest hash key json
});


gulp.task('rev', function () {
    return gulp.src(['./deploy/**/revJson/*.json', './dist/*html'])
        .pipe( revCollector({
            replaceReved: true,
        }) )
        .pipe( gulp.dest('./deploy') );
});

gulp.task('font-deploy', function() {
  return gulp.src(dist.font, { base: 'dist/css' })
    .pipe(gulp.dest('./deploy/css'))
})

gulp.task('img-deploy', function() {
  return gulp.src(dist.img, { base: 'dist/img' })
    .pipe(gulp.dest('./deploy/img'))
})

gulp.task('deploy', ['deploy-clean'], function(cb) {
  runSequence(['hashjs', 'hashcss','font-deploy', 'img-deploy'],'rev', cb)
})

gulp.task('default', ['build'])
