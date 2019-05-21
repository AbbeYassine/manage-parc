import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {AddEmployeComponent} from './add-employe/add-employe.component';
import {ManageEmployeRoutingModule} from './manage-employe-routing.module';
import {ListEmployeComponent} from './list-employe/list-employe.component';


@NgModule({
  declarations: [AddEmployeComponent, ListEmployeComponent],
  imports: [
    ManageEmployeRoutingModule,
    SharedModule
  ]
})
export class ManageEmployeModule {
}
