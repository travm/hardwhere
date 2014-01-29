hardwhere.factory('apiFactory', function($resource){
    
    // http://api.dribbble.com/shots/21603

    // var assets = [
    //     { "id": 1, "AssetTypeId": 1, "Properties": [{"name": "Macbook Pro"}, {"desc": "2013 Apple Macbook Pro"}]},
    //     { "id": 1, "AssetTypeId": 2, "Properties": [{"name": "Macbook Pro"}, {"desc": "2013 Apple Macbook Pro"}]},
    //     { "id": 1, "AssetTypeId": 3, "Properties": [{"name": "Macbook Prols"}, {"desc": "2013 Apple Macbook Pro"}]},
    //     { "id": 1, "AssetTypeId": 1, "Properties": [{"name": "Macbook Pro"}, {"desc": "2013 Apple Macbook Pro"}]}
    // ];

    var factory = {};

    factory.getAssets = function() {

        // Figure Out How To Communicate With API!

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