/**
 * Created by Christianson on 27/10/2015.
 */

angular.module('mainCtrl', [])

.controller('mainController', function($scope, $http, $log, canditoService){
        
    $scope.saveUserData = function(){
        
        var userData = {
            'benchPress' : $scope.lifts.benchPress,
            'squat': $scope.lifts.squat,
            'deadlift': $scope.lifts.deadlift,
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
    
    $log.log(canditoService.varTest);
    $scope.units = 'lbs';
    $scope.lifts = {}
    $http.get('/getUser').success(function(data){
        $scope.name = data.name;
        $scope.lifts.benchPress = canditoService.benchPress = data.benchPressMax;
        $scope.lifts.deadlift = canditoService.deadlift = data.deadliftMax;
        $scope.lifts.squat = canditoService.squat = data.squatMax;
    });
    
    $scope.$watch('lifts.benchPress', function(newVal, oldVal){
       canditoService.benchPress = newVal; 
    });
    
    $scope.$watch('lifts.deadlift', function(newVal, oldVal){
       canditoService.deadlift = newVal; 
    });
    
    $scope.$watch('lifts.squat', function(newVal, oldVal){
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
    
    $http.post("/updateUserInfo", {'benchPress': $scope.benchPress}).success(function(data,status){
       $log.log("post succesful"); 
    });
    //temporary variables for testing
    $scope.startingDate = new Date();
    /*$scope.benchPress = 100;
    $scope.squat = 200;
    $scope.deadlift = 300;
    $scope.backEx1 = "Dumbbell Row"; 
    $scope.backEx2 = "Weighted Pull-up";
    $scope.shoulderEx = "Seated Dumbbell OHP";*/
})
.controller('parentController', function($scope,$log){
    $log.log('parent controller working :S');
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
