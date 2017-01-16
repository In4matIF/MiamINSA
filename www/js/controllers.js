angular.module('app.controllers', [])

.controller('restaurantsCtrl', ['$scope', '$stateParams', 'sharedVariables',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, sharedVariables) {
  sharedVariables.getRankedRestaurants.success(function (rankedRestaurants) {
    sharedVariables.getRestaurants.success(function (restaurants) {
      $scope.suggestionRestaurant = _.filter(restaurants,function (restaurant) {
        return rankedRestaurants.suggestion == restaurant.id;
      });
      $scope.rankedRestaurants = _.filter(restaurants,function (restaurant) {
        return rankedRestaurants.ranked.indexOf(restaurant.id) > -1;
      });
      $scope.unrankedRestaurants = _.filter(restaurants,function (restaurant) {
        return rankedRestaurants.unranked.indexOf(restaurant.id) > -1;
      });
    });
  })

}])

.controller('choixDUnRestaurantCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('mapCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('creerUneTableCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('parametresCtrl', ['$scope', '$stateParams', 'sharedVariables',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, sharedVariables) {
  sharedVariables.getCurrentUser.success(function (user) {
    $scope.currentUser = user;
    sharedVariables.getDiets.success(function (diets) {
      $scope.diets = diets;
      _.forEach($scope.diets,function (diet) {
        diet.status = $scope.currentUser.preferences.diets.indexOf(diet.id) > -1;
      })
    });
    sharedVariables.getRestaurants.success(function (restaurants) {
      $scope.restaurants = restaurants;
      _.forEach($scope.restaurants,function (restaurant) {
        restaurant.status = $scope.currentUser.preferences.favoris.indexOf(restaurant.id) > -1;
      })
    });
  });
}])

.controller('amisCtrl', ['$scope', '$stateParams', 'sharedVariables',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, sharedVariables) {
  sharedVariables.getCurrentUserFriends.success(function (data) {
    sharedVariables.getUsers.success(function (users) {
      $scope.connectedFriends = _.filter(users,function (user) {
        return data.connected.indexOf(user.id) > -1;
      });
      sharedVariables.getRestaurants.success(function (restaurants) {
        _.forEach($scope.connectedFriends, function (friend) {
          friend.restaurant = _.find(restaurants,function (restaurant) {
            return restaurant.id == friend.currentRestaurantId;
          });
        });
      });
      $scope.disconnectedFriends = _.filter(users,function (user) {
        return data.disconnected.indexOf(user.id) > -1;
      });
    })
  })
}])

.controller('maTableCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('maTableVideCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('menuCtrl', ['$scope', '$stateParams', 'sharedVariables', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, sharedVariables) {
  sharedVariables.getCurrentUser.success(function (currentUser) {
    $scope.currentUser = currentUser;
  })

}])

.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('detailsRestaurantCtrl', ['$scope', '$stateParams', 'sharedVariables', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, sharedVariables) {
  sharedVariables.getRestaurants.success(function (restaurants) {
    $scope.restaurant = $scope.suggestionRestaurant = _.filter(restaurants,function (restaurant) {
      return restaurant.id == $stateParams.restaurantId;
    })[0];
  });
}])

.controller('menusCtrl', ['$scope', '$stateParams', 'sharedVariables',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, sharedVariables) {
  sharedVariables.getMenus.success(function (menus) {
    $scope.menus = menus;
  });
}])

.controller('detailsUtilisateurCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('detailsPlatCtrl', ['$scope', '$stateParams',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  $scope.plat = $stateParams.plat;
}])

.controller('amisRestaurantCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}]);
