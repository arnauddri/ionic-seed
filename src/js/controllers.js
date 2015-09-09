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
