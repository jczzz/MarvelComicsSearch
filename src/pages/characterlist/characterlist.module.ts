import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CharacterlistPage } from './characterlist';

@NgModule({
  declarations: [
    CharacterlistPage,
  ],
  imports: [
    IonicPageModule.forChild(CharacterlistPage),
  ],
})
export class CharacterlistPageModule {}
