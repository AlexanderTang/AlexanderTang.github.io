import {SpectatorRouting, createRoutingFactory} from '@ngneat/spectator/jest';
import {MockComponent} from 'ng-mocks';
import {BlogOverviewComponent} from './blog-overview.component';
import {IBlogPost} from '../interfaces';
import {BlogSidebarComponent} from '../blog-sidebar/blog-sidebar.component';

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

    describe('blog posts', () => {
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

        it('blogPostsForCurrentPage - page 1', () => {
            spectator.setRouteQueryParam('page', '1');
            spectator.setInput("blogPosts", blogPosts);
            spectator.component.ngOnInit();

            expect(spectator.component.currentPage).toEqual(1);
            const blogPostsForPage1 = spectator.component.blogPostsForCurrentPage();
            expect(blogPostsForPage1.length).toEqual(5);
            expect(blogPostsForPage1).toEqual(blogPosts.slice(0,5));
        });

        it('blogPostsForCurrentPage - page 2', () => {
            spectator.setRouteQueryParam('page', '2');
            spectator.setInput('blogPosts', blogPosts);
            spectator.component.ngOnInit();

            expect(spectator.component.currentPage).toEqual(2);
            const blogPostsForPage2 = spectator.component.blogPostsForCurrentPage();
            expect(blogPostsForPage2.length).toEqual(1);
            expect(blogPostsForPage2).toContain(blogPosts[5]);
        });

        it('blogPostsForCurrentPage - page 3 - gets rerouted to page 1', () => {
            spectator.setRouteQueryParam('page', '3');
            spectator.setInput('blogPosts', blogPosts);
            spectator.component.ngOnInit();

            expect(spectator.component.currentPage).toEqual(1);
            const blogPostsForPage1 = spectator.component.blogPostsForCurrentPage();
            expect(blogPostsForPage1.length).toEqual(5);
            expect(blogPostsForPage1).toEqual(blogPosts.slice(0,5));
        });
    });

    describe('paging', () => {
        it('hasNewerPage - page 1 - false', () => {
            spectator.setRouteQueryParam('page', '1');
            spectator.component.ngOnInit();

            expect(spectator.component.hasNewerPage()).toBeFalsy();
        });

        it('hasNewerPage - page 2 - true', () => {
            spectator.setRouteQueryParam('page', '2');
            spectator.setInput('blogPosts', blogPosts);
            spectator.component.ngOnInit();

            expect(spectator.component.hasNewerPage()).toBeTruthy();
        });

        it('hasOlderPage - page 1 - number of blog posts larger than page size - true', () => {
            spectator.setRouteQueryParam('page', '1');
            spectator.component.pageSize = 5;
            spectator.setInput('blogPosts', blogPosts);
            spectator.component.ngOnInit();

            expect(spectator.component.hasOlderPage()).toBeTruthy();
        });

        it('hasOlderPage - page 1 - number of blog posts equal to page size - false', () => {
            spectator.setRouteQueryParam('page', '1');
            spectator.component.pageSize = 5;
            spectator.setInput('blogPosts', blogPosts.slice(0,5));
            spectator.component.ngOnInit();

            expect(spectator.component.hasOlderPage()).toBeFalsy();
        });

        it('hasOlderPage - page 2 - false', () => {
            spectator.setRouteQueryParam('page', '2');
            spectator.component.pageSize = 5;
            spectator.setInput('blogPosts', blogPosts);
            spectator.component.ngOnInit();

            expect(spectator.component.hasOlderPage()).toBeFalsy();
        });

        it('nextPage', () => {
            spectator.setRouteQueryParam('page', '1');
            spectator.component.ngOnInit();

            expect(spectator.component.currentPage).toEqual(1);
            spectator.component.nextPage();
            expect(spectator.component.currentPage).toEqual(2);
        });

        it('previousPage', () => {
            spectator.setRouteQueryParam('page', '2');
            spectator.component.pageSize = 5;
            spectator.setInput('blogPosts', blogPosts);
            spectator.component.ngOnInit();

            expect(spectator.component.currentPage).toEqual(2);
            spectator.component.previousPage();
            expect(spectator.component.currentPage).toEqual(1);
        });
    });
});
