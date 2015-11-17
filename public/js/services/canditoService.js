angular.module('canditoService', [])

.service('canditoService', function($log){
    //function that creates a rounding function depending on if user uses lbs or kgs
    this.roundFactory = function(units) {
        
        units = units || 'lbs';
        var roundTo = units === 'lbs' ? 5 : 2.5;
        
        return function(value, percentage){
            var percentage = percentage/100;
            return Math.round((value*percentage)/roundTo)*roundTo;
        }
    }
    
    this.addToStartDate = function(startingDate, days){
        startingDate = moment(startingDate);
        startingDate.add(days, 'd');
        return startingDate.toDate();
    }
});