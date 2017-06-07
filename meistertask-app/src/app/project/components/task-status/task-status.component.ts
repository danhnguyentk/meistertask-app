import {
    Component,
    OnInit,
    Input
} from '@angular/core';

import { Task } from '../../models/task';

@Component({
    selector: 'task-status',
    templateUrl: './task-status.component.html',
    styleUrls: [ './task-status.component.scss' ]
})
export class TaskStatusComponent implements OnInit {
    @Input() statusName: string;
    @Input() tasks: Task;

    constructor() { }

    ngOnInit() {
    }

    aaa() {
        console.log('aaa');
    }

}
