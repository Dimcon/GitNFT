import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterGithubPageRoutingModule } from './register-github-routing.module';

import { RegisterGithubPage } from './register-github.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterGithubPageRoutingModule
  ],
  declarations: [RegisterGithubPage]
})
export class RegisterGithubPageModule {}
