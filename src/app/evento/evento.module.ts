import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

import { EventoPage } from './evento.page';
import { EventoPageRoutingModule } from './evento-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,

    EventoPageRoutingModule
  ],
  declarations: [EventoPage]
})
export class EventoPageModule { }
