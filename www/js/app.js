/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1)
	__webpack_require__(2)

	angular.module('btcPrice', ['ionic', 'starter.services', 'starter.controllers'])

	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	  $stateProvider
	    // setup an abstract state for the tabs directive
	    .state('tab', {
	      url: '/tab',
	      abstract: true,
	      templateUrl: 'templates/tabs.html'
	    })
	    // the pet tab has its own child nav-view and history
	    .state('tab.pet-index', {
	      url: '/pets',
	      views: {
	        'pets-tab': {
	          templateUrl: 'templates/pet-index.html',
	          controller: 'ExchangeIndexCtrl'
	        }
	      }
	    })
	    .state('tab.pet-detail', {
	      url: '/pet/:petId',
	      views: {
	        'pets-tab': {
	          templateUrl: 'templates/pet-detail.html',
	          controller: 'ExchangeDetailCtrl'
	        }
	      }
	    })
	    .state('tab.adopt', {
	      url: '/adopt',
	      views: {
	        'adopt-tab': {
	          templateUrl: 'templates/adopt.html'
	        }
	      }
	    })
	    .state('tab.about', {
	      url: '/about',
	      views: {
	        'about-tab': {
	          templateUrl: 'templates/about.html'
	        }
	      }
	    });

	  // if none of the above states are matched, use this as the fallback
	  $urlRouterProvider.otherwise('/tab/pets');
	}]);



/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = angular.module('starter.controllers', [])

	  .controller('ExchangeIndexCtrl',
	    ['$scope', 'ExchangeService',
	    function($scope, ExchangeService) {
	      $scope.pets = ExchangeService.all();
	    }]
	  )

	  .controller('ExchangeDetailCtrl',
	    ['$scope', '$stateParams', 'ExchangeService',
	    function($scope, $stateParams, ExchangeService) {
	      $scope.pet = ExchangeService.get($stateParams.petId);
	    }]
	  );


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = angular.module('starter.services', [])

	.factory('ExchangeService', function() {
	  // Might use a resource here that returns a JSON array

	  // Some fake testing data
	  var exchanges = [
	    { id: 0, title: 'Cats', description: 'Furry little creatures. Obsessed with plotting assassination, but never following through on it.' },
	    { id: 1, title: 'Dogs', description: 'Lovable. Loyal almost to a fault. Smarter than they let on.' },
	    { id: 2, title: 'Turtles', description: 'Everyone likes turtles.' },
	    { id: 3, title: 'Sharks', description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.' }
	  ];

	  return {
	    all: function() {
	      return exchanges;
	    },
	    get: function(petId) {
	      // Simple index lookup
	      return exchanges[petId];
	    }
	  }
	});


/***/ }
/******/ ]);