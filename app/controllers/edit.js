hardwhere.controller('EditAssetController', function($scope, $routeParams, apiFactory) {

    // http://assmanapi.azurewebsites.net/api/assettype
    // http://api.dribbble.com/shots/21603

    $scope.types = apiFactory.getAssetTypes();

    $scope.asset = apiFactory.getAsset($routeParams.id);

    $scope.editAsset = function() {
        $scope.assets.push({
            name: $scope.editAsset.name,
            desc: $scope.editAsset.desc,
            serial: $scope.editAsset.serial
        });
    }

    $scope.deleteAsset = function(id) {
        console.log(id);
        $scope.assets.splice({
            Id: id
        });
    }

});