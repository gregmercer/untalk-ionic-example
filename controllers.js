angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
})

.controller('BooksCtrl', function($scope, $http) {

	var url = "http://gsbpublic0.localhost:8082/vep/view/books.jsonp?callback=JSON_CALLBACK";

	$http.jsonp(url).success(function(data) {
	  $scope.books = data;
	  console.log(data);
	});

});
