import { Injectable } from '@angular/core';
declare var firebase;
/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
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

  }

  registerUser(email,password){

    return new Promise((accept,reject) =>{
      this.authnticate.signInWithEmailAndPassword(email, password).then(()=>{
        var user = firebase.auth().currentUser;
        this.dbRef =  'users/' + user.uid;
        this.database.ref(this.dbRef).push({
          userType: "talentPerson"
        })
      accept("user registred")
      }, Error =>{
        reject(Error.message)
      })
    })

  }
  registerTalentPerson(email,password, name, surname, gender, cellno, age){
  return new Promise((accept,reject) =>{
      this.authnticate.signInWithEmailAndPassword(email, password).then(()=>{
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
      })
    })
  }


  registerScoutPerson(email, password, name, surname, companyName, companyemail, companycellno, cellno, ){
    return new Promise((accept,reject) =>{
      this.authnticate.signInWithEmailAndPassword(email, password).then(()=>{
        var user = firebase.auth().currentUser;
        this.dbRef =  'users/' + user.uid;
        this.database.ref(this.dbRef).push({
          name:name,
          surname:surname,
          companyName:companyName,
          companyemail:companyemail,
          companycellno:companycellno,
          userType: "scoutPerson"
        })
      })
    })
  }

  logout(){
    this.authnticate.auth.signOut();
  }

  getUserSatate(){
    return new Promise ((accpt, rej) =>{ 
      this.authnticate.onAuthStateChanged(user =>{
        if (user){
          this.state = 1;
        }
        else{
          this.state = 0;
        }
        accpt(this.state);
       });
    })
  }

}
