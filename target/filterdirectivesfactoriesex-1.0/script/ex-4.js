/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module('myApp', []);

app.controller("myController", ['$scope', 'myFactory', '$http', function ($scope, myFactory, $http) {
        var self = this;
        self.test = "Hello from test";
        self.factoryTest = myFactory.test();
        self.getAllCountries = function() {
            myFactory.getAll()
            .then(function (response) {
                console.log("Response is: " + response);
                self.countries_all = response.data;
                console.log(self.countries_all);
            }, function (error) {
                self.status = 'Unable to load customer data: ' + error.message;
            });
        };
        self.getAllCountriesFromRegion = function(region) {
            myFactory.getAllFromRegion(region)
            .then(function (response) {
                console.log("Response is: " + response.data);
                self.countries_all_from_region = response.data;
            }, function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
        };
        self.getAllCountriesByCode = function(code) {
            myFactory.getAllFromCode(code)
            .then(function (response) {
                console.log("Response is: " + response.data);
                self.countries_all_by_code = response.data;
            }, function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
        };
        
        self.getAllCountries();
        self.getAllCountriesFromRegion("europe");
        self.getAllCountriesByCode("gb");
//        self.getAllCountries = myFactory.getAll();
//        self.getAllCountriesFromRegion = myFactory.getAllFromRegion("europe");
//        self.getAllCountriesByCode = myFactory.getAllFromCode("GB");
    }]);

app.factory('myFactory', ['$http', function($http){
        var factory = {};
        var baseUrl = "https://restcountries.eu/rest/v1/";
        factory.test = function() { return "Hello from factory.test";};
        factory.getAll = function() {
//            console.log($http.get(baseUrl + "all"));
            return $http.get(baseUrl + "all");
        };
        factory.getAllFromRegion = function(region) {
//            console.log($http.get(baseUrl + "region/" + region));
            return $http.get(baseUrl + "region/" + region);
        };
        factory.getAllFromCode = function(code) {
//            console.log($http.get(baseUrl + "alpha?codes=" + code));
            return $http.get(baseUrl + "alpha?codes=" + code);
        };
        return factory;
}]);

