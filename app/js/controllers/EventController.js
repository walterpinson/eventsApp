'use strict'

eventsApp.controller('EventController',
    function EventController($scope, eventData) {

        $scope.sortorder = 'name';
        $scope.snippet = '<span style="color:red">hi there</span> ';
        $scope.mystyle = {color:'red'};
        $scope.myclass = 'blue';
        $scope.buttonDisabled = true;
        $scope.boolValue = false;
        $scope.event = eventData.event;

        $scope.upVoteSession = function(session){
            session.upVoteCount++;
        }

        $scope.downVoteSession = function(session){
            session.upVoteCount--;
        }
    }
);