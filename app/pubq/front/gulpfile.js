const gulp = require('gulp');
const replace = require('gulp-replace');
const header = require('gulp-header');
const rename = require('gulp-rename');

const staticIndexPath = '../static/dashboard/index.html';
const templatePath = '../pubq_app/templates/pubq_app/spa.html';

function copy() {
  return gulp
  .src('./dist/**/*')
  .pipe(gulp.dest('../static/dashboard'));
}

function toTemplateStyle() {
  return gulp
    .src(staticIndexPath)
    .pipe(replace(/(\/(js|css|img)+.+?)(\s|>)/g, "{% static 'dashboard$1' %} $3"))
    .pipe(header('{% load static %}'))
    .pipe(rename('spa.html'))
    .pipe(gulp.dest("../pubq_app/templates/pubq_app/"));
}


gulp.task('copy', copy);
gulp.task('replace', toTemplateStyle);
