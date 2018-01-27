webpackJsonp([10],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatPage = (function () {
    function ChatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.isNewMatch = false;
        this.messages = [];
        this.typingMessage = '';
        this.showGiphy = false;
        this.isNewMatch = this.navParams.get('isNewMatch');
        this.init();
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatPage');
        this.scrollBottom();
    };
    ChatPage.prototype.init = function () {
        // TODO: can be an API response
        if (!this.isNewMatch) {
            this.messages = [
                {
                    isMe: true,
                    type: 'image',
                    body: 'https://media.giphy.com/media/3oz8xSjBmD1ZyELqW4/giphy.gif',
                    timestamp: 'Oct 10, 2017 9:47am'
                },
                {
                    isMe: false,
                    avatar: 'assets/img/hieu.png',
                    type: 'text',
                    body: 'Hey yo what\'s up?',
                    timestamp: 'Oct 10, 2017 9:48am'
                },
                {
                    isMe: true,
                    type: 'image',
                    body: 'https://media.giphy.com/media/lXiRyZVS9B79r2YOQ/giphy.gif',
                    timestamp: 'Oct 10, 2017 9:50am'
                },
                {
                    isMe: false,
                    avatar: 'assets/img/hieu.png',
                    type: 'image',
                    body: 'https://media.giphy.com/media/JUMLTR3dHEGpW/giphy.gif',
                    timestamp: 'Oct 10, 2017 9:52am'
                },
                {
                    isMe: true,
                    type: 'text',
                    body: 'Where are you, buddy?',
                    timestamp: 'Oct 10, 2017 9:53am'
                },
                {
                    isMe: false,
                    avatar: 'assets/img/hieu.png',
                    type: 'text',
                    body: 'I\'m almost there',
                    timestamp: 'Oct 10, 2017 9:53am'
                }
            ];
        }
    };
    ChatPage.prototype.sendGif = function (imageUrl) {
        this.messages.push({
            isMe: true,
            type: 'image',
            body: imageUrl,
            timestamp: 'Oct 13, 2017 9:53am'
        });
        this.scrollBottom();
        this.fakeReply();
    };
    ChatPage.prototype.sendText = function () {
        this.messages.push({
            isMe: true,
            type: 'text',
            body: this.typingMessage,
            timestamp: 'Oct 13, 2017 9:55am'
        });
        this.typingMessage = '';
        this.scrollBottom();
        this.fakeReply();
    };
    ChatPage.prototype.fakeReply = function () {
        var _this = this;
        setTimeout(function () {
            _this.messages.push({
                isMe: false,
                avatar: 'assets/img/hieu.png',
                type: 'text',
                body: 'Nice. Keep typing dude',
                timestamp: 'Oct 10, 2017 9:55am'
            });
            _this.scrollBottom();
        }, 500);
    };
    ChatPage.prototype.scrollBottom = function () {
        this.content.resize();
        this.content.scrollTo(0, this.content.scrollHeight, 350);
    };
    ChatPage.prototype.toggleGiphy = function () {
        this.showGiphy = !this.showGiphy;
        this.content.resize();
    };
    return ChatPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
], ChatPage.prototype, "content", void 0);
ChatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-chat',template:/*ion-inline-start:"/Users/T0mpkinz/Documents/anime/AnimeTinder/src/pages/chat/chat.html"*/'<ion-header no-border class="header-shadow">\n  <ion-navbar color="white">\n    <ion-title>\n      <div class="avatar-title">\n        <demo-avatar [sizeClass]="\'thumb-xs\'"></demo-avatar>\n        <div class="avatar-name">Tindie</div>\n      </div>\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="md-flag" color="danger"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content #content padding>\n  <div class="wrapper text-center h-full" layout vertical center center-center *ngIf="isNewMatch && messages.length == 0">\n    <div>\n      <div class="m-b">\n        <div class="text-lg">You matched with <b>Tindie</b></div>\n        <div>3 hours ago</div>\n      </div>\n      <div class="m-b">\n        <demo-avatar [sizeClass]="\'thumb-xl\'"></demo-avatar>\n      </div>\n      <div class="text-lg">Are your hands tied or something?</div>\n    </div>\n  </div>\n\n  <div class="chat-list" *ngIf="!isNewMatch || messages.length">\n    <div class="chat-item" *ngFor="let item of messages" [ngClass]="{\'me\': item.isMe}">\n      <div class="chat-timestamp">\n        {{item.timestamp}}\n      </div>\n\n      <div class="chat-item-content">\n        <div class="chat-avatar" *ngIf="!item.isMe">\n          <img [src]="item.avatar">\n        </div>\n\n        <div class="chat-item-bubble" [ngClass]="{\'bubble-image\': item.type == \'image\'}">\n          <i class="icon-tail"></i>\n          <div class="chat-body" *ngIf="item.type !== \'image\'" [innerHtml]="item.body | nlbr"></div>\n          <img [src]="item.body" *ngIf="item.type == \'image\'">\n        </div>\n\n        <div class="chat-item-reaction" *ngIf="!item.isMe && item.type == \'image\'">\n          <ion-icon name="md-heart-outline" class="text-muted"></ion-icon>\n        </div>\n      </div>\n\n      <div class="chat-item-status" *ngIf="item.isMe">Sent</div>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer no-border [keyboardAttach]="content">\n  <giphy *ngIf="showGiphy" (onSelect)="sendGif($event)" (onClose)="toggleGiphy()"></giphy>\n\n  <ion-toolbar class="has-elastic-input giphy-input" *ngIf="!showGiphy">\n    <ion-buttons left align-self-bottom class="stick-bottom">\n      <button ion-button small class="button-gif" (click)="toggleGiphy()">\n        GIF\n      </button>\n    </ion-buttons>\n    <ion-textarea fz-elastic [(ngModel)]="typingMessage" placeholder="Type a message"></ion-textarea>\n    <ion-buttons right class="stick-bottom button-submit">\n      <button type="submit" [disabled]="typingMessage.length == 0" ion-button small color="dark" (tap)="sendText(typingMessage)">\n        Send\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/T0mpkinz/Documents/anime/AnimeTinder/src/pages/chat/chat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ChatPage);

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MatchedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MatchedPage = (function () {
    function MatchedPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    MatchedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MatchedPage');
    };
    MatchedPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    return MatchedPage;
}());
MatchedPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-matched',template:/*ion-inline-start:"/Users/T0mpkinz/Documents/anime/AnimeTinder/src/pages/matched/matched.html"*/'<ion-content padding no-bounce class="bg-blur">\n  <div class="h-full" layout vertical center center-center>\n    <div>\n      <div class="text-2x">It\'s a Match!</div>\n      <p class="text-lg">You and A Person have liked <br> each other.</p>\n    </div>\n    <div>\n      <div class="thumb-xl match-avatar match-left">\n        <img class="rounded b b-2x b-white box-shadow" src="assets/img/hieu.png" alt="">\n      </div>\n      <div class="thumb-xl match-avatar match-right">\n        <img class="rounded b b-2x b-white box-shadow" src="assets/img/icon.png" alt="">\n      </div>\n    </div>\n\n    <div>\n      <button ion-button round class="btn-gd m-b" (click)="close()">SEND MESSAGE</button>\n      <button ion-button round class="btn-outline" outline (click)="close()">KEEP SWING</button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/T0mpkinz/Documents/anime/AnimeTinder/src/pages/matched/matched.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
], MatchedPage);

