import { Routes } from '@angular/router';

import { ProjectComponent } from './project.component';
import { AuthPrivatePageGuard } from '../auth/guards/auth-private-page.guard';

export const ROUTES: Routes = [
    {
        path: '',
        children: [
            {
                path: 'app/project/:id/:nameProject',
                component: ProjectComponent,
                canActivate: [ AuthPrivatePageGuard ]
            }
        ]
    }
];
