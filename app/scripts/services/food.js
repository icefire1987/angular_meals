'use strict';

/**
 * @ngdoc service
 * @name angularMealsApp.food
 * @description
 * # food
 * Service in the angularMealsApp.
 */
angular.module('angularMealsApp').service('food', function() {
	var self = this;
	// AngularJS will instantiate a singleton by calling "new" on this function
	this.cart = {};
	this.cart.articles = [];
	this.cart.articlecount = this.cart.articles.length;
	this.cart.total = 0;

	this.addToCart = function(item){		
		self.cart.articles.push(item);
	}; 
	
	this.getStock = function() {
		return $.get('/json/stock.json');
	};
});