//# sourceMappingURL=matched.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__explore_explore__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_edit_profile_edit__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tinder_plus_tinder_plus__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MePage = (function () {
    function MePage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.currentSlideIndex = 0;
    }
    MePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MePage');
        // this.openProfileEdit();// TODO
    };
    MePage.prototype.slideChanged = function () {
        this.currentSlideIndex = this.slides.getActiveIndex();
    };
    MePage.prototype.goToExplore = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__explore_explore__["a" /* ExplorePage */], {}, {
            direction: 'forward'
        });
    };
    MePage.prototype.openProfile = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */]);
        modal.present();
    };
    MePage.prototype.openProfileEdit = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__profile_edit_profile_edit__["a" /* ProfileEditPage */]);
        modal.present();
    };
    MePage.prototype.openSettings = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__settings_settings__["a" /* SettingsPage */]);
        modal.present();
    };
    MePage.prototype.openTinderPlus = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__tinder_plus_tinder_plus__["a" /* TinderPlusPage */]);
        modal.present();
    };
    return MePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
], MePage.prototype, "slides", void 0);
MePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-me',template:/*ion-inline-start:"/Users/T0mpkinz/Documents/anime/AnimeTinder/src/pages/me/me.html"*/'<ion-header no-border>\n  <ion-navbar color="white" hideBackButton>\n    <ion-title>\n      <button ion-button icon-only clear>\n        <ion-icon name="md-person" color="danger"></ion-icon>\n      </button>\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button clear (click)="goToExplore()">\n        <img src="assets/img/logo_bw.png" width="24" alt="">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce class="bg-custom">\n  <div layout vertical>\n    <div flex three class="bg-white">\n      <div class="wrapper text-center">\n        <div class="big-thumb" (click)="openProfile()">\n          <img src="assets/img/hieu.png" class="rounded box-shadow" alt="">\n        </div>\n        <div class="text-2x">Hieu, 29</div>\n        <div class="">Front-end dev. UX/UI lover</div>\n      </div>\n\n      <div>\n        <ion-grid>\n          <ion-row>\n            <ion-col col-6 class="text-center b-r b-light">\n              <button ion-button icon-only color="light" class="button-muted" (click)="openSettings()">\n                <ion-icon name="md-settings"></ion-icon>\n              </button>\n              <div class="text-muted text-xs l-s-1x m-t-xs">SETTINGS</div>\n            </ion-col>\n            <ion-col col-6 class="text-center">\n              <button ion-button icon-only color="light" class="button-muted" (click)="openProfileEdit()">\n                <ion-icon name="md-create"></ion-icon>\n              </button>\n              <div class="text-muted text-xs l-s-1x m-t-xs">EDIT INFO</div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n\n    <div flex two class="me-bottom-bg">\n      <div class="oval"></div>\n\n      <ion-slides pager class="bottom-slides" autoplay="3000" (ionSlideDidChange)="slideChanged()">\n        <ion-slide>\n          <div class="slide-title">\n            <ion-icon name="md-flame" color="gold"></ion-icon>\n            Get Tinder Gold\n          </div>\n          <p>See who Likes You & more</p>\n        </ion-slide>\n        <ion-slide>\n          <div class="slide-title">\n            <ion-icon name="ios-flash" color="superlike"></ion-icon>\n            Get Matches Faster\n          </div>\n          <p>Boost your profile once a month</p>\n        </ion-slide>\n        <ion-slide>\n          <div class="slide-title">\n            <ion-icon name="md-star" color="star"></ion-icon>\n            Stand Out with Super Likes\n          </div>\n          <p>You\'re 3x more likely to get a match!</p>\n        </ion-slide>\n        <ion-slide>\n          <div class="slide-title">\n            <ion-icon name="md-pin" color="superlike"></ion-icon>\n            Swipe Around The World\n          </div>\n          <p>Passport to anywhere with Tinder Plus!</p>\n        </ion-slide>\n      </ion-slides>\n\n      <div class="wrapper text-center">\n        <button *ngIf="currentSlideIndex == 0" ion-button color="light" class="btn-default" (click)="openTinderPlus()">\n          <span ion-text color="gold">GET TINDER GOLD</span>\n        </button>\n\n        <button *ngIf="currentSlideIndex != 0" ion-button color="light" class="btn-default" (click)="openTinderPlus()">\n          MY TINDER PLUS\n        </button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/T0mpkinz/Documents/anime/AnimeTinder/src/pages/me/me.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], MePage);

//# sourceMappingURL=me.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__explore_explore__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessagingPage = (function () {
    function MessagingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MessagingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MessagingPage');
    };
    MessagingPage.prototype.goToChat = function (isNewMatch) {
        if (isNewMatch === void 0) { isNewMatch = false; }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* ChatPage */], { isNewMatch: isNewMatch });
    };
    MessagingPage.prototype.goToExplore = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__explore_explore__["a" /* ExplorePage */], {}, {
            direction: 'back'
        });
    };
    return MessagingPage;
}());
MessagingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-messaging',template:/*ion-inline-start:"/Users/T0mpkinz/Documents/anime/AnimeTinder/src/pages/messaging/messaging.html"*/'<ion-header no-border>\n  <ion-navbar color="white" hideBackButton>\n    <ion-buttons start>\n      <button ion-button clear (click)="goToExplore()">\n        <img src="assets/img/logo_bw.png" width="24" alt="">\n      </button>\n    </ion-buttons>\n    <ion-title>\n      <button ion-button icon-only clear>\n        <ion-icon name="ios-chatbubbles" color="danger"></ion-icon>\n      </button>\n    </ion-title>\n  </ion-navbar>\n\n  <ion-toolbar color="white">\n    <ion-searchbar placeholder="Search Matches"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div>\n    <div class="wrapper-xs padder">\n      <div ion-text color="danger" class="font-bold">\n        New Matches\n        <ion-badge color="danger">1</ion-badge>\n      </div>\n    </div>\n    <div class="wrapper-xs padder matches-thumbs">\n      <ion-scroll scrollX="true">\n        <div class="thumbs-wrapper">\n          <div class="matches-thumb" *ngFor="let i of [0,1,2,3,4,5,6]" (click)="goToChat(true)">\n            <demo-avatar [sizeClass]="\'thumb-md\'"></demo-avatar>\n            <div class="online-status"></div>\n            <div class="text-center text-ellipsis">Tindie</div>\n          </div>\n        </div>\n      </ion-scroll>\n    </div>\n  </div>\n\n  <div>\n    <div class="wrapper-xs padder">\n      <div ion-text color="danger" class="font-bold">\n        Messages\n      </div>\n    </div>\n    <div class="wrapper-xs padder-sm">\n      <ion-row align-items-center (click)="goToChat()">\n        <ion-col col-auto>\n          <demo-avatar [sizeClass]="\'thumb-md\'"></demo-avatar>\n        </ion-col>\n        <ion-col>\n          <div>\n            <div class="text-lg">Tinder Match</div>\n            <div class="text-muted">Sent you a GIPHY</div>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row align-items-center (click)="goToChat()">\n        <ion-col col-auto>\n          <demo-avatar [sizeClass]="\'thumb-md\'"></demo-avatar>\n        </ion-col>\n        <ion-col>\n          <div>\n            <div class="text-lg">Another Match</div>\n            <div class="text-muted">Sent you a GIPHY</div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/T0mpkinz/Documents/anime/AnimeTinder/src/pages/messaging/messaging.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], MessagingPage);

