import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-upload-preview',
  templateUrl: 'upload-preview.html',
})
export class UploadPreviewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadPreviewPage');
  }

  close=function(){
    this.view.dismiss();
  }

}
