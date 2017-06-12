import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter
} from '@angular/core';

import { User } from '../../../auth/models/user';

@Component({
  selector: 'dropdown-user',
  templateUrl: './dropdown-user.component.html',
  styleUrls: [ './dropdown-user.component.scss' ]
})
export class DropdownUserComponent implements OnInit {
    @Input() user: User;
    @Output() logout: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    onLogout() {
        this.logout.emit();
    }

}
