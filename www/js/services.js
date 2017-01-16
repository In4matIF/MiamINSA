angular.module('app.services', [])

.factory('sharedVariables', ['$http', function($http){
  var sharedVariables =
    {
      getRankedRestaurants:$http.get('data/rankedRestaurants.json'),
      getRestaurants:$http.get('data/restaurants.json'),
      getCurrentUser:$http.get('data/currentUser.json'),
      getCurrentUserFriends:$http.get('data/currentUserFriends.json'),
      getFriendsRestaurants:$http.get('data/friendsRestaurants.json'),
      getMenus:$http.get('data/menus.json'),
      getUsers:$http.get('data/users.json'),
      getDiets:$http.get('data/diets.json')
    };

  return sharedVariables;
}]);
