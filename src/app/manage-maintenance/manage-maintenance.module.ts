import {NgModule} from '@angular/core';

import {ManageMaintenanceRoutingModule} from './manage-maintenance-routing.module';
import {AddMaintenanceComponent} from './add-maintenance/add-maintenance.component';
import {ListMaintenanceComponent} from './list-maintenance/list-maintenance.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [AddMaintenanceComponent, ListMaintenanceComponent],
  imports: [
    ManageMaintenanceRoutingModule,
    SharedModule
  ]
})
export class ManageMaintenanceModule {
}
