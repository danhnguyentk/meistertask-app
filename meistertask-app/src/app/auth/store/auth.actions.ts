import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';

import { User } from '../models/user.model';
import { ErrorMessage } from '../../shared/models/error-message.model';

@Injectable()
export class AuthActions {

    constructor() {}

    static SIGNUP = '[Auth] SIGNUP';
    static SIGNUP_SUCCESS= '[Auth] SIGNUP_SUCCESS';
    static SIGNUP_FAIL= '[Auth] SIGNUP_FAIL';

    signup(user: User): Action {
        return {
            type: AuthActions.SIGNUP,
            payload: user
        };
    }

    signupSuccess(user: User): Action {
        return {
            type: AuthActions.SIGNUP_SUCCESS,
            payload: user
        };
    }

    signupFail(errorMessage: ErrorMessage): Action {
        return {
            type: AuthActions.SIGNUP_FAIL,
            payload: errorMessage
        };
    }
}
