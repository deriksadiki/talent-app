import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ArtistPage } from '../artist/artist';
import { UserPage } from '../user/user';
import { RecruiterPage } from '../recruiter/recruiter';
import { UsersPage } from '../users/users';
import { ScoutPage } from '../scout/scout';

import { ArtistProfilePage } from "../artist-profile/artist-profile";
import { ArtisthomePage } from '../artisthome/artisthome';
import { ArtistProfileUpdatePage } from '../artist-profile-update/artist-profile-update';
import { ScoutProfileUpdatePage } from '../scout-profile-update/scout-profile-update';
import { HomePage } from '../home/home';
import { ScouteProfilePage } from '../scoute-profile/scoute-profile';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
Artist(){
this.navCtrl.push(ArtistPage);
}
User(){
  this.navCtrl.push(UserPage);
  }
  scout(){
    this.navCtrl.push(RecruiterPage);
    }

    Users(){
      this.navCtrl.push(UsersPage);
      }
  Scout(){
      this.navCtrl.push(ScoutPage);
    }
    Artisthome(){
      this.navCtrl.push(ArtisthomePage);
    }
  artistProf(){
    this.navCtrl.push(ScoutProfileUpdatePage);
  }
  artist(){
    this.navCtrl.push(ArtistProfilePage);
  }
  Home(){
    this.navCtrl.push(HomePage);
  }
  artProfUpdate(){
    this.navCtrl.push(ScouteProfilePage);
  }
  // Profile(){
  //   this.navCtrl.push(ProfilePage);
  // }
}
