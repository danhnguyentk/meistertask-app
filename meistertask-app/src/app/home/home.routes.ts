import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { AuthGuard } from '../auth/guards/auth.guard';

export const ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [ AuthGuard ]
    }
];
