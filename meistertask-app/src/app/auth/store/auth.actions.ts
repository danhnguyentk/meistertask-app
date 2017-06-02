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
    static LOGIN = '[Auth] LOGIN';
    static LOGIN_SUCCESS = '[Auth] LOGIN_SUCCESS';
    static LOGIN_FAIL = '[Auth] LOGIN_FAIL';
    static LOGOUT = '[Auth] LOGOUT';

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

    login(user: User): Action {
        return {
            type: AuthActions.LOGIN,
            payload: user
        }
    }

    loginSuccess(user: User): Action {
        return {
            type: AuthActions.LOGIN_SUCCESS,
            payload: user
        };
    }

    loginFail(errorMessage: ErrorMessage): Action {
        return {
            type: AuthActions.LOGIN_FAIL,
            payload: errorMessage
        };
    }

    logout() {
        return {
            type: AuthActions.LOGOUT,
        };
    }
}
