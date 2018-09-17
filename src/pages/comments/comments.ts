import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FirebaseProvider} from '../../providers/firebase/firebase'

/**
 * Generated class for the CommentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class CommentsPage {

  videos2 =  this.navParams.get('vid');
  videos= new Array();
  comments =[];
  arr = []
  comments2 =  [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseService: FirebaseProvider) {
  }

  ionViewDidLoad() {
    this.comments.length = 0;
    this.comments2.length = 0;
    this.videos.push(this.videos2);
     this.getComments();
     console.log(this.comments2)
  }
    
    getComments(){
      this.firebaseService.getcomments(this.videos[0].key).then((data:any) =>{
        this.comments = data;
         var i = 0;
        for (var x = this.comments.length - 1; x  >= 0; x--){
           this.comments2[i] = this.comments[x];
           i++;
        }
       })
    }

  placeComment(commet){
  
    this.firebaseService.comment(this.videos[0].key, commet).then(data =>{
      this.firebaseService.addNumComments(this.videos[0].key, this.comments.length ,this.videos[0].name );
      this.comments.length = 0;
      this.comments2.length = 0;
      this.getComments()
  
    })
  }
}
