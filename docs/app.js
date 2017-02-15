/**
 * You must include the dependency on 'ngMaterial'
 */
var app = angular.module('DltdojoApp', ['ngMaterial']);
app.controller('appCtrl', function($scope,$location) {
    $scope.host = $location.host()
    console.log($scope.host)
    $scope.services = [
        {name:'DLTDOJO',port:18168},
        {name:'[BTC] Abe Browser',port:12750},
        {name:'[BTC] Iquidus Explorer',port:12751},
        {name:'[BTC] JornC Blockchain Transaction Explorer',port:12752},
        {name:'[ETH] Carsenk explorer',port:18000}
    ]
});
