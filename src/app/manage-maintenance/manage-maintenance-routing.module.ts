import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddMaintenanceComponent} from './add-maintenance/add-maintenance.component';
import {ListMaintenanceComponent} from './list-maintenance/maintenance.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'add',
        component: AddMaintenanceComponent
      },
      {
        path: 'list',
        component: ListMaintenanceComponent
      },
      {
        path: 'edit/:employeId',
        component: AddMaintenanceComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageMaintenanceRoutingModule {
}
