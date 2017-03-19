import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  myTestProperty = 'testtt';

  constructor(public navCtrl: NavController) {

    ( this as any ).myTestProperty2 = 'testtt222';

  }

}
