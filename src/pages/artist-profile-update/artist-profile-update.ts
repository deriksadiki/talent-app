import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FirebaseProvider}  from '../../providers/firebase/firebase'

/**
 * Generated class for the ArtistProfileUpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-artist-profile-update',
  templateUrl: 'artist-profile-update.html',
})
export class ArtistProfileUpdatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public firebaseService: FirebaseProvider) {
    this.firebaseService.getuserType();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArtistProfileUpdatePage');
  }
Update(){
  this.navCtrl.push(ArtistProfileUpdatePage);
}
}
