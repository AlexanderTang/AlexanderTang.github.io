'use strict';
import {Component} from '@angular/core';
import {AbstractBlogPost} from '../../../../core/model/AbstractBlogPost';
import {PostCategory} from '../../../../core/enum/postCategory';

@Component({
    templateUrl: './shenzhen-io.component.html'
})
export class ShenzhenIoComponent extends AbstractBlogPost {

    postTitle(): string {
        return 'Shenzhen I/O';
    }

    postDate(): Date {
        return new Date(2020, 6, 10);
    }

    postAbstract(): string {
        return 'Shenzhen I/O is a puzzle game, similar to TIS-100, in which the player uses low level assembly code to reach a solution. \
            It is technical in nature but actually accessible to everyone. If you enjoy puzzling and problem solving \
            then give this game a try.';
    }

    postCategories(): PostCategory[] {
        return [PostCategory.PUZZLE];
    }
}
