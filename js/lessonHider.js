angular.module('directivePractice')
  .directive('lessonHider', function() {

    return {
      templateUrl: 'lessonHider.html',
      restrict: 'E',

      scope: {
        lesson: '=',
        dayAlert: '&',
        remove: '&',
        index: '='
      },

      controller: function($scope, lessonService) {
        $scope.getSchedule = lessonService.getSchedule();
      },
      link: function(scope, element, attributes) {

        // var remove = false;
        // scope.remove = function() {
        //   if (remove === false){
        //     .removeAttribute(lesson[i]);
        //   }
        // };


				var toggle = true;
				scope.click = function() {
					if (toggle === true) {
						element.css('text-decoration', 'none');
						toggle = false;
					} else if (toggle === false) {
						element.css('text-decoration', 'line-through');
					}
				};

        // scope.remove = function(index) {
        //   scope.lessons.splice(indexOf(lesson),1);
        //
        //
        // return scope.lessons;
        // };

        scope.getSchedule.then(function(response) {
          scope.schedule = response.data;

          scope.schedule.forEach(function(scheduleDay) {

            if (scheduleDay.lesson === scope.lesson) {
              element.css('text-decoration', 'line-through');
              scope.lessonDay = scheduleDay.weekday;
              var a = 1;
              return;
            }


          });
        });



      }


    };
  });
