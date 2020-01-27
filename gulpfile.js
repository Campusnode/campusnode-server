const gulp = require('gulp');
const ts = require('gulp-typescript');

const project = ts.createProject('tsconfig.json');

function buildTS () {
  return project.src()
                .pipe(project())
                .js.pipe(gulp.dest('dist'));
}

gulp.task('default', buildTS);

gulp.task('watch', function () {
  gulp.watch(project.config.include, gulp.series('default'));
});
