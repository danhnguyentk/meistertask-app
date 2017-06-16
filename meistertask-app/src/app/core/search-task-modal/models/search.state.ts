import { Task } from '../../../project/models/task';

export interface SearchState {
    results: Task[] | any[];
    query: string;
}


