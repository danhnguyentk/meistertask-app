import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import * as moment from 'moment';

import { Task } from '../models/task';
import { HttpWrapperService } from '../../core/http-wrapper.service';
import { AppConfig } from '../../core/app-config.service';

@Injectable()
export class TaskService {

    constructor(
        private httpWrapperService: HttpWrapperService,
        private appConfig: AppConfig) { }

    getAllTask(): Observable<Task[]> {
        return this.httpWrapperService.get(this.appConfig.API.TASK);
    }

    getTaskListByProject(projectId: number): Observable<Task[]> {
        return this.httpWrapperService.get(this.appConfig.API.TASK, { projectId });
    }

    /**
     * Add task to project
     */
    addTask(task: Task): Observable<Task> {
        task = _.assignIn({}, task, { id: new Date().valueOf(), dateCreated: moment().format('dd/mm/yyyy'), isCompleted: false });
        return this.httpWrapperService.post(this.appConfig.API.TASK, task);
    }

    getTask(taskId: number): Observable<Task> {
        return this.httpWrapperService.get(this.appConfig.API.TASK, { id: taskId });
    }

    /**
     * Update status of task by taskId
     */
    updateStatusTask(taskId: number, status): Observable<Task> {
        return this.httpWrapperService.patch(`${this.appConfig.API.TASK}/${taskId}`, { status });
    }

    completeTask(taskId: number): Observable<Task> {
        return this.httpWrapperService.patch(`${this.appConfig.API.TASK}/${taskId}`, { isCompleted: true });
    }

    removeTask(taskId: number): Observable<number> {
        return this.httpWrapperService
            .delete(`${this.appConfig.API.TASK}/${taskId}`)
            .mapTo(taskId)
    }

}
