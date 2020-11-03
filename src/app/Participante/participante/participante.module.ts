import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';

import { ParticipantePage } from './participante.page';
import { ParticipantePageRoutingModule } from './participante-routing.module';

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

    ParticipantePageRoutingModule
  ],
  declarations: [ParticipantePage]
})
export class ParticipantePageModule { }
