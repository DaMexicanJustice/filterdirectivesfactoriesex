/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var app = angular.module('myApp', []);

app.controller("myController", ['$scope', function ($scope) {
        
    }]);

app.directive('linkDemoDir', [function(){
                    return {
                        restrict: 'EA',
                        //template: 'TEst'
                        //link: function(){ console.log("Test");}
                        link: function(scope, element, attrs){
                            //attrs parameter refers to collection of arguments used in the directive
                            console.log(attrs.test);
//                            console.log(attrs.linkDemoDir);
//                            //element parameter refers to array of elements that uses this directive (if only one it will be on index 0.
////                            element[0].innerHTML = attrs.test;
                            //scope.attributeParts = ['images/100x100.png','images/180x180.png'];
                            scope.attributeParts = attrs.content.split(',');
                            for(var i = 0; i < scope.attributeParts.length; i++){
                                console.log(scope.attributeParts[i]);
                                scope.attributeParts[i] = "images/" + scope.attributeParts[i];
                            }
                        }
                    };
            }]);