hardwhere.factory('apiFactory', function($resource, $q){
    
    // http://api.dribbble.com/shots/21603

    // var assets = [
    //     { "id": 1, "AssetTypeId": 1, "Properties": [{"name": "Macbook Pro"}, {"desc": "2013 Apple Macbook Pro"}]},
    //     { "id": 1, "AssetTypeId": 2, "Properties": [{"name": "Macbook Pro"}, {"desc": "2013 Apple Macbook Pro"}]},
    //     { "id": 1, "AssetTypeId": 3, "Properties": [{"name": "Macbook Prols"}, {"desc": "2013 Apple Macbook Pro"}]},
    //     { "id": 1, "AssetTypeId": 1, "Properties": [{"name": "Macbook Pro"}, {"desc": "2013 Apple Macbook Pro"}]}
    // ];

    var factory = {};

    factory.getAssets = function() {
        var deferred = $q.defer();
        var assetManager = $resource('http://hardwhere-api.azurewebsites.net/api/asset');
        var assets = assetManager.query({}, function(data) {
            deferred.resolve(data);
        });
        console.log(assets);
        return assets;

    };

    factory.getAssetTypes = function() {
        var deferred = $q.defer();
        var assetManager = $resource('http://hardwhere-api.azurewebsites.net/api/assettype');
        var assets = assetManager.query({}, function(data) {
            deferred.resolve(data);
        });
        console.log(assets);
        return assets;

    };

    factory.getAsset = function(id) {
        var deferred = $q.defer();
        var assetManager = $resource('http://hardwhere-api.azurewebsites.net/api/asset/:id', {id:'@id'});
        var assets = assetManager.get({id:id}, function(data) {
            deferred.resolve(data);
        });
        console.log(assets);
        //return assets;
        return deferred.promise;
    };

    factory.getNewAsset = function(id) {
        var deferred = $q.defer();
        var assetManager = $resource('http://hardwhere-api.azurewebsites.net/api/createnewasset/:id', {id:'@id'});
        var assets = assetManager.get({id:id}, function(data) {
            deferred.resolve(data);
        });
        console.log(assets);
        return deferred.promise;
    }

    factory.postAsset = function(asset) {
        var deferred = $q.defer();
        var assetManager = $resource('http://assmanapi.azurewebsites.net/api/asset');
        var assets = assetManager.save({}, function() { console.log(allAssets);});
        console.log(assets);
        return assets;
    };

    factory.updateAsset = function(asset) {
        var deferred = $q.defer();
        var assetManager = $resource('http://assmanapi.azurewebsites.net/api/asset');
        var assets = assetManager.push({}, function() { console.log(allAssets);});
        console.log(assets);
        return assets;
    };

    factory.deleteAsset = function(asset) {
        var deferred = $q.defer();
        var assetManager = $resource('http://assmanapi.azurewebsites.net/api/asset');
        var assets = assetManager.delete({}, function() { console.log(allAssets);});
        console.log(assets);
        return assets;
    };

    return factory;

});