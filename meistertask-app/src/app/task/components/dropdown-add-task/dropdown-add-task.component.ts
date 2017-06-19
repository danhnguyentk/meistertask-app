import {
    Component,
    OnInit,
    Input,
    ViewChild,
    Output,
    EventEmitter,
    ChangeDetectionStrategy
} from '@angular/core';

import * as _ from 'lodash';
import { Dropdown } from 'ngx-dropdown';

import { Logger } from '../../../core/shared/services/logger.service';
import { Project } from '../../../project/models/project';
import { DropdownAssignComponent } from '../../../project/components/dropdown-assign/dropdown-assign.component';
import { Task } from '../../../task/models/task';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
    selector: 'dropdown-add-task',
    templateUrl: './dropdown-add-task.component.html',
    styleUrls: [ './dropdown-add-task.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownAddTaskComponent implements OnInit {
    @ViewChild(AddTaskComponent) addTaskComponent: AddTaskComponent;
    @ViewChild(Dropdown) dropdown: Dropdown;
    @ViewChild(DropdownAssignComponent) dropdownAssign: DropdownAssignComponent;
    @Input() projectList: Project[];
    @Output() addTask: EventEmitter<Task> = new EventEmitter<Task>();

    constructor(private logger: Logger) { }

    ngOnInit() {
    }

    onAddTask() {
        this.logger.debug('Event add task on dashboard-header component:', this.addTaskComponent.formTask.value);
        if (!this.addTaskComponent.formTask.valid) {
            return;
        }
        const task: Task = _.assignIn({},
            this.addTaskComponent.formTask.value,
            { status: this.dropdownAssign.statusAssign, projectId: this.dropdownAssign.projectAssign.id });
        this.logger.info('Add task with value: ', task);
        this.addTask.emit(task);
        this.dropdown.close();
    }
}
