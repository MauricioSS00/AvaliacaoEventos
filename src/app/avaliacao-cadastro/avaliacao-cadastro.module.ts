import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FieldsetModule } from 'primeng/fieldset';

import { AvaliacaoCadastroPageRoutingModule } from './avaliacao-routing.module';
import { AvaliacaoCadastroPage } from './avaliacao-cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,

    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    TooltipModule,
    DropdownModule,
    InputTextareaModule,
    FieldsetModule,

    AvaliacaoCadastroPageRoutingModule
  ],
  declarations: [AvaliacaoCadastroPage]
})
export class AvaliacaoCadastroPageModule { }
