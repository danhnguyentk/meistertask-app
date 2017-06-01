import {
    ActionReducer,
    Action
} from '@ngrx/store';

import * as _ from 'lodash';

import { AuthActions } from './auth.actions';
import { AuthState } from './auth.state';

const initialErrorMessage = { statusCode: 0, statusMessage: '' };
const initialState: AuthState = { isAuthenticated: false, errorMessage: initialErrorMessage };

export function authReducer(state: AuthState = initialState, action: Action): AuthState {
    switch (action.type) {
        case AuthActions.SIGNUP_SUCCESS:
            return _.assignIn({}, state, { isAuthenticated: true, errorMessage: initialErrorMessage });

        case AuthActions.SIGNUP_FAIL:
            return _.assignIn({}, state, { isAuthenticated: false, errorMessage: action.payload });

        default:
            return state;
    }
}
