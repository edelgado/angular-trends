angular.module('trends', [])

.factory('dataFactory', function($http) {
  var factory = {};
  factory.getTrendData = function() {
    var dataFunc = $http.get('http://www.google.com/trends/fetchComponent?q=angular,backbone,sproutcore&cid=TIMESERIES_GRAPH_0&export=3');
    dataFunc();
    var something = {
      date: '2010-03',
      value: 100
    };
    return something;
  }
  return factory;
})

.controller('tendsController', function($scope, dataFactory) {
  $scope.trendData = dataFactory.getTrendData();
    console.log('hello?');
    return data;
})