import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddMissionComponent} from './add-mission/add-mission.component';
import {ListMissionComponent} from './list-mission/list-mission.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'add',
        component: AddMissionComponent
      },
      {
        path: 'list',
        component: ListMissionComponent
      },
      {
        path: 'edit/:employeId',
        component: AddMissionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageMissionRoutingModule {
}
