import { Injectable } from '@angular/core';
import {
    FormControl,
    FormGroup,
    FormArray,
    ValidatorFn
} from '@angular/forms';

import * as _ from 'lodash';

import { AppConfig } from './app-config.service';
import { Logger } from './logger.service';

interface HeighBody {
    part: string;
    percentageHeight: number;
}

@Injectable()
export class CustomValidator {

    constructor(
        private appConfig: AppConfig,
        private logger: Logger) { }

    validatePattern (input: FormControl, regExp: RegExp, key: string) {
        if (!input.value || regExp.test(input.value)) {
            return null;
        } else {
            return {
                [key]: {
                    valid: false
                }
            };
        }
    }

    validateEmail() {
        return (input: FormControl) => {
            const regExp: RegExp = this.appConfig.VALIDATIONS.EMAIL_PATTERN;
            const validateKey: string = this.appConfig.VALIDATION_KEY.EMAIL;
            return this.validatePattern(input, regExp, validateKey);
        };
    }

    validatePercentage(): ValidatorFn {
        return (formArray: FormArray) => {
            this.logger.info('Form array with error:', formArray.errors);
            const heightBodys = formArray.value;
            const totalPercentage: number = _.reduce(heightBodys, (sum: number, value: HeighBody) => {
                return sum + +value.percentageHeight;
            }, 0);
            this.logger.info('Sum percentage:', totalPercentage);
            if (totalPercentage !== 100) {
                _.forEach(formArray.controls, (formGroup: FormGroup) => {
                    let control: FormControl = formGroup.get('percentageHeight') as FormControl;
                    const error: any = _.assignIn({}, control.errors, { percentage: true });
                    control.setErrors(error);
                });
            } else {
                _.forEach(formArray.controls, (formGroup: FormGroup) => {
                    formGroup.get('percentageHeight').setErrors(null);
                });
            }
            return null;
        };
    }

    /**
     * Sing up with create password
     */
    matchConfirmPassword(keyPassword: string, keyConfirmPassword: string): ValidatorFn {
        return (formGroup: FormGroup) => {
            this.logger.info('Value form group password: ', formGroup);
            let password: FormControl = formGroup.get(keyPassword) as FormControl;
            let confirmPassword: FormControl = formGroup.get(keyConfirmPassword) as FormControl;
            if (formGroup.touched) {
                if (password.value !== confirmPassword.value && confirmPassword.value) {
                    const error: any = _.assignIn({}, confirmPassword.errors, { invalidConfirmPassword: true });
                    confirmPassword.setErrors(error);
                }
            }
            return null;
        };
    }

    /**
     * Validate form control of form change password
     */
    validateChangePassword(keyOldPassword: string, keyNewPassword: string, keyConfirmPassword: string): ValidatorFn {
        return (formGroup: FormGroup) => {
            let oldPassword: FormControl = formGroup.get(keyOldPassword) as FormControl;
            let newPassword: FormControl = formGroup.get(keyNewPassword) as FormControl;
            let confirmPassword: FormControl = formGroup.get(keyConfirmPassword) as FormControl;
            this.logger.info('Touch', formGroup.touched);
            if (formGroup.touched) {
                if (oldPassword.value === newPassword.value && newPassword.value) {
                    const error: any = _.assignIn({}, newPassword.errors, { invalidNewPassword: true });
                    this.logger.info('Error new password:', error);
                    newPassword.setErrors(error);
                }
                if (newPassword.value !== confirmPassword.value && confirmPassword.value) {
                    const error: any = _.assignIn({}, confirmPassword.errors, { invalidConfirmPassword: true });
                    confirmPassword.setErrors(error);
                }
            }
            return null;
        };
    }

}
