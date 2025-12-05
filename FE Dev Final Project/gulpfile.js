import gulp from "gulp";
import shell from "gulp-shell";

gulp.task("parcel", shell.task(["npx parcel starter/index.html --open"]));

gulp.task("test", shell.task(["npx mocha"]));

gulp.task("cypress", shell.task(["npx cypress run"]));

gulp.task("default", gulp.series("parcel"));
