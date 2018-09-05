import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SecondPage } from '../second/second';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  splash = true;
  secomndPage = SecondPage;
  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad(){
    setTimeout(()=> this.splash = false , 3000);
  }
}
