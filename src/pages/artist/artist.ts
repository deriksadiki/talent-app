import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Talent} from '../../Modals/Talent';
import { FirebaseProvider} from '../../providers/firebase/firebase';
import { HomePage } from '../home/home';

import { ArtisthomePage } from '../artisthome/artisthome';

@IonicPage()
@Component({
 selector: 'page-artist',
 templateUrl: 'artist.html',
})
export class ArtistPage {

  artist = {} as Talent;

  constructor(public navCtrl: NavController, public navParams: NavParams,private firebaseService:FirebaseProvider,public alertCtrl:AlertController) {
  }
  reg(){
    this.firebaseService.registerTalentPerson(this.artist.email, this.artist.password, this.artist.name, this.artist.surname, this.artist.gender, this.artist.cellno, this.artist.age).then(() =>{
      const alert = this.alertCtrl.create({
        title: 'Welcome',
        subTitle: 'You have successfully Registared',
        buttons: ['OK']
      });
      this.navCtrl.push(HomePage);
      alert.present();
    }, Error =>{
        const alert = this.alertCtrl.create({
          title: 'Warning!',
          subTitle: Error,
          buttons: ['OK']
        });
        alert.present();
      })
  }

}