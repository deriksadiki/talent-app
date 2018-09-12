import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Talent} from '../../Modals/Talent';
import { FirebaseProvider} from '../../providers/firebase/firebase';
import { HomePage } from '../home/home';
import { unescapeIdentifier } from '@angular/compiler';
import { ScoutPage } from '../scout/scout';
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
    if (this.artist.email == undefined && this.artist.password == undefined && this.artist.name == undefined && this.artist.surname == undefined && this.artist.gender == undefined && this.artist.cellno == undefined && this.artist.age == undefined){
      const alert = this.alertCtrl.create({
        title: 'Warning',
        subTitle: 'Please provide your full details to register!',
        buttons: ['OK']
      });
      alert.present();
    }else if (this.artist.name == undefined){
      const alert = this.alertCtrl.create({
        title: 'Warning',
        subTitle: 'Name cannot be left out!',
        buttons: ['OK']
      });
      alert.present();
    } else if (this.artist.surname == undefined){
      const alert = this.alertCtrl.create({
        title: 'Warning',
        subTitle: 'Surname cannot be left out!',
        buttons: ['OK']
      });
      alert.present();
    }else if (this.artist.email == undefined){
      const alert = this.alertCtrl.create({
        title: 'Warning',
        subTitle: 'Email cannot be left out!',
        buttons: ['OK']
      });
      alert.present();
    }else if (this.artist.password == undefined){
      const alert = this.alertCtrl.create({
        title: 'Warning',
        subTitle: 'Password cannot be left out!',
        buttons: ['OK']
      });
      alert.present();
    }else if (this.artist.gender == undefined){
      const alert = this.alertCtrl.create({
        title: 'Warning',
        subTitle: 'Gender cannot be left out!',
        buttons: ['OK']
      });
      alert.present();
    }else if (this.artist.cellno == undefined){
      const alert = this.alertCtrl.create({
        title: 'Warning',
        subTitle: 'Cell number cannot be left out!',
        buttons: ['OK']
      });
      alert.present();
    }else if (this.artist.age == undefined){
      const alert = this.alertCtrl.create({
        title: 'Warning',
        subTitle: 'Your age cannot be left out!',
        buttons: ['OK']
      });
      alert.present();
    
    }else {
      this.firebaseService.registerTalentPerson(this.artist.username,this.artist.email, this.artist.password, this.artist.name, this.artist.surname, this.artist.gender, this.artist.cellno, this.artist.age).then(() =>{
               const alert = this.alertCtrl.create({
                 title: 'Welcome',
                 subTitle: 'You have successfully Registered',
                 buttons: ['OK']
               });
               this.firebaseService.getuserType().then(()=>{
                this.navCtrl.push(ArtisthomePage);
                window.location.reload();
                alert.present();
               })
            
    }, Error =>{
      const alert = this.alertCtrl.create({
        title: 'warning!',
        subTitle: Error,
        buttons: ['OK']
      });
       alert.present();
    })
      }
  }

}
