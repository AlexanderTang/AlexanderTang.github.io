import {NgModule} from '@angular/core';

import {SharedModule} from '../../../shared/shared.module';
import {GAME_BLOG_ROUTES, GamingBlogRoutingModule} from './gaming-blog-routing.module';
import {NgPiaoLiangHanziModule} from 'ng-piao-liang-hanzi';

@NgModule({
    imports: [SharedModule, GamingBlogRoutingModule, NgPiaoLiangHanziModule],
    declarations: [GamingBlogRoutingModule.components],
    providers: [{provide: 'GAME_ROUTES', useValue: GAME_BLOG_ROUTES}]
})
export class GamingBlogModule {
}
