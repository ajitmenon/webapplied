'use strict';

/**
 * @ngdoc function
 * @name webappliedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webappliedApp
 */
angular.module('chartview', ['chart.js']).controller('LineCtrl', function ($scope) {
  $scope.colours = ['Blue','white'];
  $scope.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  $scope.series = ['Product A', 'Product B'];
  $scope.data = [
    [65, 59, 80, 81, 56, 65, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];

  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
}).controller('BarCtrl', function ($scope) {
  $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  $scope.series = ['Product A', 'Product B'];
   $scope.colours = ['yellow','green'];

  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
}).controller('DoughnutCtrl', function ($scope) {
  $scope.labels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  $scope.data = [300, 500, 100];
   $scope.colours = ['Blue','white','red'];
}).controller('RadarCtrl', function ($scope) {
  $scope.labels =['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  $scope.data = [
    [65, 59, 90, 81, 56, 55, 40],
    [28, 48, 40, 19, 96, 27, 100]
  ];
}).controller('PieCtrl', function ($scope) {
  $scope.labels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  $scope.data = [300, 500, 100];
}).controller('PolarAreaCtrl', function ($scope) {
  $scope.labels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Tele Sales', 'Corporate Sales'];
  $scope.data = [300, 500, 100, 40, 120];
}).controller('BaseCtrl',
  function ($scope) {
    $scope.labels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Tele Sales', 'Corporate Sales'];
    $scope.data = [300, 500, 100, 40, 120];
    $scope.type = 'PolarArea';

    $scope.toggle = function () {
      $scope.type = $scope.type === 'PolarArea' ?
        'Pie' : 'PolarArea';
    };
});
