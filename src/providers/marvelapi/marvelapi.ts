//import { HttpClient } from '@angular/common/http';
import {Http} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import md5 from 'crypto-js/md5';

@Injectable()
export class MarvelapiProvider {
  baseUrl:String;
  apiKey:String ='4b4aff135af219dbb29f92aa662dce41';
  PRI_KEY:String = "eed535426d2f2f3bcc56e20c43b057da15cea4af";
  ts:any = new Date().getTime();

  baseredditurl:string;
  weatherUrl:String;

  constructor(public http: Http) {
    console.log('Hello MarvelapiProvider Provider');
    this.baseUrl='https://gateway.marvel.com/v1/public/characters?name=';
    //for testing
    this.baseredditurl ='https://www.reddit.com/r';
    this.weatherUrl='http://api.wunderground.com/api/99dfe35fcb7de1ee/conditions/q';
  }
generateHash(){
   return md5(this.ts + this.PRI_KEY + this.apiKey);
}

  getCharacters(name){
    //let hash = this.generateHash();
    console.log(this.baseUrl+name+'&ts='+this.ts+'&apikey='+this.apiKey+'&hash='+this.generateHash());
    return this.http.get(this.baseUrl+name+'ts='+this.ts+'&apikey='+this.apiKey+'&hash='+this.generateHash())
                     .map(res => res.json());
  }
/** 
   // for testing
  getRedditapi(category){
    console.log(this.baseredditurl+'/'+category+'/top.json?limit=20');
    return this.http.get(this.baseredditurl+'/'+category+'/top.json?limit=20')
    .map(res => res.json());

  }
  */

   // for testing
  getWeather(city){
    console.log(this.weatherUrl+'/FL/'+city+'.json');
     return this.http.get(this.weatherUrl+'/FL/'+city+'.json')
     .map(res => res.json());
  }
}
