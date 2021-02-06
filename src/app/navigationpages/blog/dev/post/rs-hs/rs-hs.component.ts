'use strict';
import {Component} from '@angular/core';
import {AbstractBlogPost} from '../../../../../core/model/AbstractBlogPost';
import {PostCategory} from '../../../../../core/enum/postCategory';

@Component({
    selector: 'app-rs-hs',
    templateUrl: './rs-hs.component.html'
})
export class RsHsComponent extends AbstractBlogPost{

    postTitle(): string {
        return 'Differences between RSA and HMAC';
    }

    postDate(): Date {
        return new Date(2019, 10, 24);
    }

    postAbstract(): string {
        return "When sending messages over a network, it is common that the authenticity of these messages needs \
        to be validated. There are several methods available to ensure the content has not been tampered with. \
        RSA and HMAC are two such methods with their own advantages.";
    }

    postCategories(): PostCategory[] {
        return [PostCategory.Security];
    }
}
