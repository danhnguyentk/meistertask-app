import {
    Component,
    OnInit,
    Input
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'input-wrapper',
    templateUrl: './input-wrapper.component.html',
    styleUrls: [ './input-wrapper.component.scss' ]
})
export class InputWrapperComponent implements OnInit {
    @Input() label: string;
    @Input() control: FormControl;
    @Input() nameControl: string;

    constructor() { }

    ngOnInit() {
    }
}
