import {
    Component,
    OnInit,
    Input,
    ViewChild,
    Output,
    EventEmitter,
    ChangeDetectionStrategy
} from '@angular/core';
import {
    FormGroup,
    FormBuilder,
    Validators
} from '@angular/forms';

import * as _ from 'lodash';
import { Dropdown } from 'ngx-dropdown';

import { Logger } from '../../../core/logger.service';
import { Project } from '../../../dashboard/models/project';
import { DropdownAssignComponent } from '../../../shared/components/dropdown-assign/dropdown-assign.component';
import { Task } from '../../../project/models/task';

@Component({
    selector: 'dropdown-add-task',
    templateUrl: './dropdown-add-task.component.html',
    styleUrls: [ './dropdown-add-task.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownAddTaskComponent implements OnInit {
    @Input() projectList: Project[];
    @ViewChild(Dropdown) dropdown: Dropdown;
    formTask: FormGroup;
    @ViewChild(DropdownAssignComponent) dropdownAssign: DropdownAssignComponent;
    @Output() addTask: EventEmitter<Task> = new EventEmitter<Task>();

    constructor(
        private formBuilder: FormBuilder,
        private logger: Logger) { }

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
        this.formTask = this.formBuilder.group({
            name: [ '', Validators.required ]
        });
    }

    onAddTask() {
        this.logger.debug('Event add task on dashboard-header component:', this.formTask.value);
        if (!this.formTask.valid) {
            return;
        }
        const task: Task = _.assignIn({},
            this.formTask.value,
            { status: this.dropdownAssign.statusAssign, projectId: this.dropdownAssign.projectAssign.id });
        this.logger.info('Add task with value: ', task);
        this.addTask.emit(task);
        this.dropdown.close();
    }

    // FIXME: why bug in here
    showDropdownAddTask() {
        // this.dropdown.open();
    }

}
