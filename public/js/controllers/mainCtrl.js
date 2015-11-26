/**
 * Created by Christianson on 27/10/2015.
 */

angular.module('mainCtrl', [])

.controller('mainController', function($scope, $http, $log, canditoService, $timeout){
    
    
    $scope.saveUserData = function(){
        var formattedDate = $scope.startingDate.getFullYear("yyyy") +"-"+ ($scope.startingDate.getMonth() + 1) +"-"+ $scope.startingDate.getDate();
        $log.log(formattedDate);
        var userData = {
            'benchPress' : $scope.benchPress,
            'squat': $scope.squat,
            'deadlift': $scope.deadlift,
            'units' : $scope.units,
            'backEx1' : $scope.backEx1,
            'backEx2' : $scope.backEx2,
            'shoulderEx' : $scope.shoulderEx,
            'startingDate' : formattedDate    
        }
        
        $http.post("/updateUserInfo", userData).success(function(data,status){
            $log.log("post succesful"); 
        });
    }
        
    $scope.logout = function(){
        $http.get('/auth/logout').success(function(data){
            $scope.name = '';
        });
    };
        
    $scope.signIn = function(){

        $http.post('/auth/login', {email: $scope.email, password: $scope.password}).then(function successCallback(response){
            console.log('success');
            console.log(response);
            if(response.data.error){
                $scope.loginErrorMessage = response.data.error;
            }else {
                $scope.loginErrorMessage = '';
                $scope.name = response.data.name;
            }
        }, function errorCallback(response){
            console.log('error');
            console.log(response);
        });
    }

    //changes containers to container-fluid on mobile
    $timeout(function () {
        (function($, viewport){
            $(document).ready(function() {
                // Executes in SM, MD and LG breakpoints
                if(viewport.is('>sm')) {
                    $('#nav-list').addClass('in');
                }
                
                if(viewport.is('<=sm')) {
                    $('.container').addClass('container-fluid').removeClass('container')
                }
            });
        })(jQuery, ResponsiveBootstrapToolkit);
    });
})

.controller('weekController', function($scope, $http, $log, $timeout, canditoService){
    
    $scope.par = $scope.percentAndRound = canditoService.roundFactory($scope.units);
    $scope.ad = $scope.addDays = canditoService.addToStartDate;

    //changes containers to container-fluid on mobile
    $timeout(function () {
        (function($, viewport){
            $(document).ready(function() {
                // Executes in SM, MD and LG breakpoints
                if(viewport.is('>sm')) {
                    $('#nav-list').addClass('in');
                }
                
                if(viewport.is('<=sm')) {
                    $('.container').addClass('container-fluid').removeClass('container')
                }
            });
        })(jQuery, ResponsiveBootstrapToolkit);
    });
    
    $scope.weightCalcBench = $scope.par($scope.$parent.benchPress, 97.5);
    $scope.weightCalcSquat = $scope.par($scope.$parent.squat, 97.5);
    $scope.weightCalcDeadlift = $scope.par($scope.$parent.deadlift, 97.5);
    $scope.repsCalcBench = "1";
    $scope.repsCalcSquat = "1";
    $scope.repsCalcDeadlift = "1";
    
    $scope.new1RM = canditoService.new1RM;
})

.controller('parentController', function($scope,$http, $log, $timeout, canditoService){
    $scope.menuActive = false;
    $scope.loginMenuActive = false;
    $scope.userActive = false;
    
    $scope.backEx1 = $scope.backEx1 || "Dumbbell Row";
    $scope.backEx2 = $scope.backEx2 || "Weighted Pull-up";
    $scope.shoulderEx = $scope.shoulderEx || "Seated Dumbbell OHP";
    $scope.units = $scope.units || 'lbs';
    $scope.startingDate = $scope.startingDate || new Date();
    
    $scope.menuClick = function(){
        $log.log('menu clicked');
        if(!$scope.menuActive){
            $scope.menuActive = true;
        }else{
            $scope.menuActive = false
        }
    }
    
    $scope.loginButtonClick = function(){
        $log.log('login clicked');
        if(!$scope.loginMenuActive){
            $scope.loginMenuActive = true;
        }else{
            $scope.loginMenuActive = false
        }
    }
    
    $scope.logoutButtonClick = function(){
        $http.get('/auth/logout').success(function(data){
            $log.log(data);
            $scope.name = "";
            $scope.benchPress = "";
            $scope.deadlift = "";
            $scope.squat = "";
            $scope.backEx1 = "Dumbbell Row";
            $scope.backEx2 = "Weighted Pull-up";
            $scope.shoulderEx = "Seated Dumbbell OHP";
            $scope.startingDate = new Date();
            $scope.units = "lbs";
            $scope.userActive = false;
        });
    }
    
        
    $scope.signIn = function(){
        $http.post('/auth/login', {email: $scope.email, password: $scope.password}).then(function successCallback(response){
            console.log(response);
            if(response.data.error){
                $scope.loginErrorMessage = response.data.error;
            }else {
                $scope.loginErrorMessage = '';
                $scope.loginMenuActive = false;
                $scope.name = response.data.name;
                $scope.benchPress = response.data.benchPress;
                $scope.deadlift = response.data.deadlift;
                $scope.squat = response.data.squat;
                $scope.backEx1 = response.data.backEx1;
                $scope.backEx2 = response.data.backEx2;
                $scope.shoulderEx = response.data.shoulderEx;
                $scope.units = response.data.units;
                $scope.startingDate = new Date(response.data.startingDate);
                $scope.userActive = true;
                
            }
        }, function errorCallback(response){
            console.log('error');
            console.log(response);
        });
    }
    
    $http.get('/getUser').success(function(data){
        
        function isEmpty(object) {
          for(var key in object) {
            if(object.hasOwnProperty(key)){
              return false;
            }
          }
          return true;
        }
        
        if(!isEmpty(data)){
            $scope.name = data.name;
            $scope.benchPress = data.benchPress;
            $scope.deadlift = data.deadlift;
            $scope.squat = data.squat;
            $scope.backEx1 = data.backEx1;
            $scope.backEx2 = data.backEx2;
            $scope.shoulderEx = data.shoulderEx;
            $scope.units = data.units;
            $scope.startingDate = new Date(data.startingDate);
            $scope.userActive = true;
        }else{
            //Maybe do some redirecting logic
            $scope.userActive = false;
        }
    });
    
});
