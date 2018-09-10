import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArtisthomePage } from './artisthome';

@NgModule({
  declarations: [
    ArtisthomePage,
  ],
  imports: [
    IonicPageModule.forChild(ArtisthomePage),
  ],
})
export class ArtisthomePageModule {}
