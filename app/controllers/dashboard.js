hardwhere.controller('DashboardController', function($scope, apiFactory) {




    $scope.assets = apiFactory.getAssets();

    // OR USE THIS (FOR INITIALIZING MUTLIPLE THINGS)
    // $scope.assets = [];
    // init();
    // function init() {
    //     $scope.apiFactory.getPeople();
    // }

    // $scope.addAsset = function() {
    //     $scope.people.push({
    //         name: $scope.newAsset.name,
    //         desc: $scope.newAsset.desc,
    //         serial: $scope.newAsset.serial
    //     });
    // }

    $scope.addAsset = function() {
        $scope.people.push({
            id: 4, 
            AssetTypeId: 4, 
            Properties: [
                {name: "Macbook Pro"}, 
                {desc: "2013 Apple Macbook Pro"}
            ]
        });
    }

});