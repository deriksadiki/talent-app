import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FirebaseProvider } from '../../providers/firebase/firebase';



@IonicPage()
@Component({
  selector: 'page-upload-preview',
  templateUrl: 'upload-preview.html',
})
export class UploadPreviewPage {
  videos = [];
  videos2 =  this.navParams.get('vid');
  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController,private firebaseService:FirebaseProvider) {
  }

  ionViewDidLoad() {
    this.videos.push(this.videos2);
    console.log(this.videos2);
  }

  close(){
    this.view.dismiss();
  }
 
}
