import {
    Component,
    OnInit,
    Input,
    ChangeDetectionStrategy
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'input-wrapper',
    templateUrl: './input-wrapper.component.html',
    styleUrls: [ './input-wrapper.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputWrapperComponent implements OnInit {
    @Input() label: string;
    @Input() control: FormControl;
    @Input() nameControl: string;

    constructor() { }

    ngOnInit() {
    }
}
