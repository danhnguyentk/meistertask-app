import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    ViewChild,
    ChangeDetectionStrategy
} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Dropdown } from 'ngx-dropdown';

import { Project } from '../../../dashboard/models/project';

@Component({
    selector: 'project-header',
    templateUrl: './project-header.component.html',
    styleUrls: [ './project-header.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectHeaderComponent implements OnInit {
    @ViewChild(Dropdown) dropwdown: Dropdown;
    @Input() projectList: Project[];
    @Input() project: Project;
    @Output() switchProject: EventEmitter<Project> = new EventEmitter<Project>();
    closeDropdownMenuProject: boolean;
    searchInput: string;

    constructor() { }

    ngOnInit() {
    }

    onSwitchProject(project: Project) {
        this.dropwdown.close();
        this.switchProject.emit(project);
    }

    resetSearchInput() {
        this.searchInput = '';
    }
}
