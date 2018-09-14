import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ArtistProfilePage } from '../artist-profile/artist-profile';
import { ModalController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';


@IonicPage()
@Component({
  selector: 'page-scout',
  templateUrl: 'scout.html',
})
export class ScoutPage {
  videos = [];
  constructor(private firebaseService:FirebaseProvider, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
  
    this.firebaseService.getAllvideos().then((data:any) =>{
      if (this.videos != null || this.videos != undefined){
        this.videos = undefined;
        this.videos = null;
      }
   
       this.videos = data;
     });
  
  }

  view(){
    const modal = this.modalCtrl.create(ArtistProfilePage);
    modal.present();
  }

}
