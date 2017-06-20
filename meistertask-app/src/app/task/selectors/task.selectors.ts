import * as _ from 'lodash';

import { AppState } from '../../interface';
import { TaskState } from '../models/task.state';
import { Task } from '../models/task';
import { Project } from '../../project/models/project';

export function getTask(state: AppState): TaskState {
    return state.task;
}

export function getTaskListByProject(state: AppState): Task[] {
    return state.task.taskListByProject;
}

export function getTaskListSearch(state: AppState): Task[] {
    return state.task.taskListSearch;
}
