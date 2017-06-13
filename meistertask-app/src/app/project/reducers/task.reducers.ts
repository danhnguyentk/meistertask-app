import {
    ActionReducer,
    Action
} from '@ngrx/store';

import * as _ from 'lodash';

import { TaskActions } from '../actions/task.actions';
import { TaskState } from './task.state';
import { Task } from '../models/task';

const initialState: TaskState = { taskList: [], taskListByProject: [], taskListSearch: [], querySearch: '' };

export function taskReducer(state: TaskState = initialState, action: Action ): TaskState {
    let index: number;
    let taskList: Task[];
    let taskListByProject: Task[];
    let taskListSearch: Task[];
    let querySearch: string;
    switch (action.type) {
        case TaskActions.GET_TASK_LIST_SUCCESS:
            taskList = action.payload;
            return _.assignIn({}, state, { taskList });

        case TaskActions.GET_TASK_LIST_BY_PROJECT_SUCCESS:
            taskListByProject = action.payload;
            return _.assignIn({}, state, { taskListByProject });

        case TaskActions.ADD_TASK_SUCCESS:
            taskListByProject = [ ...state.taskListByProject, action.payload ];
            return _.assignIn({}, state, { taskListByProject });

        case TaskActions.UPDATE_TASK_STATUS_SUCCESS:
            index = _.findIndex(state.taskListByProject, { id: action.payload.id });
            if (index >= 0) {
                taskListByProject = [
                    ...state.taskListByProject.slice(0, index),
                    action.payload,
                    ...state.taskListByProject.slice(index + 1)
                ];
                return _.assignIn({}, state, { taskListByProject });
            }
            return state;

        case TaskActions.COMPLETE_TASK_SUCCESS:
            index = _.findIndex(state.taskListByProject, { id: action.payload.id });
            taskList = _.cloneDeep(state.taskList);
            taskListByProject = _.cloneDeep(state.taskListByProject);
            if (index >= 0) {
                taskListByProject = [
                    ...state.taskListByProject.slice(0, index),
                    action.payload,
                    ...state.taskListByProject.slice(index + 1)
                ];
            }
            index = _.findIndex(state.taskList, { id: action.payload.id });
            if (index >= 0) {
                taskList = [
                    ...state.taskList.slice(0, index),
                    action.payload,
                    ...state.taskList.slice(index + 1)
                ];
            }
            return _.assignIn({}, state, { taskList, taskListByProject });

        case TaskActions.DELETE_TASK_SUCCESS:
            taskList = _.filter(state.taskList, (task: Task) => task.id !== action.payload);
            taskListByProject = _.filter(state.taskListByProject, (task: Task) => task.id !== action.payload);
            return _.assignIn({}, state, { taskListByProject, taskList });

        case TaskActions.SEARCH_TASKS_SUCCESS:
            taskListSearch = action.payload;
            return _.assignIn({}, state, { taskListSearch });

        case TaskActions.RESET_SEARCH_TASKS:
            taskListSearch = [];
            querySearch = '';
            return _.assignIn({}, state, { taskListSearch, querySearch });

        case TaskActions.UPDATE_QUERY_SEARCH:
            querySearch = action.payload;
            return _.assignIn({}, state, { querySearch });

        default:
            return state;
    }
}
