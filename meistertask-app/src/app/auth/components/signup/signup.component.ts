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

import { AuthService } from '../../services/auth.service';
import { CustomValidator } from '../../../core/shared/services/custom-validator.service';
import { AppState } from '../../../interface';
import { AuthActions } from '../../actions/auth.actions';
import { User } from '../../models/user';
import { ErrorMessage } from '../../../core/shared/models/error-message.model';
import { AppConfig } from '../../../core/shared/services/app-config.service';
import {
    getAuthStatus,
    getAuthErrorMessage,
    getAuthUser
} from '../../selectors/auth.selectors';

@Component({
    selector: 'signup',
    templateUrl: './signup.component.html',
    styleUrls: [ './signup.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent implements OnInit {
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
        private appConfig: AppConfig
    ) { }

    ngOnInit() {
        this.errorMessage$ = this.store.select(getAuthErrorMessage);
        this.user$ = this.store.select(getAuthUser);
        this.redirectPage();
        this.buildForm();
    }

    buildForm() {
        this.form = this.fb.group({
            workName: [ '', Validators.required ],
            email: [ '', [
                Validators.required,
                this.customValidator.validateEmail()
            ]],
            password: [ '', Validators.required ]
        });
    }

    signup() {
        if (!this.form.valid) {
            return;
        }
        this.store.dispatch(this.authActions.signup(this.form.value));
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
