'use strict';
import {Component, Input, OnInit} from '@angular/core';
import {IBlogPost} from '../interfaces';
import {ActivatedRoute, Router} from '@angular/router';
import {BlogPostUtils} from '../../core/util/blogPostUtils';

@Component({
    selector: 'app-blog-overview',
    templateUrl: './blog-overview.component.html'
})
export class BlogOverviewComponent implements OnInit {

    @Input() blogTitle: string;
    @Input() blogPosts: IBlogPost[] = [];

    currentPage: number = 1;
    pageSize: number = 5;

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit(): void {
        this.blogPosts.sort((blogPost1: IBlogPost, blogPost2: IBlogPost) =>
            BlogPostUtils.compareBlogPostsByDate(blogPost1, blogPost2));
        this.initCurrentPage();
    }

    postImagePresent(blogPost: IBlogPost): boolean {
        return blogPost.postImageName && blogPost.postImageName !== '';
    }

    blogPostsForCurrentPage(): IBlogPost[] {
        let startIndex: number = (this.currentPage - 1) * this.pageSize;
        return this.blogPosts.slice(startIndex, startIndex + this.pageSize);
    }

    hasNewerPage(): boolean {
        return this.currentPage > 1;
    }

    hasOlderPage(): boolean {
        return this.currentPage * this.pageSize < this.blogPosts.length;
    }

    nextPage(): void {
        this.setCurrentPage(this.currentPage + 1);
    }

    previousPage(): void {
        this.setCurrentPage(this.currentPage - 1);
    }

    private initCurrentPage(): void {
        let pageParam: number = +this.activatedRoute.snapshot.queryParamMap.get('page');
        if (isNaN(pageParam) || pageParam < 1 || this.maximumPageSizeExceeded(pageParam)) {
            this.setCurrentPage(1);
        } else {
            this.setCurrentPage(pageParam);
        }
    }

    private maximumPageSizeExceeded(pageParam: number): boolean {
        return (pageParam - 1) * this.pageSize + 1 > this.blogPosts.length;
    }

    private setCurrentPage(page: number): void {
        this.currentPage = page;
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: {page: page},
            queryParamsHandling: 'merge'
        });
    }
}
