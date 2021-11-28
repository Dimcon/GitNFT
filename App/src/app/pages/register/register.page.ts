import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {UtilityServiceService} from '../../services/utility-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private authService: AuthService,
    private utilService: UtilityServiceService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.utilService.user = null;
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['register-github']);
    }
  }

  // username = '';
  email = '';
  password = '';
  dupPass = '';

  error: string | null = null;
  passerror: string | null = null;

  async registerUser(isAdmin = false) {
    this.error = null;
    this.passerror = null;
    try {
      let res = /^[a-zA-Z0-9_\.]{6,}$/.exec(this.email);
      let valid = !!res;
      // if (!valid) {
      //   this.error = 'Regex mismatch. The username does not meet the criteria.';
      //   return;
      // }

      res = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.exec(this.email);
      valid = !!res;
      if (!valid) {
        this.error = 'Regex mismatch. The email is invalid.';
        return;
      }


      res = /^.{6,}$/.exec(this.password);
      valid = !!res;
      if (!valid) {
        this.error = 'Regex mismatch. The password is too short.';
        return;
      }

      if (this.password !== this.dupPass) {
        this.passerror = 'Passwords do not match.';
        return;
      } else {
        await this.authService.register(
          this.email,
          this.email,
          this.password
        );
      }
      await this.router.navigateByUrl('register-github');
    } catch (err) {
      this.error = err;
    }
  }

  goToLogin() {
    this.router.navigateByUrl('login');
  }
}
