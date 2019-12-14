import {Component} from '@angular/core';
import {Router, UrlSegment, UrlSegmentGroup} from '@angular/router';

@Component({
    selector: 'app-custom-breadcrumb',
    templateUrl: './custom-breadcrumb.component.html'
})
export class CustomBreadcrumbComponent {

    private blacklistedPaths: string[] = [''];

    constructor(private router: Router) {
    }

    isHomeBreadcrumbItem(breadcrumbName: string): boolean {
        return breadcrumbName === 'Home';
    }

    hideBreadcrumb(): boolean {
        let primaryUrlSegmentGroup: UrlSegmentGroup = this.router.parseUrl(this.router.url).root.children['primary'];
        if(primaryUrlSegmentGroup == null){
            return true;
        }
        let urlPath = primaryUrlSegmentGroup.segments.map((segment: UrlSegment) => segment.path).join('/');
        return this.blacklistedPaths.some((path: string) => path === urlPath);
    }

}
