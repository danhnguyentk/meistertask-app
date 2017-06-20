import {
    Component,
    OnInit,
    ChangeDetectionStrategy
} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';
import { Router } from '@angular/router';

import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AuthService } from './services/auth.service';
import { CustomValidator } from '../core/shared/services/custom-validator.service';
import { AppState } from '../interface';
import { AuthActions } from './actions/auth.actions';
import { User } from './models/user';
import { ErrorMessage } from '../core/form/models/error-message.model';
import { AppConfig } from '../core/shared/services/app-config.service';
import {
    getAuthStatus,
    getAuthUser
} from './selectors/auth.selectors';
import { ErrorActions } from '../core/form/actions/error.actions';
import { getErrorLogin } from '../core/form/selectors/error.selectors';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
    form: FormGroup;
    errorMessage$: Observable<ErrorMessage>;
    user$: Observable<User>;

    constructor(
        private store: Store<AppState>,
        private authActions: AuthActions,
        private fb: FormBuilder,
        private router: Router,
        private customValidator: CustomValidator,
        private authService: AuthService,
        private appConfig: AppConfig,
        private errorActions: ErrorActions
    ) { }

    ngOnInit() {
        this.errorMessage$ = this.store.select(getErrorLogin);
        this.user$ = this.store.select(getAuthUser);
        this.redirectPage();
        this.buildForm();
    }

    buildForm() {
        this.form = this.fb.group({
            email: [ '', [
                Validators.required,
                this.customValidator.validateEmail()
            ]],
            password: [ '', Validators.required ]
        });
    }

    login() {
        if (!this.form.valid) {
            return;
        }
        const user: User = _.assignIn({}, this.form.value);
        this.store.dispatch(this.authActions.login(user));
    }

    /**
     * Redirect page if user logged in
     */
    redirectPage() {
        this.store.select(getAuthStatus)
            .subscribe((isAuthenticated: boolean) => {
                if (isAuthenticated) {
                    this.router.navigateByUrl(this.appConfig.ROUTES.DASHBOARD);
                }
            });
    }

}
