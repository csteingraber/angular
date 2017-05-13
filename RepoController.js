(function() {
  var RepoController = function($scope, github, $routeParams) {
    var onRepoComplete = function(data) {
      $scope.repo = data;
      github.getCollaborators($scope.username, $scope.reponame).then(onCollaboratorComplete);
    };
    
    var onCollaboratorComplete = function(data) {
      $scope.contributors = data;
    };
    
    $scope.username = $routeParams.username;
    $scope.reponame = $routeParams.reponame;
    github.getRepoInfo($scope.username, $scope.reponame).then(onRepoComplete);
  };
  var module = angular.module("githubViewer");
  module.controller("RepoController", RepoController);
}());