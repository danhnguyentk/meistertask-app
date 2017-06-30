import {
    Component,
    OnInit ,
    ChangeDetectionStrategy,
    HostBinding,
    Input
} from '@angular/core';

@Component({
  selector: 'error-tooltip',
  templateUrl: './error-tooltip.component.html',
  styleUrls: ['./error-tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorTooltipComponent implements OnInit {

    @Input() message: string;

    @HostBinding('class.error-tooltip') isAddDefaultClass: boolean = true;

    constructor() { }

    ngOnInit() {
    }

}
