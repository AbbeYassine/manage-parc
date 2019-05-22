import {NgModule} from '@angular/core';

import {AddMaintenanceComponent} from './add-maintenance/add-maintenance.component';
import {SharedModule} from '../shared/shared.module';
import {ListMaintenanceComponent} from './list-maintenance/maintenance.component';
import {ManageMaintenanceRoutingModule} from './manage-maintenance-routing.module';

@NgModule({
  declarations: [AddMaintenanceComponent, ListMaintenanceComponent],
  imports: [
    ManageMaintenanceRoutingModule,
    SharedModule
  ]
})
export class ManageMaintenanceModule {
}
