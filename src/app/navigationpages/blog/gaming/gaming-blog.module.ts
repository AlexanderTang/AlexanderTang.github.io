import {NgModule} from '@angular/core';

import {SharedModule} from '../../../shared/shared.module';
import {GAME_BLOG_ROUTES, GamingBlogRoutingModule} from './gaming-blog-routing.module';
import {GamingBlogComponent} from './gaming-blog.component';
import {Dos1Component} from "./post/dos1.component";
import {Dos2Component} from "./post/dos2.component";
import {Tis100Component} from "./post/tis100.component";

@NgModule({
    imports: [SharedModule, GamingBlogRoutingModule],
    declarations: [GamingBlogRoutingModule.components],
    providers: [{provide: 'GAME_ROUTES', useValue: GAME_BLOG_ROUTES}]
})
export class GamingBlogModule {
}
