import { Injectable } from '@angular/core';
import { HttpServiceService } from './http-service.service';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

const baseUrl =environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class UtilityServiceService {

  public user: any =null;

  constructor(
    private httpService: HttpServiceService,
  ) { }

  async createRepo(text: string){
    await this.httpService.post(baseUrl + '/gits/createRepo',{
      userId: this.user.id,
      text: text
    })
  }

  async deleteRepo(repoId: string) {
    await this.httpService.post(baseUrl + '/gits/deleteRepo',
      {
        userId: this.user.id,
        postId: repoId
      })
  }

  async getRepos() {
    const result = await this.httpService.get(baseUrl + '/gits/repos')
    return result
  }

  async createNFT(text: string){
    await this.httpService.post(baseUrl + '/nfts/createNFT',{
      userId: this.user.id,
      text: text
    })
  }

  async deleteNFT(nftId: string) {
    await this.httpService.post(baseUrl + '/nfts/deleteNFT',
      {
        userId: this.user.id,
        postId: nftId
      })
  }

  async getNFTs() {
    const result = await this.httpService.get(baseUrl + '/nfts/NFTs')
    return result
  }
}
