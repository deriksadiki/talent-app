import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ArtisthomePage } from '../artisthome/artisthome';
import { Talent} from '../../Modals/Talent';
import { FirebaseProvider} from '../../providers/firebase/firebase';

@IonicPage()
@Component({
 selector: 'page-register',
 templateUrl: 'register.html',
})
export class RegisterPage {

 username =  this.navParams.get('username')
 artist = {} as Talent;
 imageurl:any = '../../assets/imgs/pic.jpg';
 constructor(public navCtrl: NavController, public navParams: NavParams,private firebaseService:FirebaseProvider,) {
 }

 ionViewDidLoad() {
   console.log('ionViewDidLoad RegisterPage');
 }

 takePicture(){
    this.imageurl = this.firebaseService.uploadpic();
 }
 getStarted(){
   if (this.imageurl != undefined || this.imageurl != null){
     this.firebaseService.addImage(this.username).then(data =>{
       console.log(data)
       this.firebaseService.getimagepropicurl(this.username).then(data =>{
         console.log(data)
         this.firebaseService.addMoreUserINformation(this.artist.name, this.artist.surname, this.artist.age, this.artist.gender, this.artist.compName, this.artist.compEmail, this.artist.compTel, this.artist.Bio).then(data =>{
           console.log(this.artist);
           this.navCtrl.push(ArtisthomePage);
         })
       })
     })
   }
   else{
     this.firebaseService.addMoreUserINformation(this.artist.name, this.artist.surname, this.artist.age, this.artist.gender, this.artist.compName, this.artist.compEmail, this.artist.compTel, this.artist.Bio).then(data =>{
       console.log(this.artist);
       this.navCtrl.push(ArtisthomePage);
     })
   }

 }

}