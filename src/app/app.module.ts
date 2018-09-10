import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirebaseProvider } from '../providers/firebase/firebase';
import {Camera} from '@ionic-native/camera'


import { LoginPage } from '../pages/login/login';
import { SecondPage } from '../pages/second/second';
import { RegisterPage } from '../pages/register/register';
import { ArtistPage } from '../pages/artist/artist';
import { UserPage } from '../pages/user/user';
import { RecruiterPage } from '../pages/recruiter/recruiter';
import { LogoutPage } from '../pages/logout/logout';
import { ProfilePage } from '../pages/profile/profile';
import { UsersPage } from '../pages/users/users';
import { ScoutPage } from '../pages/scout/scout';

import { ArtistProfilePage } from '../pages/artist-profile/artist-profile';
import { ArtisthomePage } from '../pages/artisthome/artisthome';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SecondPage,
    RegisterPage,
    RecruiterPage,
    UserPage,
    ArtistPage,
    LogoutPage,
    ProfilePage,
    ArtisthomePage,
ScoutPage,
UsersPage,
ArtistProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SecondPage,
    RegisterPage,
    RecruiterPage,
    UserPage,
    ArtistPage,
    LogoutPage,
    ProfilePage,
    ArtisthomePage,
    ScoutPage,
    UsersPage,
    ArtistProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {}
