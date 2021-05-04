'use strict';
import {Component, OnInit} from '@angular/core';
import {PostCategory} from '../../../core/enum/postCategory';
import {BlogRoutingService} from '../../../core/service/blogRoutingService';
import {IBlogPost} from '../../interfaces';

@Component({
    selector: 'app-blog-sidebar-category',
    templateUrl: './blog-sidebar-category.component.html'
})
export class BlogSidebarCategoryComponent implements OnInit {

    private categoryFrequencyMap: Map<PostCategory, number> = new Map();

    constructor(private blogRoutingService: BlogRoutingService) {
    }

    ngOnInit(): void {
        this.initCategoryFrequencyMap();
    }

    getTop6Categories(): [PostCategory, number][] {
        return [...this.categoryFrequencyMap]
            .sort((categoryEntry1, categoryEntry2) => {
                return categoryEntry2[1] - categoryEntry1[1]; // sort by category frequency in DESC order
            })
            .slice(0, 6);
    }

    getEnumString(number: number): string {
        return PostCategory[number];
    }

    private initCategoryFrequencyMap(): void {
        this.blogRoutingService.getAllBlogPosts()
            .map((blogPost: IBlogPost) => blogPost.postCategories)
            .reduce((previousValue, currentValue) => previousValue.concat(currentValue), []) // replacement for flatMap..
            .forEach((postCategory: PostCategory) => {
                if (this.categoryFrequencyMap.has(postCategory)) {
                    this.categoryFrequencyMap.set(postCategory, this.categoryFrequencyMap.get(postCategory) + 1);
                } else {
                    this.categoryFrequencyMap.set(postCategory, 1);
                }
            });
    }
}
