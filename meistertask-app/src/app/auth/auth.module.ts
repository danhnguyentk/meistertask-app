import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthEffects } from './store/auth.effects';
import { AuthActions } from './store/auth.actions';

const COMPONENTS = [
    LoginComponent,
    SignupComponent
];

const SERVICES = [
    AuthService,
    AuthGuardService,
    AuthActions
];

@NgModule({
    imports: [
        EffectsModule.run(AuthEffects),
        SharedModule
    ],
    declarations: [
        ...COMPONENTS
    ],
    providers: [
        ...SERVICES
    ],
    exports: [
        ...COMPONENTS
    ]
})
export class AuthModule { }
