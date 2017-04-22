angular.module('starter.controllers')
.controller('TasksController', function ($rootScope, $scope, Tasks) {
    $scope.tasks = Tasks.all();
    $scope.complete_tasks = Tasks.complete_all();
    $scope.complete = function (task) {
        //alert("complete");
        Tasks.complete(task);
    };
});