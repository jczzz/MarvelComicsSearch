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
     
      }

   

  saveCharacter(){
    console.log('you are searching '+this.searchName);
    //第二个参数暂时替换JSON.stringify(character)
    this.storage.set('character', this.searchName);

    

    this.storage.get('character')
                .then((val) => {
                 if(val !=null ) {
                     //redirect 导航到CharacterlistPage
                     this.navCtrl.push(CharacterlistPage);
        
                   } else{
                       alert('please enter invial name');
                   }
      });

}
}
