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

import { Logger } from '../../../core/common/services/logger.service';
import { Project } from '../../../project/models/project';
import { Task } from '../../../task/models/task';
import { User } from '../../../auth/models/user';
import { SearchTaskModalComponent } from '../../../task/components/search-task-modal/search-task-modal.component';
import { DropdownAssignComponent } from '../../../project/components/dropdown-assign/dropdown-assign.component';
import { DropdownAddTaskComponent } from '../../../task/components/dropdown-add-task/dropdown-add-task.component';

@Component({
    selector: 'dashboard-header',
    templateUrl: './dashboard-header.component.html',
    styleUrls: [ './dashboard-header.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardHeaderComponent implements OnInit {
    @ViewChild(SearchTaskModalComponent) searchTaskModalComponent: SearchTaskModalComponent;
    @ViewChild(DropdownAssignComponent) dropdownAssignComponent: DropdownAssignComponent;
    @ViewChild(DropdownAddTaskComponent) dropdownAddTaskComponent: DropdownAddTaskComponent;

    @Input() projectList: Project[];
    @Input() user: User;
    @Input() taskListSearch: Task[];

    @Output() addTask: EventEmitter<Task> = new EventEmitter<Task>();
    @Output() logout: EventEmitter<any> = new EventEmitter();
    @Output() searchTask: EventEmitter<string> = new EventEmitter<string>();
    @Output() resetSearchTask: EventEmitter<any> = new EventEmitter();
    @Output() completeTask: EventEmitter<Task> = new EventEmitter<Task>();
    @Output() removeTask: EventEmitter<Task> = new EventEmitter<Task>();

    constructor(
        private formBuilder: FormBuilder,
        private logger: Logger) { }

    ngOnInit() {

    }

    /**
     * Add task
     */
    onAddTask(task: Task) {
        task = _.assignIn({}, task,
            { status: this.dropdownAssignComponent.statusAssign, projectId: this.dropdownAssignComponent.projectAssign.id });
        this.logger.info('Add task with value: ', task);
        this.addTask.emit(task);
        this.dropdownAddTaskComponent.dropdown.close();
    }

    /**
     * Logout page
     */
    onLogout() {
        this.logout.emit();
    }

    openModal() {
        this.searchTaskModalComponent.openModal();
    }

    onSearchTask(term: string) {
        this.searchTask.emit(term);
    }

    onResetSearchTask() {
        this.resetSearchTask.emit();
    }

    onCompleteTask(task: Task) {
        this.completeTask.emit(task);
    }

    onRemoveTask(task: Task) {
        this.removeTask.emit(task);
    }

}
