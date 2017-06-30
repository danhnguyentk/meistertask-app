import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';
import { DropdownModule } from 'ngx-dropdown';

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
import { PersonalComponent } from './personal.component';
import { ChangePasswordComponent } from './change-password.component';
import { HeightPercentageControlComponent } from './components/height-percentage-control/height-percentage-control.component';
import { PartBodyGroupComponent } from './components/part-body-group/part-body-group.component';
import { TextRangeControlComponent } from './components/text-range-control/text-range-control.component';
import { ErrorTooltipComponent } from './components/error-tooltip/error-tooltip.component';

const MODULES = [
    CommonModule,
    EffectsModule.run(AuthEffects),
    FormModule,
    DropdownModule,
    RouterModule
];

const COMPONENTS = [
    LoginComponent,
    SignupComponent,
    LoggedOutComponent,
    DropdownUserComponent,
    PersonalComponent,
    ChangePasswordComponent,
    HeightPercentageControlComponent,
    PartBodyGroupComponent,
    TextRangeControlComponent,
    ErrorTooltipComponent
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
