'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('HomeCtrl1', ['$scope', function($scope) {
      $scope.results = [];
      $scope.searchKey = "";
      $scope.newsOrder = "title";
      $scope.reverse = "false";

      $scope.search = function(term) {
        $scope.results = [{
  "title": "Nunc aliquet ligula non nibh varius porttitor",
  "summary": "Duis scelerisque nulla ac ante vehicula, eu vulputate ante volutpat. In id ante accumsan, commodo ligula sit amet, imperdiet augue. Cras quis tellus lacinia tellus sodales hendrerit.",
  "timestamp": 1401210500000
},{
  "title": "Sed ac nibh sed leo elementum condimentum",
  "summary": "In id odio nec velit pretium dapibus. In elementum ornare mauris, id dapibus leo mollis convallis. Nulla porta, ante vel pellentesque.",
  "timestamp": 1401110500000
},{
  "title": "Cras gravida lacus pharetra erat consequat luctus",
  "summary": "Curabitur ut magna pharetra, auctor massa nec, luctus justo. Sed fermentum tincidunt ipsum, nec iaculis nibh tempor id. Mauris erat dui, sodales in mauris eu.",
  "timestamp": 1401010500000
},{
  "title": "Sed convallis, enim sit amet lobortis hendrerit",
  "summary": " Duis bibendum posuere lacinia. Phasellus id orci eget diam venenatis sollicitudin. Ut et felis eu ligula auctor pulvinar. Mauris vitae pharetra urna. In sit amet lobortis mauris. Ut varius eleifend est, non tristique mi viverra non.",
  "timestamp": 1401110500000
},{
  "title": "Integer bibendum eleifend ante, rutrum gravida",
  "summary": "Praesent ut diam tempor, porta nisl sed, dapibus erat. Nulla facilisi. Curabitur tincidunt magna lacinia leo ullamcorper, non hendrerit nibh volutpat. Proin non odio ac massa ullamcorper lacinia quis a tellus.",
  "timestamp": 1400710500000
},{
  "title": "Nullam at elit eget erat venenatis porttitor nec et enim",
  "summary": "Maecenas lorem est, eleifend eu lobortis sed, hendrerit vel orci. Cras commodo erat at odio auctor fermentum. Vivamus lorem sem, hendrerit sed diam at.",
  "timestamp": 1401210500000
}];
      };

      $scope.emptyResults = function() {
        $scope.results = [];
        $scope.searchKey = "";
      };

      $scope.pushNews = function(news) {
        $scope.results.push({
          "title": "Nova notitia",
          "summary": "Hic sunt leones.",
          "timestamp": 1401010511000})
      };

  }]);
