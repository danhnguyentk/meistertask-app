import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable()
export class CustomValidatorService {

    constructor() { }

    // FIX ME
    containNameValidator(name: string): Function {
        return (input: FormControl): { containName: { requiredName: string, actualName: string }} => {
            if (!input.value || input.value.includes(name)) {
                return null;
            } else {
                return {
                    containName: {
                        requiredName: name,
                        actualName: input.value
                    }
                };
            }
        };
    }

}
