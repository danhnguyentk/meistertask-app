import {
    TestBed,
    inject
} from '@angular/core/testing';

import { AppConfig } from './app-config.service';

describe('AppConfigService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ AppConfig ]
        });
    });

    it('should ...', inject([ AppConfig ], (service: AppConfig) => {
        expect(service).toBeTruthy();
    }));
});
