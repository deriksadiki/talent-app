import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeeMessagesPage } from './see-messages';

@NgModule({
  declarations: [
    SeeMessagesPage,
  ],
  imports: [
    IonicPageModule.forChild(SeeMessagesPage),
  ],
})
export class SeeMessagesPageModule {}
