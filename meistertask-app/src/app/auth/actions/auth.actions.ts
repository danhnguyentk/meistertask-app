import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';

import { User } from '../models/user';
import { ErrorMessage } from '../../shared/models/error-message.model';

@Injectable()
export class AuthActions {

    static SAVE_USER_TO_STATE = '[Auth] SAVE_USER_TO_STATE';
    static SIGNUP = '[Auth] SIGNUP';
    static SIGNUP_SUCCESS= '[Auth] SIGNUP_SUCCESS';
    static SIGNUP_FAIL= '[Auth] SIGNUP_FAIL';
    static LOGIN = '[Auth] LOGIN';
    static LOGIN_SUCCESS = '[Auth] LOGIN_SUCCESS';
    static LOGIN_FAIL = '[Auth] LOGIN_FAIL';
    static LOGOUT = '[Auth] LOGOUT';

    saveUserToState(user: User): Action {
        return {
            type: AuthActions.SAVE_USER_TO_STATE,
            payload: user
        };
    }

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
        };
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

    logout(): Action {
        return {
            type: AuthActions.LOGOUT
        };
    }
}
