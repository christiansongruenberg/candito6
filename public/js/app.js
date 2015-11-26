/**
 * Created by Christianson on 27/10/2015.
 */
var canditoApp = angular.module('canditoApp', ['mainCtrl','ngRoute', 'canditoService', 'canditoDirectives', 'ngAnimate']);

canditoApp.config(function($routeProvider){
    $routeProvider
        .when('/overview', {
            templateUrl: 'html/overview.html',
            controller: 'weekController'
        })
        .when('/', {
            templateUrl: 'html/main.html',
            controller: 'mainController'
        })
        .when('/week1', {
            templateUrl: 'html/week1.html',
            controller: 'weekController'
        })
        .when('/week2', {
            templateUrl: 'html/week2.html',
            controller: 'weekController'
        })
        .when('/week3', {
            templateUrl: 'html/week3.html',
            controller: 'weekController'
        })
        .when('/week4', {
            templateUrl: 'html/week4.html',
            controller: 'weekController'
        })
        .when('/week5', {
            templateUrl: 'html/week5.html',
            controller: 'weekController'
        })
        .when('/week6', {
            templateUrl: 'html/week6.html',
            controller: 'weekController'
        });
});

/*
canditoApp.controller('mainController', function($scope, $http, $log){
    $http.get('/getUser').success(function(data){
        console.log(data);
        $scope.name = data.name;
    });

    $scope.logout = function(){
        $http.get('/auth/logout').success(function(data){
            console.log(data);
            $scope.name = '';
        });
    };

    $scope.signIn = function(){
        console.log($scope.password);
        console.log($scope.email);

        $http.post('/auth/login', {email: $scope.email, password: $scope.password}).then(function successCallback(response){
            console.log(response);
            if(response.data.error){
                $scope.loginErrorMessage = response.data.error;
            }else {
                $scope.loginErrorMessage = '';
                $scope.name = response.data.name;
            }
        }, function errorCallback(response){
            console.log(response);
        });
    }
});*/
