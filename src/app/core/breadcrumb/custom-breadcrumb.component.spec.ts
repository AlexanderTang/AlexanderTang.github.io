import {SpectatorRouting, createRoutingFactory} from '@ngneat/spectator/jest';
import {MockComponent, MockPipe} from 'ng-mocks';
import {CustomBreadcrumbComponent} from './custom-breadcrumb.component';
import {BreadcrumbComponent} from 'xng-breadcrumb';
import {CapitalizePipe} from '../../shared/pipes/capitalize.pipe';
import {Router} from '@angular/router';

describe('CustomBreadcrumbComponent', () => {
    let spectator: SpectatorRouting<CustomBreadcrumbComponent>;
    const createComponent = createRoutingFactory({
        detectChanges: false,
        component: CustomBreadcrumbComponent,
        declarations: [
            MockComponent(BreadcrumbComponent),
            MockPipe(CapitalizePipe)
        ]
    });

    beforeEach(() => {
        spectator = createComponent()
    });

    it('isHomeBreadcrumbItem - Home', () => {
        let routerMock = spectator.get<Router>(Router);
        routerMock.parseUrl.andReturn({root: {children: {'primary': {segments: [{path: ''}]}}}});
        spectator.detectChanges();

        expect(spectator.component.isHomeBreadcrumbItem('Home')).toBeTruthy();
    });

    it('isHomeBreadcrumbItem - home', () => {
        let routerMock = spectator.get<Router>(Router);
        routerMock.parseUrl.andReturn({root: {children: {'primary': {segments: [{path: ''}]}}}});
        spectator.detectChanges();

        expect(spectator.component.isHomeBreadcrumbItem('home')).toBeFalsy();
    });

    it('hideBreadcrumb - hide on homepage', () => {
        let routerMock = spectator.get<Router>(Router);
        routerMock.parseUrl.andReturn({root: {children: {'primary': {segments: [{path: ''}]}}}});
        spectator.detectChanges();

        expect(spectator.component.hideBreadcrumb()).toBeTruthy();
    });

    it('hideBreadcrumb - show on a page other than homepage', () => {
        let routerMock = spectator.get<Router>(Router);
        routerMock.parseUrl.andReturn({root: {children: {'primary': {segments: [{path: 'a'}]}}}});
        spectator.detectChanges();

        expect(spectator.component.hideBreadcrumb()).toBeFalsy();
    });

    it('hideBreadcrumb - primaryUrlSegmentGroup not loaded', () => {
        let routerMock = spectator.get<Router>(Router);
        routerMock.parseUrl.andReturn({root: {children: {'primary': undefined}}});
        spectator.detectChanges();

        expect(spectator.component.hideBreadcrumb()).toBeTruthy();
    });
});
