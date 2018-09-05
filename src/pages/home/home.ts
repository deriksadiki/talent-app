import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { SecondPage } from '../second/second';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // splash = true;
  // secomndPage = SecondPage;
  constructor(public navCtrl: NavController) {

  }
//  ionviewDidLoad(){
//     setTimeout(()=> this.splash = false , 1000);
//   }
 
}
