const gulp=require('gulp');
const sass =require('gulp-sass');
const browserSync=require('browser-sync').create();
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var paths = {
  scripts: {
    src: './node_modules/bootstrap/dist/js/**/*.js',
    dest: './src/js'
  },
  styles: {
    src: './node_modules/bootstrap/dist/scss/**/*.scss',
    dest: './src/scss'
  }
};



// function style(){
// return gulp.src('./src/scss/**/*.scss')
//   .pipe(sass().on('error',sass.logError))
//   .pipe(gulp.dest('./src/css'))
//   //.pipe(browserSync.stream());
//
// }
function style(){
return gulp.src('./node_modules/bootstrap/dist/css/*.css')
  .pipe(sass().on('error',sass.logError))
  .pipe(gulp.dest('./src/css'))
  //.pipe(browserSync.stream());
}

function scripts1(){
return gulp.src(
['./node_modules/bootstrap/dist/js/bootstrap.js'])
.pipe(concat('bootstrap.min.js'))
.pipe(uglify())
.pipe(gulp.dest('./src/js'))
  //.pipe(browserSync.stream());
}
function scripts2(){
return gulp.src(['./node_modules/jquery/dist/jquery.js']
,['./node_modules/jquery/dist/jquery.slim.js']
,['../src/index.js']
)
.pipe(concat('jquery.min.js'))
.pipe(uglify())
.pipe(gulp.dest('./src/js'))

}

function watch(){
  browserSync.init({
    sever :{
       //baseDr:"./src",
       index:"./index.html"
    }
  });
  gulp.watch("src/scss/**/*.scss",style)
  gulp.watch('./*.html').on('change',browserSync.reload);
  gulp.watch('./js/**/*.js').on('change',browserSync.reload);
}
//
h=watch;

exports.style=style;
exports.scripts1=scripts1;
exports.scripts2=scripts2;
exports.watch=watch;