//# sourceMappingURL=messaging.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.distance = 80;
        this.ageRange = { lower: 18, upper: 30 };
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-settings',template:/*ion-inline-start:"/Users/T0mpkinz/Documents/anime/AnimeTinder/src/pages/settings/settings.html"*/'<ion-header no-border>\n  <ion-navbar color="white">\n    <ion-title>Settings</ion-title>\n\n    <ion-buttons end>\n      <button ion-button clear color="danger" (click)="close()">\n        Done\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="bg-custom">\n  <ion-card class="card-custom text-center wrapper">\n    <div class="text-xl font-bold">\n      <ion-icon name="md-flame" color="gold"></ion-icon>\n      tinder\n      <span class="text-xs" ion-text color="gold">GOLD</span>\n    </div>\n    <div color="muted" ion-text>\n      Unlock Our Most Exclusive Features\n    </div>\n  </ion-card>\n\n  <ion-card class="card-custom text-center wrapper">\n    <div class="text-xl font-bold">\n      <ion-icon name="md-flame" color="danger"></ion-icon>\n      tinder\n      <span ion-text color="danger">+</span>\n    </div>\n    <div color="muted" ion-text>\n      Unlimited Likes & More!\n    </div>\n  </ion-card>\n\n  <ion-row>\n    <ion-col col-6>\n      <div class="card-custom text-center wrapper-sm m-l-sm">\n        <button ion-button color="white" class="button-superlike">\n          <ion-icon name="ios-flash" color="superlike"></ion-icon>\n        </button>\n        <div class="font-bold" ion-text color="superlike">\n          Get Boosts\n        </div>\n      </div>\n    </ion-col>\n    <ion-col col-6>\n      <div class="card-custom text-center wrapper-sm m-r-sm">\n        <button ion-button color="white" class="button-star">\n          <ion-icon name="md-star" color="star"></ion-icon>\n        </button>\n        <div class="font-bold" ion-text color="star">\n          Get Super Likes\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <ion-list>\n    <ion-list-header>\n      DISCOVERY SETTINGS\n    </ion-list-header>\n    <button ion-item>\n      Location\n      <ion-note item-end>\n        My Current Location\n        <br>\n        <span class="text-xs">Singapore</span>\n      </ion-note>\n    </button>\n    <ion-item class="line-merge-down">\n      Maximum Distance\n      <ion-note item-end>\n        {{distance}}km\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-range min="2" max="160" [(ngModel)]="distance" color="danger"></ion-range>\n    </ion-item>\n    <button ion-item>\n      Gender\n      <ion-note item-end>\n        Women\n      </ion-note>\n    </button>\n    <ion-item class="line-merge-down">\n      Age Range\n      <ion-note item-end>\n        {{ageRange.lower}}-{{ageRange.upper}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-range dualKnobs="true" [(ngModel)]="ageRange" min="18" max="65" color="danger"></ion-range>\n    </ion-item>\n  </ion-list>\n\n  <ion-list no-lines>\n    <ion-item>\n      <ion-label>Show me on Tinder</ion-label>\n      <ion-toggle color="danger" checked="true"></ion-toggle>\n    </ion-item>\n    <div class="padder text-muted text-xs m-t-xs">\n      While turned off, you will not be shown in the card stack. You can still see and chat with your matches.\n    </div>\n  </ion-list>\n\n  <ion-list no-lines>\n    <ion-list-header>\n      WEB PROFILE\n    </ion-list-header>\n    <button ion-item>\n      Username\n      <ion-note item-end>\n        Claim yours\n      </ion-note>\n    </button>\n    <div class="padder text-muted text-xs m-t-xs">\n      Create a public Username. Share your Username. Have people all over the world swipe you on Tinder.\n    </div>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      NOTIFICATIONS\n    </ion-list-header>\n    <ion-item>\n      <ion-label>New Matches</ion-label>\n      <ion-toggle color="danger" checked="true"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>Messages</ion-label>\n      <ion-toggle color="danger" checked="true"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>Message Likes</ion-label>\n      <ion-toggle color="danger" checked="true"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>Super Likes</ion-label>\n      <ion-toggle color="danger" checked="true"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>In-App Vibrations</ion-label>\n      <ion-toggle color="danger" checked="false"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>In-App Sounds</ion-label>\n      <ion-toggle color="danger" checked="true"></ion-toggle>\n    </ion-item>\n  </ion-list>\n\n  <ion-list no-lines>\n    <ion-item text-center class="m-b-sm">\n      Restore Purchases\n    </ion-item>\n    <ion-item text-center>\n      Share Tinder\n    </ion-item>\n  </ion-list>\n\n  <ion-list no-lines>\n    <ion-list-header>\n      CONTACT US\n    </ion-list-header>\n    <button ion-item>\n      Help & Support\n    </button>\n  </ion-list>\n\n  <ion-list no-lines>\n    <ion-list-header>\n      COMMUNITY\n    </ion-list-header>\n    <button ion-item>\n      Community Guidelines\n    </button>\n    <button ion-item>\n      Safety Tips\n    </button>\n  </ion-list>\n\n  <ion-list no-lines>\n    <ion-list-header>\n      LEGAL\n    </ion-list-header>\n    <button ion-item>\n      Privacy Policy\n    </button>\n    <button ion-item>\n      Terms of Service\n    </button>\n    <button ion-item>\n      Licenses\n    </button>\n  </ion-list>\n\n  <ion-list no-lines>\n    <ion-item text-center class="m-b-sm">\n      Log Out\n    </ion-item>\n    <div class="text-center m-b">\n      <div class="thumb-sm">\n        <img src="assets/img/logo.png" alt="">\n      </div>\n      <div>Version 8.4.0</div>\n    </div>\n    <ion-item text-center>\n      Delete Account\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/T0mpkinz/Documents/anime/AnimeTinder/src/pages/settings/settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TinderPlusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TinderPlusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TinderPlusPage = (function () {
    function TinderPlusPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    TinderPlusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TinderPlusPage');
    };
    TinderPlusPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    return TinderPlusPage;
}());
TinderPlusPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-tinder-plus',template:/*ion-inline-start:"/Users/T0mpkinz/Documents/anime/AnimeTinder/src/pages/tinder-plus/tinder-plus.html"*/'<ion-header no-border class="header-shadow">\n  <ion-navbar color="white">\n    <ion-title>Tinder Plus</ion-title>\n\n    <ion-buttons end>\n      <button ion-button clear color="danger" (click)="close()">\n        Done\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="bg-custom">\n  <div class="m-t-sm m-b-sm tinder-plus-banner">\n    <img src="assets/img/plus/tinder_plus_banner.png" alt="">\n    <div class="cta">\n      <div class="text-muted">\n        POWER ON\n      </div>\n      <button ion-button color="danger" round>\n        <b>Get Tinder Plus</b>\n      </button>\n    </div>\n  </div>\n\n  <ion-list class="m-b-sm">\n    <ion-item text-wrap>\n      <ion-thumbnail item-start>\n        <img src="assets/img/plus/tinder_plus_icon_1.png">\n      </ion-thumbnail>\n      <h2>Unlimited Right Swipes</h2>\n      <p>Swipe as much as you like</p>\n    </ion-item>\n    <ion-item text-wrap>\n      <ion-label>\n        Unlimited Likes\n        <p>Give me the ability to like as many people as I want</p>\n      </ion-label>\n      <ion-toggle color="danger" checked="true"></ion-toggle>\n    </ion-item>\n  </ion-list>\n\n  <ion-list class="m-b-sm">\n    <ion-item text-wrap>\n      <ion-thumbnail item-start>\n        <img src="assets/img/plus/tinder_plus_icon_2.png">\n      </ion-thumbnail>\n      <h2>Skip The Line</h2>\n      <p>Be the top profile in your area for 30 minutes to get more matches</p>\n    </ion-item>\n    <ion-item text-wrap>\n      <ion-label>\n        Tinder Boost\n        <p>Give me 1 free Boost every month</p>\n      </ion-label>\n      <ion-toggle color="danger" checked="false"></ion-toggle>\n    </ion-item>\n  </ion-list>\n\n  <ion-list class="m-b-sm">\n    <ion-item text-wrap>\n      <ion-thumbnail item-start>\n        <img src="assets/img/plus/tinder_plus_icon_3.png">\n      </ion-thumbnail>\n      <h2>Control Who You See</h2>\n      <p>It\'s simple now to choose the type of people you want to see on Tinder</p>\n    </ion-item>\n    <ion-item text-wrap>\n      Balanced Recommendations\n      <p>See the most relevant people to you (default setting)</p>\n      <ion-icon item-end color="danger" name="md-checkmark"></ion-icon>\n    </ion-item>\n    <ion-item text-wrap>\n      Recently Active\n      <p>See the most recently active people first</p>\n    </ion-item>\n  </ion-list>\n\n  <ion-list class="m-b-sm">\n    <ion-item text-wrap>\n      <ion-thumbnail item-start>\n        <img src="assets/img/plus/tinder_plus_icon_4.png">\n      </ion-thumbnail>\n      <h2>Control Who Sees You</h2>\n      <p>Only be shown to certain types of people on Tinder</p>\n    </ion-item>\n    <ion-item text-wrap>\n      Standard\n      <p>Only be shown to certain types of people for individual recommendations</p>\n      <ion-icon item-end color="danger" name="md-checkmark"></ion-icon>\n    </ion-item><ion-item text-wrap>\n      Only People I\'ve Liked\n      <p>Only people I\'ve right swiped will see me</p>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item text-wrap>\n      <ion-thumbnail item-start>\n        <img src="assets/img/plus/tinder_plus_icon_5.png">\n      </ion-thumbnail>\n      <h2>Passport To Any Location</h2>\n      <p>Match with people all around the world. Paris. Los Angeles. Sydney. Go!</p>\n    </ion-item>\n    <button ion-item>\n      Location\n      <div item-end>Singapore</div>\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/T0mpkinz/Documents/anime/AnimeTinder/src/pages/tinder-plus/tinder-plus.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
], TinderPlusPage);

