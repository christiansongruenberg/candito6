/**
 * Created by Christianson on 27/10/2015.
 */
var canditoApp = angular.module('canditoApp', ['mainCtrl','ngRoute', 'canditoService', 'canditoDirectives']);

canditoApp.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'html/main.html',
            controller: 'mainController'
        })
        .when('/week1', {
            templateUrl: 'html/week1.html',
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
