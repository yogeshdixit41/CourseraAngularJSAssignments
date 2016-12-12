(function(){

	'use strict';

	angular.module('assignmentOneApp', []).
	controller('assignmentOneController', ['$scope', function($scope){

		$scope.outputMessage = '';
		$scope.foodItems = '';
		$scope.checkIfTooMuch = function() {

			if($scope.foodItems == '')
				$scope.outputMessage = 'Please enter data first';
			else
			{
				if( checkItems($scope.foodItems) > 3)
					$scope.outputMessage = 'Too much!';
				else if(checkItems($scope.foodItems) <= 3)
					$scope.outputMessage = 'Enjoy!';
			}


		};


		function checkItems(foodItemsString){

			var arrayOfItems = foodItemsString.split(',',5);
			return arrayOfItems.length;
			console.log(arrayOfItems.length);
		};
		
	}]);

})();