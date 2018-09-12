import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import {Recruit} from '../../modals/Recruit';

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

  arr = new Array();
  dbRef;
  datas;

  recruit = {} as Recruit;

  email:string;
  password:string;
  name:string;
  surname:string;
  companyName:string;
  companyemail:string;
  gender:string;
  age:string;
  cellno:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public firebaseService:FirebaseProvider) {
    this.firebaseService.getuserType();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }


  update(){
  //  this.navCtrl.push()
  }

}
