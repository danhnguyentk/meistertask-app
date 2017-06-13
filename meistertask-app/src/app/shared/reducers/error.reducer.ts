import { Action } from '@ngrx/store';

import * as _ from 'lodash';

import { ErrorState } from './error.state';
import { ErrorActions } from '../actions/error.actions';
import { ErrorMessage } from '../models/error-message.model';

const initialError: ErrorState = { login: null, signup: null };

export function errorReducer(state: ErrorState = initialError, action: Action): ErrorState {
    switch (action.type) {
        case ErrorActions.LOGIN_ERROR:
            return _.assignIn({}, state, { login: action.payload });

        case ErrorActions.SIGNUP_ERROR:
            return _.assignIn({}, state, { signup: action.payload });

        case ErrorActions.RESET_ERROR:
            return initialError;

        default:
            return state;
    }
}
