import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { FieldsetModule } from 'primeng/fieldset';
import { KeyFilterModule } from 'primeng/keyfilter';
import { CalendarModule } from 'primeng/calendar';

import { EventoCadastroPage } from './evento-cadastro.page';
import { EventoCadastroPageRoutingModule } from './evento-cadastro-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,

    TooltipModule,
    ButtonModule,
    FieldsetModule,
    InputTextModule,
    KeyFilterModule,
    CalendarModule,

    EventoCadastroPageRoutingModule
  ],
  declarations: [EventoCadastroPage]
})
export class EventoCadastroPageModule { }
