import {NgModule} from '@angular/core';
import {FullLayoutComponent} from './full-layout.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [FullLayoutComponent],
  imports: [
    RouterModule,
    SharedModule
  ]
})
export class LayoutsModule {
}
