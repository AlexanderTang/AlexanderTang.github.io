import {SpectatorService, createServiceFactory} from '@ngneat/spectator/jest';
import {BlogRoutingService} from './blogRoutingService';
import {IBlogPost, RoutesWithPathPrefix} from '../../shared/interfaces';

describe('BlogRoutingService', () => {
    let spectator: SpectatorService<BlogRoutingService>;
    const createService = createServiceFactory(BlogRoutingService);

    beforeEach(() => spectator = createService());

    it('getAllBlogPosts - contains posts', () => {
        const allBlogPosts: IBlogPost[] = spectator.service.getAllBlogPosts();
        expect(allBlogPosts.map((blogPost: IBlogPost) => blogPost.postTitle))
            .toContain('Differences between RSA and HMAC');
    });

    it('getAllBlogPosts - number of posts equals number of blog routes', () => {
        const numberOfBlogPosts: number = spectator.service.getAllBlogPosts().length;
        let numberOfBlogRoutes: number = spectator.service.getAllRoutes()
            .map((route: RoutesWithPathPrefix) => route.routes.length)
            .reduce((sum, current) => sum + current, 0);
        numberOfBlogRoutes -= spectator.service.getAllRoutes().length; // remove empty paths
        expect(numberOfBlogPosts).toEqual(numberOfBlogRoutes);
    });
});
