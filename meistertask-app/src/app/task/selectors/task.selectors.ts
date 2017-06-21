import { AppState } from '../../interface';
import { TaskState } from '../models/task.state';
import { Task } from '../models/task';

export function getTask(state: AppState): TaskState {
    return state.task;
}

export function getTaskListByProject(state: AppState): Task[] {
    return state.task.taskListByProject;
}

export function getTaskListSearch(state: AppState): Task[] {
    return state.task.taskListSearch;
}
