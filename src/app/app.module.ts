import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {LayoutsModule} from './layouts/layouts.module';
import {ManageUserModule} from './manage-user/manage-user.module';
import {ManageVoitureModule} from './manage-voiture/manage-voiture.module';
import {VoitureService} from './shared/services/voiture.service';
import {HttpClientModule} from '@angular/common/http';
import {ManageEmployeModule} from './manage-employe/manage-employe.module';
import {EmployeService} from './shared/services/employe.service';
import {MissionService} from './shared/services/mission.service';
import {MaintenanceService} from './shared/services/maintenance.service';
import {ManageMaintenanceModule} from './manage-maintenance/manage-maintenance.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    LayoutsModule,
    HttpClientModule,
    ManageUserModule,
    ManageVoitureModule,
    ManageEmployeModule,
    ManageMaintenanceModule,
    BrowserModule,
  ],
  providers: [VoitureService, EmployeService, MissionService, MaintenanceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
