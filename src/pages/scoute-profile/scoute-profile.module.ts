import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScouteProfilePage } from './scoute-profile';

@NgModule({
  declarations: [
    ScouteProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ScouteProfilePage),
  ],
})
export class ScouteProfilePageModule {}
