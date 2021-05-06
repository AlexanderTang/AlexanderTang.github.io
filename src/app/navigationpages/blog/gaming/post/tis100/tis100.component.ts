'use strict';
import {Component} from '@angular/core';
import {AbstractBlogPost} from '../../../../../core/model/AbstractBlogPost';
import {PostCategory} from '../../../../../core/enum/postCategory';

@Component({
    templateUrl: './tis100.component.html'
})
export class Tis100Component extends AbstractBlogPost {

    postTitle(): string {
        return 'TIS-100';
    }

    postDate(): Date {
        return new Date(2020, 6, 9);
    }

    postAbstract(): string {
        return 'TIS-100 is a puzzle game in which the player uses very low level assembly code to reach a solution. \
            It is technical in nature but actually accessible to everyone. If you enjoy puzzling and problem solving \
            then give this game a try.';
    }

    postCategories(): PostCategory[] {
        return [PostCategory.PUZZLE];
    }
}
