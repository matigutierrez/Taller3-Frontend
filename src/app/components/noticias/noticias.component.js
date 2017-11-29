(function () {
  'use strict';

  angular
  .module('app')
  .component('noticias', {
    templateUrl: 'app/components/noticias/noticias.html',
    controller: noticiasCtr,
    controllerAs: 'vm'
  });

  noticiasCtr.$inject = ['NoticiaService', '$state', '$rootScope'];

  function noticiasCtr(NoticiaService, $state, $rootScope) {
    var vm = this;
    vm.noticia = [];

    NoticiaService.query().$promise.then(function (data) {
      vm.noticia = data;
    });

    vm.cambio = function () {
      $state.go('registronoticia');
    };

    vm.actualizar = function (id) {
      $rootScope.$broadcast('id', id);
      $state.go('actualizarnoticia');
    };

    vm.vernoticia = function (index) {
      var data = vm.noticia[index];
      $rootScope.$broadcast('datos', data);
      $state.go('vernoticia');
    };

    vm.eliminarnoticia = function (id) {
      NoticiaService.delete({id: id});
      NoticiaService.query().$promise.then(function (data) {
        vm.noticia = data;
      });
    };
  }
})();
