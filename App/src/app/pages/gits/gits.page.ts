import { Component, OnInit } from '@angular/core';
import {UtilityServiceService} from "../../services/utility-service.service";

@Component({
  selector: 'app-gits',
  templateUrl: './gits.page.html',
  styleUrls: ['./gits.page.scss'],
})
export class GitsPage implements OnInit {

  repos: any[];

  constructor(
    private utilityService: UtilityServiceService
  ) { }

  async ngOnInit() {
    this.repos = await this.utilityService.getRepos();
  }

}
