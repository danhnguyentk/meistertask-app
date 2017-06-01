import {
    ActionReducer,
    Action
} from '@ngrx/store';
import { Map } from 'immutable';

import * as _ from 'lodash';

import { AuthActions } from './auth.actions';
import { AuthState } from './auth.state';
import { User } from '../models/user.model';

const initialState: AuthState = { isAuthenticated: false, errorMessage: null, user: null };

export function authReducer(state: AuthState = initialState, action: Action): AuthState {
    switch (action.type) {
        case AuthActions.SIGNUP_SUCCESS:
            return _.assignIn({}, state, { isAuthenticated: true, errorMessage: null, user: action.payload });

        case AuthActions.SIGNUP_FAIL:
            return _.assignIn({}, state, { errorMessage: action.payload });

        case AuthActions.LOGOUT:
            return initialState;

        default:
            return state;
    }
}
