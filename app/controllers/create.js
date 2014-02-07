hardwhere.controller('CreateAssetController', function($scope, $routeParams, apiFactory) {

    // http://assmanapi.azurewebsites.net/api/assettype
    // http://api.dribbble.com/shots/21603

    $scope.promise = apiFactory.getNewAsset($routeParams.id);

    $scope.promise.then(function(data) {
        $scope.properties = data;
    });

    $scope.FilterProps = function(data) {
        var result = {};
        angular.forEach(data, function(value, key) {
            if (key != 'Id' && key != 'AssetTypeId')
            {
                result[key] = value;
            }
        });
        return result;
    };

});