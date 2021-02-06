'use strict';
import {Component} from '@angular/core';
import {AbstractBlogPost} from '../../../../../core/model/AbstractBlogPost';
import {PostCategory} from '../../../../../core/enum/postCategory';

@Component({
    selector: 'app-automated-devops',
    templateUrl: './automated-devops.component.html'
})
export class AutomatedDevopsComponent extends AbstractBlogPost{

    postTitle(): string {
        return 'Automated DevOps with Docker';
    }

    postDate(): Date {
        return new Date(2021, 0, 10);
    }

    postAbstract(): string {
        return "Is maintaining your DevOps environment getting increasingly difficult? Take a look how configure an automated " +
            "DevOps environment as code can improve your life!";
    }

    postCategories(): PostCategory[] {
        return [PostCategory.Security, PostCategory.TechTools];
    }
}
