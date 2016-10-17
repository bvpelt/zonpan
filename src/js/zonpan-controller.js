/*
var zonpanApp = angular.module('zonpanApp', ['zonpanApp.services']);

zonpanApp.controller('zonpanController',
		function($scope, zonpanService) {
			console.log('ari');
			$scope.name = "Ari";
			$scope.getlist = false;

    		$scope.$watch('getlist', function(newGetlist) {
    			if (newGetlst) {
    				console.log('getlist');
		    		// We can call the events function
    				// on the object
    				zonpanService.events()
    					.success(function(data, status, headers) {
    						$scope.events = data.data;
    					})
    					.error(function(data, status, headers, config) {
                        	// This is called when the response
                        	// comes back with an error status
                        	$scope.events = status;
                        });
    				$scope.getlist = false;
    			}
    		})
    	}
	).run(function($scope) {
     		console.log('run');
         	$scope.someProperty = 'hello computer';
         	$scope.someAction = function() {
         		$scope.someProperty = 'hello human';
         		$scope.getlist = true;
         	};
         }
     );
*/

angular.module("myApp", ["myApp.services"])
	.controller('MyController',
		function($scope, zonpanService) {
			$scope.name = "Ari";
			$scope.getlist = false;
			$scope.algemeen = false;
			$scope.overzicht = false;

			$scope.clk_sites = function() {
				zonpanService.events('sites/list')
					.success(function(data, status, headers) {
                                 // the success function wraps
                                 // the response in data
                                 // so we need to call data.data to
                                 // fetch the raw data
                                 $scope.events = data.sites;

                                 $scope.algemeen = true;
                                 $scope.overzicht = false;
                    });

			}

			$scope.clk_overview = function() {
			zonpanService.events('site/221438/overview')
            					.success(function(data, status, headers) {
                                             // the success function wraps
                                             // the response in data
                                             // so we need to call data.data to
                                             // fetch the raw data
                                             $scope.events = data.overview;

                                             $scope.algemeen = false;
                                             $scope.overzicht = true;
                                });

            			}
		}
	);