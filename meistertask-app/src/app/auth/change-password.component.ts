import {
    Component,
    OnInit
} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AuthService } from './services/auth.service';
import { CustomValidator } from '../core/common/services/custom-validator.service';
import { AppState } from '../interface';
import { AuthActions } from './actions/auth.actions';
import { User } from './models/user';
import { Passwords } from './models/passwords.model';
import { ErrorMessage } from '../core/form/models/error-message.model';
import { AppConfig } from '../core/common/services/app-config.service';
import {
    getAuthStatus,
    getAuthUser
} from './selectors/auth.selectors';
import {
    getErrorChangePassword,
    getMessageChangePasswordSuccess
} from '../core/form/selectors/error.selectors';

@Component({
    selector: 'change-password',
    templateUrl: './change-password.component.html',
    styleUrls: [ './change-password.component.scss' ]
})
export class ChangePasswordComponent implements OnInit {

    form: FormGroup;
    errorMessage$: Observable<ErrorMessage>;
    successMessage$: Observable<string>;
    user$: Observable<User>;

    constructor(
        private store: Store<AppState>,
        private authActions: AuthActions,
        private fb: FormBuilder,
        private router: Router,
        private customValidator: CustomValidator,
        private authService: AuthService,
        private appConfig: AppConfig
    ) { }

    ngOnInit() {
        this.errorMessage$ = this.store.select(getErrorChangePassword);
        this.successMessage$ = this.store.select(getMessageChangePasswordSuccess);
        this.user$ = this.store.select(getAuthUser);
        this.redirectPage();
        this.buildForm();
    }

    buildForm() {
        this.form = this.fb.group({
            oldPassword: [ '', Validators.required ],
            newPassword: [ '', Validators.required ],
            confirmPassword: [ '', Validators.required ]
        }, { validator: this.customValidator.validateChangePassword('oldPassword', 'newPassword', 'confirmPassword') });
    }

    changePassword() {
        if (!this.form.valid) {
            return;
        }
        const password: Passwords = {
            oldPassword: this.form.get('oldPassword').value,
            newPassword: this.form.get('newPassword').value
        };
        this.store.dispatch(this.authActions.changePassword(password));
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
