
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import {
    Effect,
    Actions,
    toPayload
} from '@ngrx/effects';

import * as _ from 'lodash';

import { AppState } from '../../../interface';
import { SearchActions } from '../actions/search.actions';
import { ProjectListActions } from '../../../project/actions/project-list.actions';
import { Task } from '../../../task/models/task';
import { Project } from '../../../project/models/project';
import { ErrorMessage } from '../../../core/form/models/error-message.model';
import { TaskService } from '../../../task/services/task.service';
import { Logger } from '../../../core/shared/services/logger.service';
import { getProjectList } from '../../../project/selectors/project-list.selector';

@Injectable()
export class SearchEffects {

    constructor(
        private actions: Actions,
        private searchActions: SearchActions,
        private taskService: TaskService,
        private logger: Logger,
        private store: Store<AppState>
    ) {}

    @Effect()
    searchTask$ = this.actions
        .ofType(SearchActions.SEARCH_TASKS)
        .map(toPayload)
        .switchMap((term: string) => this.taskService.searchTaskByTerm(term))
        .withLatestFrom(this.store.select(getProjectList))
        .map(([ tasks, projects ]) => {
            this.logger.info('Task list with value: ', tasks);
            this.logger.info('Projects list with value: ', projects);
            _.forEach(tasks, (task: Task) => {
                task.project = _.find(projects, { id: task.projectId });
            });
            this.logger.info('Task combind with project: ', tasks);
            return this.searchActions.searchTasksSuccess(tasks);
        });

}
