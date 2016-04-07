(function(){
    
    'use strict';
    
    angular
        .module('asg', [
            'ui.router'
        ])
        
       .config(function($urlRouterProvider, $stateProvider){
           $stateProvider
           
           .state('home', {
               url: '/',
               controller: 'HomeController',
               controlleras: 'homeCtrl',
               templateurl: '/app/components/home/home.html'
           })
           
           $urlRouterProvider.otherwise('/');
       })

}());