import {
    ActionReducer,
    Action
} from '@ngrx/store';

import * as _ from 'lodash';

import { TaskActions } from '../actions/task.actions';
import { TaskState } from './task.state';
import { Task } from '../models/task';

const initialState: TaskState = { taskList: [] };

export function taskReducer(state: TaskState = initialState, action: Action ): TaskState {
    let index: number;
    switch (action.type) {
        case TaskActions.GET_TASK_LIST_SUCCESS:
            return { taskList: action.payload };

        case TaskActions.ADD_TASK_SUCCESS:
            return {
                taskList: [ ...state.taskList, action.payload ]
            };

        case TaskActions.UPDATE_TASK_STATUS_SUCCESS:
            index = _.findIndex(state.taskList, { id: action.payload.id });
            if (index >= 0) {
                return {
                    taskList: [
                        ...state.taskList.slice(0, index),
                        action.payload,
                        ...state.taskList.slice(index + 1)
                    ]
                };
            }
            return state;

        case TaskActions.COMPLETE_TASK_SUCCESS:
            index = _.findIndex(state.taskList, { id: action.payload.id });
            if (index >= 0) {
                return {
                    taskList: [
                        ...state.taskList.slice(0, index),
                        action.payload,
                        ...state.taskList.slice(index + 1)
                    ]
                };
            }
            return state;

        case TaskActions.DELETE_TASK_SUCCESS:
            const taskList = _.filter(state.taskList, (task: Task) => task.id !== action.payload);
            return { taskList };

        default:
            return state;
    }
}
