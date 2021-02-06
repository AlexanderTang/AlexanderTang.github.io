'use strict';
import {Component} from '@angular/core';
import {AbstractBlogPost} from '../../../../../core/model/AbstractBlogPost';
import {PostCategory} from '../../../../../core/enum/postCategory';

@Component({
    selector: 'app-chinese-ocr-tool',
    templateUrl: './chinese-ocr-tool.component.html'
})
export class ChineseOcrToolComponent extends AbstractBlogPost {

    postTitle(): string {
        return 'Chinese OCR tool';
    }

    postDate(): Date {
        return new Date(2021, 1, 6);
    }

    postAbstract(): string {
        return "The world of AI and image based text recognition is evolving at a good pace. A whole host of open source " +
            "OCR repositories are available to develop your own application around it. I developed a simple bare-bones " +
            "desktop application that scans an image with Chinese characters and " +
            "returns the scanned characters with English translation for personal education purposes.";
    }

    postCategories(): PostCategory[] {
        return [PostCategory.TechTools];
    }
}
