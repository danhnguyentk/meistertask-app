import * as _ from 'lodash';

import { AppState } from '../../../interface';
import { TaskState } from '../../../task/models/task.state';
import { Task } from '../../../task/models/task';
import { Project } from '../../../project/models/project';

export function getTaskListSearch(state: AppState): Task[] {
    return state.search.results;
}

export function getTasksSearch(state: AppState): Task[] {
    const querySearch: string = state.search.query;
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
