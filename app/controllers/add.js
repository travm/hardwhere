hardwhere.controller('AddAssetController', function($scope, $routeParams, apiFactory) {

    // http://assmanapi.azurewebsites.net/api/assettype
    // http://api.dribbble.com/shots/21603
    $scope.types = apiFactory.getAssetTypes();

    $scope.createNewAsset = apiFactory.getNewAsset($routeParams.Id);

    $scope.addAsset = function() {
        $scope.assets.push({
            name: $scope.newAsset.name,
            desc: $scope.newAsset.desc,
            serial: $scope.newAsset.serial
        });
    }

});