import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';

import { MessagePage } from "../message/message";


@IonicPage()
@Component({
  selector: 'page-display',
  templateUrl: 'display.html',
})
export class DisplayPage {

  arr = [];
  path;
  username;
  constructor(public navCtrl: NavController, public navParams: NavParams,private firebaseService: FirebaseProvider,public viewCtrl: ViewController) { 
    // this.firebaseService.getuserType(); 
  }

  ionViewDidLoad() {
  var user = this.navParams.get('user');
    this.firebaseService.viewArtistProfile(user).then((data:any) =>{
    this.arr = data;
    console.log(this.arr);
    });
    this.firebaseService.getConversation(user)
 

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  Message(){
    this.username = this.firebaseService.getDefaultPath();
    console.log(this.username);
    this.firebaseService.getConversation(this.navParams.get('user'));
    this.navCtrl.push(MessagePage, {username:this.username , name2:this.navParams.get('user')})
  }
}
