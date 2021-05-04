'use strict';
import {Component} from '@angular/core';
import {IBlogPost} from '../../shared/interfaces';
import {BlogRoutingService} from '../../core/service/blogRoutingService';
import {ActivatedRoute} from '@angular/router';
import {PostCategory} from '../../core/enum/postCategory';
import {BlogPostUtils} from '../../core/util/blogPostUtils';

@Component({
    selector: 'app-search-results',
    templateUrl: './search-results.component.html'
})
export class SearchResultsComponent {

    title: string = 'Search results';

    constructor(private activatedRoute: ActivatedRoute,
                private blogRoutingService: BlogRoutingService) {
    }

    getMatchingPosts(): IBlogPost[] {
        let blogPostsFromRoutes: IBlogPost[] = this.blogRoutingService.getAllBlogPosts();
        blogPostsFromRoutes = this.filterByQueryParameterCategory(blogPostsFromRoutes);
        blogPostsFromRoutes = this.filterByQueryParameterSearchTerm(blogPostsFromRoutes);
        blogPostsFromRoutes.sort((blogPost1: IBlogPost, blogPost2: IBlogPost) =>
            BlogPostUtils.compareBlogPostsByDate(blogPost1, blogPost2));
        return blogPostsFromRoutes;
    }

    private filterByQueryParameterCategory(blogPosts: IBlogPost[]): IBlogPost[] {
        const categoryParameter: string = this.activatedRoute.snapshot.queryParamMap.get('category');
        if (categoryParameter == null) {
            return blogPosts;
        }
        const category: PostCategory = +categoryParameter;
        return blogPosts
            .filter((blogPost: IBlogPost) =>
                blogPost.postCategories.some((postCategory: PostCategory) => postCategory === category));
    }

    private filterByQueryParameterSearchTerm(blogPosts: IBlogPost[]): IBlogPost[] {
        let searchTerm: string = this.activatedRoute.snapshot.queryParamMap.get('search-term');
        if (searchTerm == null) {
            return blogPosts;
        }
        return blogPosts
            .filter((blogPost: IBlogPost) =>
                (blogPost.postTitle && blogPost.postTitle.toLowerCase().includes(searchTerm.toLowerCase())) ||
                (blogPost.postAbstract && blogPost.postAbstract.toLowerCase().includes(searchTerm.toLowerCase()))
            );
    }
}
