/**
 * a service that calculates the sum of all given values
 */

angular
.module('app')
.factory('calculateSVC', function() {
    
      function sumAllValidValuse(items) {
        var sum=0;
        items.forEach(element => {
            if(!element.disable && element.value)
            sum+=eval(element.sign + element.value);
        }); 
        return sum;
      }

      return {
        sumAllValidValuse: sumAllValidValuse
    };
});