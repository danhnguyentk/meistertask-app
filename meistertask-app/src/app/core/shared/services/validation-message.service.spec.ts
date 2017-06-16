import {
    TestBed,
    inject
} from '@angular/core/testing';

import { ValidationMessage } from './validation-message.service';

describe('ValidationMessage', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ ValidationMessage ]
        });
    });

    it('should ...', inject([ ValidationMessage ], (service: ValidationMessage) => {
        expect(service).toBeTruthy();
    }));
});
