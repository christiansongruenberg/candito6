/**
 * Created by Christianson on 27/10/2015.
 */

angular.module('mainCtrl', [])

.controller('mainController', function($scope, $http, $log, canditoService, $timeout){
        
    $scope.saveUserData = function(){
        
        var userData = {
            'benchPress' : $scope.benchPress,
            'squat': $scope.squat,
            'deadlift': $scope.deadlift,
            'units' : $scope.units,
            'backEx1' : $scope.backEx1,
            'backEx2' : $scope.backEx2,
            'shoulderEx' : $scope.shoulderEx,
            'startingDate' : $scope.startingDate            
        }
        $http.post("/updateUserInfo", userData).success(function(data,status){
            $log.log("post succesful"); 
        });
    }
    $scope.backEx1 = "Dumbbell Row";
    $scope.backEx2 = "Weighted Pull-up";
    $scope.shoulderEx = "Seated Dumbbell OHP";

    $scope.units = 'lbs';

    
    if(canditoService.benchPress && canditoService.deadlift && canditoService.squat){

        $scope.benchPress = canditoService.benchPress;
        $scope.deadlift = canditoService.deadlift;
        $scope.squat = canditoService.squat;
    }else{
        $http.get('/getUser').success(function(data){
            if(data){
                $scope.name = data.name;
                
                $scope.lifts = {}
                $scope.benchPress = canditoService.benchPress = data.benchPressMax;
                $scope.deadlift = canditoService.deadlift = data.deadliftMax;
                $scope.squat = canditoService.squat = data.squatMax;
            }

        });
    }
    
    $scope.$watch('benchPress', function(newVal, oldVal){
       canditoService.benchPress = newVal; 
    });
    
    $scope.$watch('deadlift', function(newVal, oldVal){
       canditoService.deadlift = newVal; 
    });
    
    $scope.$watch('squat', function(newVal, oldVal){
       canditoService.squat = newVal; 
    });
    
    $scope.$watch('units', function(newVal, oldVal){
        canditoService.units = newVal; 
    });
    
    $scope.$watch('backEx1', function(newVal, oldVal){
        canditoService.backEx1 = newVal;
    });
    
    $scope.$watch('backEx2', function(newVal, oldVal){
        canditoService.backEx2 = newVal;
    });
    
    $scope.$watch('shoulderEx', function(newVal, oldVal){
        canditoService.shoulderEx = newVal;
    });
    
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
    /*canditoService.units = $scope.units;
    $log.log('candito units set to: ' + canditoService.units);*/
    $timeout(function () {
        (function($, viewport){
            $(document).ready(function() {
                // Executes in SM, MD and LG breakpoints
                if(viewport.is('<=sm')) {
                    $('.container').addClass('container-fluid').removeClass('container')
                    $('#nav-list').removeClass('in');
                }
            });
        })(jQuery, ResponsiveBootstrapToolkit);
    });
})

.controller('weekController', function($scope, $http, $log, canditoService){
    $scope.par = percentAndRound = canditoService.roundFactory(canditoService.units);
    $scope.ad = addDays = canditoService.addToStartDate;
    $scope.benchPress = canditoService.benchPress;
    $scope.squat = canditoService.squat;
    $scope.deadlift = canditoService.deadlift;
    $scope.backEx1 = canditoService.backEx1; 
    $scope.backEx2 = canditoService.backEx2;
    $scope.shoulderEx = canditoService.shoulderEx;
    
    //temporary variables for testing
    $scope.startingDate = new Date();
    /*$scope.benchPress = 100;
    $scope.squat = 200;
    $scope.deadlift = 300;
    $scope.backEx1 = "Dumbbell Row"; 
    $scope.backEx2 = "Weighted Pull-up";
    $scope.shoulderEx = "Seated Dumbbell OHP";*/
})
.controller('parentController', function($scope,$log, $timeout){
    $scope.menuActive = false;
    
    $scope.menuClick = function(){
        $log.log('menu clicked');
        if(!$scope.menuActive){
            $scope.menuActive = true;
        }else{
            $scope.menuActive = false
        }
    }
    
});
