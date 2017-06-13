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
import { ErrorActions } from '../../shared/actions/error.actions';

@Injectable()
export class AuthEffects {

    constructor(
        private actions: Actions,
        private authActions: AuthActions,
        private authService: AuthService,
        private errorActions: ErrorActions
    ) {}

    @Effect()
    signup$ = this.actions
        .ofType(AuthActions.SIGNUP)
        .map(toPayload)
        .switchMap((user: User) => this.authService.signup(user))
        .map((userRes: User) => this.authActions.signupSuccess(userRes))
        .catch((errorMessage: ErrorMessage) => Observable.of(this.errorActions.signupError(errorMessage)));

    @Effect()
    login$ = this.actions
        .ofType(AuthActions.LOGIN)
        .map(toPayload)
        .switchMap((user: User) => this.authService.login(user))
        .map((userRes: User) => this.authActions.loginSuccess(userRes))
        .catch((errorMessage: ErrorMessage) => Observable.of(this.errorActions.loginError(errorMessage)));
}
