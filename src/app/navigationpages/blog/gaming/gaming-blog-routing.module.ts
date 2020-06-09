import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GamingBlogComponent} from './gaming-blog.component';
import {RoutesWithPathPrefix} from '../../../shared/interfaces';
import {Dos1Component} from "./post/dos1.component";
import {Dos2Component} from "./post/dos2.component";

const ROUTES: Routes = [
    {path: '', component: GamingBlogComponent},
    {path: 'divinity-original-sin', data: {breadcrumb: 'DOS 1'}, component: Dos1Component},
    {path: 'divinity-original-sin-2', data: {breadcrumb: 'DOS 2'}, component: Dos2Component}
];

export const GAME_BLOG_ROUTES: RoutesWithPathPrefix = {
    routes: ROUTES,
    pathPrefix: '/blogs/game/'
};

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class GamingBlogRoutingModule {
    static components = [GamingBlogComponent, Dos1Component, Dos2Component];
}
