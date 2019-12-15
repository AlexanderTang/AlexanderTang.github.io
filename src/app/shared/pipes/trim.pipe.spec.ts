import {createServiceFactory, SpectatorService} from '@ngneat/spectator/jest';
import {TrimPipe} from './trim.pipe';

describe('TrimPipe', () => {
    let spectator: SpectatorService<TrimPipe>;
    const createService = createServiceFactory(TrimPipe);

    beforeEach(() => spectator = createService());

    it('trim', () => {
        expect(spectator.service.transform('lots of space   ')).toEqual('lots of space');
    });
});
