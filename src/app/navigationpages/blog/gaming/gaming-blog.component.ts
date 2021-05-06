'use strict';
import {Component, Inject, OnInit} from '@angular/core';
import {IBlogPost, RoutesWithPathPrefix} from '../../../shared/interfaces';
import {BlogPostUtils} from '../../../core/util/blogPostUtils';

@Component({
    selector: 'app-gaming-blog',
    templateUrl: './gaming-blog.component.html'
})
export class GamingBlogComponent implements OnInit {

    blogTitle = 'Gaming Blog';
    posts: IBlogPost[];

    constructor(@Inject('GAME_ROUTES') private gameRoutes: RoutesWithPathPrefix) {
    }

    ngOnInit(): void {
        this.posts = this.getGamingPosts();
    }

    private getGamingPosts(): IBlogPost[] {
        return BlogPostUtils.getBlogPostsFromRoutes(this.gameRoutes);
    }
}
