'use strict';

/**
 * @ngdoc function
 * @name webappliedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webappliedApp
 */
angular.module('sportstore', ['customFilters','cart','ds.clock'])
.constant('productListActiveClass', 'btn-primary')
.constant('dataUrl', 'http://localhost:5500/products')
.constant('orderUrl', 'http://localhost:5500/orders')
.constant('productListPageCount', 3)
  .controller('ProCtrl', function ($scope,$resource,productListActiveClass,productListPageCount,$http,$location,dataUrl,orderUrl,$route,cart) {
 $scope.data = {};


 $http.get(dataUrl)
		.success(function (data) {
	$scope.data.products = data;
})
.error(function (error) {
$scope.data.error = error;
}); 

$scope.getProductDetails = function(item){
	
	$scope.data.items = item;
	console.log('hi' +$scope.data.items.name);
};
$scope.sendOrder = function (shippingDetails) {
var order = angular.copy(shippingDetails);
order.products = cart.getProducts();
$http.post(orderUrl, order)
.success(function (data) {
$scope.data.orderId = data.id;
cart.getProducts().length = 0;
})
.error(function (error) {
$scope.data.orderError = error;
}).finally(function () {

$location.path('/complete');
});
};
var selectedCategory = null;
$scope.selectedPage = 1;
$scope.pageSize = productListPageCount;
$scope.selectCategory = function (newCategory) {
	selectedCategory = newCategory;
	$scope.selectedPage = 1;
};
$scope.reloadPage = function(){
	$route.reload();
};

$scope.selectPage = function (newPage) {
	$scope.selectedPage = newPage;
};
$scope.addProductToCart = function (product) {
cart.addProduct(product.id, product.name, product.price);
};

$scope.categoryFilterFn = function (product) {
	return selectedCategory === null ||
			product.category === selectedCategory;
};

$scope.getCategoryClass = function (category) {
	return selectedCategory === category ? productListActiveClass : '';
};

$scope.getPageClass = function (page) {
	return $scope.selectedPage === page ? productListActiveClass : '';
};

  }).controller('cartSummaryController', function($scope, cart) {
$scope.cartData = cart.getProducts();
$scope.total = function () {
var total = 0;
for (var i = 0; i < $scope.cartData.length; i++) {
total += ($scope.cartData[i].price * $scope.cartData[i].count);
}
return total;
};
$scope.remove = function (id) {
cart.removeProduct(id);
};
}).controller('loginCtrl', function($scope,$location,$rootScope) {
	$scope.submit = function() {

		if($scope.username ==='admin' && $scope.password==='admin'){
			$rootScope.loggedIn =true;
			$rootScope.pwd =$scope.password;
			$location.path('/menu');
		}
	};

});
