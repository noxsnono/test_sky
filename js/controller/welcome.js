//console.log('Welcome Loaded');

noxsController.controller('welcomeController',
		['$scope', '$http', '$cookies', '$location',
		function($scope, $http, $cookies, $location) {

	$scope.file;

	$http.get(jsonRequestUrl)
	.success(function(data) {
		$scope.allData = data;

		$scope.statement = data.statement;
		$scope.total = data.total;
		$scope.package = data.package;
		$scope.callCharges = data.callCharges;
		$scope.skyStore = data.skyStore;

		/*console.log($scope.statement);
		console.log($scope.total);
		console.log($scope.package);
		console.log($scope.callCharges);
		console.log($scope.skyStore);*/
		console.log('json Success Loaded');
	})
	.error(function(data) {
		console.log('json Failed');
	});
}]);
