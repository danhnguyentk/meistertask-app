import {
    Component,
    OnInit
} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';

import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AuthService } from '../../services/auth.service';
import { CustomValidator } from '../../../core/custom-validator.service';
import { AppState } from '../../../interface';
import { AuthActions } from '../../store/auth.actions';
import { User } from '../../models/user.model';
import { ErrorMessage } from '../../../shared/models/error-message.model';

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
        private customValidator: CustomValidator,
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.errorMessage$ = this.store.select((state: AppState) => {
            console.log(state);
            return state.auth.errorMessage;
        });
        this.buildForm();
    }

    buildForm() {
        this.form = this.fb.group({
            name: [ '', Validators.required ],
            workEmail: [ '', [
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
        const user: User = _.assignIn({}, this.form.value, { id: new Date().valueOf() });
        this.store.dispatch(this.authActions.signup(user));
    }

}
