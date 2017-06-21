import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { AuthPublicPageGuard } from '../auth/guards/auth-public-page.guard';

export const ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [ AuthPublicPageGuard ]
    }
];
