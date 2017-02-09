var flowerController = angular.module('flowerController',[]);


flowerController.controller('ListController',['$scope','$http',function($scope, $http) {
	$http.get('data/data.json').then(function(response){
		$scope.flowers = response.data;
	},function(err){
		console.error(err);
	});
}]);


flowerController.controller('DetailsController',['$scope','$http','$routeParams',function($scope, $http,$routeParams) {
	$http.get('data/data.json').then(function(response){
		$scope.flowers = response.data;
		$scope.whichItem = $routeParams.itemId;
		if($routeParams.itemId > 0) {
			$scope.prevItem = Number($routeParams.itemId) - 1;
		}else {
			$scope.prevItem = $scope.flowers.length - 1;
		}

		if($routeParams.itemId < $scope.flowers.length-1) {
			$scope.nextItem = Number($routeParams.itemId) + 1;
		}else {
			$scope.nextItem = 0;
		}
	},function(err){
		console.error(err);
	});	

}]);