import { Component, OnInit } from '@angular/core';
import {UtilityServiceService} from "../../services/utility-service.service";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-gits',
  templateUrl: './gits.page.html',
  styleUrls: ['./gits.page.scss'],
})
export class GitsPage implements OnInit {

  repos: any[];

  constructor(
    private authService: AuthService,
    private utilityService: UtilityServiceService,
    private router: Router
  ) { }

  async ngOnInit() {
    if (!this.authService.isLoggedIn()) {
      await this.router.navigate(['login']);
    } else {
      this.repos = await this.utilityService.getRepos();
    }
  }

}
