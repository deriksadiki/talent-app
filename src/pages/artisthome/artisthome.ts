import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import {CommentsPage} from '../comments/comments'
import { ArtistProfilePage } from '../artist-profile/artist-profile';
import { ProfilePage } from '../profile/profile';
import { ArtistProfileUpdatePage } from '../artist-profile-update/artist-profile-update';
import { DisplayPage } from '../display/display';


@IonicPage()
@Component({
  selector: 'page-artisthome',
  templateUrl: 'artisthome.html',
})
export class ArtisthomePage {
videos = [];
arr3 = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,private firebaseService:FirebaseProvider,public modalCtrl: ModalController) {
    this.firebaseService.getuserType();
  }

  ionViewDidLoad(user) {
   
   this.firebaseService.getAllvideos().then((data:any) =>{
    if (this.videos != null || this.videos != undefined){
     this.videos = undefined;
     this.videos = null;
    }
     this.videos = data;
     console.log(this.videos);

    this.firebaseService.viewArtistProfile(user).then((data2:any) =>{
    this.arr3 = data2;
    })
    // console.log(this.arr3);
   });
  //  console.log(this.arr3);
  }

  test(indexNUmber){
    this.navCtrl.push(CommentsPage, {vid:this.videos[indexNUmber]})
  }

  profile(a){
    const modal = this.modalCtrl.create(DisplayPage,{user:this.videos[a].name});
    console.log(a);
    modal.present();
  }
}