//# sourceMappingURL=tinder-plus.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__explore_explore__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WelcomePage = (function () {
    function WelcomePage(navCtrl, navParams, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.introSlides = [
            {
                title: 'Discover new and interesting <br> people nearby',
                image: 'assets/img/intro/intro_1.png'
            },
            {
                title: 'Swipe Right to like someone <br /> or Swipe Left to pass',
                image: 'assets/img/intro/intro_2.png'
            },
            {
                title: 'If they also Swipe Right <br /> then "It\'s a Match!"',
                image: 'assets/img/intro/intro_3.png'
            },
            {
                title: 'Only people you\'ve matched <br /> with can message you',
                image: 'assets/img/intro/intro_4.png'
            }
        ];
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
    };
    WelcomePage.prototype.goToSwipe = function () {
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__explore_explore__["a" /* ExplorePage */])
            .then(function () {
            console.log('Welcome to your ExplorePage!');
        });
    };
    return WelcomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slides'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
], WelcomePage.prototype, "slides", void 0);
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-welcome',template:/*ion-inline-start:"/Users/T0mpkinz/Documents/anime/AnimeTinder/src/pages/welcome/welcome.html"*/'<ion-content padding>\n  <div layout vertical center>\n    <ion-slides #slides pager flex>\n      <ion-slide *ngFor="let slide of introSlides">\n        <h3 class="font-thin" [innerHTML]="slide.title"></h3>\n        <img [src]="slide.image">\n      </ion-slide>\n    </ion-slides>\n\n    <div class="text-center">\n      <div>\n        <button ion-button round class="btn-tinder-login m-b-sm" (click)="goToSwipe()">LOG IN WITH FACEBOOK</button>\n      </div>\n      <div>\n        <button ion-button round small color="muted" outline (click)="goToSwipe()">LOG IN WITH PHONE NUMBER</button>\n      </div>\n\n      <div class="wrapper text-muted">\n        <p>We don\'t post anything to Facebook.\n          <br>\n          By signing in, you agree to our <span class="text-u-l">Terms of Service</span> and <span class="text-u-l">Privacy Policy</span>\n        </p>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/T0mpkinz/Documents/anime/AnimeTinder/src/pages/welcome/welcome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chat/chat.module": [
		609,
		9
	],
	"../pages/instagram-photo/instagram-photo.module": [
		610,
		8
	],
	"../pages/matched/matched.module": [
		611,
		7
	],
	"../pages/me/me.module": [
		612,
		6
	],
	"../pages/messaging/messaging.module": [
		613,
		5
	],
	"../pages/profile-edit/profile-edit.module": [
		614,
		4
	],
	"../pages/profile/profile.module": [
		615,
		3
	],
	"../pages/settings/settings.module": [
		616,
		2
	],
	"../pages/tinder-plus/tinder-plus.module": [
		617,
		1
	],
	"../pages/welcome/welcome.module": [
		618,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 200;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstagramPhotoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the InstagramPhotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InstagramPhotoPage = (function () {
    function InstagramPhotoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.currentSlideIndex = 0;
        this.slideImages = [
            {
                page: [
                    { url: 'assets/img/instagram/insta_0.jpg' },
                    { url: 'assets/img/instagram/insta_1.jpg' },
                    { url: 'assets/img/instagram/insta_2.jpg' },
                    { url: 'assets/img/instagram/insta_3.jpg' },
                    { url: 'assets/img/instagram/insta_4.jpg' },
                    { url: 'assets/img/instagram/insta_5.jpg' }
                ]
            },
            {
                page: [
                    { url: 'assets/img/instagram/insta_6.jpg' },
                    { url: 'assets/img/instagram/insta_7.jpg' }
                ]
            }
        ];
    }
    InstagramPhotoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InstagramPhotoPage');
    };
    InstagramPhotoPage.prototype.slideChanged = function () {
        this.currentSlideIndex = this.slides.getActiveIndex();
    };
    return InstagramPhotoPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
], InstagramPhotoPage.prototype, "slides", void 0);
InstagramPhotoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'instagram-photo',template:/*ion-inline-start:"/Users/T0mpkinz/Documents/anime/AnimeTinder/src/pages/instagram-photo/instagram-photo.html"*/'<div>\n  <div class="color-black font-bold text-sm m-b pull-left">1142 Instagram Photos</div>\n  <div class="insta-pager">\n    <div class="bullet" *ngFor="let bullet of slideImages; let i = index" [ngClass]="{active: i == currentSlideIndex}"></div>\n  </div>\n</div>\n\n<ion-slides class="insta-slides" (ionSlideDidChange)="slideChanged()">\n  <ion-slide *ngFor="let slide of slideImages; let i = index">\n    <div *ngFor="let item of slide.page" [style.backgroundImage]="\'url(\' + item.url + \')\'" class="div-img r-3x"></div>\n  </ion-slide>\n</ion-slides>\n'/*ion-inline-end:"/Users/T0mpkinz/Documents/anime/AnimeTinder/src/pages/instagram-photo/instagram-photo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], InstagramPhotoPage);

//# sourceMappingURL=instagram-photo.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(281);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_explore_explore__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_matched_matched__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_me_me__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_edit_profile_edit__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_instagram_photo_instagram_photo__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_messaging_messaging__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_chat_chat__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tinder_plus_tinder_plus__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_keyboard__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angular2_swing__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng_elastic__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng_elastic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_ng_elastic__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_explore_explore__["a" /* ExplorePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_matched_matched__["a" /* MatchedPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_me_me__["a" /* MePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_profile_edit_profile_edit__["a" /* ProfileEditPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_instagram_photo_instagram_photo__["a" /* InstagramPhotoPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_messaging_messaging__["a" /* MessagingPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_tinder_plus_tinder_plus__["a" /* TinderPlusPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_21_angular2_swing__["SwingModule"],
            __WEBPACK_IMPORTED_MODULE_22_ng_elastic__["ElasticModule"],
            __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* DirectivesModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                mode: 'ios',
                backButtonText: '',
            }, {
                links: [
                    { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/instagram-photo/instagram-photo.module#InstagramPhotoPageModule', name: 'InstagramPhotoPage', segment: 'instagram-photo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/matched/matched.module#MatchedPageModule', name: 'MatchedPage', segment: 'matched', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/me/me.module#MePageModule', name: 'MePage', segment: 'me', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/messaging/messaging.module#MessagingPageModule', name: 'MessagingPage', segment: 'messaging', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile-edit/profile-edit.module#ProfileEditPageModule', name: 'ProfileEditPage', segment: 'profile-edit', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tinder-plus/tinder-plus.module#TinderPlusPageModule', name: 'TinderPlusPage', segment: 'tinder-plus', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_explore_explore__["a" /* ExplorePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_matched_matched__["a" /* MatchedPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_me_me__["a" /* MePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_profile_edit_profile_edit__["a" /* ProfileEditPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_instagram_photo_instagram_photo__["a" /* InstagramPhotoPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_messaging_messaging__["a" /* MessagingPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_tinder_plus_tinder_plus__["a" /* TinderPlusPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__["a" /* ImagePicker */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__ = __webpack_require__(146);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, keyboard) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            keyboard.disableScroll(true);
            keyboard.hideKeyboardAccessoryBar(true);
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/T0mpkinz/Documents/anime/AnimeTinder/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/T0mpkinz/Documents/anime/AnimeTinder/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keyboard_attach_keyboard_attach__ = __webpack_require__(601);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DirectivesModule = (function () {
    function DirectivesModule() {
    }
    return DirectivesModule;
}());
DirectivesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__keyboard_attach_keyboard_attach__["a" /* KeyboardAttachDirective */]],
        imports: [],
        exports: [__WEBPACK_IMPORTED_MODULE_1__keyboard_attach_keyboard_attach__["a" /* KeyboardAttachDirective */]]
    })
], DirectivesModule);

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyboardAttachDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_keyboard__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/*
  Source: https://gist.github.com/Manduro/bc121fd39f21558df2a952b39e907754
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * @name KeyboardAttachDirective
 * @source https://gist.github.com/Manduro/bc121fd39f21558df2a952b39e907754
 * @description
 * The `keyboardAttach` directive will cause an element to float above the
 * keyboard when the keyboard shows. Currently only supports the `ion-footer` element.
 *
 * ### Notes
 * - This directive requires [Ionic Native](https://github.com/driftyco/ionic-native)
 * and the [Ionic Keyboard Plugin](https://github.com/driftyco/ionic-plugin-keyboard).
 * - Currently only tested to work on iOS.
 * - If there is an input in your footer, you will need to set
 *   `Keyboard.disableScroll(true)`.
 *
 * @usage
 *
 * ```html
 * <ion-content #content>
 * </ion-content>
 *
 * <ion-footer [keyboardAttach]="content">
 *   <ion-toolbar>
 *     <ion-item>
 *       <ion-input></ion-input>
 *     </ion-item>
 *   </ion-toolbar>
 * </ion-footer>
 * ```
 */
