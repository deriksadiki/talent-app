import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ArtistProfilePage } from '../artist-profile/artist-profile';
import { ModalController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { ProfilePage } from '../profile/profile';
import { DisplayPage } from '../display/display';
import {CommentsPage} from '../comments/comments'


@IonicPage()
@Component({
  selector: 'page-scout',
  templateUrl: 'scout.html',
})
export class ScoutPage {
  videos = [];
  color = "primary";
  constructor(private firebaseService:FirebaseProvider, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
  
    this.firebaseService.getAllvideos().then((data:any) =>{
      if (this.videos != null || this.videos != undefined){
        this.videos = undefined;
        this.videos = null;
      }
   
       this.videos = data;
     });
  
  }
  like(keyIndex){
    this.firebaseService.likeVideo(this.videos[keyIndex].key).then(() =>{
      if (this.videos[keyIndex].color == "grey"){
        this.firebaseService.addNumOfLikes(this.videos[keyIndex].name, this.videos[keyIndex].key, this.videos[keyIndex].likes).then (data =>{
          this.ionViewDidLoad();
        })
      }
    else if (this.videos[keyIndex].color == "primary"){
           this.firebaseService.removeLike(this.videos[keyIndex].name, this.videos[keyIndex].key, this.videos[keyIndex].likes).then (data =>{
            this.ionViewDidLoad();
           })
        }
  else{
   this.firebaseService.addNumOfLikes(this.videos[keyIndex].name, this.videos[keyIndex].key, this.videos[keyIndex].likes).then (data =>{
   this.ionViewDidLoad();
   })
  }
   })
  }
  
   test(indexNUmber){
     this.navCtrl.push(CommentsPage, {vid:this.videos[indexNUmber]})
   }
  
  // view(){
  //   const modal = this.modalCtrl.create(ArtistProfilePage);
  //   modal.present();
  // }

//   profile(){ 
//     return new Promise((accpt,rej) =>{
//       this.firebaseService.getuserType().then((data:any) =>{
//         if(data == "talentPerson"){
//           this.navCtrl.push(ArtistProfilePage);
//         }
//         else if (data == "ScoutPerson"){
//           this.navCtrl.push(ProfilePage);
//         }
//       })
//     })
// }
profile(a){
  const modal = this.modalCtrl.create(DisplayPage,{user:this.videos[a].name});
  console.log(a);
  modal.present();
}
viewartist(){
  const modal = this.modalCtrl.create(ArtistProfilePage);
  modal.present();
}
}
