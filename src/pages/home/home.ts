import { Component } from '@angular/core';
import { NavController, ViewController, AlertController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import {LoginPage} from '../login/login';
// import { SecondPage } from '../second/second';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users;

  url;
  vidd;


  // splash = true;
  // secomndPage = SecondPage;
 

  constructor(public navCtrl: NavController,private firebaseService:FirebaseProvider,public alertCtrl:AlertController) {
  }

     // ionviewDidLoad(){
    // setTimeout(()=> this.splash = false , 3000);
    // }

    insertpic(event:any){
      if (event.target.files && event.target.files[0]){
        let reader = new FileReader();
    
        reader.onload = (event:any) =>{
          this.url = event.target.result;
        }

        reader.readAsDataURL(event.target.files[0]);
     
      }
    
    }
    show(){
      this.firebaseService.uploadvid(this.url);
    }
    upload(){
     var vid = this.firebaseService.getvideo();
     console.log(vid);
     this.vidd = vid;
    }

}



