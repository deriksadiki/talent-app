import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArtistProfileUpdatePage } from './artist-profile-update';

@NgModule({
  declarations: [
    ArtistProfileUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(ArtistProfileUpdatePage),
  ],
})
export class ArtistProfileUpdatePageModule {}
