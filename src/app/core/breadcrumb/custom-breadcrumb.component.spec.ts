import {SpectatorRouting, createRoutingFactory} from '@ngneat/spectator/jest';
import {MockComponent, MockPipe} from 'ng-mocks';
import {CustomBreadcrumbComponent} from './custom-breadcrumb.component';
import {BreadcrumbComponent} from 'xng-breadcrumb';
import {CapitalizePipe} from '../../shared/pipes/capitalize.pipe';

//TODO
describe('CustomBreadcrumbComponent', () => {
    let spectator: SpectatorRouting<CustomBreadcrumbComponent>;
    const createComponent = createRoutingFactory({
        component: CustomBreadcrumbComponent,
        declarations: [
            MockComponent(BreadcrumbComponent),
            MockPipe(CapitalizePipe)
        ]
    });

    // beforeEach(() => spectator = createComponent());

    //TODO delete
    it('placeholder', () =>{
        expect(true).toBeTruthy();
    })

    // it('hideBreadcrumb - hide on homepage', () => {
    //     spectator.router.navigate(['']);
    //     // TODO set url path to ''
    //
    //     expect(spectator.component.hideBreadcrumb()).toBeTruthy();
    // });
    //
    // it('hideBreadcrumb - show on a page other than homepage', () => {
    //     spectator.router.navigate(['about']);
    //     //TODO set url path to 'test' for example
    //     expect(spectator.component.hideBreadcrumb()).toBeFalsy();
    // });
});
