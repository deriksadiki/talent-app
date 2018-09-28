import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';


declare var firebase ;

@IonicPage()
@Component({
  selector: 'page-artisthome',
  templateUrl: 'artisthome.html',
})
export class ArtisthomePage {
videos = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,private firebaseService:FirebaseProvider) {
   
  }
ionViewDidLoad() {
  this.firebaseService.getAllvideos().then((data:any) =>{
    if (this.videos != null || this.videos != undefined){
      this.videos = undefined;
      this.videos = null;
    }
     this.videos = data;
     console.log(this.videos)
 
   });
 }
 
Delete(i){
this.firebaseService.resetss(i);
}
}











