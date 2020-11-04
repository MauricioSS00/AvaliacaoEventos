import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { DataViewModule } from 'primeng/dataview';

import { AvaliarTrabalhosPageRoutingModule } from './avaliar-trabalhos-routing.module';
import { AvaliarTrabalhosPage } from './avaliar-trabalhos.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,

    ButtonModule,
    InputTextModule,
    TooltipModule,
    DataViewModule,

    AvaliarTrabalhosPageRoutingModule
  ],
  declarations: [AvaliarTrabalhosPage]
})
export class AvaliarTrabalhosPageModule { }
