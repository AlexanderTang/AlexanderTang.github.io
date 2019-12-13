import {NgModule} from '@angular/core';

import {SharedModule} from '../../../shared/shared.module';
import {HighlightModule} from 'ngx-highlightjs';
import {CHINESE_BLOG_ROUTES, ChineseBlogRoutingModule} from './chinese-blog-routing.module';
import {ChineseBlogComponent} from './chinese-blog.component';
import {DeParticlesComponent} from './post/de-particles.component';
import {NgPiaoLiangHanziModule} from 'ng-piao-liang-hanzi';

@NgModule({
    imports: [SharedModule, ChineseBlogRoutingModule, HighlightModule, NgPiaoLiangHanziModule],
    exports: [ChineseBlogComponent, DeParticlesComponent],
    declarations: [ChineseBlogRoutingModule.components],
    providers: [{provide: 'CHINESE_ROUTES', useValue: CHINESE_BLOG_ROUTES}]
})
export class ChineseBlogModule {
}
