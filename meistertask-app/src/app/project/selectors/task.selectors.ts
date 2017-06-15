import * as _ from 'lodash';

import { AppState } from '../../interface';
import { TaskState } from '../models/task.state';
import { ErrorMessage } from '../../shared/models/error-message.model';
import { Task } from '../models/task';
import { Project } from '../../dashboard/models/project';

// FIXME: rename function
export function getTask(state: AppState): TaskState {
    return state.task;
}

export function getTaskListByProject(state: AppState): Task[] {
    return state.task.taskListByProject;
}

export function getTaskListSearch(state: AppState): Task[] {
    return state.task.taskListSearch;
}
