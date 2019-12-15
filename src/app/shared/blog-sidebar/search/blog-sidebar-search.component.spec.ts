import {SpectatorRouting, createRoutingFactory} from '@ngneat/spectator/jest';
import {MockModule} from 'ng-mocks';
import {BlogSidebarSearchComponent} from './blog-sidebar-search.component';
import {Router} from '@angular/router';
import {SpyObject} from '@ngneat/spectator';
import {FormsModule} from '@angular/forms';

describe('BlogSidebarSearchComponent', () => {
    let routerMock: SpyObject<Router>;
    let spectator: SpectatorRouting<BlogSidebarSearchComponent>;
    const createComponent = createRoutingFactory({
        component: BlogSidebarSearchComponent,
        imports: [
            MockModule(FormsModule)
        ]
    });

    beforeEach(() => {
        spectator = createComponent();
        routerMock = spectator.get<Router>(Router);
    });

    it('onSubmitSearch', () => {
        spectator.component.searchTerm = 'testSearchTerm';
        const routerNavigation = spyOn(routerMock, 'navigate');

        spectator.component.onSubmitSearch();

        expect(routerNavigation).toHaveBeenCalledWith(['/search-results'], {queryParams: {'search-term': 'testSearchTerm'}});
    });
});
