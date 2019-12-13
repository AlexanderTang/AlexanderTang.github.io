'use strict';
import {Component} from '@angular/core';
import {AbstractBlogPost} from '../../../../core/model/AbstractBlogPost';
import {PostCategory} from '../../../../core/enum/postCategory';

@Component({
    selector: 'app-ng-plh',
    templateUrl: './ng-plh.component.html',
    styleUrls: ['./ng-plh.component.scss']
})
export class NgPlhComponent extends AbstractBlogPost {

    postTitle(): string {
        return 'Format Chinese Hanzi with Pinyin in Angular';
    }

    postDate(): Date {
        return new Date(2019, 11, 14);
    }

    postAbstract(): string {
        return "Display Chinese characters and their pinyin in a uniform way with a new Angular library called \
            ng-piao-liang-hanzi! This library is available on npm. Learn about some of its features here.";
    }

    postCategories(): PostCategory[] {
        return [PostCategory.TechTools, PostCategory.Angular];
    }
}
