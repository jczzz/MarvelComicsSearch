import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {CharacterlistPage}  from '../characterlist/characterlist';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  searchName:any;
 

  constructor(public navCtrl: NavController,
    public navParams: NavParams, 
    private storage:Storage
    ) {
     this.getSearchName();
     console.log("constructor 快");
      }


ionViewDidLoad(){
  this.getSearchName();
  console.log("ionViewDidLoad 快");
}
   
getSearchName(){
  if(this.storage.get('character') != null){
    this.storage.clear();
    //this.searchName = localStorage.getItem('character');
  } else {
    
  }
}
  saveCharacter(){
    console.log('you are searching '+this.searchName);

    this.storage.set('character', this.searchName);

    this.storage.get('character')
                .then((val) => {
                 if(val !=null && typeof(val) ==='string' ) {
                     console.log(this.searchName+'已保存在storage in home page');
                     this.navCtrl.push(CharacterlistPage);
        
                   } else{
                       alert('Please enter valid name !');
                   }
      });

}


}
