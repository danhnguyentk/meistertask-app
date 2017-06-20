import {
    Component,
    OnInit,
    ChangeDetectionStrategy
} from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppState } from '../../interface';
import { getAuthUser } from '../../auth/selectors/auth.selectors';
import { User } from '../../auth/models/user';
import { AuthActions } from '../../auth/actions/auth.actions';
import { AppConfig } from '../../core/shared/services/app-config.service';

@Component({
    selector: 'main-header',
    templateUrl: './main-header.component.html',
    styleUrls: [ './main-header.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainHeaderComponent implements OnInit {
    user$: Observable<User>;

    constructor(
        private store: Store<AppState>,
        private authActions: AuthActions,
        private router: Router,
        private appConfig: AppConfig
    ) { }

    ngOnInit() {
        this.user$ = this.store.select(getAuthUser);
    }

    onLogout() {
        this.router.navigateByUrl(this.appConfig.ROUTES.LOGGED_OUT);
        this.store.dispatch(this.authActions.logout());
    }

}
