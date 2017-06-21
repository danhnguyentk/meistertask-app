import { NgModule } from '@angular/core';
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { FormModule } from '../core/form/form.module';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';
import { AuthService } from './services/auth.service';
import { AuthEffects } from './effects/auth.effects';
import { AuthActions } from './actions/auth.actions';
import { LoggedOutComponent } from './components/logged-out/logged-out.component';
import { AuthPublicPageGuard } from './guards/auth-public-page.guard';
import { AuthPrivatePageGuard } from './guards/auth-private-page.guard';
import { DropdownUserComponent } from './components/dropdown-user/dropdown-user.component';

const MODULES = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.run(AuthEffects),
    FormModule
];

const COMPONENTS = [
    LoginComponent,
    SignupComponent,
    LoggedOutComponent,
    DropdownUserComponent
];

const SERVICES = [
    AuthService,
    AuthActions,
    AuthPublicPageGuard,
    AuthPrivatePageGuard
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
