import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ArtistProfileUpdatePage } from '../artist-profile-update/artist-profile-update';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import {Recruit} from '../../Modals/Recruit';
import { HomePage } from '../home/home';

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
  // dbRef;
  // datas;

  arr2= []; 
  myVideos = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public firebaseService:FirebaseProvider) {
    this.firebaseService.getuserType();
  }

  ionViewDidLoad() {
    this.firebaseService.getProfile().then((data:any) =>{
    this.arr2 = data;
    console.log(this.arr2);
    })

    this.firebaseService.getUploads().then((data2:any) =>{
      if (this.myVideos != null || this.myVideos != undefined){
        this.myVideos = undefined;
        this.myVideos = null;
       }
    this.myVideos = data2;
    console.log(this.myVideos);
  })
    
  }

  Update(){
    this.navCtrl.push(ArtistProfileUpdatePage);
  }
  
  Upload(){
    this.navCtrl.push(HomePage);
  }
    
}