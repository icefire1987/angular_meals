'use strict';

/**
 * @ngdoc function
 * @name angularMealsApp.controller:HeaderctrlCtrl
 * @description # HeaderctrlCtrl Controller of the angularMealsApp
 */
angular.module('angularMealsApp')
  .controller('HeaderCtrl', [ 'food', function(dataServiceFood) {
	var self = this;
	this.cart = dataServiceFood.cart;
	
	this.total = function(){
		var total = 0;
        $.each(
        	self.cart.articles, function() { 
        		total += parseFloat(this.price); 
        	}
        );
        return total;
	};
		
	} ]);