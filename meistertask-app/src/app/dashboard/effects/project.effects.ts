import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import {
    Effect,
    Actions,
    toPayload
} from '@ngrx/effects';

import { ProjectActions } from '../actions/project.actions';
import { Project } from '../models/project';
import { ErrorMessage } from '../../shared/models/error-message.model';
import { ProjectService } from '../services/project.service';

@Injectable()
export class ProjectEffects {

    constructor(
        private actions: Actions,
        private projectActions: ProjectActions,
        private projectService: ProjectService
    ) {}

    @Effect()
    getProjects = this.actions
        .ofType(ProjectActions.GET_PROJECT_LIST)
        .switchMap(() => {
            return this.projectService.getProjects()
                .map((projectList: Project[]) => this.projectActions.getProjectListSuccess(projectList));
        });

    @Effect()
    createProject = this.actions
        .ofType(ProjectActions.CREATE_PROJECT)
        .map(toPayload)
        .mergeMap((project: Project) => {
            return this.projectService.createProject(project)
                .map((projectRes: Project) => this.projectActions.createProjectSuccess(projectRes))
                .catch((errorMessage: ErrorMessage) => Observable.of(this.projectActions.createProjectFail(errorMessage)));
        });

}
