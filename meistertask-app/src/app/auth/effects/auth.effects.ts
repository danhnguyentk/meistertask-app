import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import {
    Effect,
    Actions,
    toPayload
} from '@ngrx/effects';

import { AuthActions } from '../actions/auth.actions';
import { User } from '../models/user';
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
                .map((userRes: User) => this.authActions.signupSuccess(userRes))
                .catch((errorMessage: ErrorMessage) => Observable.of(this.authActions.signupFail(errorMessage)));
        });

    @Effect()
    login$ = this.actions
        .ofType(AuthActions.LOGIN)
        .map(toPayload)
        .switchMap((user: User) => {
            return this.authService.login(user)
                .map((userRes: User) => this.authActions.loginSuccess(userRes))
                .catch((errorMessage: ErrorMessage) => Observable.of(this.authActions.loginFail(errorMessage)));
        });
}
