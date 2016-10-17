angular.module('myApp.services', [])
	.factory('zonpanService', function($http) {

		var zonpanHost = 'https://monitoringapi.solaredge.com/';
		var zonpanAPIKey = 'OFKMR38I1N2SDMD9I65V6PVKTD7VM7QZ';
		//var githubUrl = 'https://api.github.com';
		var zonpanOperation = 'sites/list';

		var runRequest = function(operatie) {
			// Return the promise from the $http service
			// that calls the Github API using JSONP
			return $http({
				method: 'JSONP',
				url: zonpanHost + operatie + '?api_key=' + zonpanAPIKey + '&callback=JSON_CALLBACK'
				//url: zonpanHost + zonpanOperation + '?api_key=' + zonpanAPIKey + '&callback=JSON_CALLBACK'
			});
		}
		// Return the service object with a single function
		// events
		return {
			events: function(operatie) {
				return runRequest(operatie);
				}
		};
	}
);