import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { SlidesPage } from '../slides/slides';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotoAbout(){
    this.navCtrl.setRoot(AboutPage);
  }

  gotoSlides(){
    this.navCtrl.push(SlidesPage);
  }

}
