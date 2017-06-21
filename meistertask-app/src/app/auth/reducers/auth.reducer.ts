import { Action } from '@ngrx/store';

import * as _ from 'lodash';

import { AuthActions } from '../actions/auth.actions';
import { AuthState } from '../models/auth.state';

const initialState: AuthState = { isAuthenticated: false, user: null };

export function authReducer(state: AuthState = initialState, action: Action): AuthState {
    switch (action.type) {
        case AuthActions.SAVE_USER_TO_STATE:
            return _.assignIn({}, state, { user: action.payload });

        case AuthActions.SIGNUP_SUCCESS:
            return _.assignIn({}, state, { isAuthenticated: true, errorMessage: null, user: action.payload });

        case AuthActions.LOGIN_SUCCESS:
            return _.assignIn({}, state, { isAuthenticated: true, errorMessage: null, user: action.payload });

        case AuthActions.LOGOUT:
            return initialState;

        default:
            return state;
    }
}
