import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RoutesWithPathPrefix} from '../../../shared/interfaces';
import {ChineseBlogComponent} from './chinese-blog.component';
import {DeParticlesComponent} from './post/de-particles.component';

const ROUTES: Routes = [
    {path: '', component: ChineseBlogComponent},
    {path: 'de-particles', data: {breadcrumb: '的, 地 and 得'}, component: DeParticlesComponent}
];

export const CHINESE_BLOG_ROUTES: RoutesWithPathPrefix = {
    routes: ROUTES,
    pathPrefix: '/blogs/cn-study/'
};

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class ChineseBlogRoutingModule {
    static components = [ChineseBlogComponent, DeParticlesComponent];
}
