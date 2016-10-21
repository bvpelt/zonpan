
angular.module("myApp", ["myApp.services"])
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

        $scope.clk_overview = function () {
            zonpanService.events('site/221438/overview')
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
    }
    );