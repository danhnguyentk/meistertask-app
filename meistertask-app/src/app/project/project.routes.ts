import { Routes } from '@angular/router';

import { ProjectComponent } from './project.component';
import { AuthRequiredPageGuard } from '../auth/guards/auth-required-page.guard';

export const ROUTES: Routes = [
    {
        path: '',
        children: [
            {
                path: 'app/project/:id/:nameProject',
                component: ProjectComponent,
                canActivate: [ AuthRequiredPageGuard ]
            }
        ]
    }
];
