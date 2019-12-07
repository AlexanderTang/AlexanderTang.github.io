import {SpectatorRouting, createRoutingFactory} from '@ngneat/spectator/jest';
import {MockComponent} from 'ng-mocks';
import {BlogOverviewComponent} from './blog-overview.component';
import {IBlogPost} from '../interfaces';
import {BlogSidebarComponent} from '../blog-sidebar/blog-sidebar.component';

//TODO
describe('BlogOverviewComponent', () => {
    let spectator: SpectatorRouting<BlogOverviewComponent>;
    const createComponent = createRoutingFactory({
        component: BlogOverviewComponent,
        queryParams: {page: 1},
        declarations: [
            MockComponent(BlogSidebarComponent)
        ]
    });

    const blogPosts: IBlogPost[] = [
        {path: '', postTitle: 'title1', postDate: new Date(), postAbstract: '', postCategories: [], postImageName: ''},
        {path: '', postTitle: 'title2', postDate: new Date(), postAbstract: '', postCategories: [], postImageName: ''},
        {path: '', postTitle: 'title3', postDate: new Date(), postAbstract: '', postCategories: [], postImageName: ''},
        {path: '', postTitle: 'title4', postDate: new Date(), postAbstract: '', postCategories: [], postImageName: ''},
        {path: '', postTitle: 'title5', postDate: new Date(), postAbstract: '', postCategories: [], postImageName: ''},
        {path: '', postTitle: 'title6', postDate: new Date(), postAbstract: '', postCategories: [], postImageName: ''}
    ];

    beforeEach(() => spectator = createComponent());

    it('postImagePresent', () => {
        const blogPost: IBlogPost = {
            path: '', postTitle: '', postDate: undefined, postAbstract: '',
            postCategories: [], postImageName: 'imageName'
        };

        expect(spectator.component.postImagePresent(blogPost)).toBeTruthy();
    });

    it('postImagePresent - no image name', () => {
        const blogPost: IBlogPost = {
            path: '', postTitle: '', postDate: undefined, postAbstract: '',
            postCategories: [], postImageName: ''
        };

        expect(spectator.component.postImagePresent(blogPost)).toBeFalsy();
    });

    //TODO fix tests:
    //  problem: the input and route query param are set AFTER the component is already created and so the ngOnInit has already been processed.
    //  solution: create spectator within tests and pass input + query params or suspend component creation somehow
    //
    // it('blogPostsForCurrentPage - page 1', () => {
    //     spectator.setRouteQueryParam('page', '1');
    //     spectator.setInput("blogPosts", blogPosts);
    //
    //     let blogPostsForPage1 = spectator.component.blogPostsForCurrentPage();
    //     expect(blogPostsForPage1.length).toEqual(5);
    //     expect(blogPostsForPage1).toEqual(blogPosts.slice(0,5));
    // });
    //
    // it('blogPostsForCurrentPage - page 2', () => {
    //     spectator.setRouteQueryParam('page', '2');
    //     spectator.setInput('blogPosts', blogPosts);
    //
    //     let blogPostsForPage2 = spectator.component.blogPostsForCurrentPage();
    //     expect(blogPostsForPage2.length).toEqual(1);
    //     expect(blogPostsForPage2).toContain(blogPosts[5]);
    // });
});
