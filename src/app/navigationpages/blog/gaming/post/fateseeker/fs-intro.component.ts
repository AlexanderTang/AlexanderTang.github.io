'use strict';
import {Component} from '@angular/core';
import {AbstractBlogPost} from "../../../../../core/model/AbstractBlogPost";
import {PostCategory} from "../../../../../core/enum/postCategory";

@Component({
    templateUrl: './fs-intro.component.html',
    styleUrls: ['./fs-intro.component.scss']
})
export class FsIntroComponent extends AbstractBlogPost {

    postTitle(): string {
        return 'Fate Seeker - Let\'s Play Part 1: Introduction';
    }

    postDate(): Date {
        return new Date(2020, 6, 24);
    }

    postAbstract(): string {
        return 'Fate Seeker is a Chinese RPG with a nice animation style. The setting takes place in a martial arts \
            world in which the protagonist develops from novice to master. The game does not provide an official \
            English version at this moment even though many Western gamers would love to give this game a try. That is \
            why I have decided to start a Let\'s Play run for this game.';
    }

    postCategories(): PostCategory[] {
        return [PostCategory.RPG];
    }

    postImageName(): string {
        return 'fate_seeker/banner.jpg';
    }
}
