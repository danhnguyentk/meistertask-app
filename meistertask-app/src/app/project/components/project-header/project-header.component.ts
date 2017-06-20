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

import { Project } from '../../../project/models/project';
import { User } from '../../../auth/models/user';

@Component({
    selector: 'project-header',
    templateUrl: './project-header.component.html',
    styleUrls: [ './project-header.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectHeaderComponent implements OnInit {
    closeDropdownMenuProject: boolean;
    searchInput: string;
    @ViewChild(Dropdown) dropwdown: Dropdown;
    @Input() projectList: Project[];
    @Input() project: Project;
    @Input() user: User;
    @Output() switchProject: EventEmitter<Project> = new EventEmitter<Project>();
    @Output() logout: EventEmitter<any> = new EventEmitter();

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

     /**
     * Logout page
     */
    onLogout() {
        this.logout.emit();
    }
}
