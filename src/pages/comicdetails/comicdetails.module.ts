import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComicdetailsPage } from './comicdetails';

@NgModule({
  declarations: [
    ComicdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ComicdetailsPage),
  ],
})
export class ComicdetailsPageModule {}
