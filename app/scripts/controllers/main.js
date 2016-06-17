'use strict';

/**
 * @ngdoc function
 * @name angularMealsApp.controller:MainCtrl
 * @description # MainCtrl Controller of the angularMealsApp
 */
angular.module('angularMealsApp').controller('MainCtrl',
		[ 'food', function(dataServiceFood) {
			var self = this;

			dataServiceFood.getStock().then(function successCallback(response) {
				self.items = response;
			}, function errorCallback(response) {
				console.log('Error dataServiceFood.getStock() :' + response);
			});

			this.cart = dataServiceFood.cart;
			
			this.addToCart = function(item){
				item.person = 'für';
				item.edit = false;
				
				dataServiceFood.addToCart(item);				
			};
			
			this.editPerson = function(item){
				item.edit = true;
				item.prevPerson = item.person;
			};
			
			this.stopEditPerson = function(item){
				item.edit = false;				
			};
			
			this.cancelEditPerson = function(item){
				item.edit = false;
				item.person = item.prevPerson;			
			};
			
			this.savePerson = function(elem,item){
				item.person = elem;
			};
			
			this.keydownFunc = function(keyEvent,item){
				if (keyEvent.which === 27){
					self.cancelEditPerson(item);
				}else if (keyEvent.which === 13){
					self.stopEditPerson(item);
				}
			};
		} ]);
