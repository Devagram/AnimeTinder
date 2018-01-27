import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Slides, NavParams, App } from 'ionic-angular';

import { ExplorePage } from '../explore/explore';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  userData: any;
  introSlides: any;
  @ViewChild('slides') slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, private facebook: Facebook) {
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
    console.log('ionViewDidLoad WelcomePage');
  }

  goToSwipe() {
    this.app.getRootNav().setRoot(ExplorePage)
      .then(() => {
        console.log('Welcome to your ExplorePage!');
      })
  }

  loginWithFB() {
    this.facebook.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
      this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
        this.userData = {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}
      });
    });
  }

}
