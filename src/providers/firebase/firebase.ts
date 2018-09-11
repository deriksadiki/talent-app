import { Injectable } from '@angular/core';
import {Camera,CameraOptions} from '@ionic-native/camera';
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
  file;
  videoArray = new Array();

  constructor(private camera:Camera) {

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
  registerTalentPerson(email,password, name, surname, gender, cellno, age){
  return new Promise((accept,reject) =>{
      this.authnticate.createUserWithEmailAndPassword(email, password).then(()=>{
        var user = firebase.auth().currentUser;
        this.dbRef =  'users/' + user.uid;
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
    var metadata = {
      contentType: 'video/mp4',
    };
    
    // Upload the file and metadata
  // this.storageRef.ref('images/mountains.jpg').put(vid);
   this.storageRef.ref('pictures/').putString(vid, 'data_url');
  }

  getvideo():any{

    var pathReference = this.storageRef.ref('pictures/');
    console.log(pathReference);
    return pathReference;
//  this.storageRef.ref('pictures/').on('value', (data:any) =>{
//   var vid = data.val();
//   console.log(vid);
//  })
}

getProfile(){}
}
