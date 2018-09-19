import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ArtistProfileUpdatePage } from '../artist-profile-update/artist-profile-update';
import { FirebaseProvider } from '../../providers/firebase/firebase';

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

  // public list:Array<Object>;
  dbRef;
  datas;
  arr2= []; 
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
    this.firebaseService.getuserType();
  }

  ionViewDidLoad() {
    this.firebaseService.getProfile().then((data:any) =>{
    this.arr2 = data;
    })
  }
  Update(){
   this.navCtrl.push(ArtistProfileUpdatePage);
  }

}
