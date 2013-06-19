/**
 * Created with JetBrains WebStorm.
 * User: Walter.Pinson
 * Date: 6/19/13
 * Time: 2:44 PM
 * To change this template use File | Settings | File Templates.
 */

eventsApp.controller('EditEventController',
    function EditEventController($scope) {
        $scope.saveEvent = function(event, newEventForm) {
            if(newEventForm.$valid){
                window.alert('event ' + event.name + ' saved!');
            }
        }

        $scope.cancelEdit = function() {
            window.location = '/EventDetails.html';
        }
    }
);
