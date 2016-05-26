// TODO: register your routes for the blog and the directive
import angular from 'angular';
import {blogDirective} from './blog.directive';

export const blog = angular.module('blog', [])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('blog', {
    url: '/',
    template: '<blog></blog>'
  });
})
.directive('blog', blogDirective);
