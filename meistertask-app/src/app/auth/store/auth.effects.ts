import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import {
    Effect,
    Actions,
    toPayload
} from '@ngrx/effects';

import { AuthActions } from './auth.actions';
import { User } from '../models/user.model';
import { ErrorMessage } from '../../shared/models/error-message.model';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthEffects {

    constructor(
        private actions: Actions,
        private authActions: AuthActions,
        private authService: AuthService
    ) {}

    @Effect()
    signup$ = this.actions
        .ofType(AuthActions.SIGNUP)
        .map(toPayload)
        .switchMap((user: User) => {
            return this.authService.signup(user)
                .map((user: User) => this.authActions.signupSuccess(user))
                .catch((errorMessage: ErrorMessage) => Observable.of(this.authActions.signupFail(errorMessage)));
        });
}
