import { Injectable } from '@angular/core';

declare var firebase;
@Injectable()
export class FirebaseProvider {

  database = firebase.database();
  authnticate  = firebase.auth();

  constructor() {

  }

login(email, password){
  
 }

  registerUser(email,password){

  }
  registerTalentPerson(email,password, name, surname, gender, cellno, age){

  }


  registerScoutPerson(email, password, name, surname, companyName, companyemail, companycellno, cellno, ){

  }

  logout(){

  }

  getUserSatate(){

  }

}
