SkyTestController.controller('welcomeController',
		['$scope', '$http', '$cookies', '$location', '$window',
		function($scope, $http, $cookies, $location, $window) {

	$scope.printIt = function(){
	   var table = document.getElementById('printArea').innerHTML;
	   var myWindow = $window.open('', '', 'width=1024, height=600');

	   myWindow.document.write(table);
	   myWindow.print();
	};

	$http.get(jsonRequestUrl)
	.success(function(data) {
		$scope.allData = data;
		$scope.statement = data.statement;
		$scope.total = data.total;
		$scope.package = data.package;
		$scope.callCharges = data.callCharges;
		$scope.skyStore = data.skyStore;
		console.log('json Success Loaded');
	})
	.error(function(data) {
		console.log('json Failed');
	});

}]);
