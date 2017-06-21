import {
    Component,
    OnInit,
    ViewChild,
    OnDestroy,
    Output,
    EventEmitter,
    Input,
    ChangeDetectionStrategy
} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';
import { Router } from '@angular/router';

import { Modal } from 'ngx-modal';

import { Project } from '../../models/project';
import { AppConfig } from '../../../core/common/services/app-config.service';

@Component({
    selector: 'project-panel',
    templateUrl: './project-panel.component.html',
    styleUrls: [ './project-panel.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectPanelComponent implements OnInit, OnDestroy {
    x: boolean = false;
    @ViewChild(Modal) modal: Modal;
    form: FormGroup;
    isShowDesc: boolean = false;
    @Input() projectList: Project[];
    @Output() addProject: EventEmitter<Project> = new EventEmitter<Project>();
    @Output() goDetailProject: EventEmitter<Project> = new EventEmitter<Project>();

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private appConfig: AppConfig
    ) { }

    ngOnInit() {
        this.buildForm();
    }

    closeModal() {
        this.modal.close();
    }

    openModal() {
        this.modal.open();
        // document.querySelector('.modal-backdrop').classList.remove('modal-backdrop');
    }

    buildForm() {
        this.form = this.fb.group({
            nameProject: [ '', Validators.required ],
            descProject: [ '' ]
        });
    }

    /**
     * Add control desciption if user want to describe more
     */
    addDesc() {
        this.isShowDesc = !this.isShowDesc;
    }

    onAddProject() {
        if (!this.form.valid) {
            return;
        }
        this.addProject.emit(this.form.value);
        this.closeModal();
    }

    ngOnDestroy() {
    }

    onGoDetailProject(project: Project) {
        this.router.navigate([ this.appConfig.ROUTES.PROJECT, project.id, project.nameProject ]);
    }

}
