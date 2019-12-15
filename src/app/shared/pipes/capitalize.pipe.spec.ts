import {createServiceFactory, SpectatorService} from '@ngneat/spectator/jest';
import {CapitalizePipe} from './capitalize.pipe';

describe('CapitalizePipe', () => {
    let spectator: SpectatorService<CapitalizePipe>;
    const createService = createServiceFactory(CapitalizePipe);

    beforeEach(() => spectator = createService());

    it('capitalize - home', () => {
        expect(spectator.service.transform('home')).toEqual('Home');
    });

    it('capitalize - more words', () => {
        expect(spectator.service.transform('more words')).toEqual('More words');
    });
});
