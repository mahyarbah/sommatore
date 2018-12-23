angular
    .module('app')
    .controller('appCtrl', ['$scope', 'calculateSVC', function ($scope, calculateSVC) {
        $scope.items = [{
            sign: "+",
            value: null,
            disable: false
        }];

        $scope.result = 0;

        /**
        * it adds a new row when you click the 'Add row' button.  
        **/

        $scope.addRow = function () {
            $scope.items.push({
                sign: "+",
                value: null,
                disable: false
            });
        };

        /**
         * it deletes the row when you click the 'Delete' button.
         **/

        $scope.deleteRow = function (index) {
            $scope.items.splice(index, 1);
            $scope.result = calculateSVC.sumAllValidValuse($scope.items);
        };

        /**
         * it won't calculate the given value in that row in the final result when you click the 'Disable' button
         * and will calculate it againg when you click the 'Enable' button.  
         **/

        $scope.disableEnableRow = function (index) {
            $scope.items[index].disable = !$scope.items[index].disable;
            $scope.result = calculateSVC.sumAllValidValuse($scope.items);
        };
        
        /**
         * it calculates the final result
         */

        $scope.calculateResult = function () {
            $scope.result = calculateSVC.sumAllValidValuse($scope.items);
        }

    }]);


