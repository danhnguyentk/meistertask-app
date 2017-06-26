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

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AuthService } from './services/auth.service';
import { CustomValidator } from '../core/common/services/custom-validator.service';
import { AppState } from '../interface';
import { AuthActions } from './actions/auth.actions';
import { User } from './models/user';
import { ErrorMessage } from '../core/form/models/error-message.model';
import { AppConfig } from '../core/common/services/app-config.service';
import { getAuthStatus } from './selectors/auth.selectors';
import { getErrorSignup } from '../core/form/selectors/error.selectors';

@Component({
    selector: 'signup',
    templateUrl: './signup.component.html',
    styleUrls: [ './signup.component.scss' ]
})
export class SignupComponent implements OnInit {
    form: FormGroup;
    errorMessage$: Observable<ErrorMessage>;

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
        this.errorMessage$ = this.store.select(getErrorSignup);
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
            passwords: this.fb.group({
                password: [ '', Validators.required ],
                confirmPassword: [ '', Validators.required ]
            }, { validator: this.customValidator.matchConfirmPassword('password', 'confirmPassword') })
        });
    }

    signup() {
        if (!this.form.valid) {
            return;
        }
        const userPass: User = {
            workName: this.form.get('workName').value,
            email: this.form.get('email').value,
            password: this.form.get('passwords.password').value
        };
        this.store.dispatch(this.authActions.signup(userPass));
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
