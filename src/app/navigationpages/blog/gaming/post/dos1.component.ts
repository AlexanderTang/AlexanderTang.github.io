'use strict';
import {Component} from '@angular/core';
import {AbstractBlogPost} from '../../../../core/model/AbstractBlogPost';
import {PostCategory} from '../../../../core/enum/postCategory';

@Component({
    selector: 'app-placeholder',
    templateUrl: './dos1.component.html'
})
export class Dos1Component extends AbstractBlogPost {

    postTitle(): string {
        return 'Divinity Original Sin';
    }

    postDate(): Date {
        return new Date(2020, 6, 8);
    }

    postAbstract(): string {
        return 'Divinity Original Sin is a modern implementation of classic dungeon and dragons story telling RPGs. \
            This game is a must have for RPG fans and these are the reasons why...';
    }

    postCategories(): PostCategory[] {
        return [PostCategory.RPG];
    }

    postImageName(): string {
        return 'dos.jpg';
    }
}
