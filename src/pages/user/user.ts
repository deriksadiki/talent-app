import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { HomePage } from '../home/home';
import { FirebaseProvider} from '../../providers/firebase/firebase';
import {Guest} from '../../Modals/Guest'
/**
* Generated class for the UserPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
 selector: 'page-user',
 templateUrl: 'user.html',
})
export class UserPage {
guest = {} as Guest;

constructor(public navCtrl: NavController, public navParams: NavParams, private fire:FirebaseProvider) {
}

reg(){
    this.fire.registerUser(this.guest.email, this.guest.password, this.guest.Username)
}

}