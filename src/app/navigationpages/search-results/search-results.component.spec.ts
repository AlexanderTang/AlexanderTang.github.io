import {createRoutingFactory, SpectatorRouting, SpyObject} from '@ngneat/spectator/jest';
import {BlogRoutingService} from '../../core/service/blogRoutingService';
import {IBlogPost} from '../../shared/interfaces';
import {PostCategory} from '../../core/enum/postCategory';
import {SearchResultsComponent} from './search-results.component';
import {MockComponent} from 'ng-mocks';
import {BlogOverviewComponent} from '../../shared/blog-overview/blog-overview.component';

describe('SearchResultsComponent', () => {
    let spectator: SpectatorRouting<SearchResultsComponent>;
    const createComponent = createRoutingFactory({
        component: SearchResultsComponent,
        mocks: [BlogRoutingService],
        declarations: [MockComponent(BlogOverviewComponent)]
    });

    const blogPosts: IBlogPost[] = [
        {
            path: '',
            postTitle: 'title1',
            postDate: new Date(),
            postAbstract: 'keyword1 keyword2',
            postCategories: [PostCategory.TechTools, PostCategory.Angular],
            postImageName: ''
        },
        {
            path: '',
            postTitle: 'title2',
            postDate: new Date(),
            postAbstract: 'keyword1',
            postCategories: [PostCategory.ChineseGrammar],
            postImageName: ''
        },
        {
            path: '',
            postTitle: 'title3',
            postDate: new Date(),
            postAbstract: 'keyword3',
            postCategories: [PostCategory.TechTools, PostCategory.ChineseGrammar],
            postImageName: ''
        }
    ];

    beforeEach(() => {
        spectator = createComponent();
    });

    it('getMatchingPosts - filter by category TechTools', () => {
        let blogRoutingServiceMock: SpyObject<BlogRoutingService> = spectator.get<BlogRoutingService>(BlogRoutingService);
        blogRoutingServiceMock.getAllBlogPosts.andReturn(blogPosts);
        spectator.setRouteQueryParam('category', PostCategory.TechTools.valueOf().toString());

        expect(spectator.component.getMatchingPosts().length).toEqual(2);
        expect(spectator.component.getMatchingPosts()).toContain(blogPosts[0]);
        expect(spectator.component.getMatchingPosts()).toContain(blogPosts[2]);
    });

    it('getMatchingPosts - no filter - returns all posts', () => {
        let blogRoutingServiceMock: SpyObject<BlogRoutingService> = spectator.get<BlogRoutingService>(BlogRoutingService);
        blogRoutingServiceMock.getAllBlogPosts.andReturn(blogPosts);

        expect(spectator.component.getMatchingPosts().length).toEqual(3);
        expect(spectator.component.getMatchingPosts()).toContain(blogPosts[0]);
        expect(spectator.component.getMatchingPosts()).toContain(blogPosts[1]);
        expect(spectator.component.getMatchingPosts()).toContain(blogPosts[2]);
    });

    it('getMatchingPosts - filter by search term title1', () => {
        let blogRoutingServiceMock: SpyObject<BlogRoutingService> = spectator.get<BlogRoutingService>(BlogRoutingService);
        blogRoutingServiceMock.getAllBlogPosts.andReturn(blogPosts);
        spectator.setRouteQueryParam('search-term', 'title1');

        expect(spectator.component.getMatchingPosts().length).toEqual(1);
        expect(spectator.component.getMatchingPosts()).toContain(blogPosts[0]);
    });

    it('getMatchingPosts - filter by search term keyword1', () => {
        let blogRoutingServiceMock: SpyObject<BlogRoutingService> = spectator.get<BlogRoutingService>(BlogRoutingService);
        blogRoutingServiceMock.getAllBlogPosts.andReturn(blogPosts);
        spectator.setRouteQueryParam('search-term', 'keyword1');

        expect(spectator.component.getMatchingPosts().length).toEqual(2);
        expect(spectator.component.getMatchingPosts()).toContain(blogPosts[0]);
        expect(spectator.component.getMatchingPosts()).toContain(blogPosts[1]);
    });

    it('getMatchingPosts - mix category and search term filter', () => {
        let blogRoutingServiceMock: SpyObject<BlogRoutingService> = spectator.get<BlogRoutingService>(BlogRoutingService);
        blogRoutingServiceMock.getAllBlogPosts.andReturn(blogPosts);
        spectator.setRouteQueryParam('category', PostCategory.TechTools.valueOf().toString());
        spectator.setRouteQueryParam('search-term', 'keyword1');

        expect(spectator.component.getMatchingPosts().length).toEqual(1);
        expect(spectator.component.getMatchingPosts()).toContain(blogPosts[0]);
    });
});
