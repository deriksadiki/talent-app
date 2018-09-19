import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';

/**
 * Generated class for the ScouteProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scoute-profile',
  templateUrl: 'scoute-profile.html',
})
export class ScouteProfilePage {

  arr2 = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,private firebaseService: FirebaseProvider) {
    this.firebaseService.getuserType();
    // this.firebaseService.viewScoutProfile();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScouteProfilePage');

    // this.firebaseService.viewScoutProfile().then((data:any) =>{
    // this.arr2 = data;
    // })

    console.log(this.arr2);
  }

}
