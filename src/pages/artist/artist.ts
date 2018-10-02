import { Component, Input } from '@angular/core';

import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Talent} from '../../Modals/Talent';

import { FirebaseProvider} from '../../providers/firebase/firebase';

import { HomePage } from '../home/home';

import { unescapeIdentifier } from '@angular/compiler';

import { ScoutPage } from '../scout/scout';

import { ArtisthomePage } from '../artisthome/artisthome';

 

@IonicPage()

@Component({

  selector: 'page-artist',

  templateUrl: 'artist.html',

})

export class ArtistPage {

 

  artist = {} as Talent;

  url;

 

  constructor(public navCtrl: NavController, public navParams: NavParams,private firebaseService:FirebaseProvider,public alertCtrl:AlertController) {

  }



}






