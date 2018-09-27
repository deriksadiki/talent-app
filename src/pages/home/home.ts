import { Component } from '@angular/core';
import { NavController, ViewController, AlertController, ModalController,NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import {LoginPage} from '../login/login';

import { UploadPreviewPage } from '../upload-preview/upload-preview';


import { ArtisthomePage } from '../artisthome/artisthome';


// import { SecondPage } from '../second/second';

@Component({
 selector: 'page-home',
 templateUrl: 'home.html'
})
export class HomePage {
<<<<<<< HEAD
  url ='assets/imgs/o.jpg'
  category;
  vidName;
  vidDesc;
  videos = new Array();;

 
=======
 url ='assets/imgs/o.jpg'
 category;
 vidName;
 vidDesc;
 videos = new Array();;
>>>>>>> dda2be3f35357b6a53ef64820ed520de5dd6f794



<<<<<<< HEAD
    insertvid(event:any){
      this.videos.length = 0;
      if (event.target.files && event.target.files[0]){
        let reader = new FileReader();
    
        reader.onload = (event:any) =>{
         this.videos.push (event.target.result);
         this.url = event.target.result;
          console.log(this.videos)
        }
        reader.readAsDataURL(event.target.files[0]);
=======
 constructor(public navCtrl: NavController,private firebaseService:FirebaseProvider,public alertCtrl:AlertController, public modalCtrl: ModalController) {

 }
>>>>>>> dda2be3f35357b6a53ef64820ed520de5dd6f794

 insertvid(event:any){
  this.videos.length = 0;
  if (event.target.files && event.target.files[0]){
    let reader = new FileReader();

<<<<<<< HEAD
    preview(){

      const modal = this.modalCtrl.create(UploadPreviewPage);
      modal.present();

    }
    test(indexNUmber){
      this.navCtrl.push(HomePage, {vid:this.videos[indexNUmber]})
=======
    reader.onload = (event:any) =>{
     this.videos.push (event.target.result);
     this.url = event.target.result;
      console.log(this.videos)
>>>>>>> dda2be3f35357b6a53ef64820ed520de5dd6f794
    }
    reader.readAsDataURL(event.target.files[0]);

  }
}
   upload(){
     this.firebaseService.uploadvid(this.url).then(data =>{
       console.log(data);
        this.firebaseService.storeToDB(data, this.category, this.vidName, this.vidDesc).then(() =>{
          console.log('added to db');
          this.navCtrl.push(HomePage);
        },
       Error =>{
         console.log(Error)
       })
     }, Error =>{
       console.log(Error )
     })
   }

   preview(){

     const modal = this.modalCtrl.create(UploadPreviewPage);
     modal.present();

   }
   test(indexNUmber){
     this.navCtrl.push(HomePage, {vid:this.videos[indexNUmber]})
   }
 }