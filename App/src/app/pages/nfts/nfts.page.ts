import { Component, OnInit } from '@angular/core';
import {UtilityServiceService} from '../../services/utility-service.service';

@Component({
  selector: 'app-nfts',
  templateUrl: './nfts.page.html',
  styleUrls: ['./nfts.page.scss'],
})
export class NftsPage implements OnInit {


  nfts: any[];

  constructor(
    private utilityService: UtilityServiceService
  ) { }

  async ngOnInit() {
    this.nfts = await this.utilityService.getNFTs();
  }

}
