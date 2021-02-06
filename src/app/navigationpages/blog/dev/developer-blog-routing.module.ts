import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DeveloperBlogComponent} from './developer-blog.component';
import {GraphqlComponent} from './post/graphql/graphql.component';
import {RoutesWithPathPrefix} from '../../../shared/interfaces';
import {RsHsComponent} from './post/rs-hs/rs-hs.component';
import {NgPlhComponent} from './post/ng-piao-liang-hanzi/ng-plh.component';
import {SpectatorTestingComponent} from './post/spectator-testing/spectator-testing.component';
import {AutomatedDevopsComponent} from './post/automated-devops/automated-devops.component';
import {ChineseOcrToolComponent} from './post/chinese-ocr-tool/chinese-ocr-tool.component';

const ROUTES: Routes = [
    {path: '', component: DeveloperBlogComponent},
    {path: 'graphql', data: {breadcrumb: 'GraphQL'}, component: GraphqlComponent},
    {path: 'rs-hs', data: {breadcrumb: 'RSA vs HMAC'}, component: RsHsComponent},
    {path: 'ng-plh', data: {breadcrumb: 'Angular Library PLH'}, component: NgPlhComponent},
    {path: 'spectator-test', data: {breadcrumb: 'Spectator Testing'}, component: SpectatorTestingComponent},
    {path: 'automated-devops', data: {breadcrumb: 'Automated DevOps'}, component: AutomatedDevopsComponent},
    {path: 'chinese-ocr-tool', data: {breadcrumb: 'Chinese OCR Tool'}, component: ChineseOcrToolComponent}
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
    static components = [DeveloperBlogComponent, GraphqlComponent, RsHsComponent, NgPlhComponent,
        SpectatorTestingComponent, AutomatedDevopsComponent, ChineseOcrToolComponent];
}
