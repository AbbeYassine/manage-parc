import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddEmployeComponent} from './add-employe/add-employe.component';
import {ListEmployeComponent} from './list-employe/list-employe.component';


const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: 'add',
        component: AddEmployeComponent
      },
      {
        path: 'list',
        component: ListEmployeComponent
      },
      {
        path: 'edit/:employeId',
        component: AddEmployeComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageEmployeRoutingModule { }
