import {
    Component,
    OnInit,
    Output,
    EventEmitter
} from '@angular/core';
import {
    FormGroup,
    FormBuilder,
    Validators
} from '@angular/forms';

import * as _ from 'lodash';
import { Dropdown } from 'ngx-dropdown';

import { Logger } from '../../../core/shared/services/logger.service';
import { Project } from '../../../project/models/project';
import { DropdownAssignComponent } from '../../../project/components/dropdown-assign/dropdown-assign.component';
import { Task } from '../../../task/models/task';

@Component({
    selector: 'add-task',
    templateUrl: './add-task.component.html',
    styleUrls: [ './add-task.component.scss' ]
})
export class AddTaskComponent implements OnInit {
    formTask: FormGroup;
    @Output() addTask: EventEmitter<Task> = new EventEmitter();

    constructor(
        private formBuilder: FormBuilder,
        private logger: Logger) { }

    ngOnInit() {
        this.buildForm();
    }

    /**
     * Build form add task
     */
    buildForm() {
        this.formTask = this.formBuilder.group({
            name: [ '', Validators.required ]
        });
    }

    /**
     * Add task
     */
    onAddTask() {
        this.logger.debug('Event add task on dashboard-header component:', this.formTask.value);
        if (!this.formTask.valid) {
            return;
        }
        this.addTask.emit(this.formTask.value);
    }
}
