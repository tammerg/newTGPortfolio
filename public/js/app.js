angular.module('portfolioApp', ['ui.router']).config(function($stateProvider, $urlRouteProvider, $locationProvider){
  $urlRouterProvider.otherwise('/home');

  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: '/views/home.html'
  });

  $locationProvider.html5Mode(true);
  
});
