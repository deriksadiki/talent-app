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
  file;
  videoArray = new Array();
  username;
  imgurl;
  currentUserID;

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
        this.dbRef =  'users/' + Username + ":" + user.uid;
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
      this.username =  username;
      return new Promise((accept,reject) =>{
      this.authnticate.createUserWithEmailAndPassword(email, password).then(()=>{
        var user = firebase.auth().currentUser;
        this.dbRef =  'users/' +  username + ":" + user.uid;
        this.database.ref(this.dbRef).push({
          name:name,
          surname:surname,
          gender:gender,
          cellno:cellno,
          age:age,
          userType: "talentPerson"
        })
        this.storageRef.ref('pictures/' + username).putString(this.image, 'data_url');
        accept("success");
      }, Error =>{
        reject(Error.message);
        console.log(Error.message);
      })
    })
  }


  registerScoutPerson(email, password, name, surname, companyName, companyemail, companycellno){
    return new Promise((accept,reject) =>{
      this.authnticate.createUserWithEmailAndPassword(email, password).then(()=>{
        this.dbRef =  'users/' + surname;
        this.database.ref(this.dbRef).push({
          name:name,
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

storeToDB(name, category, vidname, vidDesc){
  return new Promise((accpt,rejc) =>{
    var storageRef = firebase.storage().ref(name + ".mp4");
    storageRef.getDownloadURL().then(url => {
      console.log(url)
      var user = firebase.auth().currentUser;
      var link =  url;
      this.database.ref('uploads/' + this.username).push({
            downloadurl :link,
            name : vidname,
            category: category,
            description: vidDesc,
            username : this.username,
            userImg : this.imgurl
          });
          accpt('success');
}, Error =>{
  rejc(Error.message);
  console.log(Error.message);
});
})
}

getAllvideos(){

  return new Promise ((accpt, rej) =>{
    this.database.ref('uploads/').on('value', (data: any) => {
      var videos = data.val();
      var keys:any =  Object.keys(videos);
        for (var i = 0; i < keys.length; i++){
          var x = keys[i];
          var y  = 'uploads/' + x;
          var details;
          this.database.ref(y).on('value', (data2: any) => {
           details = data2.val();
            })
            this.videoArray.length = 0;
          var keys2:any = Object.keys(details);
          for (var a = 0; a < keys2.length; a++){
                var key = keys2[a];
                let obj = {
                vidurl : details[key].downloadurl,
                vidDesc : details[key].description,
                vidname : details[key].name,
                name : details[key].username,
                img : details[key].userImg,
                key: key
          }
          this.videoArray.push(obj);
          }
        }
       accpt(this.videoArray);
  }, Error =>{
    rej(Error.message)
  })
  })

} 


getuserType(){
return new Promise ((accpt, rej) =>{
  this.database.ref('users').on('value', (data: any) => {
    var users =  data.val();
    var user = firebase.auth().currentUser;
    var  userIDs = Object.keys(users);
    for (var x = 0; x < userIDs.length; x++){
      var str1 = new String( userIDs[x]); 
      var index = str1.indexOf( ":" ); 
      var currentUserID = userIDs[x].substr(index + 1);
      if (user.uid == currentUserID){
        this.storeUserName(userIDs[x].substr(0,index));
          this.database.ref('users/' + userIDs[x]).on('value', (data: any) => {
            var Userdetails;
            var Userdetails = data.val(); 
            this.storeuserid(userIDs[x])
            var keys2:any = Object.keys(Userdetails);
            var user = firebase.auth().currentUser;
            let storageRef =  firebase.storage().ref();
           var img = userIDs[x].substr(0,index) + ".jpg"
            let imgRef = storageRef.child('pictures/' + img);
            imgRef.getDownloadURL().then(function(url) {
            this.storePictureUrl(url);
            }.bind(this)).catch(function(error) {})
            accpt(Userdetails[keys2].userType)
           });
        break;
      }
    }
  })
})
}

storeUserName(name){
this.username = name;
}

storeProfile(){}

storePictureUrl(url){
this.imgurl =  url;
}

storeuserid(uid){
  this.currentUserID = uid;
}


}
