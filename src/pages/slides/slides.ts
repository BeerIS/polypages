import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SlidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
export class SlidesPage {
  slides = [
    { id:"1", name:"Nightlife  1", image:"night1.jpg"},
    { id:"2", name:"Nightlife  2", image:"night2.jpg"},
    { id:"3", name:"Nightlife  3", image:"night3.jpg"}
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidesPage');
  }

}
