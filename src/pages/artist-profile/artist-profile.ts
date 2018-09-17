import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';




@IonicPage()
@Component({
  selector: 'page-artist-profile',
  templateUrl: 'artist-profile.html',
})
export class ArtistProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController,private firebaseService:FirebaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArtistProfilePage');
    }

  close(){
    this.view.dismiss();
  }

}
