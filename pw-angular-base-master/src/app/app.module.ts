import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './layouts/footer/footer.component';
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { ProjectModule } from './project/project.module';
import { EducationModule } from './education/education.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { NgxSpinnerModule } from 'ngx-spinner';

export const firebaseConfig = {
  apiKey: 'AIzaSyBIKkh-C9keJdp0WhQ8-dFhcxBqzMIxacU',
  authDomain: 'pw-project-5773e.firebaseapp.com',
  databaseURL: 'https://pw-project-5773e.firebaseio.com',
  projectId: 'pw-project-5773e',
  storageBucket: 'pw-project-5773e.appspot.com',
  messagingSenderId: '749732139981',
  appId: '1:749732139981:web:8c33c9a8855112e735aa84',
  measurementId: 'G-SVDEVWFTCQ'
};

@NgModule({
  declarations: [
    FooterComponent,
    MainComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    ProjectModule,
    EducationModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: true
    }),
    NgxSpinnerModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
