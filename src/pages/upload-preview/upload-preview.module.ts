import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UploadPreviewPage } from './upload-preview';

@NgModule({
  declarations: [
    UploadPreviewPage,
  ],
  imports: [
    IonicPageModule.forChild(UploadPreviewPage),
  ],
})
export class UploadPreviewPageModule {}
