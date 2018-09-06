import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController } from 'ionic-angular';
import {Recruit} from '../../Modals/Recruit';
import { FirebaseProvider} from '../../providers/firebase/firebase';
import { HomePage } from '../home/home';
/**
 * Generated class for the RecruiterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recruiter',
  templateUrl: 'recruiter.html',
})
export class RecruiterPage {
recrt = {} as Recruit;
  constructor(public navCtrl: NavController, public navParams: NavParams,private firebaseService:FirebaseProvider,public alertCtrl:AlertController) {
  }

  reg(){
    this.firebaseService.registerScoutPerson(this.recrt.email, this.recrt.password, this.recrt.name, this.recrt.surname, this.recrt.companyName, this.recrt.companyemail, this.recrt .companycellno).then(() =>{
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
