'use strict';
import {Component} from '@angular/core';
import {AbstractBlogPost} from '../../../../core/model/AbstractBlogPost';
import {PostCategory} from '../../../../core/enum/postCategory';

@Component({
    selector: 'app-de-particles',
    templateUrl: './de-particles.component.html'
})
export class DeParticlesComponent extends AbstractBlogPost {

    postTitle(): string {
        return 'Differences between 的, 地 and 得';
    }

    postDate(): Date {
        return new Date(2019, 11, 8);
    }

    postAbstract(): string {
        return "Everyone starting out learning Chinese will quickly become familiar with the usage of 的. But there are \
        two more characters, 地 and 得, which have the same pronunciation 'de' but a different meaning. This can be \
        confusing at times, so learn when to use them with some examples here.";
    }

    postCategories(): PostCategory[] {
        return [PostCategory.ChineseGrammar];
    }
}
