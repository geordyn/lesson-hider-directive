angular.module('directivePractice')
  .controller('lessonCtrl', function($scope, lessonService) {

    $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

    $scope.test = 'two way data binding!!';

    $scope.getSchedule = lessonService.getSchedule();

    $scope.announceDay = function(lesson, day) {
          alert(lesson + ' is active on ' + day + '.');
    };

    $scope.remove = function( index ) {
      $scope.lessons.splice(index, 1);
    };







  });
