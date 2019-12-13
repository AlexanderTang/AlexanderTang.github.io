'use strict';
import {Component, Inject, OnInit} from '@angular/core';
import {IBlogPost, RoutesWithPathPrefix} from '../../../shared/interfaces';
import {BlogPostUtils} from '../../../core/util/blogPostUtils';

@Component({
    selector: 'app-chinese-blog',
    templateUrl: './chinese-blog.component.html'
})
export class ChineseBlogComponent implements OnInit {

    blogTitle = 'Chinese Study Blog';
    posts: IBlogPost[];

    constructor(@Inject('CHINESE_ROUTES') private chineseRoutes: RoutesWithPathPrefix) {
    }

    ngOnInit(): void {
        this.posts = this.getChinesePosts();
    }

    private getChinesePosts(): IBlogPost[] {
        return BlogPostUtils.getBlogPostsFromRoutes(this.chineseRoutes);
    }
}
