import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ComicdetailsPage} from '../comicdetails/comicdetails';
/**
 * Generated class for the CharacterdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-characterdetails',
  templateUrl: 'characterdetails.html',
})
export class CharacterdetailsPage {

  name:string;
  comics:any;
  url:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.name=this.navParams.get('name');
   console.log( this.name);
   this.comics=this.navParams.get('items');
   console.log( this.comics);
   this.url=this.navParams.get('url');
   console.log(this.url);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharacterdetailsPage');

    
  }

  viewComic(comicUrl,comicName){
    this.navCtrl.push('ComicdetailsPage', {
      comicUrl: comicUrl,
      comicName: comicName,

    })

  }

}
