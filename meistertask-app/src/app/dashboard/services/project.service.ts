import { Injectable } from '@angular/core';

import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';

import { Project } from '../models/project';
import { HttpWrapperService } from '../../core/http-wrapper.service';
import { AppConfig } from '../../core/app-config.service';

@Injectable()
export class ProjectService {

    constructor(
        private httpWrapperService: HttpWrapperService,
        private appConfig: AppConfig
    ) { }

    getProjects(): Observable<Project[]> {
        return this.httpWrapperService.get(this.appConfig.API.PROJECT);
    }

    createProject(project: Project): Observable<Project> {
        project = _.assignIn({}, project, { id: new Date().valueOf() });
        return this.httpWrapperService.post(this.appConfig.API.PROJECT, project);
    }

}
