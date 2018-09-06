import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ArtistPage } from '../artist/artist';
import { UserPage } from '../user/user';
import { RecruiterPage } from '../recruiter/recruiter';
import { UsersPage } from '../users/users';
import { ScoutPage } from '../scout/scout';
import { ArtisthomePage } from '../artisthome/artisthome';


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
  Recruiter(){
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
}
