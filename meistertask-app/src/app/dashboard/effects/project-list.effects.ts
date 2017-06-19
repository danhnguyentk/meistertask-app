import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import {
    Effect,
    Actions,
    toPayload
} from '@ngrx/effects';
import * as _ from 'lodash';

import { ProjectListActions } from '../actions/project-list.actions';
import { Project } from '../models/project';
import { ErrorMessage } from '../../core/shared/models/error-message.model';
import { ProjectService } from '../services/project.service';
import { TaskService } from '../../project/services/task.service';
import { Task } from '../../project/models/task';

@Injectable()
export class ProjectListEffects {

    constructor(
        private actions: Actions,
        private projectActions: ProjectListActions,
        private projectService: ProjectService,
        private taskService: TaskService
    ) {}

    @Effect()
    getProjects = this.actions
        .ofType(ProjectListActions.GET_PROJECT_LIST)
        .switchMap(() => {
            return Observable.zip(
                this.projectService.getProjects(),
                this.taskService.getAllTask(),
                (projectList: Project[], taskList: Task[]) => {
                    _.forEach(projectList, (project: Project) => {
                        // Get number task active
                        project.numberTaskActive = _.countBy(taskList, { projectId: project.id })['true'] || 0;
                        // Get number task completed]
                        project.numberTaskCompleted = _.countBy(taskList, { projectId: project.id, isCompleted: true })['true'] || 0;
                    });
                    return projectList;
                });
        })
        .map((projectList: Project[]) => this.projectActions.getProjectListSuccess(projectList));

    @Effect()
    createProject = this.actions
        .ofType(ProjectListActions.CREATE_PROJECT)
        .map(toPayload)
        .mergeMap((project: Project) => {
            return this.projectService.createProject(project)
                .map((projectRes: Project) => _.assignIn({}, project, { numberTaskActive: 0, numberTaskCompleted: 0 }))
                .map((projectRes: Project) => this.projectActions.createProjectSuccess(projectRes))
                .catch((errorMessage: ErrorMessage) => Observable.of(this.projectActions.createProjectFail(errorMessage)));
        });

}
