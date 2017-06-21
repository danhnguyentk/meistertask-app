import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    Input
} from '@angular/core';

@Component({
    selector: 'loading-indicator',
    templateUrl: './loading-indicator.component.html',
    styleUrls: [ './loading-indicator.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingIndicatorComponent implements OnInit {
    @Input() show: boolean;

    constructor() { }

    ngOnInit() {
    }

}
