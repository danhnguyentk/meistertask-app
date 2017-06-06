import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import {
    Effect,
    Actions,
    toPayload
} from '@ngrx/effects';

import { ProjectListActions } from '../actions/project-list.actions';
import { Project } from '../models/project';
import { ErrorMessage } from '../../shared/models/error-message.model';
import { ProjectService } from '../services/project.service';

@Injectable()
export class ProjectListEffects {

    constructor(
        private actions: Actions,
        private projectActions: ProjectListActions,
        private projectService: ProjectService
    ) {}

    @Effect()
    getProjects = this.actions
        .ofType(ProjectListActions.GET_PROJECT_LIST)
        .switchMap(() => {
            return this.projectService.getProjects()
                .map((projectList: Project[]) => this.projectActions.getProjectListSuccess(projectList));
        });

    @Effect()
    createProject = this.actions
        .ofType(ProjectListActions.CREATE_PROJECT)
        .map(toPayload)
        .mergeMap((project: Project) => {
            return this.projectService.createProject(project)
                .map((projectRes: Project) => this.projectActions.createProjectSuccess(projectRes))
                .catch((errorMessage: ErrorMessage) => Observable.of(this.projectActions.createProjectFail(errorMessage)));
        });

}
