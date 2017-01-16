angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.restaurants', {
    url: '/restaurants',
    views: {
      'side-menu21': {
        templateUrl: 'templates/restaurants.html',
        controller: 'restaurantsCtrl'
      }
    }
  })

  .state('menu.choixDUnRestaurant', {
    url: '/tableRestaurant',
    views: {
      'side-menu21': {
        templateUrl: 'templates/choixDUnRestaurant.html',
        controller: 'choixDUnRestaurantCtrl'
      }
    }
  })

  .state('menu.map', {
    url: '/map',
    views: {
      'side-menu21': {
        templateUrl: 'templates/map.html',
        controller: 'mapCtrl'
      }
    }
  })

  .state('menu.creerUneTable', {
    url: '/createTable',
    views: {
      'side-menu21': {
        templateUrl: 'templates/creerUneTable.html',
        controller: 'creerUneTableCtrl'
      }
    }
  })

  .state('menu.paramTres', {
    url: '/settings',
    views: {
      'side-menu21': {
        templateUrl: 'templates/paramTres.html',
        controller: 'paramTresCtrl'
      }
    }
  })

  .state('menu.amis', {
    url: '/amis',
    views: {
      'side-menu21': {
        templateUrl: 'templates/amis.html',
        controller: 'amisCtrl'
      }
    }
  })

  .state('menu.maTable', {
    url: '/currentTable',
    views: {
      'side-menu21': {
        templateUrl: 'templates/maTable.html',
        controller: 'maTableCtrl'
      }
    }
  })

  .state('maTableVide', {
    url: '/noTable',
    templateUrl: 'templates/maTableVide.html',
    controller: 'maTableVideCtrl'
  })

  .state('menu', {
    url: '/menuLateral',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.login', {
    url: '/loginPage',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('menu.detailsRestaurant', {
    url: '/detailsRestaurant',
    views: {
      'side-menu21': {
        templateUrl: 'templates/detailsRestaurant.html',
        controller: 'detailsRestaurantCtrl'
      }
    }
  })

  .state('menu.menus', {
    url: '/menus',
    views: {
      'side-menu21': {
        templateUrl: 'templates/menus.html',
        controller: 'menusCtrl'
      }
    }
  })

  .state('menu.detailsUtilisateur', {
    url: '/userDetailsPage',
    views: {
      'side-menu21': {
        templateUrl: 'templates/detailsUtilisateur.html',
        controller: 'detailsUtilisateurCtrl'
      }
    }
  })

  .state('menu.detailsPlat', {
    url: '/detailsPlat',
    views: {
      'side-menu21': {
        templateUrl: 'templates/detailsPlat.html',
        controller: 'detailsPlatCtrl'
      }
    }
  })

  .state('menu.amisAuGrillon', {
    url: '/amisRestaurant',
    views: {
      'side-menu21': {
        templateUrl: 'templates/amisAuGrillon.html',
        controller: 'amisAuGrillonCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/menuLateral/restaurants')

  

});