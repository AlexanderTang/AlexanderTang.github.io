import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { AppComponent } from './app.component';
import {MainHeaderComponent} from './core/mainheader/main-header.component';
import { MockComponent } from 'ng-mocks';
import {FooterComponent} from './core/footer/footer.component';
import {CustomBreadcrumbComponent} from './core/breadcrumb/custom-breadcrumb.component';
import {RouterOutlet} from '@angular/router';

describe('AppComponent', () => {
    let appSpectator: Spectator<AppComponent>;
    const createComponent = createComponentFactory({
        component: AppComponent,
        declarations: [
            MockComponent(MainHeaderComponent),
            MockComponent(FooterComponent),
            MockComponent(CustomBreadcrumbComponent),
            MockComponent(RouterOutlet)
        ]
    });

    beforeEach(() => appSpectator = createComponent());

    it('App component loads', () => {
        expect(appSpectator.query('main')).toHaveClass('container');
    });
});
