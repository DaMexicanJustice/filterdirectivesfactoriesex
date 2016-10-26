/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module('myApp', []);
app.controller("DirectiveController", ['$scope', function ($scope) {
        $scope.user = {
            companyName: "Coolest Company on Earth",
            companyUrl: "http://www.cool.cooler.com",
            created: new Date()
        };
    }]);

app.directive('myDirective', function() {
   return {
       restrict: 'AE',
       templateUrl: 'myCompany.html',
       controller: 'DirectiveController'
   };
});
