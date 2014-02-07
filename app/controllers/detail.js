hardwhere.controller('DetailController', function($scope, $routeParams, apiFactory) {

    // http://assmanapi.azurewebsites.net/api/assettype
    // http://api.dribbble.com/shots/21603

    $scope.asset = apiFactory.getAsset($routeParams.id);

    $scope.asset.then(function(data) {
        
        $scope.somethingElse = data;

        // $scope.sections = [];

        // for(property in data) {
        //     if(data[property].SectionOrder !== undefined) {
                
        //         var section = {order: data[property].SectionOrder, name: data[property].SectionName};

        //         if($scope.sections.indexOf(section) === -1 ) {
                    
        //             $scope.sections.push(section);
        //         }
        //     }
        // }
        //console.log(sections);

    });

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