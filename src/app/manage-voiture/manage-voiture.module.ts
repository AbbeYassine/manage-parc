import {NgModule} from '@angular/core';
import {AddVoitureComponent} from './add-voiture/add-voiture.component';
import {ListVoitureComponent} from './list-voiture/list-voiture.component';
import {SharedModule} from '../shared/shared.module';
import {ManageVoitureRoutingModule} from './manage-voiture-routing.module';

@NgModule({
  declarations: [AddVoitureComponent, ListVoitureComponent],
  imports: [
    ManageVoitureRoutingModule,
    SharedModule
  ]
})
export class ManageVoitureModule {
}
