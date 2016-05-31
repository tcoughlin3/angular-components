import {blog} from './blog';
import {blogDirective} from './blog.directive';
import template from './blog.html';
import {BlogController} from './blog.controller';
import _ from 'lodash';

describe('Blog', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(blog.name));
  beforeEach(inject(_$rootScope_ => {
    $rootScope = _$rootScope_;
    makeController = (injectables) => {
      return new BlogController(injectables);
    };
  }))

  describe('module', () => {
    it('should have an appropriate name', () => {
      expect(blog.name).to.equal('blog');
    });
  });

  describe('directive', ()=> {
    // TODO: test the directive to make sure it has the
    // right DDO and template and controller
    let blogDx = blogDirective();
    it('should have right DDO', () => {
      expect(blogDx.scope).to.eql({});
    });
    it('should have right template', () => {
      expect(blogDx.template).to.exist;
      expect(blogDx.template).to.equal(template);
    });
    it('should have right controller', () => {
      expect(blogDx.controller).to.exist;
      expect(blogDx.controller).to.be.a('function');
      expect(blogDx.controllerAs).to.exist;
      expect(blogDx.controllerAs).to.equal('vm');
    });
  });

  describe('controller', ()=> {
    // TODO: test the controller
    let testBlogController = new BlogController();
    let samplePost = _.sample(testBlogController.posts);
    it('should be an instance of a class', () => {
      expect(testBlogController).to.be.instanceof(BlogController);
    });
    it('should have a message property', () => {
      expect(testBlogController.message).to.exist;
      expect(testBlogController.message).to.be.a('string');
    });
    it('should have a posts property', () => {
      expect(testBlogController.posts).to.exist;
      expect(testBlogController.posts).to.be.an('array');
      expect(samplePost).to.have.property('author').that.is.a('string');
      expect(samplePost).to.have.property('title').that.is.a('string');
    });
  });

  describe('template', ()=> {
    // TODO: test the template? yup
    // get creative
    let afterSection = template.slice(template.search(/<\/section>/) + 10);
    it('should have a <section>', () => {
      expect(template).to.be.a('string');
      expect(template.search(/<section/)).to.not.be.null;
      expect(afterSection).to.not.contain('<');
    });
  });
});
