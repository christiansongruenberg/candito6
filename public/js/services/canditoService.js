angular.module('canditoService', [])

.service('canditoService', function($log){
    //function that creates a rounding function depending on if user uses lbs or kgs
    this.roundFactory = function(units) {
        
        units = units || 'lbs';
        var roundTo = units === 'lbs' ? 5 : 2.5;
        
        return function(value, percentage){
            var percentage = percentage/100;
            if(value){
                return Math.round((value*percentage)/roundTo)*roundTo;
            }else{
                return percentage*100 + "%";
            }
        }
    }
    
    this.addToStartDate = function(startingDate, days){
        startingDate = moment(startingDate);
        startingDate.add(days, 'd');
        return startingDate.toDate();
    }
    
    this.new1RM = function(weight, multiplier){
        if(weight > 0 && multiplier > 0){
            return Math.round(weight*multiplier);
        }else{
           return " "; 
        }
        
    }
});