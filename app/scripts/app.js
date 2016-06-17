'use strict';

/**
 * @ngdoc overview
 * @name angularMealsApp
 * @description
 * # angularMealsApp
 *
 * Main module of the application.
 */
angular
	.module('angularMealsApp', ['ui.router'])
	.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'views/speisekarte.html',
				controller: 'MainCtrl as c_main'
			});
		
		
	}]);
