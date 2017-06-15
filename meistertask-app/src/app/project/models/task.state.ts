import { Task } from '../models/task';

export interface TaskState {
    taskList: Task[];
    taskListByProject: Task[];
    taskListSearch: Task[];
}
