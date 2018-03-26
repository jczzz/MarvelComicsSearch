import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import {MarvelapiProvider} from '../../providers/marvelapi/marvelapi';
import { Storage } from '@ionic/storage';
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

  items:string[];
  character:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private marvelapi:MarvelapiProvider,
    private storage: Storage) {
  }





  // checkSearchInput(){
  //   let isString:boolean = typeof(this.character) ==='string';;
  //    return isString
  // }

  //替换ngOnInit
  ionViewDidLoad(){
    console.log('ionViewDidLoad CharacterlistPage');

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
                                     });

    });
  }

}
