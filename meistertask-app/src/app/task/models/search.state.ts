import { Task } from '../../task/models/task';

export interface SearchState {
    results: Task[] | any[];
    query: string;
}


