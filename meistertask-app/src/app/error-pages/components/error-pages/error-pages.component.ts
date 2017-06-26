import {
    Component,
    OnInit,
    ChangeDetectionStrategy
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'error-pages',
    templateUrl: './error-pages.component.html',
    styleUrls: [ './error-pages.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorPagesComponent implements OnInit {
    type: string;
    message: string;
    warning: string;
    backHome: boolean;

    constructor(
        private activatedRoute: ActivatedRoute,
        private location: Location) { }

    ngOnInit() {
        this.type = this.activatedRoute.snapshot.data['type'];
        this.message = this.activatedRoute.snapshot.data['message'];
        this.warning = this.activatedRoute.snapshot.data['warning'];
        this.backHome = this.activatedRoute.snapshot.data['backHome'];
    }

    goBack() {
        this.location.back();
    }

}
