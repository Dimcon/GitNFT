import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {AuthService} from "./services/auth.service";
import {UtilityServiceService} from "./services/utility-service.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  activeIndex = 1;

  activePageTitle = 'Dashboard';
  pages = [
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
      title: 'My Github',
      url: '/register-github',
      icon: 'logo-github'
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
    private authService: AuthService,
    private utilService: UtilityServiceService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusbar.styleDefault();
      this.splashscreen.hide();
    });
  }

  async click(index, page: any) {
    if (page.title === 'Logout') {
      await this.logout();
    }
    this.activeIndex = index;
  }

  async logout() {
    await this.authService.logout()
  }
}
