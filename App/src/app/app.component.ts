import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  activePageTitle = 'Dashboard';

  Pages = [
    {
      title: 'Dashboard',
      url: '',
      icon: 'albums'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'person'
    },
    {
      title: 'Register',
      url: '/register',
      icon: 'person'
    },
    {
      title: 'Git',
      url: '/gits',
      icon: 'albums'
    },
    {
      title: 'NFT',
      url: '/nfts',
      icon: 'albums'
    }
  ];
  constructor(
    private platform: Platform,
    private statusbar: StatusBar,
    private splashscreen: SplashScreen,
  ) {
    this.initializeApp();
  }

  initializeApp(){
    this.platform.ready().then(() => {
      this.statusbar.styleDefault();
      this.splashscreen.hide();
    });
  }
  
}
