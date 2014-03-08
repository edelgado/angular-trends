angular.module('trends', [])

.factory('dataFactory', function($http) {
  var factory = {};
  factory.getTrendData = function() {
    // var dataFunc = $http.get('http://www.google.com/trends/fetchComponent?q=angular,backbone,sproutcore&cid=TIMESERIES_GRAPH_0&export=3');
    // The data comes from Google's http://www.google.com/trends/fetchComponent URI, via a small node.js service.
    return $http.get('http://0.0.0.0:3000/data.json');
  }
  return factory;
})

.controller('trendsController', function($scope, dataFactory) {
  $scope.trendData = dataFactory.getTrendData();
    console.log('hello?');
    return data;
})