// TODO: create the directive for the blog component
// don't forget to include the template and styles and controller
import './blog.styl';
import {BlogController as controller} from './blog.controller.js';
import template from './blog.html';

export const blogDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'vm',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
