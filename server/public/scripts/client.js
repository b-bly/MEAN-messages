
console.log('client.js has been loaded');

var app = angular.module('MessageApp', []);

app.controller('MessageController', ['$http', function($http) {  //you'll see $http, $scope function($http, $scope)
    console.log('Message Controller has been loaded');
    var self = this;
    self.messages = [];

    self.getMessages = function() {
        $http({
            method: 'GET',
            url: '/messages'
        }).then(function(response) {
            console.log('response: ', response.data);
            self.messages = response.data;
        });
    }
  
    

    self.addMessage = function() {
        console.log(self.newMesage);
        $http({
            method: 'POST',
            url: '/messages',
            data: self.newMessage
        }).then(function(response) {
            console.log(response);
            self.getMessages();
            
        })
    }

    self.getMessages();

    

   
}]);