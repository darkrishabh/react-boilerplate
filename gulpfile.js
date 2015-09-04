var gulp = require('gulp'),
    gutil = require('gulp-util')

// HTML
gulp.task('html', function() {
    return gulp.src('./index.html')
        .pipe(gulp.dest('build'))
})

// Scripts
gulp.task('scripts', function() {
    var browserify = require('gulp-browserify'),
        reactify = require('reactify'),
        literalify = require('literalify'),
        rename = require('gulp-rename')

    return gulp.src('./src/app.jsx')
        .pipe(browserify({
            debug: true,
            extensions: ['.jsx', '.js', '.json'],
            transform: [reactify, {"harmony": true}]
        }))
        .on('error', function(err) {
            gutil.log(err.message)
        })
        .pipe(rename('client.js'))
        .pipe(gulp.dest('build'))
})


// Webserver w/LiveReload
gulp.task('serve', ['default', 'watch'], function() {
    var express = require('express'),
        api = require('./api'),
        livereload = require('gulp-livereload'),
        watch = require('gulp-watch'),
        open = require('open')

    var port = process.env.port || 3000

    express()
        .use(api)
        .use(express.static('./build'))
        .use(function(req, res) {
            res.sendfile('./build/index.html')
        })
        .listen(port, function() {
            open('http://localhost:' + port)
        })

    gulp.src('build/**')
        .pipe(watch({
            name: 'build'
        }))
        .pipe(livereload())
})

// Watch
gulp.task('watch', function() {
    gulp.watch('./index.html', ['html'])
    gulp.watch('src/**', ['scripts'])
})

gulp.task('default', ['html', 'scripts'])