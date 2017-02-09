const log = console.log
var app = angular.module('DltdojoApp', ['ngMaterial']);
app.controller('appCtrl', function($scope,$location,$http) {
    $scope.host = $location.host()
    console.log($scope.host)
    $scope.bcy = {}
    $scope.ckCheckToken = function() {
        // https://api.blockcypher.com/v1/tokens/$YOURTOKEN
        var url = `https://api.blockcypher.com/v1/tokens/${$scope.bcy.token}`
        log(url)
         $http.get(url).then(
             function(res) {
                 log(res)
                 $scope.bcy.check = res.data
             },
             function(err) {
                 log('error callback' + err)
             });
    }
});
