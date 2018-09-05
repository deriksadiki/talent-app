import { Injectable } from '@angular/core';

declare var firebase;
@Injectable()
export class FirebaseProvider {

  database = firebase.database();
  authnticate  = firebase.auth();

  userIDl;
  dbRef;
  state;

  constructor() {

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

        if (user){
          console.log(user);
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

}
