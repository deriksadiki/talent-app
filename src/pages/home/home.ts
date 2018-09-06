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

<<<<<<< HEAD
  // splash = true;
  // secomndPage = SecondPage;
  constructor(public navCtrl: NavController) {


  }


=======
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
>>>>>>> 85bfd0382f5b77a8820b09fbb6957b6352bd55ee

  }
 
