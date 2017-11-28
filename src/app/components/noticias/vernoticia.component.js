(function () {
  'use strict';

  angular
  .module('app')
  .component('vernoticia', {
    templateUrl: 'app/components/noticias/vernoticia.html',
    controller: vernoticiaCtr,
    controllerAs: 'vm'
  });

  vernoticiaCtr.$inject = ['$state', '$rootScope'];

  var dato = {};

  function vernoticiaCtr($rootScope, $scope) {
    var vm = this;

    $scope.$on('datos', function ($event, data) {
      dato = data;
    });

    vm.titular = dato.titular;
    vm.imagen = dato.imagen;
    vm.entrada = dato.entrada;
    vm.cuerpo = dato.cuerpo;
    vm.fecha = dato.fecha;
  }
})();
