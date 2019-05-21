import {NgModule} from '@angular/core';
import {FullLayoutComponent} from './layouts/full-layout.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthPageComponent} from './manage-user/auth-page/auth-page.component';
import {ManageUserModule} from './manage-user/manage-user.module';
import {ManageVoitureModule} from './manage-voiture/manage-voiture.module';



export function loadManageUserModule() {
  return ManageUserModule;
}

export function loadManageVoitureModule() {
  return ManageVoitureModule;
}



export const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    canActivate: [],
    children: [
      {
        path: 'manage-voiture',
        loadChildren: loadManageVoitureModule
      },
      /*{
        path: 'manage-voiture',
        loadChildren: loadManageVoitureModule
      }*/
    ],
  },
  {
    path: 'auth',
    loadChildren: loadManageUserModule
  },
  {
    path: 'admin/auth',
    component: AuthPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
