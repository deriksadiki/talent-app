import { Component } from '@angular/core';
import { NavController, ViewController, AlertController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import {LoginPage} from '../login/login';
import { ArtisthomePage } from '../artisthome/artisthome';

// import { SecondPage } from '../second/second';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  url;
  category;
  vidName;
  vidDesc;


 

  constructor(public navCtrl: NavController,private firebaseService:FirebaseProvider,public alertCtrl:AlertController) {
 
  }

    

    insertvid(event:any){

      if (event.target.files && event.target.files[0]){
        let reader = new FileReader();
    
        reader.onload = (event:any) =>{
          this.url = event.target.result;
        }
        reader.readAsDataURL(event.target.files[0]);

      }
    
    }
    upload(){
      this.firebaseService.uploadvid(this.url).then(data =>{
        console.log(data);
         this.firebaseService.storeToDB(data, this.category, this.vidName, this.vidDesc).then(() =>{
           console.log('added to db');
<<<<<<< HEAD
           this.navCtrl.push(ArtisthomePage);
=======
           this.navCtrl.push(HomePage);
>>>>>>> 79926212867663946e034b567e161d2271ea4197
         },
        Error =>{
          console.log(Error)
        })
      }, Error =>{
        console.log(Error )
      })
      
    }
<<<<<<< HEAD
}
=======
  }
>>>>>>> 79926212867663946e034b567e161d2271ea4197

