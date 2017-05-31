import {
    Component,
    OnInit ,
    Input
} from '@angular/core';
import { FormControl } from '@angular/forms';

import * as _ from 'lodash';

import { ValidationMessage } from '../../../core/validation-message.service';

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

    get errorMessage() {
        let error: string = '';
        _.forOwn(this.control.errors, (value, key) => {
            if (this.control.touched) {
                error += this.validationMessage.getValidatorMessage(this.control, this.nameControl, key);
            }
        });
        return error;
    }

}
