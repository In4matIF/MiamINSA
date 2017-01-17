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
        controller: 'mapCtrl',
        controllerAs: 'vm'
      }
    }
  })

  .state('menu.addFriendTable', {
    url: '/addFriendTable',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addFriendTable.html',
        controller: 'addFriendTableCtrl'
      }
    }
  })

  .state('menu.parametres', {
    url: '/parametres',
    views: {
      'side-menu21': {
        templateUrl: 'templates/parametres.html',
        controller: 'parametresCtrl'
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
    url: '/detailsRestaurant/:restaurantId',
    views: {
      'side-menu21': {
        templateUrl: 'templates/detailsRestaurant.html',
        controller: 'detailsRestaurantCtrl'
      }
    }
  })

  .state('menu.menusRestaurant', {
    url: '/menusRestaurant',
    views: {
      'side-menu21': {
        templateUrl: 'templates/menus.html',
        controller: 'menusCtrl'
      }
    }
  })

  .state('menu.detailsUtilisateur', {
    url: '/detailsUtilisateur/:userId',
    views: {
      'side-menu21': {
        templateUrl: 'templates/detailsUtilisateur.html',
        controller: 'detailsUtilisateurCtrl'
      }
    }
  })

  .state('menu.detailsPlat', {
    url: '/detailsPlat',
    params: {
      plat: null
    },
    views: {
      'side-menu21': {
        templateUrl: 'templates/detailsPlat.html',
        controller: 'detailsPlatCtrl'
      }
    }
  })

  .state('menu.amisRestaurant', {
    url: '/amisRestaurant/:restaurantId',
    views: {
      'side-menu21': {
        templateUrl: 'templates/amisRestaurant.html',
        controller: 'amisRestaurantCtrl'
      }
    }
  })

  .state('menu.discussion', {
    url: '/discussion/:restaurantId',
    views: {
      'side-menu21': {
        templateUrl: 'templates/discussion.html',
        controller: 'discussionCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/menuLateral/restaurants')



});
