var appmod = angular.module("myapplication",[]);


appmod.service("date",function(){
	var dat = new Date();
	this.minute = dat.getMinutes();
	this.dt = dat.getHours();
	
});
appmod.service('service2',function(date,$filter){
	var greet;
	var time = $filter('date')(new Date(), 'HH');
	if(time > 0 && time < 12)
	{
		this.greet = "Good morning";
	}
	else if(time =>12  && time <= 15)
	{
		this.greet = "Good afternoon";
	}
	else if(time >15  && time <= 20)
	{
		this.greet = "Good evening";
	}
	else
	{
		this.greet = "Good night";
	}	
	
});

appmod.controller("AppCtrl", function ($scope,date,service2,$interval,$filter) {
	$scope.myvalue = false;
	$scope.reset = function(){
		$scope.finalname = [];
		if ($scope.name) {
	          $scope.finalname.push(this.name);
	          $scope.name = '';
	        }
		 $scope.myvalue = true;  
	};
	$scope.theTime = new Date().toLocaleTimeString();
	  $interval(function () {
	      $scope.theTime =  $filter('date')(new Date(), 'HH:MM a');
	  }, 1000);
  $scope.time = date.dt;
  $scope.time1 = date.minute;
  $scope.greet = service2.greet;

});
appmod.controller('mycontroller',function($scope)
		{
		 $scope.list = [];
	      $scope.text = '';
	      $scope.submit = function() {
	        if ($scope.text) {
	          $scope.list.push(this.text);
	          $scope.text = '';
	        }
	      };
	      
	        $scope.removeTask = function (index) {
	            $scope.list.splice(index, 1);
	        };
		});