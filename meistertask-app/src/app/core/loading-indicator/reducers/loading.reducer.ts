import {
    ActionReducer,
    Action
} from '@ngrx/store';

import * as _ from 'lodash';

import { LoadingState } from '../models/loading.state';
import { ProjectListActions } from '../../../project/actions/project-list.actions';
import { TaskActions } from '../../../task/actions/task.actions';

const initialState: LoadingState = { project: false, task: false };

export function loadingReducer(state: LoadingState = initialState, action: Action ): LoadingState {
    switch (action.type) {
        case ProjectListActions.GET_PROJECT_LIST:
            return _.assignIn({}, state, { project: true });

        case ProjectListActions.GET_PROJECT_LIST_SUCCESS:
            return _.assignIn({}, state, { project: false });

        case ProjectListActions.CREATE_PROJECT_SUCCESS:
            return _.assignIn({}, state, { project: false });

        case TaskActions.GET_TASK_LIST_BY_PROJECT:
            return _.assignIn({}, state, { task: true });

        case TaskActions.GET_TASK_LIST_BY_PROJECT_SUCCESS:
            return _.assignIn({}, state, { task: false });

        case TaskActions.COMPLETE_TASK:
            return _.assignIn({}, state, { task: true });

        case TaskActions.COMPLETE_TASK_SUCCESS:
            return _.assignIn({}, state, { task: false });

        case TaskActions.DELETE_TASK:
            return _.assignIn({}, state, { task: true });

        case TaskActions.DELETE_TASK_SUCCESS:
            return _.assignIn({}, state, { task: false });

        case TaskActions.UPDATE_TASK_STATUS:
            return _.assignIn({}, state, { task: true });

        case TaskActions.UPDATE_TASK_STATUS_SUCCESS:
            return _.assignIn({}, state, { task: false });
        default:
            return state;
    }

}
