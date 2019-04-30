import {NgModule} from '@angular/core';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {SharedModule} from '../shared/shared.module';
import {AuthPageComponent} from './auth-page/auth-page.component';
import {ManageUserRoutingModule} from './manage-user-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthPageComponent
  ],
  imports: [
    ManageUserRoutingModule,
    SharedModule
  ]
})
export class ManageUserModule {
}
