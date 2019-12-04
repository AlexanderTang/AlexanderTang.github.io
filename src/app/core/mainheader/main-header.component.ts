'use strict';
import {Component} from '@angular/core';

@Component({
    selector: 'app-main-header',
    templateUrl: './main-header.component.html'
})
export class MainHeaderComponent {
    mainHeadersCollapsed: boolean = true;

    constructor() {}

    public toggleMainHeadersCollapsed(): void {
        console.log(this.mainHeadersCollapsed)
        this.mainHeadersCollapsed = !this.mainHeadersCollapsed;
    }
}
