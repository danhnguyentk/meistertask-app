import {
    Component,
    OnInit,
    Input
} from '@angular/core';
import { FormControl } from '@angular/forms';

import * as _ from 'lodash';

import { ValidationMessage } from '../../../../core/common/services/validation-message.service';

@Component({
    selector: 'control-message',
    templateUrl: './control-message.component.html',
    styleUrls: [ './control-message.component.scss' ]
})
export class ControlMessageComponent implements OnInit {
    @Input() control: FormControl;
    @Input() nameControl: string;

    constructor(private validationMessage: ValidationMessage) { }

    ngOnInit() {
    }

    get errorMessage(): string {
        let error: string = '';
        if (this.control.touched) {
            _.forOwn(this.control.errors, (value, key) => {
                error = this.validationMessage.getValidatorMessage(this.control, this.nameControl, key);
                return;
            });
        }
        return error;
    }

}
