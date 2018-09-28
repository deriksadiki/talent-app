import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {FirebaseProvider}  from '../../providers/firebase/firebase'

@IonicPage()
@Component({
  selector: 'page-artist-profile',
  templateUrl: 'artist-profile.html',
})
export class ArtistProfilePage {
videos = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController, public firebaseService: FirebaseProvider) {
    this.firebaseService.getuserType();
  }

  ionViewDidLoad(i) {
  // // this.firebase.getProfile().then((data:any) =>{
  // //   this.arr = data;
  // //})
  // this.firebaseService.viewArtistProfile().then((data:any) =>{
  //   if (this.videos != null || this.videos != undefined){
  //     this.videos = undefined;
  //     this.videos = null;
  //   }
  //    this.videos = data;
  //    console.log(this.videos);
  //  });
  }

  close(){
    this.view.dismiss();
  }

}
