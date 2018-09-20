import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';


@IonicPage()
@Component({
  selector: 'page-display',
  templateUrl: 'display.html',
})
export class DisplayPage {

  arr = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,private firebaseService: FirebaseProvider,public viewCtrl: ViewController) { 
    // this.firebaseService.getuserType(); 
  }

  ionViewDidLoad() {
  var user = this.navParams.get('user');
    this.firebaseService.viewArtistProfile(user).then((data:any) =>{
    this.arr = data;
    console.log(this.arr);
    });
    console.log('ionViewDidLoad DisplayPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
