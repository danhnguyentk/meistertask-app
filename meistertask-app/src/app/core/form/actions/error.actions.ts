import { Injectable } from '@angular/core';

import { Action} from '@ngrx/store';

import { ErrorMessage } from '../models/error-message.model';
import { AuthActions } from '../../../auth/actions/auth.actions';

@Injectable()
export class ErrorActions {
    static RESET_ERROR: string = '[Error] RESET_ERROR';
    static LOGIN_ERROR: string = '[Error] LOGIN_ERROR';
    static SIGNUP_ERROR: string = '[Error] SIGNUP_ERROR';

    constructor() {}

    resetError(): Action {
        return {
            type: ErrorActions.RESET_ERROR
        };
    }

    loginError(error: ErrorMessage): Action {
        return {
            type: ErrorActions.LOGIN_ERROR,
            payload: error
        };
    }

    signupError(error: ErrorMessage): Action {
        return {
            type: ErrorActions.SIGNUP_ERROR,
            payload: error
        };
    }

    changePasswordFail(errorMessage: ErrorMessage): Action {
        return {
            type: AuthActions.CHANGE_PASSWORD_FAIL,
            payload: errorMessage
        };
    }

    changePasswordSuccess(successMessage: string): Action {
        return {
            type: AuthActions.CHANGE_PASSWORD_SUCCESS,
            payload: successMessage
        };
    }

}
