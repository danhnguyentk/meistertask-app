import {
    Component,
    OnInit,
    Input,
    ChangeDetectionStrategy
} from '@angular/core';

import { ErrorMessage } from '../../models/error-message.model';

@Component({
    selector: 'error-message',
    templateUrl: './error-message.component.html',
    styleUrls: [ './error-message.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorMessageComponent implements OnInit {
    @Input() message: ErrorMessage;

    constructor() { }

    ngOnInit() {
    }

}
