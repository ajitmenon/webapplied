'use strict';

/**
 * @ngdoc function
 * @name webappliedApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the webappliedApp
 */
angular.module('sportsStoreAdmin',[])
.constant('authUrl', 'http://localhost:5500/users/login')
.constant('ordersUrl', 'http://localhost:5500/orders')
.constant('productUrl', 'http://localhost:5500/products/')
.constant('trackerUrl', 'http://localhost:5500/tracker/')
.constant('partrackerUrl', 'http://localhost:5500/party/')
.config(function($httpProvider) {
$httpProvider.defaults.withCredentials = true;
})
.controller('authCtrl', function($scope, $http, $location, authUrl) {
$scope.authenticate = function (user, pass) {
$http.post(authUrl, {
username: user,
password: pass
}, {
withCredentials: true
}).success(function () {
$location.path('/main');
}).error(function (error) {
$scope.authenticationError = error;
});
};
}).
controller('ordersCtrl', function ($scope, $http, ordersUrl) {
$http.get(ordersUrl, {withCredentials : true})
.success(function (data) {
$scope.orders = data;
})
.error(function (error) {
$scope.error = error;
});
$scope.selectedOrder= '';
$scope.selectOrder = function(order) {
$scope.selectedOrder = order;
};
$scope.calcTotal = function(order) {
var total = 0;
for (var i = 0; i < order.products.length; i++) {
total +=
order.products[i].count * order.products[i].price;
}
return total;
};
}).controller('productCtrl', function ($scope, $resource, productUrl) {
$scope.productsResource = $resource(productUrl + ':id', { id: '@id' });
$scope.listProducts = function () {
$scope.products = $scope.productsResource.query();
};
$scope.deleteProduct = function (product) {
product.$delete().then(function () {
$scope.products.splice($scope.products.indexOf(product), 1);
});
};
$scope.createProduct = function (product) {
new $scope.productsResource(product).$save().then(function (newProduct) {
$scope.products.push(newProduct);
$scope.editedProduct = null;
});
};
$scope.updateProduct = function (product) {
product.$save();
$scope.editedProduct = null;
};
$scope.startEdit = function (product) {
$scope.editedProduct = product;
};


$scope.cancelEdit = function () {
$scope.editedProduct = null;
};
$scope.listProducts();
}).controller('trackerCtrl', function ($scope, $resource, trackerUrl) {
$scope.trackerResource = $resource(trackerUrl + ':id', { id: '@id' });
$scope.listResources = function () {
$scope.resources = $scope.trackerResource.query();
};
$scope.deleteResource = function (emp) {
emp.$delete().then(function () {
$scope.resources.splice($scope.resources.indexOf(emp), 1);
});
};
$scope.createResource = function (emp) {
new $scope.trackerResource(emp).$save().then(function (newemp) {
$scope.resources.push(newemp);
$scope.editedResource = null;
});
};
$scope.updateResource = function (emp) {
emp.$save();
$scope.editedResource = null;
};
$scope.startEditTrack = function (emp) {
$scope.editedResource = emp;
};


$scope.cancelEdit = function () {
$scope.editedResource = null;
};
$scope.listResources();
});



