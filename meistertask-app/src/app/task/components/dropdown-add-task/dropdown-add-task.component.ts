import {
    Component,
    OnInit,
    ViewChild,
    ChangeDetectionStrategy
} from '@angular/core';

import { Dropdown } from 'ngx-dropdown';

@Component({
    selector: 'dropdown-add-task',
    templateUrl: './dropdown-add-task.component.html',
    styleUrls: [ './dropdown-add-task.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownAddTaskComponent implements OnInit {
    @ViewChild(Dropdown) dropdown: Dropdown;

    constructor() { }

    ngOnInit() {
    }

}
