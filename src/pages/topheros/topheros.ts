import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {CharacterlistPage}  from '../characterlist/characterlist';
/**
 * Generated class for the TopherosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-topheros',
  templateUrl: 'topheros.html',
})
export class TopherosPage {
  topheros:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopherosPage');
  }

  openTopHero(selectedheros:string){
    this.topheros=selectedheros;
    console.log('select:'+this.topheros);
    this.storage.clear();
    this.storage.set('character', this.topheros);

    this.navCtrl.push(CharacterlistPage);

  
   // this.navCtrl.push( 'CharacterlistPage', topheros );
  }

}
