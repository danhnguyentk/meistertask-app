import { storeFreeze } from 'ngrx-store-freeze';
import { compose } from '@ngrx/core';
import {
    Action,
    combineReducers,
    ActionReducer
} from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';

import { authReducer } from './auth/reducers/auth.reducer';
import { projectListReducer } from './dashboard/reducers/project-list.reducer';
import { taskReducer } from './project/reducers/task.reducers';
import { errorReducer } from './shared/reducers/error.reducer';
import { loadingReducer } from './shared/reducers/loading.reducer';
import { AppState } from './interface';
import { environment } from '../environments/environment';

const reducers: any = {
    auth: authReducer,
    project: projectListReducer,
    task: taskReducer,
    error: errorReducer,
    loading: loadingReducer
};
export const developmentReducer: ActionReducer<AppState> = compose(storeFreeze, storeLogger(), combineReducers)(reducers);
export const productionReducer: ActionReducer<AppState> = combineReducers(reducers);

export function reducer(state: AppState, action: Action) {
    if (environment.production) {
        return productionReducer(state, action);
    } else {
        return developmentReducer(state, action);
    }
}
