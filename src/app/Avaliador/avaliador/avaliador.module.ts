import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';

import { AvaliadorPage } from './avaliador.page';
import { AvaliadorPageRoutingModule } from './avaliador-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    TooltipModule,

    AvaliadorPageRoutingModule
  ],
  declarations: [AvaliadorPage]
})
export class AvaliadorPageModule { }
