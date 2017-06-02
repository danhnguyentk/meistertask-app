import {
    Component,
    OnInit,
    ViewChild
} from '@angular/core';

import { Modal } from 'ngx-modal';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
    @ViewChild(Modal) modal:Modal;

    constructor() { }

    ngOnInit() {
    }

    closeModal() {
        this.modal.close();
    }

    openModal() {
        this.modal.open();
    }

}
