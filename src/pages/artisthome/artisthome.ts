import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';

@IonicPage()
@Component({
  selector: 'page-artisthome',
  templateUrl: 'artisthome.html',
})
export class ArtisthomePage {
videos = new Array();
  constructor(public navCtrl: NavController, public navParams: NavParams,private firebaseService:FirebaseProvider) {
  }

  ionViewDidLoad() {
   this.firebaseService.getAllvideos().then((data:any) =>{
     this.videos = data;
     console.log(this.videos);
   });

  }

}
