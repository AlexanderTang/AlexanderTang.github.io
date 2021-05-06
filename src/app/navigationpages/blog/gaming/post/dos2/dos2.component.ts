'use strict';
import {Component} from '@angular/core';
import {AbstractBlogPost} from '../../../../../core/model/AbstractBlogPost';
import {PostCategory} from '../../../../../core/enum/postCategory';

@Component({
    templateUrl: './dos2.component.html'
})
export class Dos2Component extends AbstractBlogPost {

    postTitle(): string {
        return 'Divinity Original Sin II';
    }

    postDate(): Date {
        return new Date(2020, 6, 9);
    }

    postAbstract(): string {
        return 'Divinity Original Sin II is the second installment of a successful RPG series. \
            Living up to its predecessor, the game achieved high overall ratings.';
    }

    postCategories(): PostCategory[] {
        return [PostCategory.RPG];
    }

    postImageName(): string {
        return 'dos2.jpg';
    }
}
