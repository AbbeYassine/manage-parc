import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {LayoutsModule} from './layouts/layouts.module';
import {ManageUserModule} from './manage-user/manage-user.module';
import {ManageVoitureModule} from './manage-voiture/manage-voiture.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    LayoutsModule,
    ManageUserModule,
    ManageVoitureModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
