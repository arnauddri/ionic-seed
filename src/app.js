require('./js/controllers.js')
require('./js/services.js')

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

