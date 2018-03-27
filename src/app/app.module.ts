import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import {CharacterdetailsPageModule} from '../pages/characterdetails/characterdetails.module';
import {ComicdetailsPageModule} from '../pages/comicdetails/comicdetails.module';

import { HomePage } from '../pages/home/home';
import { FavoritePage} from '../pages/favorite/favorite';
import { TopherosPage } from '../pages/topheros/topheros';
import { WelcomePage } from '../pages/welcome/welcome';
import { TabsPage } from '../pages/tabs/tabs';
import { CharacterlistPage} from '../pages/characterlist/characterlist';
import {CharacterdetailsPage} from '../pages/characterdetails/characterdetails';
import {ComicdetailsPage} from '../pages/comicdetails/comicdetails';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MarvelapiProvider } from '../providers/marvelapi/marvelapi';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WelcomePage,
    FavoritePage,
    TopherosPage,
    CharacterlistPage,

    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    CharacterdetailsPageModule,
    ComicdetailsPageModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    FavoritePage,
    TopherosPage,
    HomePage,
    CharacterlistPage,
    CharacterdetailsPage,
    ComicdetailsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpModule,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MarvelapiProvider
  ]
})
export class AppModule {}
