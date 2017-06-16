import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../core/shared/shared.module';
import { FormModule } from '../core/form/form.module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthService } from './services/auth.service';
import { AuthEffects } from './effects/auth.effects';
import { AuthActions } from './actions/auth.actions';
import { LoggedOutComponent } from './components/logged-out/logged-out.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthRequiredPageGuard } from './guards/auth-required-page.guard';

const MODULES = [
    EffectsModule.run(AuthEffects),
    SharedModule,
    FormModule
];

const COMPONENTS = [
    LoginComponent,
    SignupComponent,
    LoggedOutComponent
];

const SERVICES = [
    AuthService,
    AuthActions,
    AuthGuard,
    AuthRequiredPageGuard
];

@NgModule({
    imports: [
        ...MODULES
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
