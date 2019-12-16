'use strict';
import {Component} from '@angular/core';
import {AbstractBlogPost} from '../../../../core/model/AbstractBlogPost';
import {PostCategory} from '../../../../core/enum/postCategory';

@Component({
    selector: 'app-spectator-testing',
    templateUrl: './spectator-testing.component.html'
})
export class SpectatorTestingComponent extends AbstractBlogPost {

    postTitle(): string {
        return 'Unit Testing Angular with Spectator and Jest';
    }

    postDate(): Date {
        return new Date(2019, 11, 16);
    }

    postAbstract(): string {
        return "Reduce boilerplate test code with Spectator. Run unit tests in parallet without a browser with Jest. \
            see some real examples how to use them in this article.";
    }

    postCategories(): PostCategory[] {
        return [PostCategory.Angular, PostCategory.TechTools];
    }
}
