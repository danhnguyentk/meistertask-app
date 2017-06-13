import {
    Component,
    OnInit,
    ChangeDetectionStrategy
} from '@angular/core';

@Component({
    selector: 'primary-layout',
    templateUrl: './primary-layout.component.html',
    styleUrls: [ './primary-layout.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrimaryLayoutComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
