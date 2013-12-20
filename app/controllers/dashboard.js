hardwhere.controller('DashboardController', function($scope, apiFactory) {

    // http://assmanapi.azurewebsites.net/api/assettype

    $scope.assets = apiFactory.getAssets();

    $scope.addAsset = function() {
        $scope.assets.push({
            name: $scope.newAsset.name,
            desc: $scope.newAsset.desc,
            serial: $scope.newAsset.serial
        });
    }

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