import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../services/auth.service';
import { UtilityServiceService } from '../services/utility-service.service';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private authService: AuthService,
    private utilService: UtilityServiceService, 
    private router: Router) { }

    username=''
    password=''
    error: any=null;

  ngOnInit() {
  }

  async loginUser(): Promise<void> {
    this.error = null;
    try{
      await this.authService.login(this.username, this.password)
      await this.router.navigateByUrl('dashboard')
    }catch(err){
      this.error = err
    }
    
  }

  goToRegistration(){
    this.router.navigateByUrl('register');
  }

  /*login(form){
    this.authService.login(form.value).subscribe((res)=> {
      this.router.navigateByUrl('home');
    });
  }*/
}
