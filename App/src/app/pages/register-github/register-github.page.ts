import { Component, OnInit } from '@angular/core';
import {UtilityServiceService} from "../../services/utility-service.service";

@Component({
  selector: 'app-register-github',
  templateUrl: './register-github.page.html',
  styleUrls: ['./register-github.page.scss'],
})
export class RegisterGithubPage implements OnInit {

  githubInstallUrl: string;

  constructor(
    private utilityService: UtilityServiceService
  ) { }

  ngOnInit() {
    this.githubInstallUrl = this.utilityService.githubInstallUrl()
  }

}