var KeyboardAttachDirective = (function () {
    function KeyboardAttachDirective(elementRef, keyboard, platform) {
        this.elementRef = elementRef;
        this.keyboard = keyboard;
        this.platform = platform;
    }
    KeyboardAttachDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready()
            .then(function () {
            if (_this.platform.is('cordova') && _this.platform.is('ios')) {
                _this.keyboard.disableScroll(true);
                _this.onShowSubscription = _this.keyboard.onKeyboardShow().subscribe(function (e) { return _this.onShow(e); });
                _this.onHideSubscription = _this.keyboard.onKeyboardHide().subscribe(function () { return _this.onHide(); });
            }
        });
    };
    KeyboardAttachDirective.prototype.ngOnDestroy = function () {
        if (this.platform.is('cordova') && this.platform.is('ios')) {
            this.keyboard.disableScroll(false);
        }
        if (this.onShowSubscription) {
            this.onShowSubscription.unsubscribe();
        }
        if (this.onHideSubscription) {
            this.onHideSubscription.unsubscribe();
        }
    };
    KeyboardAttachDirective.prototype.onShow = function (e) {
        var keyboardHeight = e.keyboardHeight || (e.detail && e.detail.keyboardHeight);
        this.setElementPosition(keyboardHeight);
    };
    ;
    KeyboardAttachDirective.prototype.onHide = function () {
        this.setElementPosition(0);
    };
    ;
    KeyboardAttachDirective.prototype.setElementPosition = function (pixels) {
        this.elementRef.nativeElement.style.paddingBottom = pixels + 'px';
        this.content.resize();
        this.content.scrollTo(0, this.content.scrollHeight, 350);
    };
    return KeyboardAttachDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('keyboardAttach'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Content */])
], KeyboardAttachDirective.prototype, "content", void 0);
KeyboardAttachDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[keyboardAttach]' // Attribute selector
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_keyboard__["a" /* Keyboard */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */]])
], KeyboardAttachDirective);

//# sourceMappingURL=keyboard-attach.js.map

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__demo_avatar_demo_avatar__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__giphy_giphy__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__giphy_nlbr_pipe__ = __webpack_require__(606);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__demo_avatar_demo_avatar__["a" /* DemoAvatarComponent */],
            __WEBPACK_IMPORTED_MODULE_4__giphy_giphy__["a" /* GiphyComponent */],
            __WEBPACK_IMPORTED_MODULE_5__giphy_nlbr_pipe__["a" /* NlbrPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__demo_avatar_demo_avatar__["a" /* DemoAvatarComponent */],
            __WEBPACK_IMPORTED_MODULE_4__giphy_giphy__["a" /* GiphyComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__demo_avatar_demo_avatar__["a" /* DemoAvatarComponent */],
            __WEBPACK_IMPORTED_MODULE_4__giphy_giphy__["a" /* GiphyComponent */],
            __WEBPACK_IMPORTED_MODULE_5__giphy_nlbr_pipe__["a" /* NlbrPipe */]
        ]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoAvatarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the DemoAvatarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var DemoAvatarComponent = (function () {
    function DemoAvatarComponent() {
        this.sizeClass = 'thumb'; // Can be 'thumb-xs'-'thumb-sm'-'thumb-md'-'thumb-lg'
        this.images = [
            'adam.png',
            'ben.png',
            'hieu.png',
            'max.png',
            'mike.png',
            'perry.png'
        ];
        var randomIndex = Math.floor(Math.random() * (this.images.length - 1));
        this.imageUrl = "assets/img/" + this.images[randomIndex];
    }
    return DemoAvatarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], DemoAvatarComponent.prototype, "sizeClass", void 0);
DemoAvatarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'demo-avatar',template:/*ion-inline-start:"/Users/T0mpkinz/Documents/anime/AnimeTinder/src/components/demo-avatar/demo-avatar.html"*/'<img class="rounded" [ngClass]="sizeClass" [src]="imageUrl">\n'/*ion-inline-end:"/Users/T0mpkinz/Documents/anime/AnimeTinder/src/components/demo-avatar/demo-avatar.html"*/
    }),
    __metadata("design:paramtypes", [])
], DemoAvatarComponent);

//# sourceMappingURL=demo-avatar.js.map

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GiphyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__giphy_service__ = __webpack_require__(605);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GiphyComponent = (function () {
    function GiphyComponent(GiphyService) {
        var _this = this;
        this.GiphyService = GiphyService;
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isGiphyLoading = false;
        this.giphyQuery = '';
        this.queryControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]();
        this.getTrending();
        this.queryControl.valueChanges
            .debounceTime(1000)
            .subscribe(function (newValue) { return newValue ? _this.searchGif(newValue) : _this.getTrending(); });
    }
    GiphyComponent.prototype.getTrending = function () {
        var _this = this;
        this.isGiphyLoading = true;
        this.GiphyService.trending()
            .subscribe(function (res) {
            _this.gifs = res.data;
            _this.isGiphyLoading = false;
        });
    };
    GiphyComponent.prototype.searchGif = function (query) {
        var _this = this;
        this.isGiphyLoading = true;
        this.GiphyService.search(query)
            .subscribe(function (res) {
            _this.gifs = res.data;
            _this.isGiphyLoading = false;
        });
    };
    GiphyComponent.prototype.select = function (gif) {
        this.onSelect.emit(gif.images.fixed_height_small.url);
    };
    GiphyComponent.prototype.close = function () {
        this.queryControl.reset();
        this.onClose.emit();
    };
    return GiphyComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], GiphyComponent.prototype, "onSelect", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], GiphyComponent.prototype, "onClose", void 0);
GiphyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'giphy',template:/*ion-inline-start:"/Users/T0mpkinz/Documents/anime/AnimeTinder/src/components/giphy/giphy.html"*/'<div class="giphy-component">\n  <div class="giphy-container">\n    <div class="giphy-loading" *ngIf="isGiphyLoading">\n      <ion-spinner></ion-spinner>\n    </div>\n    <ion-scroll scrollX="true" class="scroll-horizontal" *ngIf="!isGiphyLoading">\n      <div class="text-center scroll-item" *ngFor="let gif of gifs" (click)="select(gif)">\n        <img [src]="gif.images.fixed_height_small.url" alt="">\n      </div>\n    </ion-scroll>\n  </div>\n\n  <ion-toolbar>\n    <ion-buttons left (click)="close()">\n      <button ion-button color="danger" class="giphy-close">\n        <ion-icon name="md-close" danger></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-input type="text" [formControl]="queryControl" placeholder="Search for a GIF..."></ion-input>\n  </ion-toolbar>\n</div>\n'/*ion-inline-end:"/Users/T0mpkinz/Documents/anime/AnimeTinder/src/components/giphy/giphy.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__giphy_service__["a" /* GiphyService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__giphy_service__["a" /* GiphyService */]])
], GiphyComponent);

//# sourceMappingURL=giphy.js.map

/***/ }),

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GiphyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GiphyService = (function () {
    function GiphyService(http) {
        this.http = http;
        this.API_KEY = 'dc6zaTOxFJmzC';
        this.ENDPOINT = 'http://api.giphy.com/v1/gifs';
    }
    GiphyService.prototype.search = function (query) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set('q', query);
        params.set('api_key', this.API_KEY);
        return this.http.get(this.ENDPOINT + "/search", {
            search: params
        }).map(function (res) { return res.json(); });
    };
    GiphyService.prototype.trending = function () {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set('api_key', this.API_KEY);
        return this.http.get(this.ENDPOINT + "/trending", {
            search: params
        }).map(function (res) { return res.json(); });
    };
    return GiphyService;
}());
GiphyService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], GiphyService);

//# sourceMappingURL=giphy.service.js.map

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NlbrPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
 * Replace newline characters with HTML <br>
 * Simpler solution: using CSS white-space: pre
*/
var NlbrPipe = (function () {
    function NlbrPipe() {
    }
    NlbrPipe.prototype.transform = function (value) {
        if (!value)
            return value;
        return value.replace(/\n/ig, '<br>');
    };
    return NlbrPipe;
}());
NlbrPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'nlbr'
    })
], NlbrPipe);

