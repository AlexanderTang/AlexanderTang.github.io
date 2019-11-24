import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';

import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import {MainHeaderComponent} from './mainheader/main-header.component';
import {FooterComponent} from './footer/footer.component';
import {BsDropdownModule} from 'ngx-bootstrap';
import {BlogRoutingService} from './service/blogRoutingService';
import {HIGHLIGHT_OPTIONS, HighlightModule} from 'ngx-highlightjs';
import {CodeHighlightService} from './service/codeHighlightService';

@NgModule({
  imports: [CommonModule, RouterModule, HttpClientModule, HttpClientXsrfModule,
      BsDropdownModule.forRoot(), HighlightModule],
  exports: [RouterModule, HttpClientModule, HttpClientXsrfModule,
      MainHeaderComponent, FooterComponent],
  declarations: [MainHeaderComponent, FooterComponent],
  providers: [BlogRoutingService,
      {provide: HIGHLIGHT_OPTIONS, useValue: {languages: CodeHighlightService.getHighlightLanguages()}}] // these should be singleton
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {    // Ensure that CoreModule is only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }

}



