import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';

/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {
username = this.navParams.get('username');
name = this.navParams.get('name2');
messages = new Array();
lastSeen;
val = "messageasdasdasdadasdadas"
  constructor(public navCtrl: NavController, public navParams: NavParams,private firebaseService: FirebaseProvider) {
  }

  ionViewDidLoad() {
    console.log(name)
if (this.username == null || this.username == undefined){
  this.username = this.navParams.get('path')
  this.name = this.navParams.get('name'); 
}
this.firebaseService.getLastSeen(this.name).then(data =>{
  this.lastSeen = data;
})
      console.log(this.username);
    this.firebaseService.getSentMessages(this.username).then((data:any) =>{
      this.messages.length = 0;
      this.messages = data;
      console.log(this.messages);
    })
  }

  sendMessage(message){
    this.messages.length = 0;
    this.firebaseService.sendMessage(this.username, message);
     var res = this.firebaseService.getresults();
     if (res == 'fail'){
       this.firebaseService.getImage(this.name);
        this.firebaseService.startConvo(this.username, message)
      }
     else if (res  == 'pass'){
       this.firebaseService.send(this.username, message)
       console.log(this.messages);
     }
   this.val ="";
  }

}
