import gulp from 'gulp';
import browserSync from 'browser-sync';
import gulpSass from 'gulp-sass';
import * as sass from 'sass';
import cleanCSS from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import rename from 'gulp-rename';

const sassCompiler = gulpSass(sass);



// Задача для сервера
gulp.task('server', function () {
    browserSync({
        server: {
            baseDir: "src/"
        }
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);
});

// Задача для обработки стилей
gulp.task('styles', function () {
    return gulp.src("src/sass/**/*.+(scss|sass)")
        .pipe(sassCompiler({ outputStyle: 'compressed' }).on('error', sassCompiler.logError))
        .pipe(rename({ suffix: '', prefix: '' }))
        .pipe(autoprefixer())
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

// Задача для отслеживания изменений
gulp.task('watch', function () {
    gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel('styles'));
});


// Задача по умолчанию
gulp.task('default', gulp.parallel('watch', 'server', 'styles'));