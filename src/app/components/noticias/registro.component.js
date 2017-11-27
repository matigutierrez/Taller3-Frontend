(function () {
  'use strict';

  angular
  .module('app')
  .component('registronoticia', {
    templateUrl: 'app/components/noticias/registro.html',
    controller: registronoticiaCtr,
    controllerAs: 'vm'
  });

  registronoticiaCtr.$inject = ['NoticiaService', 'CategoriaService', '$state', '$rootScope'];

  function registronoticiaCtr(NoticiaService, CategoriaService, $state) {

    var vm = this;

    CategoriaService.query().$promise.then(function(data){
      console.log(data);
      vm.categorias = data;
    });

    vm.crearnoticia = function(noticia) {

      NoticiaService.save(noticia);

      $state.go('noticia');

    }

  }
})();
