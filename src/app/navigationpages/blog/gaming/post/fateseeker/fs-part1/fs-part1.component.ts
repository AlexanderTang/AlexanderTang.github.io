'use strict';
import {Component} from '@angular/core';
import {AbstractBlogPost} from "../../../../../../core/model/AbstractBlogPost";
import {PostCategory} from "../../../../../../core/enum/postCategory";

@Component({
    templateUrl: './fs-part1.component.html'
})
export class FsPart1Component extends AbstractBlogPost {

    postTitle(): string {
        return 'Fate Seeker - Let\'s Play Part 1: Meeting the teacher';
    }

    postDate(): Date {
        return new Date(2021, 5, 6);
    }

    postAbstract(): string {
        return 'For the first part I get introduced to my surroundings and some of the game mechanics such as combat.';
    }

    postCategories(): PostCategory[] {
        return [PostCategory.RPG];
    }

    postImageName(): string {
        return 'fate_seeker/banner.jpg';
    }
}
