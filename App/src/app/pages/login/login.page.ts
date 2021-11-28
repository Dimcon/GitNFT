import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UtilityServiceService } from '../../services/utility-service.service';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username='';
  password='';
  error: any=null;


  constructor(
    private authService: AuthService,
    private utilService: UtilityServiceService,
    private router: Router
  ) { }


  ngOnInit() {
    if(this.authService.isLoggedIn()) {
      this.router.navigate(['dashboard'])
    }
  }

  async loginUser(): Promise<void> {
    this.error = null;
    try {
      await this.authService.login(this.username, this.password);
      await this.router.navigateByUrl('dashboard');
    } catch(err) {
      this.error = err;
    }
  }

  async goToRegistration(){
    await this.router.navigateByUrl('register');
  }

  /*login(form){
    this.authService.login(form.value).subscribe((res)=> {
      this.router.navigateByUrl('home');
    });
  }*/
}
