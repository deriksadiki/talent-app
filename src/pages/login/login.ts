import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FirebaseProvider} from '../../providers/firebase/firebase';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController,private firebaseService:FirebaseProvider,public loadingCtrl:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  showForgotPassword(){
    const prompt = this.alertCtrl.create({
      title: 'Enter Your Email',
      message: "A new passeord will be sent to your email",
      inputs: [
        {
          name: 'recoverEmail',
          placeholder: 'you@example.com'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Submit',
          handler: data => {

            const loader = this.loadingCtrl.create({
              content: "Please wait.. resetting your password",
              duration: 3000
            });
            loader.present();

            console.log("this is the email"+ " " + data.recoverEmail);
            this.firebaseService.forgotUserPassword(data.recoverEmail).then(() =>{
              // add toast
              loader.dismiss().then(() => {
                //show pop up

              })
            }, error =>{ 
              let alert = this.alertCtrl.create({});
              alert.present();

            });
          }
        }
      ]
    });
    prompt.present();
  }
}
