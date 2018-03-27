import { Component } from '@angular/core';


import { HomePage } from '../home/home';
//import { FavoritePage} from '../favorite/favorite';
import { TopherosPage } from '../topheros/topheros';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TopherosPage;
  //tab3Root = FavoritePage;

  constructor() {

  }


}
