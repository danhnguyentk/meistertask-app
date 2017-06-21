import {
    TestBed,
    inject
} from '@angular/core/testing';

import { AuthPrivatePageGuard } from './auth-private-page.guard';

describe('AuthPrivatePageGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ AuthPrivatePageGuard ]
        });
    });

    it('should ...', inject([ AuthPrivatePageGuard ], (guard: AuthPrivatePageGuard) => {
        expect(guard).toBeTruthy();
    }));
});
