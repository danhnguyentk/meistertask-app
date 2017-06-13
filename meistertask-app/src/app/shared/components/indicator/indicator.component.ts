import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    Input
} from '@angular/core';

@Component({
    selector: 'indicator',
    templateUrl: './indicator.component.html',
    styleUrls: [ './indicator.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndicatorComponent implements OnInit {
    @Input() show: boolean;

    constructor() { }

    ngOnInit() {
    }

}
