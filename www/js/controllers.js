angular.module('app.controllers', ['ngCordova'])
  
.controller('recordCtrl', function($scope,$cordovaSocialSharing) {
 	$scope.pushNotification = { checked: false };
 	$scope.shareImage = "http://photos1.meetupstatic.com/photos/event/c/5/4/6/global_309230502.jpeg";
	$scope.link = "https://tr.linkedin.com/in/abdullah-mara-27b3a760";
	$scope.voice = "asd1";
	$scope.record = function() {
	   recognition = new SpeechRecognition();
	    recognition.onresult = function(event) {
	        if (event.results[0][0].transcript.length > 0) {
	          $scope.voice =  event.results[0][0].transcript;
	           console.log($scope.voice);
	           console.log(event);
	            $scope.$digest();
	            $cordovaSocialSharing
			    .share($scope.voice, "Voice Share", $scope.shareImage, $scope.link) // Share via native share sheet
			    .then(function(result) {
			      // Success!
			      console.log(result);
			      if (result) {
			      	alert("Temam")
			      };
			    }, function(err) {
			      // An error occured. Show a message to the user
			    });
	        }else{
	        	alert("re-record  en :(")
	        }
	    }
   		recognition.start()
   		console.log(recognition);
	}



})
   
.controller('homeCtrl', function($scope) {

})
   
.controller('shareCtrl', function($scope) {

})
    