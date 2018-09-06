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

<<<<<<< HEAD
  users;
  // splash = true;
  // secomndPage = SecondPage;
  constructor(public navCtrl: NavController) {





  }
}
=======

  // splash = true;
  // secomndPage = SecondPage;
   users;
  constructor(public navCtrl: NavController,private firebaseService:FirebaseProvider,public alertCtrl:AlertController) {
  }

     // ionviewDidLoad(){
    // setTimeout(()=> this.splash = false , 3000);
    // }
}


  

>>>>>>> bc12fa10417f90f435aae6e1c39ac3ca1c28f51d
 
}
