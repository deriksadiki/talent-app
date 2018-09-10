import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ArtistProfilePage } from '../artist-profile/artist-profile';



@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }
  viewartist(){
    const modal = this.modalCtrl.create(ArtistProfilePage);
    modal.present();
  }
}
