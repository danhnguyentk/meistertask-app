import {
    Component,
    OnInit,
    Input,
    OnChanges,
    ViewChild,
    Output,
    EventEmitter,
    ChangeDetectionStrategy
} from '@angular/core';


import { Project } from '../../../project/models/project';
import { TaskStatus } from '../../../task/models/task-status';
import { Logger } from '../../../core/shared/services/logger.service';
import { Dropdown } from 'ngx-dropdown';

@Component({
    selector: 'dropdown-assign',
    templateUrl: './dropdown-assign.component.html',
    styleUrls: [ './dropdown-assign.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownAssignComponent implements OnInit, OnChanges {
    @ViewChild(Dropdown) dropdown: Dropdown;
    @Input() projectList: Project[];
    @Output() closeDropdown: EventEmitter<any> = new EventEmitter();
    showProjectAssign: boolean = true;
    projectAssign: Project;
    statusAssign: number = TaskStatus.OPEN;
    searchProject: string;

    constructor(private logger: Logger) { }

    ngOnInit() {
    }

    selectProject() {
        this.showProjectAssign = false;
    }

    backAssignProject() {
        this.showProjectAssign = true;
    }

    ngOnChanges() {
        if (this.projectList) {
            this.projectAssign = this.projectList[0];
        }
        this.logger.debug('DropdownAssignComponent occur ngOnChanges: ', this.projectAssign);
    }

    onSelectProjectAssign(project: Project) {
        this.projectAssign = project;
        this.showProjectAssign = false;
    }

    onSelectStatusAssign(status: number) {
        this.statusAssign = status;
        this.dropdown.close();
        this.showProjectAssign = true;
    }

    onCloseDropdown() {
        this.closeDropdown.emit();
    }

    resetSearchInput() {
        this.searchProject = '';
    }

}
