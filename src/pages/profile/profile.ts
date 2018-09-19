import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
<<<<<<< HEAD
import {Recruit} from '../../Modals/Recruit'
import {FirebaseProvider} from '../../providers/firebase/firebase'
import { ArtistProfileUpdatePage } from '../artist-profile-update/artist-profile-update';

=======
import { ArtistProfileUpdatePage } from '../artist-profile-update/artist-profile-update';
>>>>>>> 79926212867663946e034b567e161d2271ea4197

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
  // arr = new Array();
  // dbRef;
  // datas;

  // recruit = {} as Recruit;

  // email:string;
  // password:string;
  // name:string;
  // surname:string;
  // companyName:string;
  // companyemail:string;
  // gender:string;
  // age:string;
  // cellno:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public firebaseService:FirebaseProvider) {
    // this.firebaseService.getuserType();
=======
  constructor(public navCtrl: NavController, public navParams: NavParams) {
>>>>>>> 79926212867663946e034b567e161d2271ea4197
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }


  Update(){
<<<<<<< HEAD
this.navCtrl.push(ArtistProfileUpdatePage);
=======
   this.navCtrl.push(ArtistProfileUpdatePage);
>>>>>>> 79926212867663946e034b567e161d2271ea4197
  }

}
