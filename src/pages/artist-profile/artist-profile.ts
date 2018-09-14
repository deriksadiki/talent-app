import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {FirebaseProvider}  from '../../providers/firebase/firebase'




@IonicPage()
@Component({
  selector: 'page-artist-profile',
  templateUrl: 'artist-profile.html',
})
export class ArtistProfilePage {
arr = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController, public firebase: FirebaseProvider) {
  }

  ionViewDidLoad() {
  this.firebase.getProfile().then((data:any) =>{
    this.arr = data;
  })
  }

  close(){
    this.view.dismiss();
  }

}
