
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { login } from '../Modals/login'
import { updateDimensions } from 'ionic-angular/components/virtual-scroll/virtual-util';
import { RegisterPage } from '../pages/register/register';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { UserPage } from '../pages/user/user';

import { ArtisthomePage } from '../pages/artisthome/artisthome';



@IonicPage()
@Component({
<<<<<<< HEAD
 templateUrl: 'app.html'
})
export class MyApp {
 @ViewChild(Nav) nav: Nav;

 activePage: any;

name;
picture;
 public rootPage: any;


 pages: Array<{title: string, component: any, icon?: string}>;

 constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,private firebaseService:FirebaseProvider) {
   this.initializeApp();
   this.picture = '../../assets/imgs/pic.jpg';
   // used for an example of ngFor and navigation
if('Log-Out')

   this. firebaseService.getUserSatate().then( data =>{
    this.pages = [
      { title: 'Home', component: ArtisthomePage, icon:"md-home"},
      { title: 'Profile', component: ProfilePage, icon: "md-person"},
      { title: 'Messages', component: SeeMessagesPage, icon: "md-mail" },
      { title: 'Log-Out', component: LogoutPage, icon: "md-log-out"}
    ];
     if (data == 1){
       this.firebaseService.getuserType().then(() =>{
         this.name = this.firebaseService.getusername();
         setTimeout (() =>{
          this.picture = this.firebaseService.returnPictureUrl();
          if (this.picture  == undefined  || this.picture == ""){
            this.picture = '../../assets/imgs/pic.jpg';
          }
            console.log(this.picture)
        }, 3000)
=======

 selector: 'page-login',
 templateUrl: 'login.html',
})
export class LoginPage {

 name;


 users = {} as login;

 constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController,private firebaseService:FirebaseProvider,public loadingCtrl:LoadingController) {
 }

Reg(){
 this.navCtrl.push(UserPage);


 constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,private firebaseService:FirebaseProvider) {
   this.initializeApp();

   // used for an example of ngFor and navigation
if('Log-Out')
   this. firebaseService.getUserSatate().then( data =>{

     if (data == 1){
       this.firebaseService.getuserType().then(() =>{
         this.name = this.firebaseService.getusername();
         this.picture =  this.firebaseService.returnPictureUrl();
         console.log(this.picture)
         this.pages = [
           { title: 'Home', component: ArtisthomePage, icon:"md-home"},
          //  { title: 'Gallery', component: GalleryPage, icon:"md-images" },
           { title: 'Profile', component: ProfilePage, icon: "md-person"},
           { title: 'Messages', component: SeeMessagesPage, icon: "md-mail" },
           { title: 'Log-Out', component: LogoutPage, icon: "md-log-out"}
         ];
>>>>>>> master
        this.rootPage = ArtisthomePage;
       })

     }
     else{
      this.rootPage = LoginPage ;
     }
   })
 }

 initializeApp() {
   this.platform.ready().then(() => {
     // Okay, so the platform is ready and our plugins are available.
     // Here you can do any higher level native things you might need.
     this.statusBar.styleDefault();
     this.splashScreen.hide();
   });
 }

 openPage(page) {
   // Reset the content nav to have just this page
   // we wouldn't want the back button to show in this scenario
   this.nav.setRoot(page.component);
 }

<<<<<<< HEAD
}
=======

}


showForgotPassword(){
 const prompt = this.alertCtrl.create({
   title: 'Enter Your Email',
   message: "A new password will be sent to your email",
   inputs: [
     {
       name: 'recoverEmail',
       placeholder: 'you@example.com'
     },
   ],
   buttons: [
     {
       text: 'Cancel',
       handler: data => {
         console.log('Cancel clicked');
       }
     },
     {
       text: 'Submit',
       handler: data => {

         const loader = this.loadingCtrl.create({
           content: "Please wait.. resetting your password",
           duration: 2000
         });
         loader.present();

         this.firebaseService.forgotUserPassword(data.recoverEmail).then(() =>{
           // add toast
           loader.dismiss().then(() => {
           //show pop up
           let alert = this.alertCtrl.create({
           title: 'Check your email',
           subTitle: 'Password reset succesful',
           buttons: ['OK']
           });
             alert.present();
           })
         },error =>{
           loader.dismiss().then(() => {
           let alert = this.alertCtrl.create({
           title: 'Error resseting password',
           subTitle:error.message,
           buttons: ['OK']
           });
           alert.present();
         })
         });
       }
     }
   ]
 });
 prompt.present();
 }

 login(){
   this.firebaseService.login(this.users.email,this.users.password).then(()=>{
     this.firebaseService.getuserType().then(() =>{
       const alert = this.alertCtrl.create({
         title: 'Welcome',
         message: 'You have successfully logged in',
         buttons: ['OK']
       });
       alert.present();
       this.navCtrl.push(ArtisthomePage);
     })
   }, Error =>{
     if (this.users.email == undefined && this.users.password == undefined){
       const alert = this.alertCtrl.create({
         title: 'Warning!',
         subTitle: 'Please provide your log in details to log in!',
         buttons: ['Ok']
       });
       alert.present();
     }
     else if (this.users.email == undefined){
       const alert = this.alertCtrl.create({
         title: 'Warning!',
         subTitle: 'Email cannot be left out!',
         buttons: ['Ok']
       });
       alert.present();
     }else if (this.users.password == undefined ){
       const alert = this.alertCtrl.create({
         title: 'Warning!',
         subTitle: 'Password cannot be left out!',
         buttons: ['Ok']
       });
       alert.present();
     }
     else{
       const alert = this.alertCtrl.create({
         title: 'Warning!',
         message: Error,
         buttons: ['OK']
       });
       alert.present();
     }
   })
 }

}

>>>>>>> master
