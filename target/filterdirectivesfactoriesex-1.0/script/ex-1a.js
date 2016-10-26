/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module('myApp', []);
app.controller('MyController', [function () {
        var self = this;
        self.persons = [
            {name: 'Hans', gender: 'male', age: 8}, {name: 'Grethe', gender: 'female', age: 7},
            {name: 'Frederik', gender: 'male', age: 61}, {name: 'Hassan', gender: 'male', age: 13},
            {name: 'Karen', gender: 'female', age: 31}];
    }]);

app.filter('schoolChild', [function () {
        return function (input, arg) {
            console.log(arg);
            var children = [];
            angular.forEach(input, function (person) {
                if (person.age >= 6 && person.age <= 15)
                    children.push(person);
            });
            return children;
        };
    }]);