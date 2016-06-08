require.config({
	urlArgs: '',
	baseUrl: '../src',
	paths: {
		'main': 'main',
		'clear': 'clear',
		'view': 'view'
	},
	shim: {
		// 'mian': {
		// 	exports: '',
		// 	deps: ['']
		// }
	}
});
define('tabs', function() {
	return chrome.tabs;
});

define('cookies', function() {
	return chrome.cookies;
});

define('menus', function() {
	return chrome.contextMenus;
});

define('chromeExtension', function() {
	return chrome.extension;
});
require(['main'], function(main) {
	main.init();
});
// require(['jsview'], function(jsview) {
// 	jsview.start();
// });