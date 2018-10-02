import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController } from 'ionic-angular';
import {Recruit} from '../../Modals/Recruit';
import { FirebaseProvider} from '../../providers/firebase/firebase';
import {ScoutPage} from '../scout/scout';

@IonicPage()
@Component({
  selector: 'page-recruiter',
  templateUrl: 'recruiter.html',
})
export class RecruiterPage {
recrt = {} as Recruit;


  constructor(public navCtrl: NavController, public navParams: NavParams,private firebaseService:FirebaseProvider,public alertCtrl:AlertController) {
  }


 
}

