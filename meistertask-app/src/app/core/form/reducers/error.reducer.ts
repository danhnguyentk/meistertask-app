import { Action } from '@ngrx/store';

import * as _ from 'lodash';

import { ErrorState } from '../models/error.state';
import { ErrorActions } from '../actions/error.actions';
import { AuthActions } from '../../../auth/actions/auth.actions';

const initialError: ErrorState = { login: null, signup: null, changePassword: null, changePasswordSuccess: null };

export function errorReducer(state: ErrorState = initialError, action: Action): ErrorState {
    switch (action.type) {
        case ErrorActions.LOGIN_ERROR:
            return _.assignIn({}, state, { login: action.payload });

        case ErrorActions.SIGNUP_ERROR:
            return _.assignIn({}, state, { signup: action.payload });

        case AuthActions.CHANGE_PASSWORD_FAIL:
            return _.assignIn({}, state, { changePassword: action.payload });

        case AuthActions.CHANGE_PASSWORD_SUCCESS:
            return _.assignIn({}, state, { changePassword: null, changePasswordSuccess: action.payload });

        case ErrorActions.RESET_ERROR:
            return initialError;

        default:
            return state;
    }
}
