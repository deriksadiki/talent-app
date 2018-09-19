import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Recruit} from '../../Modals/Recruit'
import {FirebaseProvider} from '../../providers/firebase/firebase'
import { ArtistProfileUpdatePage } from '../artist-profile-update/artist-profile-update';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {



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


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }



 
  Update(){

this.navCtrl.push(ArtistProfileUpdatePage);

  }
    

}
