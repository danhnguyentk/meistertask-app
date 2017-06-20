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

import { Dropdown } from 'ngx-dropdown';

import { Project } from '../../models/project';
import { TaskStatus } from '../../../task/models/task-status';
import { Logger } from '../../../core/shared/services/logger.service';

@Component({
    selector: 'dropdown-assign',
    templateUrl: './dropdown-assign.component.html',
    styleUrls: [ './dropdown-assign.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownAssignComponent implements OnInit, OnChanges {
    statusAssign: number = TaskStatus.OPEN;
    projectAssign: Project;
    @ViewChild(Dropdown) dropdown: Dropdown;
    @Input() projectList: Project[];

    constructor(private logger: Logger) { }

    ngOnInit() {
    }

    ngOnChanges() {
        if (this.projectList) {
            this.projectAssign = this.projectList[0];
        }
        this.logger.debug('DropdownAssignComponent occur ngOnChanges: ', this.projectAssign);
    }

    onSelectProjectAssign(project: Project) {
        this.projectAssign = project;
    }

    onSelectStatusAssign(status: number) {
        this.statusAssign = status;
    }

    onCloseDropdown() {
        this.dropdown.close();
    }

}
