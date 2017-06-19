import {
    Pipe,
    PipeTransform
} from '@angular/core';

import * as _ from 'lodash';

import { Task } from '../models/task';

@Pipe({
    name: 'filterTask'
})
export class FilterTaskPipe implements PipeTransform {

    transform(tasks: Task[], status: number): any {
        return _.filter(tasks, (task: Task) => {
            return task.status === status;
        });
    }

}
