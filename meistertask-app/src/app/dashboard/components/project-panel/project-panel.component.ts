import {
    Component,
    OnInit,
    ViewChild,
    OnDestroy
} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Modal } from 'ngx-modal';
import { Store } from '@ngrx/store';

import { AppState } from '../../../interface';
import { ProjectListActions } from '../../actions/project-list.actions';
import {
    getProjectList,
    getErrorMessage
} from '../../reducers/project-list.selector';
import { Project } from '../../models/project';
import { ErrorMessage } from '../../../shared/models/error-message.model';
import { AppConfig } from '../../../core/app-config.service';

@Component({
    selector: 'project-panel',
    templateUrl: './project-panel.component.html',
    styleUrls: [ './project-panel.component.scss' ]
})
export class ProjectPanelComponent implements OnInit, OnDestroy {
    @ViewChild(Modal) modal: Modal;
    form: FormGroup;
    isShowDesc: boolean = false;
    projectList: Project[];
    projectList$: Subscription;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private store: Store<AppState>,
        private projectActions: ProjectListActions,
        private appConfig: AppConfig
    ) { }

    ngOnInit() {
        this.buildForm();
        this.getProjectList();
        this.projectList$ = this.store.select(getProjectList).subscribe((projectList: Project[]) => {
            this.projectList = projectList;
        });
    }

    closeModal() {
        this.modal.close();
    }

    openModal() {
        this.modal.open();
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

    createProject() {
        if (!this.form.valid) {
            return;
        }
        this.store.dispatch(this.projectActions.createProject(this.form.value));
        // Fix me
        this.store.select(getErrorMessage)
            .subscribe((errorMessage: ErrorMessage) => {
                if (!errorMessage) {
                    this.closeModal();
                }
            });
    }

    getProjectList() {
        this.store.dispatch(this.projectActions.getProjectList());
    }

    ngOnDestroy() {
        this.projectList$.unsubscribe();
    }

    goDetailProject(project: Project) {
        this.router.navigate([ this.appConfig.ROUTES.PROJECT, project.id, project.nameProject ]);
    }
}
