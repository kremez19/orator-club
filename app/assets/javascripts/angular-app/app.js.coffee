angular
  .module('oratorClub', [
    'ngAnimate',
    'ngResource',
    'ui.router',
    'templates'
  ])
  .config([
    '$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider',
    ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) ->
      $stateProvider
        .state('home',
          url: '/',
          templateUrl: 'home.html',
          controller: 'HomeCtrl'
        )
        .state('masterclass',
          url: '/masterclass',
          templateUrl: 'masterclass.html',
          controller: 'HomeCtrl'
        )

      # enable HTML5 Mode for SEO
      $locationProvider.html5Mode(true)
      $locationProvider.hashPrefix('!')

      # default fall back route
      $urlRouterProvider.otherwise('/')

      $httpProvider.defaults.headers.common['X-CSRF-Token'] =
        $('meta[name=csrf-token]').attr('content')

  ])
