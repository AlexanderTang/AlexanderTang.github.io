import {NgModule} from '@angular/core';

import {SharedModule} from '../../../shared/shared.module';
import {DeveloperBlogRoutingModule, DEV_BLOG_ROUTES} from './developer-blog-routing.module';
import {DeveloperBlogComponent} from './developer-blog.component';
import {GraphqlComponent} from './post/graphql.component';
import {ReactiveSpringComponent} from './post/reactive-spring.component';
import {RsHsComponent} from './post/rs-hs.component';
import {HighlightModule} from 'ngx-highlightjs';
import {NgPlhComponent} from './post/ng-plh.component';
import {SpectatorTestingComponent} from './post/spectator-testing.component';

@NgModule({
    imports: [SharedModule, DeveloperBlogRoutingModule, HighlightModule],
    exports: [DeveloperBlogComponent, GraphqlComponent, RsHsComponent, ReactiveSpringComponent, NgPlhComponent,
        SpectatorTestingComponent],
    declarations: [DeveloperBlogRoutingModule.components],
    providers: [{provide: 'DEV_ROUTES', useValue: DEV_BLOG_ROUTES}]
})
export class DeveloperBlogModule {
}
