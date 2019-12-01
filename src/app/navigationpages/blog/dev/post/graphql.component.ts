'use strict';
import {Component} from '@angular/core';
import {AbstractBlogPost} from '../../../../core/model/AbstractBlogPost';
import {PostCategory} from '../../../../core/enum/postCategory';

@Component({
    selector: 'app-graph-ql',
    templateUrl: './graphql.component.html',
    styleUrls: ['./graphql.component.scss']
})
export class GraphqlComponent extends AbstractBlogPost {

    postTitle(): string {
        return 'GraphQL with Spring Boot';
    }

    postDate(): Date {
        return new Date(2019, 11, 1);
    }

    postAbstract(): string {
        return "GraphQL provides an alternative to today's common REST API architecture. It aims to \
        put clients in charge what data is retrieved while still allowing the server to dictate \
        what data is accessible. Read more to learn how this works out in practice with a \
        Springboot/Angular application.";
    }

    postCategories(): PostCategory[] {
        return [PostCategory.GraphQL, PostCategory.Java, PostCategory.Spring];
    }
}
