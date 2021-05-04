import {createRoutingFactory, SpectatorRouting, SpyObject} from '@ngneat/spectator/jest';
import {BlogSidebarCategoryComponent} from './blog-sidebar-category.component';
import {BlogRoutingService} from '../../../core/service/blogRoutingService';
import {IBlogPost} from '../../interfaces';
import {PostCategory} from '../../../core/enum/postCategory';
import {RouterTestingModule} from '@angular/router/testing';

describe('BlogSidebarCategoryComponent', () => {
    let spectator: SpectatorRouting<BlogSidebarCategoryComponent>;
    const createComponent = createRoutingFactory({
        component: BlogSidebarCategoryComponent,
        imports: [RouterTestingModule],
        mocks: [BlogRoutingService],
        detectChanges: false
    });

    const blogPosts: IBlogPost[] = [
        {
            path: '',
            postTitle: 'title1',
            postDate: new Date(),
            postAbstract: '',
            postCategories: [PostCategory.TechTools, PostCategory.Angular],
            postImageName: ''
        },
        {
            path: '',
            postTitle: 'title2',
            postDate: new Date(),
            postAbstract: '',
            postCategories: [PostCategory.TechTools, PostCategory.ChineseGrammar],
            postImageName: ''
        },
        {
            path: '',
            postTitle: 'title3',
            postDate: new Date(),
            postAbstract: '',
            postCategories: [PostCategory.TechTools, PostCategory.ChineseGrammar],
            postImageName: ''
        }
    ];

    beforeEach(() => {
        spectator = createComponent();
    });

    it('getTop6Categories', () => {
        const blogRoutingServiceMock: SpyObject<BlogRoutingService> = spectator.get<BlogRoutingService>(BlogRoutingService);
        blogRoutingServiceMock.getAllBlogPosts.andReturn(blogPosts);
        spectator.component.ngOnInit();

        const categories = [
            [PostCategory.TechTools, 3],
            [PostCategory.ChineseGrammar, 2],
            [PostCategory.Angular, 1]];

        expect(spectator.component.getTop6Categories()).toEqual(categories);
    });

    it('getEnumString', () => {
        expect(spectator.component.getEnumString(PostCategory.TechTools)).toEqual('TechTools');
        expect(spectator.component.getEnumString(PostCategory.Angular)).toEqual('Angular');
    });
});
