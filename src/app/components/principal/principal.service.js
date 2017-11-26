(function () {
  'use strict';

  angular
  .module('app')
  .service('PrincipalService', principalService);

  principalService.$inject = ['$resource', 'API'];

  function principalService($resource, API) {
    return $resource(API + 'obtenernoticias/:id', {id: '@id'});
  }
})();