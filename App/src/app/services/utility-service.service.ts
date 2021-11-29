import { Injectable } from '@angular/core';
import { HttpServiceService } from './http-service.service';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

const baseUrl =environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class UtilityServiceService {

  public repo: any =null;
  public nft: any = null;
  public user: any = null;

  constructor(
    private httpService: HttpServiceService,
  ) { }

  async createRepo(repoName: string){
    await this.httpService.post(baseUrl + '/addRepo',{
      id: this.repo.id,
      repoName: repoName
    })
  }

  async deleteRepo(repoId: string) {
    await this.httpService.post(baseUrl + '/deleteRepo',
      {
        id: this.repo.id,
        repoId: repoId
      })
  }

  async getRepos() {
    const result = await this.httpService.get(baseUrl + '/getRepos')
    return result
  }

  async createNFT(nftToken: string){
    await this.httpService.post(baseUrl + '/addNFT',{
      id: this.nft.id,
      nftToken: nftToken
    })
  }

  async deleteNFT(nftToken: string) {
    await this.httpService.post(baseUrl + '/deleteNFT',
      {
        id: this.nft.id,
        nftToken: nftToken
      })
  }

  async getNFTs() {
    const result = await this.httpService.get(baseUrl + '/getNFTs')
    return result
  }
}
