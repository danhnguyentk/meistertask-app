import {
    TestBed,
    inject
} from '@angular/core/testing';

import { CustomValidator } from './custom-validator.service';

describe('CustomValidatorService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ CustomValidator ]
        });
    });

    it('should ...', inject([ CustomValidator ], (service: CustomValidator) => {
        expect(service).toBeTruthy();
    }));
});
