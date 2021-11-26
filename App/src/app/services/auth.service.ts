import { Injectable } from '@angular/core';
import { HttpServiceService } from './http-service.service';

import { environment } from 'src/environments/environment';
import { UtilityServiceService } from './utility-service.service';
import * as moment from 'moment';

const baseUrl = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpService: HttpServiceService,
    private utilityService: UtilityServiceService
  ) { }

  async login(userid: string, pass: string){
    const result = await this.httpService.post(`${baseUrl}/auth/authenticate`,{
      username: userid,
      passwor: pass
    })
    if(result.success){
      this.httpService.setAuthToken(result.token)
      this.utilityService.user = result.user;
      const expiresAt = moment().add(result.expiresIn,'second');
      localStorage.setItem('jwt_token', result.token);
      localStorage.setItem('user', JSON.stringify(result.user));
      localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
    }else{
      throw "Credentials are bad."
    }
  }

  getAuthToken(){
    return localStorage.getItem("jwt_token");
  }

  logout(){
    localStorage.removeItem("jwt_token");
    localStorage.removeItem("user");
    localStorage.removeItem("expires_at");
  }

  async register(username: string, email: string, pass: string){
    const result = await this.httpService.post(`${baseUrl}/auth/register`,{
      name: username,
      email: email,
      username: email,
      password: pass,
      role: 'user'
    })
    if (result.success) {
      await this.login(email, pass)
    } else {
      throw "Credentials are bad."
    }
  }

  public isLoggedIn() {
    const userjs = localStorage.getItem('user')
    this.httpService.setAuthToken(this.getAuthToken() || '')
    this.utilityService.user = JSON.parse(userjs || '{}')
    return moment().isBefore(this.getExpiration());
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration || '0');
    return moment(expiresAt);
  }
}
