hardwhere.factory('apiFactory', function($resource){
    
    // var assets = [
    //     { "id": 1, "AssetTypeId": 1, "Properties": [{"name": "Macbook Pro"}, {"desc": "2013 Apple Macbook Pro"}]},
    //     { "id": 1, "AssetTypeId": 2, "Properties": [{"name": "Macbook Pro"}, {"desc": "2013 Apple Macbook Pro"}]},
    //     { "id": 1, "AssetTypeId": 3, "Properties": [{"name": "Macbook Prols"}, {"desc": "2013 Apple Macbook Pro"}]},
    //     { "id": 1, "AssetTypeId": 1, "Properties": [{"name": "Macbook Pro"}, {"desc": "2013 Apple Macbook Pro"}]}
    // ];

    var factory = {};

    factory.getAssets = function() {

        // AJAX Call?

        // $.ajax({
        //     url: "http://assmanapi.azurewebsites.net/api/assettype/",
        //     headers: {
        //         "Authorization": "Basic " + btoa("kent" + ":" + "iheartacos")
        //     },
        //     type: "Get",

        // });

        var assetManager = $resource('http://assmanapi.azurewebsites.net/api/goodasset');
        var assets = assetManager.query({}, function() { console.log(assets);});
        console.log(assets);
        return assets;

        // $http({
        //     url: "http://assmanapi.azurewebsites.net/api/asset",
        //     method: "GET",
        //     data: {"foo":"bar"}
        // }).success(function(data, status, headers, config) {
        //     assets = data;
        //     //console.log(assets);
        //     return assets;

        // }).error(function(data, status, headers, config) {
        //     status = status;
        //     console.log(status);
        // });
    };

    factory.postAsset = function(asset) {
        var assetManager = $resource('http://assmanapi.azurewebsites.net/api/asset');
        var assets = assetManager.save({}, function() { console.log(allAssets);});
        console.log(assets);
        return assets;
    };

    factory.updateAsset = function(asset) {
        var assetManager = $resource('http://assmanapi.azurewebsites.net/api/asset');
        var assets = assetManager.push({}, function() { console.log(allAssets);});
        console.log(assets);
        return assets;
    };

    factory.deleteAsset = function(asset) {
        var assetManager = $resource('http://assmanapi.azurewebsites.net/api/asset');
        var assets = assetManager.delete({}, function() { console.log(allAssets);});
        console.log(assets);
        return assets;
    };

    return factory;

});