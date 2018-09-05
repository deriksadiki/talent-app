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
