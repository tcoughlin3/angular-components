// TODO: create the blog controller
// check blog.html for hints on what the controller
// should have/do
import _ from 'lodash';

class BlogController {
  constructor() {
    this.message = 'Welcome to the blog about cats!';
    this.posts = _.times(5, i => ({ title: 'What\'s new in Angular 3', author: 'Casidy James' }));
  }
}

export {BlogController};
