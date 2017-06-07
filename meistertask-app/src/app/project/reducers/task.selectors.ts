import { AppState } from '../../interface';
import { TaskState } from './task.state';
import { ErrorMessage } from '../../shared/models/error-message.model';
import { Task } from '../models/task';

// FIXME: rename function
export function getTask(state: AppState): TaskState {
    return state.task;
}

export function getTaskList(state: AppState): Task[] {
    return state.task.taskList;
}
