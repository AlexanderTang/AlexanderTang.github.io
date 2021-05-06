import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GamingBlogComponent} from './gaming-blog.component';
import {RoutesWithPathPrefix} from '../../../shared/interfaces';
import {Dos1Component} from "./post/dos1/dos1.component";
import {Dos2Component} from "./post/dos2/dos2.component";
import {Tis100Component} from "./post/tis100/tis100.component";
import {ShenzhenIoComponent} from "./post/shenzhen-io/shenzhen-io.component";
import {FsIntroComponent} from "./post/fateseeker/fs-intro/fs-intro.component";
import {FsPart1Component} from './post/fateseeker/fs-part1/fs-part1.component';

const ROUTES: Routes = [
    {path: '', component: GamingBlogComponent},
    {path: 'divinity-original-sin', data: {breadcrumb: 'DOS 1'}, component: Dos1Component},
    {path: 'divinity-original-sin-2', data: {breadcrumb: 'DOS 2'}, component: Dos2Component},
    {path: 'tis-100', data: {breadcrumb: 'TIS-100'}, component: Tis100Component},
    {path: 'shenzhen-io', data: {breadcrumb: 'Shenzhen I/O'}, component: ShenzhenIoComponent},
    {path: 'fs-intro', data: {breadcrumb: 'Fate Seeker - Introduction'}, component: FsIntroComponent},
    {path: 'fs-part1', data: {breadcrumb: 'Fate Seeker - Part 1'}, component: FsPart1Component}
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
    static components = [GamingBlogComponent, Dos1Component, Dos2Component, Tis100Component, ShenzhenIoComponent,
        FsIntroComponent, FsPart1Component];
}
