//create characters controller and require $scope and $http
app.controller('characters', ['$scope', '$http', function($scope, $http) {

  $scope.showCharacters = false;

  var data = [];
  var position = 0;

  //update the properties that are bound in the characters template
  function updateCharacter(character) {
    $scope.name = character.name;
    $scope.home = character.home;
    $scope.image = character.image;
    $scope.age = character.age;
    $scope.hobby = character.hobby;
  }

  $scope.getCharacters = function () {
    $http({
      method: 'GET',
      url: '/characters'
    }).then(
      function (response) {
        data = response.data;
        updateCharacter(data[0]);
        $scope.showCharacters = true;
    }, function (response) {
        console.log(response);
    });
  };

  $scope.movePrevious = function () {
    if (data.length > 0) {
      var character;
      if (position == 0) {
        character = data[data.length - 1];
        position = data.length - 1;
      } else {
        position--;
        character = data[position];
      }

      updateCharacter(character);
    }
  };

  $scope.moveNext = function () {
    if (data.length > 0) {
      var character;
      if (position == data.length - 1) {
        character = data[0];
        position = 0;
      } else {
        position++;
        character = data[position];
      }

      updateCharacter(character);
    }
  };

}]);