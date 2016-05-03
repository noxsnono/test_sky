noxsApp.config(['$routeProvider', '$httpProvider',
				function ($routeProvider, $httpProvider) {
	$routeProvider.
	when('/welcome', {
		templateUrl: 'html/welcome.html',
		controller: 'welcomeController',
		controllerAs: 'welcome'
	}).
	otherwise({ redirectTo: '/welcome' });
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);
