import {IBlogPost, RoutesWithPathPrefix} from '../../shared/interfaces';
import {BlogPostUtils} from './blogPostUtils';
import {Route} from '@angular/router';
import {GraphqlComponent} from '../../navigationpages/blog/dev/post/graphql.component';

describe('BlogPostUtils', () => {

    it('compareBlogPostsByDate', () => {
        let blogPost1: IBlogPost = {
            postDate: new Date(2019, 12, 5),
            postTitle: '',
            postAbstract: '',
            postCategories: [],
            postImageName: '',
            path: ''
        };
        let blogPost2: IBlogPost = {
            postDate: new Date(2019, 12, 3),
            postTitle: '',
            postAbstract: '',
            postCategories: [],
            postImageName: '',
            path: ''
        };

        expect(BlogPostUtils.compareBlogPostsByDate(blogPost1, blogPost2)).toBeLessThan(0);
        expect(BlogPostUtils.compareBlogPostsByDate(blogPost2, blogPost1)).toBeGreaterThan(0);
        expect(BlogPostUtils.compareBlogPostsByDate(blogPost1, blogPost1)).toEqual(0);
    });

    it('compareBlogPostsByDate - date is undefined', () => {
        let blogPostWithDate: IBlogPost = {
            postDate: new Date(2019, 12, 5),
            postTitle: '',
            postAbstract: '',
            postCategories: [],
            postImageName: '',
            path: ''
        };
        let blogPostWithoutDate: IBlogPost = {
            postDate: undefined,
            postTitle: '',
            postAbstract: '',
            postCategories: [],
            postImageName: '',
            path: ''
        };

        expect(BlogPostUtils.compareBlogPostsByDate(blogPostWithDate, blogPostWithoutDate)).toBeLessThan(0);
        expect(BlogPostUtils.compareBlogPostsByDate(blogPostWithoutDate, blogPostWithDate)).toBeGreaterThan(0);
    });

    it('getBlogPostsFromRoutes', () => {
        let emptyRoute: Route = {path: ''};
        let route: Route = {path: 'myPath'};
        route.component = GraphqlComponent;
        let routesWithPathPrefix: RoutesWithPathPrefix = {routes: [emptyRoute, route], pathPrefix: 'prefix'};

        let blogPostsFromRoutes: IBlogPost[] = BlogPostUtils.getBlogPostsFromRoutes(routesWithPathPrefix);

        expect(blogPostsFromRoutes.length).toEqual(1);
        expect(blogPostsFromRoutes[0].postTitle).toEqual('GraphQL with Spring Boot');
    });

});
