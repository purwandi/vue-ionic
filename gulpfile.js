process.env.DISABLE_NOTIFIER = true;

var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix
        .sass('ionic.scss');

    mix
        .scripts([
            // Base
            'ionic.js',

            // Utils
            'utils/delegateService.js',
            'utils/dom.js',
            'utils/events.js',
            'utils/gestures.js',
            'utils/platform.js',
            'utils/poly.js',
            'utils/tap.js',
            'utils/activator.js',
            'utils/utils.js',
            // 'utils/list.js',
            'utils/keyboard.js',
            'utils/viewport.js',

                    // Views
            'views/view.js',
            'views/scrollView.js',
            'views/scrollViewNative.js',
            'views/listView.js',
            'views/modalView.js',
            'views/sideMenuView.js',
            'views/sliderView.js',
            'views/toggleView.js'

        ], 'public/js/ionic.js');

});
