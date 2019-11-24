import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DeveloperBlogComponent} from './developer-blog.component';
import {GraphqlComponent} from './post/graphql.component';
import {ReactiveSpringComponent} from './post/reactive-spring.component';
import {MongodbComponent} from './post/mongodb.component';
import {SpringBootWebAppComponent} from './post/spring-boot-web-app.component';
import {RoutesWithPathPrefix} from '../../../shared/interfaces';
import {RsHsComponent} from './post/rs-hs.component';

const ROUTES: Routes = [
    {path: '', component: DeveloperBlogComponent},
    {path: 'graphql', data: {breadcrumb: 'GraphQL'}, component: GraphqlComponent},
    {path: 'rs-hs', data: {breadcrumb: 'RSA vs HMAC'}, component: RsHsComponent},
    // {path: 'reactive-spring', data: {breadcrumb: 'Reactive Spring'}, component: ReactiveSpringComponent},
    // {path: 'mongodb', data: {breadcrumb: 'MongoDB'}, component: MongodbComponent},
    // {path: 'spring-boot-web-app', data: {breadcrumb: 'Spring Boot Web App'}, component: SpringBootWebAppComponent}
];

export const DEV_BLOG_ROUTES: RoutesWithPathPrefix = {
    routes: ROUTES,
    pathPrefix: '/blogs/dev/'
};

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class DeveloperBlogRoutingModule {
    static components = [DeveloperBlogComponent, GraphqlComponent, RsHsComponent, ReactiveSpringComponent,
        MongodbComponent, SpringBootWebAppComponent];
}
