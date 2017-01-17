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
  });

}])

.controller('choixDUnRestaurantCtrl', ['$scope', '$stateParams', 'sharedVariables', 'ionicTimePicker', '$state',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, sharedVariables, ionicTimePicker, $state) {
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
  });

  $scope.selectedTime = "";

  $scope.openTimePicker = function () {
    var ipObj1 = {
      callback: function (val) {
        if (typeof (val) === 'undefined') {
          console.log('Time not selected');
        } else {
          var selectedTime = new Date(val * 1000);
          $scope.selectedTime = selectedTime.getUTCHours() + ' : ' + ((selectedTime.getUTCMinutes()<10)? '0'+selectedTime.getUTCMinutes() : selectedTime.getUTCMinutes());
          console.log('Selected epoch is : ', val, 'and the time is ', selectedTime.getUTCHours(), 'H :', selectedTime.getUTCMinutes(), 'M');
        }
      },
      inputTime: 50400
    };
    ionicTimePicker.openTimePicker(ipObj1);
  };

  $scope.choisirRestaurant = function (restaurant) {
    if($scope.selectedTime!=""){
      sharedVariables.getCurrentUser.success(function (currentUser) {
        sharedVariables.session.table = {
          id:0,
          userId:currentUser.id,
          user:currentUser,
          restaurantId:restaurant.id,
          restaurant:restaurant,
          time:$scope.selectedTime,
          people:[],
          pendingPeople:[],
          nbMissingMessages:0
        }
        $state.go('menu.maTable');
      });
    }else{
      alert("Veuillez choisir une heure.");
    }
  };

  $scope.restaurantSelectedId = null;
  $scope.selectRestaurant = function (restaurantId) {
    if($scope.restaurantSelectedId == restaurantId){
      $scope.restaurantSelectedId = "";
    }else{
      $scope.restaurantSelectedId = restaurantId;
    }
  };

}])

.controller('mapCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('addFriendTableCtrl', ['$scope', '$state', '$stateParams', 'sharedVariables',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $state, $stateParams, sharedVariables) {
  sharedVariables.getCurrentUserFriends.success(function (data) {
    sharedVariables.getUsers.success(function (users) {
      $scope.connectedFriends = _.filter(users,function (user) {
        return data.connected.indexOf(user.id) > -1
          && sharedVariables.session.table.pendingPeople.indexOf(user.id) == -1
          && sharedVariables.session.table.people.indexOf(user.id) == -1;
      });
      sharedVariables.getRestaurants.success(function (restaurants) {
        _.forEach($scope.connectedFriends, function (friend) {
          friend.restaurant = _.find(restaurants,function (restaurant) {
            return restaurant.id == friend.currentRestaurantId;
          });
        });
      });
      $scope.disconnectedFriends = _.filter(users,function (user) {
        return data.disconnected.indexOf(user.id) > -1
          && sharedVariables.session.table.pendingPeople.indexOf(user.id) == -1
          && sharedVariables.session.table.people.indexOf(user.id) == -1;
      });
    })
  });
  $scope.addFriend = function ($event,friend) {
    $event.stopPropagation();
    sharedVariables.session.table.pendingPeople.push(friend.id);
    sharedVariables.getUsers.success(function (users) {
      sharedVariables.session.table.pendingPersons = _.filter(users,function (user) {
        return sharedVariables.session.table.pendingPeople.indexOf(user.id) > -1;
      });
    });
    $state.go('menu.maTable');
  }
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

.controller('maTableCtrl', ['$scope', '$stateParams', '$state', 'sharedVariables',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, sharedVariables) {
  $scope.sharedVariables = sharedVariables;
  sharedVariables.getCurrentUser.success(function (currentUser) {
    $scope.currentUser = currentUser;
  });

  $scope.$watch(
    $scope.sharedVariables.session.table,
    function (newValue, oldValue, scope) {
      if(newValue){
        $scope.sharedVariables.session.table = fillTableWithInformation(newValue);
      }
    }
  );

  sharedVariables.getTablesInvitations.success(function (tablesInvitations) {
    $scope.tablesInvitations = tablesInvitations;
    _.forEach($scope.tablesInvitations,function (tablesInvitation) {
      tablesInvitation = fillTableWithInformation(tablesInvitation);
    })
  });

  $scope.invitationSelectedId = null;
  $scope.selectInvitation = function (invitationId) {
    if($scope.invitationSelectedId == invitationId){
      $scope.invitationSelectedId = "";
    }else{
      $scope.invitationSelectedId = invitationId;
    }
  };

  $scope.goChat = function () {

  };

  $scope.choisirTable = function (table) {
    sharedVariables.session.table = table;
    $state.go('menu.maTable');
  };

  $scope.quitterTable = function () {
    sharedVariables.session.table = null;
    $state.go('menu.maTable');
  };

  $scope.deletePendingPerson = function ($event,person) {
    $event.stopPropagation();
    _.pull(sharedVariables.session.table.pendingPeople, person.id);
    sharedVariables.getUsers.success(function (users) {
      sharedVariables.session.table.pendingPersons = _.filter(users,function (user) {
        return sharedVariables.session.table.pendingPeople.indexOf(user.id) > -1;
      });
    });
    $state.go('menu.maTable');
  };

  function fillTableWithInformation(table){
    var newTable = table;
    sharedVariables.getRestaurants.success(function (restaurants) {
      newTable.restaurant = _.filter(restaurants,function (restaurant) {
        return newTable.restaurantId == restaurant.id;
      })[0];
      sharedVariables.getUsers.success(function (users) {
        newTable.user = _.filter(users,function (user) {
          return newTable.userId == user.id;
        })[0];
        newTable.persons = _.filter(users,function (user) {
          return newTable.people.indexOf(user.id) > -1;
        });
        newTable.pendingPersons = _.filter(users,function (user) {
          return newTable.pendingPeople.indexOf(user.id) > -1;
        });
        return newTable;
      });
    });
  }
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
    $scope.restaurant = _.filter(restaurants,function (restaurant) {
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

.controller('detailsUtilisateurCtrl', ['$scope', '$stateParams', 'sharedVariables',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, sharedVariables) {
  sharedVariables.getUsers.success(function (users) {
    $scope.user = _.filter(users,function (user) {
      return user.id == $stateParams.userId;
    })[0];
    sharedVariables.getRestaurants.success(function (restaurants) {
      $scope.user.restaurant = _.filter(restaurants,function (restaurant) {
        return $scope.user.currentRestaurantId == restaurant.id;
      })[0];
    })
  });
}])

.controller('detailsPlatCtrl', ['$scope', '$stateParams',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  $scope.plat = $stateParams.plat;
}])

.controller('amisRestaurantCtrl', ['$scope', '$stateParams', 'sharedVariables',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, sharedVariables) {
  sharedVariables.getRestaurants.success(function (restaurants) {
    $scope.restaurant = _.filter(restaurants,function (restaurant) {
      return $stateParams.restaurantId == restaurant.id;
    })[0];
    sharedVariables.getUsers.success(function (users) {
      $scope.restaurant.fullFriends = _.filter(users,function (user) {
        console.log($scope.restaurant)
        return $scope.restaurant.friends.indexOf(user.id) > -1;
      });
    })
  })
}]);
