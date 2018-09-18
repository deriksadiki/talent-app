import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import {CommentsPage} from '../comments/comments'
import { ArtistProfilePage } from '../artist-profile/artist-profile';
import { ProfilePage } from '../profile/profile';
import { ArtistProfileUpdatePage } from '../artist-profile-update/artist-profile-update';


@IonicPage()
@Component({
  selector: 'page-artisthome',
  templateUrl: 'artisthome.html',
})
export class ArtisthomePage {
videos = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,private firebaseService:FirebaseProvider) {
  }

  ionViewDidLoad() {
   
   this.firebaseService.getAllvideos().then((data:any) =>{
    if (this.videos != null || this.videos != undefined){
      this.videos = undefined;
      this.videos = null;
    }

     this.videos = data;
     console.log(this.videos)
   });

  }

  test(indexNUmber){
    this.navCtrl.push(CommentsPage, {vid:this.videos[indexNUmber]})
  }

  Profile(){
    this.navCtrl.push(ArtistProfilePage);
  }

}
