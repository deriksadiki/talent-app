import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScoutPage } from './scout';

@NgModule({
  declarations: [
    ScoutPage,
  ],
  imports: [
    IonicPageModule.forChild(ScoutPage),
  ],
})
export class ScoutPageModule {}
