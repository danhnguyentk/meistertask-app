import {
    Component,
    OnInit,
    ChangeDetectionStrategy
} from '@angular/core';
import {
    Router,
    NavigationStart
} from '@angular/router';

import { Store } from '@ngrx/store';

import { ErrorActions } from './shared/actions/error.actions';
import { getErrorLogin} from './shared/reducers/error.selectors';
import { AppState } from './interface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
    constructor(
        private router: Router,
        private store: Store<AppState>,
        private errorActions: ErrorActions) {

    }

    ngOnInit() {
        this.router.events
            .filter((event: any) => event instanceof NavigationStart)
            .subscribe(() => {
                this.store.dispatch(this.errorActions.resetError());
            });
    }


}
