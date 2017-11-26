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

  function noticiasCtr(NoticiaService) {

    var vm = this;

    vm.noticia = [];

    NoticiaService.query().$promise.then(function (data) {
      vm.noticia = data;
    });

  }
})();
