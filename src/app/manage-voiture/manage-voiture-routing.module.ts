import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddVoitureComponent} from './add-voiture/add-voiture.component';
import {ListVoitureComponent} from './list-voiture/list-voiture.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'add',
        component: AddVoitureComponent
      },
      {
        path: 'list',
        component: ListVoitureComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageVoitureRoutingModule {
}
