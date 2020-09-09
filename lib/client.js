$(document).ready(function() {
	if (config['google-analytics'] && config['google-analytics'].id) {
		// GA Snippet
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		ga('create', config['google-analytics'].id, 'auto');
		if (config['google-analytics'].displayFeatures === 'on') {
			ga('require', 'displayfeatures');
		}
		ga('send', 'pageview');

		// Page pushing
		$(window).on('action:ajaxify.end', function(ev, data) {
			ga('send', 'pageview', config.relative_path + '/' + data.url);
		});
	} else {
		if (window.console) {
			console.warn('[plugins/google-analytics] Your Google Analytics Asset ID could not be retrieved. Please double-check that it is set in the plugin\'s settings.');
		}
	}
});
