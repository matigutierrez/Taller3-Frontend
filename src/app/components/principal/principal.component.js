
(function () {
  'use strict';

  angular
  .module('app')
  .component('principal', {
    templateUrl: 'app/components/principal/principal.html',
    controller: principalCtr,
    controllerAs: 'vm'
  });

  principalCtr.$inject = ['$state', '$rootScope', 'PrincipalService'];

  function principalCtr($rootScope, $scope, PrincipalService) {
    var vm = this;

    PrincipalService.query().$promise.then(function (data) {
      vm.noticia = data;
    });
  }
})();
