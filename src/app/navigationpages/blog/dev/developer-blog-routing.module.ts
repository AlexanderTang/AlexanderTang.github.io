import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DeveloperBlogComponent} from './developer-blog.component';
import {GraphqlComponent} from './post/graphql.component';
import {ReactiveSpringComponent} from './post/reactive-spring.component';
import {RoutesWithPathPrefix} from '../../../shared/interfaces';
import {RsHsComponent} from './post/rs-hs.component';
import {NgPlhComponent} from './post/ng-plh.component';
import {SpectatorTestingComponent} from './post/spectator-testing.component';

const ROUTES: Routes = [
    {path: '', component: DeveloperBlogComponent},
    {path: 'graphql', data: {breadcrumb: 'GraphQL'}, component: GraphqlComponent},
    {path: 'rs-hs', data: {breadcrumb: 'RSA vs HMAC'}, component: RsHsComponent},
    {path: 'ng-plh', data: {breadcrumb: 'Angular Library PLH'}, component: NgPlhComponent},
    {path: 'spectator-test', data: {breadcrumb: 'Spectator Testing'}, component: SpectatorTestingComponent}
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
    static components = [DeveloperBlogComponent, GraphqlComponent, RsHsComponent, ReactiveSpringComponent, NgPlhComponent,
        SpectatorTestingComponent];
}
