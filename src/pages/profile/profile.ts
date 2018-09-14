import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ArtistProfileUpdatePage } from '../artist-profile-update/artist-profile-update';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

<<<<<<< HEAD
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
=======
  constructor(public navCtrl: NavController, public navParams: NavParams) {
>>>>>>> f93048f008b71425f8f8cef75762ef85946085e7
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }


  Update(){
   this.navCtrl.push(ArtistProfileUpdatePage);
  }

}
