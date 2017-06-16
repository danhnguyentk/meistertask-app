import {
    ActionReducer,
    Action
} from '@ngrx/store';

import * as _ from 'lodash';

import { SearchActions } from '../actions/search.actions';
import { SearchState } from '../models/search.state';
import { Task } from '../../../project/models/task';

const initialState: SearchState = { results: [], query: '' };

export function searchReducer(state: SearchState = initialState, action: Action ): SearchState {
    let results: Task[];
    switch (action.type) {
        case SearchActions.SEARCH_TASKS_SUCCESS:
            results = action.payload;
            return _.assignIn({}, state, { results });

        case SearchActions.RESET_SEARCH_TASKS:
            return initialState;

        case SearchActions.UPDATE_QUERY_SEARCH:
            return _.assignIn({}, state, { query: action.payload });

        default:
            return state;
    }
}
