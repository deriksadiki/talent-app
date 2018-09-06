import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { HomePage } from '../home/home';
import { FirebaseProvider} from '../../providers/firebase/firebase';
import {Guest} from '../../Modals/Guest'

import { UsersPage } from '../users/users';



@IonicPage()
@Component({
 selector: 'page-user',
 templateUrl: 'user.html',
})
export class UserPage {
guest = {} as Guest;

constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController,private firebaseService:FirebaseProvider){

}


  reg(){
    this.firebaseService.registerUser(this.guest.email, this.guest.password, this.guest.Username).then(() =>{
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

  userHome(){
    this.navCtrl.push(UsersPage);
  }

}



