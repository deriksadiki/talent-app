import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private view:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogoutPage');
    this.view.dismiss();
  }

}
