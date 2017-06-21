import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    ChangeDetectionStrategy
} from '@angular/core';

import { Project } from '../../models/project';
import { Logger } from '../../../core/common/services/logger.service';

@Component({
    selector: 'assign-project',
    templateUrl: './assign-project.component.html',
    styleUrls: [ './assign-project.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssignProjectComponent implements OnInit {
    showProjectAssign: boolean = true;
    @Input() projectList: Project[];
    @Output() closeDropdown: EventEmitter<any> = new EventEmitter();
    @Output() selectProjectAssign: EventEmitter<Project> = new EventEmitter();
    @Output() selectStatusAssign: EventEmitter<number> = new EventEmitter();

    constructor(private logger: Logger) { }

    ngOnInit() {
    }

    selectProject() {
        this.showProjectAssign = false;
    }

    backAssignProject() {
        this.showProjectAssign = true;
    }

    onSelectProjectAssign(project: Project) {
        this.showProjectAssign = false;
        this.selectProjectAssign.emit(project);
    }

    onSelectStatusAssign(status: number) {
        this.showProjectAssign = true;
        this.selectStatusAssign.emit(status);
        this.closeDropdown.emit();
    }

    onCloseDropdown() {
        this.closeDropdown.emit();
    }

}
