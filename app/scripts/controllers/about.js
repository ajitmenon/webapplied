'use strict';

/**
 * @ngdoc function
 * @name webappliedApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the webappliedApp
 */
angular.module('webappliedApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
