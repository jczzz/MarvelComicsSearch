import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CharacterdetailsPage } from './characterdetails';

@NgModule({
  declarations: [
    CharacterdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CharacterdetailsPage),
  ],
})
export class CharacterdetailsPageModule {}
