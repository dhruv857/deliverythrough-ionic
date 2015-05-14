
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {

      StatusBar.styleDefault();
    }
  });
})



.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html",
        controller: 'SearchCntrl',

      }
    }
  })

  .state('app.deliveries', {
    url: "/deliveries",
    views: {
      'menuContent': {
        templateUrl: "templates/deliveries.html"
      }
    }
  })
    .state('app.main', {
      url: "/main",
      views: {
        'menuContent': {
          templateUrl: "templates/main.html",
          controller: 'Mainlist'
        }
      }
    })
    .state('app.productdetails', {
      url: "/productdetails",
      param: {
        name:null,
      },
      views: {
        'menuContent': {
          templateUrl: "templates/productdetails.html",
          controller: 'SearchCntrl'
        }
      }
    })
    .state('app.payments', {
      url: "/payments",
      views: {
        'menuContent': {
          templateUrl: "templates/payments.html",
          controller: ''
        }
      }
    })
    .state('app.about', {
      url: "/about",
      views: {
        'menuContent': {
          templateUrl: "templates/about.html",
          controller: ''
        }
      }
    })
    .state('app.request', {
      url: "/request",
      views:{
      'menuContent':{
      templateUrl: "templates/request.html",
      controller:'Playcntrl'
      }
    }

    })

  .state('app.single', {
    url: "/main/:detailId",
    views: {
      'menuContent': {
        templateUrl: "templates/detail.html",
        controller: 'Detaillist'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/main');
});
