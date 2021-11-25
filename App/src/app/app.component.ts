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
      url: '/dashboard',
      icon: 'apps'
    },
    {
      title: 'Repos',
      url: '/gits',
      icon: 'logo-github'
    },
    {
      title: 'NFT',
      url: '/nfts',
      icon: 'logo-web-component'
    },
    {
      title: 'Logout',
      url: '/login',
      icon: 'person'
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
