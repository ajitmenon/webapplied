'use strict';

/**
 * @ngdoc overview
 * @name webappliedApp
 * @description
 * # webappliedApp
 *
 * Main module of the application.
 */
angular
  .module('webappliedApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'sportstore',
    'cart',
    'sportsStoreAdmin',
    'ds.clock',
    'chartview',
    'seatReservationApp',
       'angular-loading-bar'
       
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      }).when('/menu', {
        resolve: {
          'check': function($location,$rootScope){
            if(!$rootScope.loggedIn){
              $location.path('/');
            } else {
             
            }
          }
        },
           templateUrl: 'views/menu.html'    
      }).when('/checkout', {
        templateUrl: 'views/checkoutSummary.html',
        controller:'cartSummaryController'
       
      }).when('/chat', {
        templateUrl: 'views/chat.html'
       
      }).when('/viewProduct', {
        templateUrl: 'views/viewProduct.html',
        controller: 'ProCtrl'
       
      }).when('/tracker', {
        templateUrl: 'views/tracker.html',
        controller: 'trackerCtrl'
       
      }).when('/about', {
        templateUrl: 'views/block.html'
       
       
      }).when('/time', {
        templateUrl: 'views/time.html'
       
       
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
       
      })      
      .when('/complete', {
        templateUrl: 'views/summary.html',
               
      }).when('/placeorder', {
        templateUrl: 'views/placeOrder.html',
          controller: 'ProCtrl'
              
      }).when('/main', {
        templateUrl: 'views/main.html',
              
      }).when('/adminOrders', {
        templateUrl: 'views/adminOrders.html',
              
      }).when('/adminProducts', {
        templateUrl: 'views/adminProducts.html',
              
      }).when('/newItem', {
        templateUrl: 'views/newItem.html',
              
      }).when('/chart', {
        templateUrl: 'views/charts.html',
            
      }).when('/barchart', {
        templateUrl: 'views/barchart.html',
            
      }).when('/dougchart', {
        templateUrl: 'views/dougchart.html',
            
      }).when('/radar', {
        templateUrl: 'views/radar.html',
            
      }).when('/pie', {
        templateUrl: 'views/pie.html',
            
      }).when('/polar', {
        templateUrl: 'views/polar.html',
            
      }).when('/dynamic', {
        templateUrl: 'views/dynamic.html',
            
      }).when('/book', {
        templateUrl: 'views/book.html',
        controller: 'BookCtrl'
        
            
      }).when('/databinding', {
        templateUrl: 'views/databinding.html',
   
            
      })
      .when('/sportstore', {
        templateUrl: 'views/sportstore.html',
        controller: 'ProCtrl'
       
      }).otherwise({
        redirectTo: '/'
      });
  });
