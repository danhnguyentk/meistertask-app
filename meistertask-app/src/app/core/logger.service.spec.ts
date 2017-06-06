import {
    TestBed,
    inject
} from '@angular/core/testing';

import { Logger } from './logger.service';

describe('LoggerService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ Logger ]
        });
    });

    it('should ...', inject([ Logger ], (service: Logger) => {
        expect(service).toBeTruthy();
    }));
});
