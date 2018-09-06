import { Component } from '@angular/core';
import { RegisterPage } from '../register/register';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FirebaseProvider} from '../../providers/firebase/firebase';
import {login} from '../../Modals/login'
import { HomePage } from '../home/home';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  name;

  users = {} as login;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController,private firebaseService:FirebaseProvider,public loadingCtrl:LoadingController) {
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

Reg(){
  this.navCtrl.push(RegisterPage);
}


showForgotPassword(){
  const prompt = this.alertCtrl.create({
    title: 'Enter Your Email',
    message: "A new password will be sent to your email",
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
            duration: 2000
          });
          loader.present();

          this.firebaseService.forgotUserPassword(data.recoverEmail).then(() =>{
            // add toast
            loader.dismiss().then(() => {
            //show pop up
            let alert = this.alertCtrl.create({
            title: 'Check your email',
            subTitle: 'Password reset succesful',
            buttons: ['OK']
            });
              alert.present();
            })
          },error =>{ 
            loader.dismiss().then(() => {
            let alert = this.alertCtrl.create({
            title: 'Error resseting password',
            subTitle:error.message,
            buttons: ['OK']
            });
            alert.present();
          })
          });
        }
      }
    ]
  });
  prompt.present();
  }

  login(){
    this.firebaseService.login(this.users.email,this.users.password).then(()=>{
      const alert = this.alertCtrl.create({
        title: 'Welcome',
        subTitle: 'You have successfully logged in ',
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
