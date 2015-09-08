'use strict';

/**
 * @ngdoc function
 * @name webappliedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webappliedApp
 */
angular.module('webappliedApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
