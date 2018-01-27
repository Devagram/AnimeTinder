import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Slides, NavParams, App } from 'ionic-angular';
import { Shows } from '../../providers/tinder-2'
import { ExplorePage } from '../explore/explore';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  introSlides: any;
  @ViewChild('slides') slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
    this.introSlides = [
      {
        title: 'Discover new and interesting <br> anime',
        image: 'assets/img/intro/intro_1.png'
      },
      {
        title: 'Swipe Right to like an anime <br /> or Swipe Left to dislike',
        image: 'assets/img/intro/intro_2.png'
      },
      {
        title: 'Based on your likes <br /> we find new "Matches!"',
        image: 'assets/img/intro/intro_3.png'
      },
    ]
  }

  ionViewDidLoad() {
    var shows = new Shows();
    console.log('ionViewDidLoad WelcomePage');
    /// shows.getShows().then((data) => {
    ///  console.log(data);
    /// });
  }

  goToSwipe() {
    this.app.getRootNav().setRoot(ExplorePage)
      .then(() => {
        console.log('Welcome to your ExplorePage!');
      })
  }

}
