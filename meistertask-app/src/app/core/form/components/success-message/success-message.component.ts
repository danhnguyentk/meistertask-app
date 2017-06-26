import {
    Component,
    OnInit,
    Input } from '@angular/core';

@Component({
    selector: 'success-message',
    templateUrl: './success-message.component.html',
    styleUrls: [ './success-message.component.scss' ]
})
export class SuccessMessageComponent implements OnInit {
    @Input() message: string;

    constructor() { }

    ngOnInit() {
    }

}
