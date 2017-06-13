import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppState } from '../../../interface';
import { getAuthUser } from '../../../auth/selectors/auth.selectors';
import { User } from '../../../auth/models/user';
import { AuthActions } from '../../../auth/actions/auth.actions';
import { AppConfig } from '../../../core/app-config.service';

@Component({
    selector: 'navbar-auth',
    templateUrl: './navbar-auth.component.html',
    styleUrls: [ './navbar-auth.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarAuthComponent implements OnInit {
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
