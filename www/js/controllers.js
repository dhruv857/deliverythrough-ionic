angular.module('starter.controllers', ['ui.router','ionic','ngCordova'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};


  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);


    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})



.controller('Mainlist', function($scope) {
  $scope.detail = [
    { title: 'Walmart', id: 1},
    { title: 'Ikea', id: 2 },
    { title: 'Amazon', id: 3 },
    { title: 'Best Buy', id: 4 },
    { title: 'Target', id: 5 },
    { title: 'Macy\'s', id: 6 }
  ];
})

.controller('Detaillist', function($scope, $stateParams) {
})
.controller("Playcntrl", function($scope, $cordovaMedia, $ionicLoading) {

    $scope.play = function(src) {
        var media = new Media(src, null, null, mediaStatusCallback);
        $cordovaMedia.play(media);
    }

    var mediaStatusCallback = function(status) {
        if(status == 1) {
            $ionicLoading.show({template: 'Loading...'});
        } else {
            $ionicLoading.hide();
        }
    }

})
.controller('Detailprod', function($scope, $stateParams,$cordovaVibration,$cordovaFlashlight) {
$cordovaVibration.vibrate(6000);
  $scope.items=[
    {title:'Razer Mouse',description:'Best Gaming Mouse',thumb:'razer.png'},
    {title:'Apple Iphone 6 ',description:'64gb Apple Iphone 6',thumb:'apple.png'},
    {title:'Macbook',description:'Apple Mocbook New',thumb:'apple.png'},
    {title:'Alienware 13',description:'One of the best gaming laptop',thumb:'alien.jpg'}
  ];

  $scope.shouldShowDelete = false;
$scope.shouldShowReorder = false;
$scope.listCanSwipe = true;
$cordovaFlashlight.switchOn();
$cordovaVibration.vibrate(6000);
$cordovaFlashlight.switchOff();


})



.controller('SearchCntrl', function($scope,$http,$q,$stateParams) {
  $scope.dataname;





  $scope.searchme = function() {
    $http.jsonp('http://api.walmartlabs.com/v1/search?query='+$scope.dataname+'&format=json&facet=on&apiKey=6ucezt4yfankfbzuqunuah3g&callback=JSON_CALLBACK', {method: 'GET'}).success(function(data){
    $scope.data=data;
    console.log('http://api.walmartlabs.com/v1/search?query='+$scope.dataname+'&format=json&facet=on&apiKey=6ucezt4yfankfbzuqunuah3g&callback=JSON_CALLBACK');
    });

  };

  $scope.details=function($scope,$stateParams){
    $scope.staname=$stateParams.name;
    console.log(name);
  };

  /*$scope.processproduct= function(JsonResult){
    var items = JsonResult.query.results.Result;

	    var no_items=items.length;
	     for(var i=0;i<no_items;i++){
          		if(i==0){

          		var nam = "Name: " + items[i].name;
              var sp = "SalePrice" + items[i].salePrice;
            }
          }
        };*/


});
