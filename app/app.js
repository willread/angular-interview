angular.module('app', [])

.controller('PeopleSearchController', function($scope, peopleService) {
  $scope.search = function() {
    peopleService.search().then(function(people) {
      $scope.people = people;
    });
  };
})

.service('peopleService', function($q, $http) {
  var service = this;

  service.search = function(term) {
    var deferred = $q.defer();

    $http.get('/people', {
      params: {
        term: term
      }
    }).then(function(response) {
      deferred.resolve(response.data);
    }, function(response) {
      deferred.reject(response.data.message);
    });

    return deferred.promise;
  };
});