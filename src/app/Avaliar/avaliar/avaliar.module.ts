import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { DataViewModule } from 'primeng/dataview';

import { AvaliarPageRoutingModule } from './avaliar-routing.module';
import { AvaliarPage } from './avaliar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

    ButtonModule,
    InputTextModule,
    TooltipModule,
    DataViewModule,

    AvaliarPageRoutingModule
  ],
  declarations: [AvaliarPage]
})
export class AvaliarPageModule { }
