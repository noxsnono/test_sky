SkyTestApp.config(['$routeProvider', '$httpProvider',
				function ($routeProvider, $httpProvider) {
	$routeProvider.
	when('/welcome', {
		templateUrl: 'html/welcome.html',
		controller: 'welcomeController',
		controllerAs: 'welcome'
	}).
	when('/devdocs', {
		templateUrl: 'html/devdocs.html',
		controller: 'devdocsController',
		controllerAs: 'devdocs'
	}).
	otherwise({ redirectTo: '/welcome' });
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);