//# sourceMappingURL=nlbr.pipe.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_swing__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__matched_matched__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__me_me__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__messaging_messaging__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile__ = __webpack_require__(80);
/*
  Reference: [How To Build Ionic Tinder Cards Using Angular 2 Swing](https://devdactic.com/ionic-2-tinder-cards)
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ExplorePage = (function () {
    function ExplorePage(navCtrl, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.isLoading = true;
        this.stackConfig = {
            // Default setting only allows UP, LEFT and RIGHT so you can override this as below
            allowedDirections: [
                __WEBPACK_IMPORTED_MODULE_4_angular2_swing__["Direction"].LEFT,
                __WEBPACK_IMPORTED_MODULE_4_angular2_swing__["Direction"].RIGHT
            ],
            throwOutConfidence: function (offsetX, offsetY, element) {
                return Math.min(Math.abs(offsetX) / (element.offsetWidth / 2), 1);
            },
            transform: function (element, x, y, r) {
                _this.onItemMove(element, x, y, r);
            },
            throwOutDistance: function (d) {
                return 800;
            }
        };
    }
    ExplorePage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.cards = [];
        this.users = [
            {
                id: 1,
                name: 'Hieu Pham',
                age: 29,
                job_title: 'UX/UI lover',
                profile_image_url: 'assets/img/hieu.png'
            },
            {
                id: 2,
                name: 'Adam Saddler',
                age: 39,
                job_title: 'Ionic Team is awesome',
                profile_image_url: 'assets/img/adam.png'
            },
            {
                id: 3,
                name: 'Ben Affleck',
                age: 30,
                job_title: 'Another awesome Ionic guy',
                profile_image_url: 'assets/img/ben.png'
            },
            {
                id: 4,
                name: 'Max Payne',
                age: 35,
                job_title: 'Game character assasin',
                profile_image_url: 'assets/img/max.png'
            },
            {
                id: 5,
                name: 'Big Mike',
                age: 31,
                job_title: 'All guys are awesome',
                profile_image_url: 'assets/img/mike.png'
            },
            {
                id: 6,
                name: 'Perry',
                age: 41,
                job_title: 'Ionic again',
                profile_image_url: 'assets/img/perry.png'
            }
        ];
        this.addNewCard();
        this.addNewCard();
        setTimeout(function () {
            _this.isLoading = false;
        }, 3000);
    };
    // Called whenever we drag an element
    ExplorePage.prototype.onItemMove = function (element, x, y, r) {
        var nope = element.querySelector('.stamp-nope');
        var like = element.querySelector('.stamp-like');
        var caculatedValue = Math.min(100, Math.abs(x) - 20) / 100; // 0 - 1
        if (x < 0 && Math.abs(x) > 20) {
            nope.style.opacity = caculatedValue;
        }
        else {
            like.style.opacity = caculatedValue;
        }
        element.style['transform'] = "translate3d(0, 0, 0) translate(" + x + "px, " + y + "px) rotate(" + r + "deg)";
        // Zoom effect for the cards underneath
        var cardBehind = this.swingCards.toArray()[1].getNativeElement();
        cardBehind.style['transform'] = "scale(" + (0.94 + 0.06 * caculatedValue) + ", " + (0.94 + 0.06 * caculatedValue) + ")";
    };
    // Add new cards to our array
    ExplorePage.prototype.addNewCard = function () {
        var difference = __WEBPACK_IMPORTED_MODULE_3_lodash__["difference"](this.users, this.cards);
        var randomIndex = Math.floor(Math.random() * (difference.length));
        this.cards.push(difference[randomIndex]);
        console.info('CURRENT STACK:', this.cards.map(function (c) { return c.name; }));
    };
    ExplorePage.prototype.disliked = function () {
        this.addNewCard();
        var removedCard = this.cards.shift();
        console.log('You disliked: ' + removedCard.name);
    };
    ExplorePage.prototype.liked = function () {
        this.addNewCard();
        var removedCard = this.cards.shift();
        this.checkMatching(removedCard);
        console.log('You liked: ' + removedCard.name);
    };
    ExplorePage.prototype.checkMatching = function (card) {
        if (card.name == 'Hieu Pham') {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__matched_matched__["a" /* MatchedPage */]);
            modal.present();
        }
    };
    ExplorePage.prototype.goToMe = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__me_me__["a" /* MePage */], {}, {
            direction: 'back'
        });
    };
    ExplorePage.prototype.goToMessaging = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__messaging_messaging__["a" /* MessagingPage */], {}, {
            direction: 'forward'
        });
    };
    ExplorePage.prototype.openProfile = function (isMe) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__profile_profile__["a" /* ProfilePage */], { isMe: isMe });
        modal.present();
    };
    ExplorePage.prototype.getMoreCards = function () {
        if (this.cards.length == 0) {
            this.addNewCard();
        }
    };
    ExplorePage.prototype.trackByFn = function (index, item) {
        return item.id;
    };
    return ExplorePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('cardStack'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_angular2_swing__["SwingStackComponent"])
], ExplorePage.prototype, "swingStack", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('card'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
], ExplorePage.prototype, "swingCards", void 0);
ExplorePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-explore',template:/*ion-inline-start:"/Users/T0mpkinz/Documents/anime/AnimeTinder/src/pages/explore/explore.html"*/'<ion-header no-border>\n  <ion-navbar color="white" hideBackButton>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="goToMe()">\n        <ion-icon name="md-person" color="muted"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title>\n      <img src="assets/img/logo.png" width="24" alt="">\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="goToMessaging()">\n        <ion-icon name="ios-chatbubbles" color="muted"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="swipe-bg" no-bounce>\n  <div class="h-full no-cards" [hidden]="!isLoading" horizontal layout center center-center>\n    <div class="ripple-container">\n      <div class="thumb-lg ripple-trigger">\n        <img src="assets/img/hieu.png" class="rounded b b-2x box-shadow">\n      </div>\n      <div class="ripple-1"></div>\n      <div class="ripple-2"></div>\n    </div>\n  </div>\n\n  <div class="swipe-container" [hidden]="isLoading">\n    <div class="h-full wrapper-sm">\n      <div class="card-stack" swing-stack #cardStack [stackConfig]="stackConfig" (throwoutleft)="disliked(c)" (throwoutright)="liked(c)">\n        <div class="card-item" #card [style.zIndex]="-1 * i" swing-card\n            *ngFor="let c of cards; trackBy: trackByFn; let i = index">\n          <div [style.backgroundImage]="\'url(\' + c.profile_image_url + \')\'" class="div-img h-full r-3x"></div>\n\n          <div class="card-caption" (click)="openProfile(false)">\n            <div class="card-text pull-left">\n              <div class="font-bold text-xl">{{c.name}}, {{c.age}}</div>\n              <div>{{c.job_title}}</div>\n            </div>\n            <div class="pull-right">\n              <ion-icon class="text-2x" name="md-information-circle" color="white"></ion-icon>\n            </div>\n          </div>\n\n          <div class="stamp stamp-like">Like</div>\n          <div class="stamp stamp-nope">Nope</div>\n        </div>\n      </div>\n    </div>\n\n    <div class="bottom-actions" horizontal layout center around-justified>\n      <button ion-button color="white" class="button-revert" (click)="getMoreCards()">\n        <ion-icon name="md-refresh"></ion-icon>\n      </button>\n      <button ion-button color="white" class="button-dislike" (click)="disliked()">\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n      <button ion-button color="white" class="button-star">\n        <ion-icon name="md-star"></ion-icon>\n      </button>\n      <button ion-button color="white" class="button-like" (click)="liked()">\n        <ion-icon name="md-heart"></ion-icon>\n      </button>\n      <button ion-button color="white" class="button-superlike">\n        <ion-icon name="ios-flash"></ion-icon>\n      </button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/T0mpkinz/Documents/anime/AnimeTinder/src/pages/explore/explore.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], ExplorePage);

