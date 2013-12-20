hardwhere.factory('apiFactory', function(){
    
    var assets = [
        { id: 1, AssetTypeId: 1, Properties: [{name: "Macbook Pro"}, {desc: "2013 Apple Macbook Pro"}]}
        { id: 2, AssetTypeId: 2, Properties: [{name: "Macbook Pro"}, {desc: "2013 Apple Macbook Pro"}]}
        { id: 3, AssetTypeId: 3, Properties: [{name: "Macbook Pro"}, {desc: "2013 Apple Macbook Pro"}]}
        { id: 4, AssetTypeId: 4, Properties: [{name: "Macbook Pro"}, {desc: "2013 Apple Macbook Pro"}]}
    ];

    var factory = {};

    factory.getAssets = function() {
        // AJAX Call?
        return assets;
    };

    factory.postAsset = function(asset) {
        // AJAX Call?
        return assets;
    }

    factory.updateAsset = function(asset) {
        // AJAX Call?
        return assets;
    }

    return factory;

});