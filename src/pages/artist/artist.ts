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
photo:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private firebaseService:FirebaseProvider,public alertCtrl:AlertController) {
  }

  takePicture(){

this.firebaseService.uploadpic();

  }


  reg(){
    var message;
    this.firebaseService.registerTalentPerson(this.artist.email, this.artist.password, this.artist.name, this.artist.surname, this.artist.gender, this.artist.cellno, this.artist.age).then(() =>{
      const alert = this.alertCtrl.create({
        title: 'Welcome',
        subTitle: 'You have successfully Registered',
        buttons: ['OK']
      });
      this.navCtrl.push(HomePage);
      alert.present();
    }, Error =>{ if (Error.message == "createUserWithEmailAndPassword failed: First argument email must be a valid string. "){
      message == 'Please provide your details to full register';
    
    }else if (Error.messge == "createUserWithEmailAndPassword failed: First argument email must be a valid string. "){
      message == 'Provide your name proceed!';
    
    }else if (Error.messge == "createUserWithEmailAndPassword failed: First argument email must be a valid string. "){
      message == 'Provide your surname to proceed!';
    
    }else if (Error.messge == "createUserWithEmailAndPassword failed: First argument email must be a valid string. "){
      message == 'Provide your email to proceed!';
    
    }else if (Error.messge == "createUserWithEmailAndPassword failed: First argument email must be a valid string. "){
      message == 'Provide your password to proceed!';
    
    }else if (Error.messge == "createUserWithEmailAndPassword failed: First argument email must be a valid string. "){
      message == 'Provide your gender to proceed!';
    
    }else if (Error.messge == "createUserWithEmailAndPassword failed: First argument email must be a valid string. "){
      message == 'Provide your cell number to proceed!';
    
    }else if (Error.messge == "createUserWithEmailAndPassword failed: First argument email must be a valid string. "){
      message == 'Provide your age to proceed!';
    
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