//# sourceMappingURL=explore.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_edit_profile_edit__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, viewCtrl, statusBar, platform, modalCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.statusBar = statusBar;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.app = app;
        this.currentSlideIndex = 0;
        this.slideImages = [
            { url: 'assets/img/hieu.png' },
            { url: 'assets/img/adam.png' },
            { url: 'assets/img/max.png' }
        ];
        this.isMe = true;
        platform.ready().then(function () {
            statusBar.hide();
        });
        this.isMe = typeof this.navParams.get('isMe') == 'undefined' ? true : this.navParams.get('isMe');
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.slideChanged = function () {
        this.currentSlideIndex = this.slides.getActiveIndex();
    };
    ProfilePage.prototype.close = function () {
        this.statusBar.show();
        this.viewCtrl.dismiss();
    };
    ProfilePage.prototype.edit = function () {
        this.close();
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__profile_edit_profile_edit__["a" /* ProfileEditPage */]);
        modal.present();
    };
    return ProfilePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
], ProfilePage.prototype, "slides", void 0);
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-profile',template:/*ion-inline-start:"/Users/T0mpkinz/Documents/anime/AnimeTinder/src/pages/profile/profile.html"*/'<ion-content class="bottom-padding">\n  <div class="header-cover">\n    <div class="slide-pager" layout horizontal center>\n      <div flex class="pager-bullet" *ngFor="let item of slideImages; let i = index" [ngClass]="{active: i == currentSlideIndex}"></div>\n    </div>\n\n    <ion-slides (ionSlideDidChange)="slideChanged()">\n      <ion-slide *ngFor="let item of slideImages; let i = index">\n        <div [style.backgroundImage]="\'url(\' + item.url + \')\'" class="div-img"></div>\n      </ion-slide>\n    </ion-slides>\n    <button ion-button icon-button color="danger" round class="btn-rounded btn-fab" (click)="close()">\n      <ion-icon name="md-arrow-round-down"></ion-icon>\n    </button>\n  </div>\n\n  <div class="wrapper b-b b-light">\n    <div class="text-xl m-b-sm">\n      <span class="font-bold">Hieu Pham</span>, 29\n    </div>\n    <div class="text-muted l-h text-xs">\n      <ion-icon name="ios-briefcase-outline"></ion-icon>\n      Front-End, UX/UI lover\n      <br>\n      <ion-icon name="ios-pin-outline" class="m-r-xs"></ion-icon>\n      less than a kilometer away\n    </div>\n  </div>\n\n  <div class="wrapper text-muted b-b b-light">\n    A UX/UI lover who has a hobby of making UI clones\n  </div>\n\n  <div class="wrapper text-muted b-b b-light">\n    <div class="color-black font-bold text-sm m-b">My Anthem</div>\n\n    <ion-row class="no-padder" align-items-center>\n      <ion-col>\n        <div class="m-b-sm">Shape of you</div>\n        <div>\n          <ion-icon name="ios-radio" color="like" class="m-r-sm v-align-middle"></ion-icon><span class="text-sm">Ed Sheeran</span>\n        </div>\n      </ion-col>\n      <ion-col col-auto>\n        <div class="thumb-md">\n          <img src="assets/img/instagram/insta_4.jpg" class="r-3x" alt="">\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <ion-list *ngIf="!isMe">\n    <ion-item text-center class="l-s-1x">\n      <div ion-text color="danger" class="text-sm font-bold">\n        RECOMMEND TINDIE\n        <div class="text-xxs">TO A FRIEND</div>\n      </div>\n    </ion-item>\n    <ion-item text-center class="l-s-1x">\n      <div class="text-sm font-bold">\n        REPORT TINDIE\n      </div>\n    </ion-item>\n  </ion-list>\n\n  <div class="wrapper text-muted b-b b-light">\n    <div class="color-black font-bold text-sm m-b">645 Friends For Common Connections</div>\n\n    We compare your Facebook friends with those of your matches to display any common connections.\n  </div>\n\n  <div class="wrapper text-muted b-b b-light">\n    <instagram-photo></instagram-photo>\n  </div>\n\n  <div class="wrapper text-muted b-b b-light">\n    <div class="color-black font-bold text-sm m-b">100 Interests</div>\n\n    <div>\n      <button ion-button outline small color="danger">Uniqlo Singapore</button>\n      <button ion-button outline small color="danger">Uniqlo Singapore</button>\n      <button ion-button outline small color="danger">Uniqlo Singapore</button>\n      <button ion-button outline small color="danger">Uniqlo Singapore</button>\n      <button ion-button outline small color="danger">Uniqlo Singapore</button>\n      <button ion-button outline small color="danger">Uniqlo Singapore</button>\n      <button ion-button outline small color="danger">Uniqlo Singapore</button>\n      <button ion-button outline small color="danger">Uniqlo Singapore</button>\n      <button ion-button outline small color="danger">Uniqlo Singapore</button>\n      <button ion-button outline small color="danger">Uniqlo Singapore</button>\n      <button ion-button outline small color="danger">Uniqlo Singapore</button>\n      <button ion-button outline small color="danger">Uniqlo Singapore</button>\n      <button ion-button outline small color="danger">Uniqlo Singapore</button>\n    </div>\n  </div>\n\n</ion-content>\n\n<div class="bottom-buttons" *ngIf="isMe">\n  <button ion-button color="light" class="btn-default" (click)="edit()">EDIT INFO</button>\n</div>\n\n<div class="bottom-actions bottom-buttons" horizontal layout center center-center *ngIf="!isMe">\n  <button ion-button color="light" class="button-dislike">\n    <ion-icon name="md-close"></ion-icon>\n  </button>\n  <button ion-button color="light" class="button-star">\n    <ion-icon name="md-star"></ion-icon>\n  </button>\n  <button ion-button color="light" class="button-like">\n    <ion-icon name="md-heart"></ion-icon>\n  </button>\n</div>\n'/*ion-inline-end:"/Users/T0mpkinz/Documents/anime/AnimeTinder/src/pages/profile/profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__ = __webpack_require__(232);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
  REMEMBER: Install ImagePicker plugin first (https://ionicframework.com/docs/native/image-picker/)
 */
var ProfileEditPage = (function () {
    function ProfileEditPage(navCtrl, navParams, viewCtrl, imagePicker, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.imagePicker = imagePicker;
        this.app = app;
        this.profileImages = [
            'assets/img/hieu.png',
            'assets/img/hieu.png',
            'assets/img/hieu.png',
            'assets/img/hieu.png',
            'assets/img/hieu.png',
            ''
        ];
    }
    ProfileEditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfileEditPage');
    };
    ProfileEditPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ProfileEditPage.prototype.openPhotoPicker = function (index) {
        var _this = this;
        this.imagePicker.getPictures({ maximumImagesCount: 1 })
            .then(function (results) {
            _this.profileImages[index] = results[0];
        }, function (err) { });
    };
    ProfileEditPage.prototype.removeImage = function (index) {
        this.profileImages[index] = '';
    };
    return ProfileEditPage;
}());
ProfileEditPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-profile-edit',template:/*ion-inline-start:"/Users/T0mpkinz/Documents/anime/AnimeTinder/src/pages/profile-edit/profile-edit.html"*/'<ion-header no-border>\n  <ion-navbar color="white">\n    <ion-title>Edit Info</ion-title>\n\n    <ion-buttons end>\n      <button ion-button clear color="danger" (click)="close()">\n        Done\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="bg-custom">\n  <div class="profile-images-edit">\n    <div class="profile-image" *ngFor="let image of profileImages; let i = index" (click)="openPhotoPicker(i)">\n      <div [style.backgroundImage]="\'url(\' + profileImages[i] + \')\'" class="div-img img-square r-3x"></div>\n      <button ion-button icon-only clear class="btn-edit" (click)="removeImage(i)" *ngIf="profileImages[i] != \'\'">\n        <ion-icon name="md-close" color="danger"></ion-icon>\n      </button>\n      <button ion-button icon-only clear class="btn-edit" *ngIf="profileImages[i] == \'\'">\n        <ion-icon name="md-add-circle" color="danger"></ion-icon>\n      </button>\n    </div>\n  </div>\n\n  <ion-list no-lines>\n    <ion-list-header>\n      ABOUT ME\n    </ion-list-header>\n    <ion-item class="text-muted" text-wrap>\n      <ion-textarea placeholder="Enter a description" value="A UX/UI lover who has a hobby of making UI clones"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-note item-end>\n        <span class="text-xs">435</span>\n      </ion-note>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      CURRENT WORK\n    </ion-list-header>\n    <button ion-item>\n      Front-end dev. UX/UI lover.\n    </button>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      SCHOOL\n    </ion-list-header>\n    <button ion-item>\n      Add school\n    </button>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      INSTAGRAM PHOTOS\n    </ion-list-header>\n    <ion-item>\n      <ion-icon name="logo-instagram" color="danger" item-start></ion-icon>\n      @mrhieu\n      <ion-note item-end>\n        <span class="text-xs">DISCONNECT</span>\n      </ion-note>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      SPOTIFY ANTHEM\n    </ion-list-header>\n    <button ion-item>\n      <ion-icon name="ios-radio" color="like" item-start></ion-icon>\n      Shape of you\n      <p>Ed Sheeran</p>\n    </button>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      TOP SPOTIFY ARTIST\n    </ion-list-header>\n    <ion-item>\n      <ion-icon name="ios-radio" color="like" item-start></ion-icon>\n      Connect Spotify\n      <ion-note item-end>\n        <span class="text-xs" ion-text color="danger">CONNECT</span>\n      </ion-note>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      GENDER\n    </ion-list-header>\n    <button ion-item>\n      Man\n    </button>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>CONTROL YOUR PROFILE <span class="label-special">Tinder Plus</span></ion-list-header>\n    <ion-item>\n      <ion-label>Don\'t Show My Age</ion-label>\n      <ion-toggle color="danger" checked="true"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>Don\'t Show My Distance</ion-label>\n      <ion-toggle color="danger" checked="true"></ion-toggle>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/T0mpkinz/Documents/anime/AnimeTinder/src/pages/profile-edit/profile-edit.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__["a" /* ImagePicker */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
], ProfileEditPage);

//# sourceMappingURL=profile-edit.js.map

/***/ })

},[276]);
//# sourceMappingURL=main.js.map