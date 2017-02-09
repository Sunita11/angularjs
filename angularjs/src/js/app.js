var myApp = angular.module('myApp',[
	'ngRoute',
	'flowerController'
]);

myApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {

	$locationProvider.hashPrefix('');
	$routeProvider.
	when('/list',{
		templateUrl:'src/partials/list.html',
		controller: 'ListController'				
	}).when('/details/:itemId',{
		templateUrl:'src/partials/details.html',
		controller:'DetailsController'
	}).otherwise({
		redirectTo:'/list'
	});
}]);
