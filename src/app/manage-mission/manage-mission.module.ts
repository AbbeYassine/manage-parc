import {NgModule} from '@angular/core';

import {ManageMissionRoutingModule} from './manage-mission-routing.module';
import {AddMissionComponent} from './add-mission/add-mission.component';
import {ListMissionComponent} from './list-mission/list-mission.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [AddMissionComponent, ListMissionComponent],
  imports: [
    ManageMissionRoutingModule,
    SharedModule
  ]
})
export class ManageMissionModule {
}
