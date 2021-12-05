import { Component, OnInit } from '@angular/core';
import {UtilityServiceService} from '../../services/utility-service.service';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nfts',
  templateUrl: './nfts.page.html',
  styleUrls: ['./nfts.page.scss'],
})
export class NftsPage implements OnInit {


  nfts: any[];

  constructor(
    private authService: AuthService,
    private utilityService: UtilityServiceService,
    private router: Router
  ) { }

  async ngOnInit() {
    if (!this.authService.isLoggedIn()) {
      await this.router.navigate(['login']);
    } else {
      this.nfts = await this.utilityService.getNFTs();
    }
  }

}
