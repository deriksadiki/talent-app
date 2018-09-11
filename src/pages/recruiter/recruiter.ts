import { Component } from '@angular/core';
import { ScoutPage } from '../scout/scout';
import { IonicPage, NavController, NavParams , AlertController } from 'ionic-angular';
import {Recruit} from '../../Modals/Recruit';
import { FirebaseProvider} from '../../providers/firebase/firebase';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-recruiter',
  templateUrl: 'recruiter.html',
})
export class RecruiterPage {
recrt = {} as Recruit;


  constructor(public navCtrl: NavController, public navParams: NavParams,private firebaseService:FirebaseProvider,public alertCtrl:AlertController) {
  }


  ScoutHome(){
    this.navCtrl.push(ScoutPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RecruiterPage');
  }
  reg(){

    if(this.recrt.email != '' && this.recrt.password != '' && this.recrt.name != '' && this.recrt.surname != '' && this.recrt.companyName != '' && this.recrt.companyemail != '' && this.recrt .companycellno != ''){
      var message;
      this.firebaseService.registerScoutPerson(this.recrt.email, this.recrt.password, this.recrt.name, this.recrt.surname, this.recrt.companyName, this.recrt.companyemail, this.recrt .companycellno).then(() =>{
        const alert = this.alertCtrl.create({
          title: 'Welcome',
          subTitle: 'You have successfully Registered',
          buttons: ['OK']
        });
        this.navCtrl.push(ScoutPage);
        alert.present();

      });
    }

      
       Error =>{ 
            // console.log("Code : " + Error.code);  
        if (Error.message == "Please provide your details to full register!"){
         message == '';
       
         } else if (Error.message == "Please provide your details to full register!"){
           message == 'Provide your name please!';
         }
  
         else if (Error.message == "Please provide your details to full register!"){
          message == 'Provide your surname please!';
        }
  
        else if (Error.message == "Please provide your details to full register!"){
          message == 'Provide your email please!';
        }
  
        else if (Error.message == "create User With Email "){
          message == 'Provide your password please!';
        }
  
        else if (Error.message == "create User With "){
          message == 'Provide your company name please!';
        }
  
        else if (Error.message == "create User"){
          message == 'Provide your company email please!';
        }
  
        else if (Error.message == "create"){
          message == 'Provide your company cellno please!';
        }
  
         
          const alert = this.alertCtrl.create({
            title: 'Warning!',
            subTitle: Error.message,
            buttons: ['OK']
          });
          alert.present();

        }
    }
    


        };




