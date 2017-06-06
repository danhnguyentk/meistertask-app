import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

import { Task } from '../models/task';
import { HttpWrapperService } from '../../core/http-wrapper.service';
import { AppConfig } from '../../core/app-config.service';

@Injectable()
export class ProjectService {

    constructor(
        private httpWrapperService: HttpWrapperService,
        private appConfig: AppConfig) { }

    /**
     * Add task to project
     */
    addTask(projectId: number, taskName: string, taskStatus: number): Observable<Task> {
        const task: Task = {
            id: new Date().valueOf(),
            projectId,
            name: taskName,
            dateCreated: moment().format('dd/mm/yyyy'),
            status: taskStatus,
        };
        return this.httpWrapperService.post(this.appConfig.API.TASK, task);
    }

    getTask(taskId: number): Observable<Task> {
        return this.httpWrapperService.get(this.appConfig.API.TASK, { id: taskId });
    }

}
