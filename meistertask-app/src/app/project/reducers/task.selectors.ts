import * as _ from 'lodash';

import { AppState } from '../../interface';
import { TaskState } from './task.state';
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

export function getTasksSearch(state: AppState): Task[] {
    const querySearch: string = state.task.querySearch;
    const projectList: Project[] = state.project.projectList;
    const taskList: Task[] = _.cloneDeep(state.task.taskList) ;
    if (!querySearch) {
        return [];
    }
    _.forEach(taskList, (task: Task) => {
        task.project = _.find(projectList, { id: task.projectId });
    });
    return _.filter(state.task.taskList, (task: Task) => {
        return _.includes(task.name, querySearch);
    });
}
