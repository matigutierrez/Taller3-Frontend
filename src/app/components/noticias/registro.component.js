(function () {
  'use strict';

  angular
  .module('app')
  .component('registronoticia', {
    templateUrl: 'app/components/noticias/registro.html',
    controller: registronoticiaCtr,
    controllerAs: 'vm'
  });

  registronoticiaCtr.$inject = ['NoticiaService', '$state', '$rootScope'];

  function registronoticiaCtr(NoticiaService, $state) {

    var vm = this;

    vm.crearnoticia = function(noticia) {

      NoticiaService.save(noticia);

      $state.go('registronoticia');

    }

  }
})();
