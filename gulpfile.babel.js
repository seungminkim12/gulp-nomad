import gulp from 'gulp';
import gulppug from 'gulp-pug';
import del from 'del';
// const del = require('del')

const routes = {
    pug: {
        src: "src/*.pug",
        dest: "build"
    }
}

const pug = () => 
    gulp
    .src(routes.pug.src)
    .pipe(gulppug())
    .pipe(gulp.dest(routes.pug.dest))

const clean = () => del(['build']) 

const prepare = gulp.series([clean])

const assets = gulp.series([pug])

export const dev = gulp.series([prepare, assets])