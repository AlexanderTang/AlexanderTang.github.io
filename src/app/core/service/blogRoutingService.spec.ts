import {SpectatorService, createServiceFactory} from '@ngneat/spectator/jest';
import {BlogRoutingService} from './blogRoutingService';
import {IBlogPost} from '../../shared/interfaces';

describe('BlogRoutingService', () => {
    let spectator: SpectatorService<BlogRoutingService>;
    const createService = createServiceFactory(BlogRoutingService);

    beforeEach(() => spectator = createService());

    it('getAllBlogPosts - contains posts', () => {
        let allBlogPosts: IBlogPost[] = spectator.service.getAllBlogPosts();
        expect(allBlogPosts.map((blogPost: IBlogPost) => blogPost.postTitle))
            .toContain('Differences between RSA and HMAC');
    });

    it('getAllBlogPosts - number of posts equals number of blog routes', () => {
        let numberOfBlogPosts: number = spectator.service.getAllBlogPosts().length;
        let numberOfBlogRoutes: number = spectator.service.getAllRoutes().length;
        expect(numberOfBlogPosts).toEqual(numberOfBlogRoutes);
    });
});
