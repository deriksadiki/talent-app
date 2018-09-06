import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { HomePage } from '../home/home';
import { FirebaseProvider} from '../../providers/firebase/firebase';
import {Guest} from '../../Modals/Guest'
/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
guest = {} as Guest;
  constructor(public navCtrl: NavController, public navParams: NavParams,private firebaseService:FirebaseProvider,public alertCtrl:AlertController) {

  }
  reg(){
    var message;
    this.firebaseService.registerUser(this.guest.email, this.guest.password, this.guest.Username).then(() =>{
      const alert = this.alertCtrl.create({
        title: 'Welcome',
        subTitle: 'You have successfully Registared',
        buttons: ['OK']
      });
      this.navCtrl.push(HomePage);
      alert.present();
    }, Error =>{ if (Error.messge == "createUserWithEmailAndPassword failed: First argument email must be a valid string."){
      message = 'Please provide your details to full register!';
    
    }else if (Error.messge == "createUserWithEmailAndPassword failed: First argument ''email'' must be a valid string. "){
      message == 'Provide your email to proceed!'
   
    }else if (Error.messge == "createUserWithEmailAndPassword failed: First argument email must be a valid string. "){
      message == 'Provide your password to proceed!'
    
    }else if (Error.messge == "createUserWithEmailAndPassword failed: First argument email must be a valid string. "){
      message == 'Provide your username to proceed!'
    }



    console.log(Error.message)
        const alert = this.alertCtrl.create({
          title: 'Warning!',
          subTitle: message,
          buttons: ['OK']
        });
        alert.present();
      })
  }

}
