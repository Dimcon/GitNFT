import { Component, OnInit } from '@angular/core';
import {UtilityServiceService} from "../../services/utility-service.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-register-github',
  templateUrl: './register-github.page.html',
  styleUrls: ['./register-github.page.scss'],
})
export class RegisterGithubPage implements OnInit {

  githubInstallUrl: string;

  constructor(
    private utilityService: UtilityServiceService,
    private authService: AuthService

  ) { }

  ngOnInit() {
    debugger;
    if (this.authService.isLoggedIn()) {
      this.githubInstallUrl = this.utilityService.githubInstallUrl()
    }
  }

}
