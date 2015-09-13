'use strict';

/**
 * @ngdoc function
 * @name webappliedApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the webappliedApp
 */
angular.module('seatReservationApp',[])
.constant('reserveUrl', 'http://localhost:5500/reserved')
    .controller('BookCtrl', function ($scope,$http,reserveUrl) {
 $scope.data = {};


 $http.get(reserveUrl)
		.success(function (data) {
	$scope.data.seats = data;
	 for (var i=0;i<$scope.data.length;i++)
		{
     	 reserved.push($scope.data[i].seat);
      
   		}
 

	});
        // Init layout
        $scope.rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
        $scope.cols = [1, 2, 3, 4, 5, 6, 7, 8];
 
        // Set reserved and selected
        var reserved = [];
       
        var selected = [];
 
        // seat onClick
        $scope.seatClicked = function(seatPos) {
            console.log('Selected Seat: ' + seatPos);
            var index = selected.indexOf(seatPos);
            if(index !== -1) {
                // seat already selected, remove
                selected.splice(index, 1);
            } else {
                // new seat, push
                selected.push(seatPos);
            }
        };
 
        // get seat status
        $scope.getStatus = function(seatPos) {
            if(reserved.indexOf(seatPos) > -1) {
                return 'reserved';
            } else if(selected.indexOf(seatPos) > -1) {
                return 'selected';
            }
        };
 
        // clear selected
        $scope.clearSelected = function() {
            selected = [];
        };
 
        // show selected
        $scope.showSelected = function() {
            if(selected.length > 0) {
                console.log('Selected Seats: \n' + selected);
            } else {
           console.log('No seats');

            }
        };
 
    });
