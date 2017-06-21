import {
    TestBed,
    inject
} from '@angular/core/testing';

import { AuthPublicPageGuard } from './auth-public-page.guard';

describe('AuthGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ AuthPublicPageGuard ]
        });
    });

    it('should ...', inject([ AuthPublicPageGuard ], (guard: AuthPublicPageGuard) => {
        expect(guard).toBeTruthy();
    }));
});
