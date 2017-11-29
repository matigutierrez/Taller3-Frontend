(function () {
  'use strict';

  angular
  .module('app')
  .component('actualizarnoticia', {
    templateUrl: 'app/components/noticias/actualizar.html',
    controller: actualizarnoticiaCtr,
    controllerAs: 'vm'
  });

  actualizarnoticiaCtr.$inject = ['NoticiaService', 'CategoriaService', '$state', '$rootScope'];

  var noticiaid = 0;

  function actualizarnoticiaCtr(NoticiaService, CategoriaService, $state, $scope) {
    var vm = this;

    CategoriaService.query().$promise.then(function (data) {
      vm.categorias = data;
    });

    $scope.$on('id', function ($event, data) {
      noticiaid = data;
    });

    vm.actualizarnoticia = function (noticia) {
      NoticiaService.update({id: noticiaid}, noticia, function () {
        $state.go('noticia');
      }, function () {});
    };
  }
})();
