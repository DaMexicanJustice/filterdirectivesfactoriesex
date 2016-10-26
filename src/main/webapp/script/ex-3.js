/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app = angular.module('myApp', []);
                    app.controller('myController', ['myFactory', function (myFactory) {
                            var self = this;
                            self.test = myFactory.test();
                            self.randomNumber = myFactory.getRandomNumber(100);
                            self.randomString = myFactory.getRandomString(self.randomNumber);
                        }]);

                    app.factory('myFactory', function () {
                        var factory = {
                            test: function () {
                                return "I work";
                            },
                            getRandomNumber: function (N) {
                                return Math.floor((Math.random() * 100) + 1);
                            },
                            getRandomString: function (N) {
                                return new Array(N + 1).join((Math.random().toString(36) + '00000000000000000').slice(2, 18)).slice(0, N);
                            }
                        };
                        return factory;
                    });

