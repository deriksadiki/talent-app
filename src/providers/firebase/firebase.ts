import { Injectable } from '@angular/core';
import {Camera,CameraOptions} from '@ionic-native/camera';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { LoadingController } from 'ionic-angular';

declare var firebase;
@Injectable()
export class FirebaseProvider {

  database = firebase.database();
  authnticate  = firebase.auth();
  storageRef = firebase.storage();

  userIDl;
  dbRef;
  state;
  image;
  videoArray = new Array();

  constructor(private camera:Camera, public loadingCtrl: LoadingController) {

  }

login(email, password){
  return new Promise((accept,reject) =>{
    this.authnticate.signInWithEmailAndPassword(email, password).then(()=>{
    accept("success")
    }, Error =>{
      reject(Error.message)
    })
  })
 }

  registerUser(email,password, Username){

    return new Promise((accept,reject) =>{
      this.authnticate.createUserWithEmailAndPassword(email, password).then(()=>{
        var user = firebase.auth().currentUser;
        this.dbRef =  'users/' + user.uid;
        this.database.ref(this.dbRef).push({
          Username:Username,
          userType: "normalPerson"
        })
      accept("user registred")
      }, Error =>{
        reject(Error.message)
      })
    })

  }
  registerTalentPerson(username,email,password, name, surname, gender, cellno, age){
  return new Promise((accept,reject) =>{
      this.authnticate.createUserWithEmailAndPassword(email, password).then(()=>{
        var user = firebase.auth().currentUser;
        this.dbRef =  'users/' + username
        this.database.ref(this.dbRef).push({
          name:name,
          surname:surname,
          gender:gender,
          cellno:cellno,
          age:age,
          userType: "talentPerson"
        })
        this.storageRef.ref('pictures/' + user.uid).putString(this.image, 'data_url');
        accept("success");
      }, Error =>{
        reject(Error.message);
      })
    })
  }


  registerScoutPerson(email, password, name, surname, companyName, companyemail, companycellno){
    return new Promise((accept,reject) =>{
      this.authnticate.createUserWithEmailAndPassword(email, password).then(()=>{
        var user = firebase.auth().currentUser;
        this.dbRef =  'users/' + user.uid;
        this.database.ref(this.dbRef).push({
          name:name,
          surname:surname,
          companyName:companyName,
          companyemail:companyemail,
          companycellno:companycellno,
          userType: "ScoutPerson"
        })
        accept("success");
      }, Error =>{
        reject(Error.message);
      })
    })
  }

  logout(){
    this.authnticate.signOut();
  }

  getUserSatate(){
    return new Promise ((accpt, rej) =>{ 
      this.authnticate.onAuthStateChanged(user =>{
        if (user != null){
          this.state = 1;
        }
        else{
          this.state = 0;
        }
        accpt(this.state);
       });
    })
  }

  forgotUserPassword(email:any){
    return this.authnticate.sendPasswordResetEmail(email);
  }
  async uploadpic(){
  
          const options: CameraOptions= {
            quality : 100,
            targetWidth: 600,
            targetHeight: 600,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
      
          }
            const results = await this.camera.getPicture(options);
          this.image = `data:image/jpeg;base64,${results}`;
  }

  uploadvid(vid){
    var d = Date.now();
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Please wait',
      duration: 9000
    });
  return new Promise((accpt,rejc) =>{
    loading.present();
  this.storageRef.ref(d + ".mp4").putString(vid, 'data_url').then(() =>{
    accpt(d);
  }, Error =>{
    rejc(Error.message)
  })
  })
  }

  getvideo():any{
     var user = firebase.auth().currentUser;
     let storageRef =  firebase.storage().ref();
return new Promise((accpt,rejc) =>{
  let imgRef = storageRef.child('pictures');
  imgRef.getDownloadURL().then(function(url) {
    accpt(url)
     }.bind(this)).catch(function(error) {
  rejc(error)
});
})
}

storeToDB(name){
  return new Promise((accpt,rejc) =>{
    var storageRef = firebase.storage().ref(name + ".mp4");
    storageRef.getDownloadURL().then(url => {
      console.log(url)
      var user = firebase.auth().currentUser;
      var link =  url;
      this.database.ref('uploads/' + user.uid).push({
            downloadurl :link
          });
          accpt('success');
}, Error =>{
  rejc(Error.message);
  console.log(Error.message);
});
})
}

}
