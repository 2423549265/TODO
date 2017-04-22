angular.module('starter.services')
.factory('Tasks', function () {
    return {
        all: function () {
            var taskString = window.localStorage['tasks'];
            if (taskString) {
                return angular.fromJson(taskString);
            }
            return [];
        },
        complete_all: function(){
            var complete_taskString = window.localStorage['complete_tasks'];
            if (complete_taskString) {
                return angular.fromJson(complete_taskString);
            }
            return [];
        },
        save: function (task) {
            var tasks = [];
            var taskString = window.localStorage['tasks'];
            if (taskString) {
                tasks = angular.fromJson(taskString);
            }
            tasks.push(task);
            window.localStorage['tasks'] = angular.toJson(tasks);
        },
        complete: function (task) {
            //console.log(task.title);
            var tasks = [];
            var taskString = window.localStorage['tasks'];
            if (taskString) {
                tasks = angular.fromJson(taskString);
            }
            for (var i = 0; i < tasks.length; i++) {
                if (tasks[i].title == task.title)
                    tasks.splice(i, 1);
            }
            //tasks.push(task);
            window.localStorage['tasks'] = angular.toJson(tasks);

            var complete_tasks = [];
            var complete_taskString = window.localStorage['complete_tasks'];
            if (complete_taskString) {
                complete_tasks = angular.fromJson(complete_taskString);
            }
            complete_tasks.push(task);
            window.localStorage['complete_tasks'] = angular.toJson(complete_tasks);

            window.location.reload();
        }
    }
})