angular.module('myApp', ['myApp.services', 'ngAnimate', 'ngSanitize', 'ui.bootstrap'])
    .controller('MyController',
    	function ($scope, zonpanService) {
        	$scope.name = "Ari";
        	$scope.getlist = false;
        	$scope.algemeen = false;
        	$scope.overzicht = false;

        	$scope.clk_sites = function () {
            	zonpanService.events('sites/list')
                	.success(function (data, status, headers) {
                    // the success function wraps
                    // the response in data
                    // so we need to call data.data to
                    // fetch the raw data
                    	$scope.events = data.sites;

                    	$scope.algemeen = true;
                    	$scope.overzicht = false;
                	});

        	}

        	$scope.clk_overview = function (index) {

            	$scope.clk_sites();
            	var site_id = $scope.events.site[index].id;
            	zonpanService.events('site/'+ site_id + '/overview')
                	.success(function (data, status, headers) {
                    // the success function wraps
                    // the response in data
                    // so we need to call data.data to
                    // fetch the raw data
                    	$scope.events = data.overview;

                    	$scope.algemeen = false;
                    	$scope.overzicht = true;
                	});

        	}

        	$scope.clk_data = function () {
            	zonpanService.events('sites/list')
                	.success(function (data, status, headers) {
                    // the success function wraps
                    // the response in data
                    // so we need to call data.data to
                    // fetch the raw data
                    	$scope.events = data.sites;

                    	$scope.algemeen = true;
                    	$scope.overzicht = false;
                	});

        	}
    	}
    ).controller('DatepickerDemoCtrl',
    	function ($scope) {
       		$scope.today = function() {
         		$scope.dt = new Date();
       		};
       		$scope.today();

       		$scope.clear = function() {
         		$scope.dt = null;
       		};

       		$scope.options = {
         		customClass: getDayClass,
         		minDate: new Date(),
         		showWeeks: true
       		};

       		// Disable weekend selection
       		function disabled(data) {
         		var date = data.date,
           		mode = data.mode;
         		return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
       		}

       		$scope.toggleMin = function() {
         		$scope.options.minDate = $scope.options.minDate ? null : new Date();
       		};

       		$scope.toggleMin();

       		$scope.setDate = function(year, month, day) {
         		$scope.dt = new Date(year, month, day);
       		};

       		var tomorrow = new Date();
       		tomorrow.setDate(tomorrow.getDate() + 1);
       		var afterTomorrow = new Date(tomorrow);
       		afterTomorrow.setDate(tomorrow.getDate() + 1);
       		$scope.events = [
        		{
           			date: tomorrow,
           			status: 'full'
         		},
         		{
           			date: afterTomorrow,
           			status: 'partially'
         		}
       		];

       		function getDayClass(data) {
         		var date = data.date,
           		mode = data.mode;
         		if (mode === 'day') {
           			var dayToCheck = new Date(date).setHours(0,0,0,0);

           			for (var i = 0; i < $scope.events.length; i++) {
             			var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

             			if (dayToCheck === currentDay) {
               				return $scope.events[i].status;
             			}
           			}
         		}

         	return '';
       		}
    	}
    );