'use strict';
import {Component} from '@angular/core';

@Component({
    selector: 'app-main-header',
    templateUrl: './main-header.component.html'
})
export class MainHeaderComponent {
    mainHeadersCollapsed: boolean = true;

    public toggleMainHeadersCollapsed(): void {
        this.mainHeadersCollapsed = !this.mainHeadersCollapsed;
    }
}
