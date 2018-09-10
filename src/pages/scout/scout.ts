import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ArtistProfilePage } from '../artist-profile/artist-profile';
import { ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-scout',
  templateUrl: 'scout.html',
})
export class ScoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScoutPage');
  }

  view(){
    const modal = this.modalCtrl.create(ArtistProfilePage);
    modal.present();
  }

}
