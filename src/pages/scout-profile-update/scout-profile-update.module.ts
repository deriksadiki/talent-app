import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScoutProfileUpdatePage } from './scout-profile-update';

@NgModule({
  declarations: [
    ScoutProfileUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(ScoutProfileUpdatePage),
  ],
})
export class ScoutProfileUpdatePageModule {}
