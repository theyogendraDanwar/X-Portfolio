var gulp=require('gulp');
// var uglify=require('gulp-uglify');
var compass=require('gulp-compass');
var imagemin = require('gulp-imagemin');
var cleanCSS = require('gulp-clean-css');

// gulp.task('scripts',function(){
// 	gulp.src('js/**/*.js')
// 	.pipe(uglify())
// 	.pipe(gulp.dest('dist/js'))
// });

gulp.task('compass',function(){
	gulp.src('sass/**/*.scss')
	.pipe(compass({
		config_file:'config.rb',
		css:'css',
		sass:'sass'
	}))
	.pipe(gulp.dest('css'))
});

gulp.task('imagemin',()=>
	gulp.src('images/*')
	.pipe(imagemin())
	.pipe(gulp.dest('dist/images'))
);

gulp.task('minify-css', function() {
  return gulp.src('css/**/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('default',['compass','imagemin','minify-css'],function(){
	gulp.watch('sass/**/*.scss',['compass']);
	// gulp.watch('js/**/*.js',['scripts']);
	gulp.watch('images/*',['imagemin']);
	gulp.watch('css/**/*.css',['minify-css']);
})