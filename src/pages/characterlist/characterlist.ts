import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import {MarvelapiProvider} from '../../providers/marvelapi/marvelapi';
import { Storage } from '@ionic/storage';
import {CharacterdetailsPage} from '../characterdetails/characterdetails';
/**
 * Generated class for the CharacterlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-characterlist',
  templateUrl: 'characterlist.html',
})
export class CharacterlistPage {

  items:any;
  comics:any;
  character:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private marvelapi:MarvelapiProvider,
    private storage: Storage) {
      this.getcharacterlist();
  }

 //替换ngOnInit  ionViewDidLoad
 getcharacterlist(){
  console.log('ionViewDidLoad CharacterlistPage 开始运转了');
console.log('首先提取search name');
  this.storage.get('character').then((val) => {

      console.log(typeof(val));
      this.character = val;

      //let typeJude = this.checkSearchInput();
   
      console.log('Got search name：'+this.character);
      //if(val !=null || typeJude!= false ) {
      this.marvelapi.getCharacters(this.character)
                        .subscribe(response => {
                          console.log(response);
                        this.items = response.data.results;
                         console.log(this.items);
                                   });

  });
}

open(name, items, collectionURI) {
  this.navCtrl.push('CharacterdetailsPage', {
    name: name,
    items: items,
    url: collectionURI,
  })
}
 

}
