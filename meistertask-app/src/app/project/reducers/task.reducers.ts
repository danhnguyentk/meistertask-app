import {
    ActionReducer,
    Action
} from '@ngrx/store';

import * as _ from 'lodash';

import { TaskActions } from '../actions/task.actions';
import { TaskState } from './task.state';

const initialState: TaskState = { taskList: [] };

export function taskReducer(state: TaskState = initialState, action: Action ): TaskState {
    switch (action.type) {
        case TaskActions.GET_TASK_LIST_SUCCESS:
            return { taskList: action.payload };
        case TaskActions.ADD_TASK_SUCCESS:
            return {
                taskList: [ ...state.taskList, action.payload ]
            };

        default:
            return state;
    }
}
