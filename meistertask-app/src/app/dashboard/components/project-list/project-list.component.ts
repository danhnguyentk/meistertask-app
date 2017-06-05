import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter
} from '@angular/core';

import { Project } from '../../models/project';

@Component({
    selector: 'project-list',
    templateUrl: './project-list.component.html',
    styleUrls: [ './project-list.component.scss' ]
})
export class ProjectListComponent implements OnInit {
    @Input() projectList: Project[];
    @Output() goDetailProject: EventEmitter<Project> = new EventEmitter<Project>();

    constructor() { }

    ngOnInit() {
    }

    onGoDetailProject(project: Project) {
        this.goDetailProject.emit(project);
    }

}
