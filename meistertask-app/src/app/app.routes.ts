import { Routes } from '@angular/router';

import { ROUTES as homeRoutes} from './home/home.routes';
import { PrimaryLayoutComponent } from './shared/components/primary-layout/primary-layout.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: PrimaryLayoutComponent,
        children: [
            ...homeRoutes
        ]
    }
];
