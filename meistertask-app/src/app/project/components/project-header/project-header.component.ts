import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter
} from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Project } from '../../../dashboard/models/project';

@Component({
    selector: 'project-header',
    templateUrl: './project-header.component.html',
    styleUrls: [ './project-header.component.scss' ]
})
export class ProjectHeaderComponent implements OnInit {
    @Input() projectList: Project[];
    @Input() project: Project;
    @Output() switchProject: EventEmitter<Project> = new EventEmitter<Project>();


    constructor() { }

    ngOnInit() {
    }

    onSwitchProject(project: Project) {
        this.switchProject.emit(project);
    }
}
