import {
    Component,
    OnInit,
    Output,
    EventEmitter,
    ViewChild,
    Input
} from '@angular/core';

import { Modal } from 'ngx-modal';

@Component({
    selector: 'confirm-modal',
    templateUrl: './confirm-modal.component.html',
    styleUrls: [ './confirm-modal.component.scss' ]
})
export class ConfirmModalComponent implements OnInit {
    data: any;
    @ViewChild(Modal) modal: Modal;
    @Input() message: string;
    @Output() accept: EventEmitter<any> = new EventEmitter<any>();
    @Output() cancel: EventEmitter<any> = new EventEmitter<any>();

    constructor() { }

    ngOnInit() {
    }

    acceptRequest() {
        this.accept.emit(this.data);
        this.modal.close();
    }

    cancelRequest() {
        this.cancel.emit(null);
        this.modal.close();
    }

    /**
     * Open and pass data to modal
     */
    openModal(data: any) {
        this.data = data;
        this.modal.open();
    }

}
