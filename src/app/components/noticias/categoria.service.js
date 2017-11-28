(function () {
  'use strict';

  angular
  .module('app')
  .service('CategoriaService', categoriaService);

  categoriaService.$inject = ['$resource', 'API'];

  function categoriaService($resource, API) {
    return $resource(API + 'categoria/:id', {id: '@id'});
  }
})();
