const { src, dest, parallel } = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');

function css() {
  return src('sass/main.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(dest('public/build'))
}

function js() {
  return src(['js/jquery.js', 'js/bootstrap.min.js', 'js/js.js'], { sourcemaps: true })
    .pipe(concat('app.min.js'))
    .pipe(dest('public/build', { sourcemaps: true }))
}

exports.js = js;
exports.css = css;
exports.default = parallel(css, js);
