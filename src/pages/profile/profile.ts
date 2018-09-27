import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ArtistProfileUpdatePage } from '../artist-profile-update/artist-profile-update';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import {Recruit} from '../../Modals/Recruit';

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


  // dbRef;
  // datas;
  arr2= []; 

  constructor(public navCtrl: NavController, public navParams: NavParams,public firebaseService:FirebaseProvider) {
    this.firebaseService.getuserType();

  }

  ionViewDidLoad() {
    this.firebaseService.getProfile().then((data:any) =>{
    this.arr2 = data;
    console.log(this.arr2);
    })
    
  }

  Update(){
    this.navCtrl.push(ArtistProfileUpdatePage);
  }
    
}
