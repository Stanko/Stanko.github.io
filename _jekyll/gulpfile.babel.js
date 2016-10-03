import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import childProcess from 'child_process';
//import notifier from 'gulp-notify/node_modules/node-notifier';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;
const stream = browserSync.stream;
const spawn = childProcess.spawn;

  gulp.task('styles', () => {
	return gulp.src('_sass/*.scss')
		.pipe($.plumber())
		.pipe($.sourcemaps.init())
		.pipe(
			$.sass.sync({
				outputStyle: 'compressed',
				precision: 10,
				includePaths: ['.']
			}).on('error', function(error) {
				// notifier.notify({
				// 	title: 'SASS error',
				// 	message: error.message
				// });
				console.log('\n   ---- SASS error ----');
				console.log(error.message);
			})
		)
		.pipe($.autoprefixer({ browsers: ['> 1%', 'last 2 versions', 'Firefox ESR'] }))
		// .pipe($.sourcemaps.write())
		.pipe(gulp.dest('.tmp/public/css/'))
		.pipe(stream())
		.pipe(gulp.dest('public/css/'))
		.pipe($.notify({
			title: 'Jekyll',
			message: 'CSS generated'
		}));
});

gulp.task('scripts', () => {
	return gulp.src('_js/**/*.js')
		.pipe($.plumber())
		.pipe($.concat('app.js'))
		.pipe($.sourcemaps.init())
		.pipe($.babel())
		.pipe($.sourcemaps.write('.'))
		.pipe(gulp.dest('public/js/'))
		.pipe(stream());
});

gulp.task('jekyll', function (){
	const jekyll = spawn('jekyll', ['serve', '--incremental'], { stdio: 'inherit' });

	jekyll.on('exit', function(code) {
		if (code !== 0) {
			$.notify(`ERROR: Jekyll process exited with code: ${code}`);
		}
	});
});

let reloadTimeout = null;
let start = new Date().getTime();

gulp.task('serve', ['jekyll', 'styles', 'scripts'], () => {
	browserSync({
		notify: false,
		port: 9000,
		proxy: 'localhost:4000',
		browser: [], // use 'google chrome' and/or 'firefox' to launch browser
		serveStatic: ['.tmp']
	});

	gulp.watch([
		'_site/**/*.html',
		'_site/public/img/**/*',
		'_site/public/js/**/*'
	]).on('change', function(e) {
    clearTimeout(reloadTimeout);
    // console.log('-',  new Date().getTime() - start, '-' ,e.path.replace('/Users/stanko/Projects/stanko.github.io/_site/', ''))

    // As jekyll rebuilds a lot of HTML pages
    // I added a small timeout, not to trigger multiple page reloads
    reloadTimeout = setTimeout(function () {
		  reload({ once: true });
    }, 50);
	});

	gulp.watch('_sass/**/*.scss', ['styles']);
	gulp.watch('_js/**/*.js', ['scripts']);
	// gulp.watch('app/fonts/**/*', ['fonts']);
});

gulp.task('default', [], () => {
	gulp.start('serve');
});
