(function() {
  "use strict";

  angular.module("app").controller("bobCtrl", function($scope){
    $scope.message = "Hello World!";

    $scope.tasks = [
      { 
        text: "Buy a gun",
        completed: false
      },{ 
        text: "Kill Joe",
        completed: false
      },{ 
        text: "Get rid of Joe's body",
        completed: false
      },{ 
        text: "Run away from the country",
        completed: false
      }];

    $scope.addTask = function(text){
      if (text) {
        var newTask = {
          text: text,
          completed: false
        };
        $scope.tasks.push(newTask);
        $scope.newTask = "";
      }
    };

  });
})();


