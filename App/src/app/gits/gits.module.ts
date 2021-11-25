import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GitsPageRoutingModule } from './gits-routing.module';

import { GitsPage } from './gits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GitsPageRoutingModule
  ],
  declarations: [GitsPage]
})
export class GitsPageModule {}
