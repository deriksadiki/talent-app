import { Component } from '@angular/core';
import { NavController, ViewController, AlertController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { LoginPage } from '../login/login';
// import { SecondPage } from '../second/second';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users;
  constructor(public navCtrl: NavController,private firebaseService:FirebaseProvider,public alertCtrl:AlertController) {

  }
  logout(){

      this.firebaseService.authnticate.signOut().then(()=>{
        const alert = this.alertCtrl.create({
          title: 'Log Out',
          subTitle: 'You have now been logged out!',
          buttons: ['OK']
        });
        alert.present();
        this.navCtrl.push(LoginPage);
      }, Error =>{
        const alert = this.alertCtrl.create({
          title: 'Warning',
          subTitle: Error,
          buttons: ['OK']
        });
        alert.present();
      })
    }
  }
 
