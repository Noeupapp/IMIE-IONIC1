angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})


.controller('AccelCtrl', function($scope,$cordovaDeviceMotion) {

  $scope.x = 0;
  $scope.y = 0;
  $scope.z = 0;
  $scope.timestamp = 0;


   $cordovaDeviceMotion.getCurrentAcceleration().then(function(result) {
      $scope.x = result.x;
      $scope.y = result.y;
      $scope.z = result.z;
      $scope.timestamp = result.timestamp;
    }, function(err) {
      // An error occurred. Show a message to the user
    });

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
