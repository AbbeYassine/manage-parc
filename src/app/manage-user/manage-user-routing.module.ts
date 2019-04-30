import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthPageComponent} from './auth-page/auth-page.component';
import {RegisterComponent} from './register/register.component';

export const routes: Routes = [
    {
        path: '',
        component: AuthPageComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'admin',
                component: RegisterComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManageUserRoutingModule {
}
