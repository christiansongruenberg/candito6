/**
 * Created by Christianson on 27/10/2015.
 */
angular.module('canditoDirectives', [])

.directive('headerBar', function(){
    return {
        templateUrl: 'html/customDirectives/headerBar.html'
    }
})
.directive('workoutButtons', function(){
    return {
        templateUrl: 'html/customDirectives/workoutButtons.html'
    }
})
.directive('overlayMenu', function(){
    return {
        templateUrl: 'html/customDirectives/overlayMenu.html'
    }
});;
