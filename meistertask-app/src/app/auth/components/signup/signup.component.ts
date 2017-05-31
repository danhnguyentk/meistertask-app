import {
    Component,
    OnInit
} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';

import { CustomValidator } from '../../../core/custom-validator.service';

@Component({
    selector: 'signup',
    templateUrl: './signup.component.html',
    styleUrls: [ './signup.component.scss' ]
})
export class SignupComponent implements OnInit {
    form: FormGroup;

    constructor(
        private fb: FormBuilder,
        private customValidator: CustomValidator
    ) { }

    ngOnInit() {
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

}
