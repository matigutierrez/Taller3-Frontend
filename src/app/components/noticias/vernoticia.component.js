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

  var dato = { 
      titular: '',
      entrada: '',
      cuerpo: '',
      imagen: '',
      fecha: '',
      usuario_id: 0,
      categoria_id: 0
    };

  function vernoticiaCtr($rootScope, $scope) {

    var vm = this;

    $scope.$on('datos', function($event, data) {
      dato = data;
      console.log(vm.dato);
    });

    vm.titular = dato.titular;
    vm.imagen = dato.imagen;
    vm.entrada = dato.entrada;
    vm.cuerpo = dato.cuerpo;
    vm.fecha = dato.fecha;

  }
})();
