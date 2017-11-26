angular
.module('app')
.config(routesConfig)
.run(middlewareConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('app', {
    url: '/',
    component: 'principal',
    isPrivate: false
  })
  .state('login', {
    url: '/login',
    component: 'login',
    isPrivate: false
  })
  .state('noticia', {
    url: '/noticia',
    component: 'noticias',
    isPrivate: true
  })
  .state('registronoticia', {
    url: '/registronoticia',
    component: 'registronoticia',
    isPrivate: true
  })
  .state('vernoticia', {
    url: '/vernoticia',
    component: 'vernoticia',
    isPrivate: true
  });

  $httpProvider.interceptors.push('InterceptorApi');
}

function middlewareConfig($state, CredentialsService, $transitions) {
  // Funcion cada vez que se intenta acceder a una ruta
  $transitions.onStart({}, function (trans) {
    var isPrivate = trans.$to().isPrivate;
    var to = trans.$to().name;
    // Compruebo si esta logeado para acceder a rutas protegidas, si no esta logeado se va a la pestaña login
    if (isPrivate && !CredentialsService.isLogged()) {
      $state.go('login');
    }

    // Compruebo que quiera entrar a el login cuando ya esta logeado
    if (to === 'login' && CredentialsService.isLogged()) {
      $state.go('app');
    }
  });
}
