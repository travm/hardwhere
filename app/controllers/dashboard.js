hardwhere.controller('DashboardController', function($scope, $routeParams, apiFactory) {

    // http://assmanapi.azurewebsites.net/api/assettype
    // http://api.dribbble.com/shots/21603

    $scope.assets = apiFactory.getAssets();

    $scope.deleteAsset = function(id) {
        console.log(id);
        $scope.assets.splice({
            Id: id
        });
    }

});