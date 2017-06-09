import {
    TestBed,
    async,
    inject
} from '@angular/core/testing';

import { AuthRequiredPageGuard } from './auth-required-page.guard';

describe('AuthRequiredPageGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ AuthRequiredPageGuard ]
        });
    });

    it('should ...', inject([ AuthRequiredPageGuard ], (guard: AuthRequiredPageGuard) => {
        expect(guard).toBeTruthy();
    }));
});
