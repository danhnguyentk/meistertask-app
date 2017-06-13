import {
    Component,
    OnInit,
    ChangeDetectionStrategy
} from '@angular/core';

@Component({
    selector: 'secondary-layout',
    templateUrl: './secondary-layout.component.html',
    styleUrls: [ './secondary-layout.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecondaryLayoutComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
