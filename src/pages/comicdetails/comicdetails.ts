import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import md5 from 'crypto-js/md5';
import {Http} from '@angular/http';

/**
 * Generated class for the ComicdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comicdetails',
  templateUrl: 'comicdetails.html',
})
export class ComicdetailsPage {

  apiKey:String ='4b4aff135af219dbb29f92aa662dce41';
  PRI_KEY:String = "eed535426d2f2f3bcc56e20c43b057da15cea4af";
  name:string;
  url:any;
  items:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http:Http) {
    this.name=this.navParams.get('comicName');
    console.log( this.name);
    this.url=this.navParams.get('comicUrl');
    console.log( this.url);

   let ts =new Date().getTime().toString();
   let hash =md5(ts+this.PRI_KEY+this.apiKey);
   console.log(this.url+'?ts='+ts+'&apikey='+this.apiKey+'&hash='+hash);
   this.http.get(this.url+'?ts='+ts+'&apikey='+this.apiKey+'&hash='+hash)
            .subscribe(res =>{ let data=res.json(); 
                                this.items= data.data.results[0];
                              console.log(this.items)});

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComicdetailsPage');
  }

}
