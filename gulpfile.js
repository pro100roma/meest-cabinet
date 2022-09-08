
var browserSync      = require('browser-sync').create();

var gulp = require('gulp');
const minify = require('gulp-minify');
const include = require('gulp-include')
const sass = require('gulp-sass')(require('sass'))

concat      = require('gulp-concat'); // Подключаем gulp-concat (для конкатенации файлов)


gulp.task('browser-sync', function(done) { 
  browserSync.init({
    server: {
      baseDir: 'front'
    },
    notify: false
  });
  
  browserSync.watch('front/').on('change', browserSync.reload);
  
  done()
}); 




gulp.task('scripts', function() {
    return gulp.src([ // Берем все необходимые библиотеки
      'dev/js/**/*.js'
      ])
      //.pipe(concat('common.js')) // Собираем их в кучу в новом файле 
      .pipe(minify()) // Сжимаем JS файл
      .pipe(gulp.dest('./front/js/')) // Выгружаем в папку app/js
      .pipe(browserSync.reload({stream: true}));

       done()
  });

gulp.task('sass', function(){
    return gulp.src('dev/css/**/*.scss') // Берем все sass файлы из папки sass и дочерних, если таковые будут
      .pipe(sass())
      .pipe(gulp.dest('./front/css/'))
      .pipe(browserSync.reload({stream: true}));

       done()
  });

gulp.task('templates',async function(done) {
  gulp.src('dev/**/*.html')
    .pipe(include())
      .on('error', console.log)
    .pipe(gulp.dest('./front/'))
    .pipe(browserSync.reload({stream: true}));

     done()
})

gulp.task('watch', gulp.series('sass','scripts','templates', 'browser-sync', function(done) {
    gulp.watch('dev/js/**/*.js', gulp.parallel('scripts'));
    gulp.watch('dev/css/**/*.scss', gulp.parallel('sass'));
    gulp.watch('dev/**/*.html', gulp.parallel('templates'));
  
  done()
}));

