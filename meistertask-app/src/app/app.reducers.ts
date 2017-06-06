import { storeFreeze } from 'ngrx-store-freeze';
import { compose } from '@ngrx/core';
import {
    Action,
    combineReducers,
    ActionReducer
} from '@ngrx/store';

import { authReducer } from './auth/reducers/auth.reducer';
import { projectReducer } from './dashboard/reducers/project.reducer';
import { AppState } from './interface';
import { environment } from '../environments/environment';

const reducers: any = {
    auth: authReducer,
    project: projectReducer
};
export const developmentReducer: ActionReducer<AppState> = compose(storeFreeze, combineReducers)(reducers);
export const productionReducer: ActionReducer<AppState> = combineReducers(reducers);

export function reducer(state: AppState, action: Action) {
    if (environment.production) {
        return productionReducer(state, action);
    } else {
        return developmentReducer(state, action);
    }
}
