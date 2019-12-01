import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GamingBlogComponent} from './gaming-blog.component';
import {PlaceholderComponent} from './post/placeholder.component';
import {RoutesWithPathPrefix} from '../../../shared/interfaces';

const ROUTES: Routes = [
    {path: '', component: GamingBlogComponent},
    // {path: 'placeholder', data: {breadcrumb: 'Placeholder'}, component: PlaceholderComponent}
];

export const GAME_BLOG_ROUTES: RoutesWithPathPrefix = {
    routes: ROUTES,
    pathPrefix: '/blogs/game/'
}

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class GamingBlogRoutingModule {
    static components = [GamingBlogComponent, PlaceholderComponent];
}
