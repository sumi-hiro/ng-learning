// var MyController = function($scope) {
//   $scope.message = 'Hello, World!';
//   $scope.action = function() {
//     $scope.message = 'Goodbye, Everyone!';
//   };
// };
//
// var appModule = angular.module('app', []);
// appModule.controller('myController', MyController);

(function() {
  var MyService = function(a, b) {
    return a + b;
  };
  angular.module('app', []).value('addService', MyService);
})();

(function() {
  var MyControler = function($scope, addService) {
    $scope.x = addService(12, 34);
  };
  angular.module('app').controller('myControler', MyControler);
})();
