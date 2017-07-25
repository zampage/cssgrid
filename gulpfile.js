var manager = require('is-private-gulp-manager');

var sassPaths = [
    'node_modules'
];

var dir = {
    scss: {
        main: 'sass/app.scss',
        watch: 'sass/**/*.scss'
    },
    css: {
        dist: 'dist/'
    }
};

//SCSS
manager.registerTask('compile-scss', [dir.scss.main, dir.css.dist, sassPaths]);

//GROUPS
manager.groupSerial('build-css', ['compile-scss']);

//WATCH
manager.watch('watch-scss', dir.scss.watch, ['build-css']);

//MAIN
manager.groupParallel('build', ['build-css']);
manager.groupParallel('watch', ['watch-scss']);
manager.groupSerial('default', ['build', 'watch']);

manager.init();