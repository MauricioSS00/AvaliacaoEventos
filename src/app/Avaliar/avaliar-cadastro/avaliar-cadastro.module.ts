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
import { KeyFilterModule } from 'primeng/keyfilter';
import { SliderModule } from 'primeng/slider';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';

import { AvaliarCadastroPageRoutingModule } from './avaliar-cadastro-routing.module';
import { AvaliarCadastroPage } from './avaliar-cadastro.page';

@NgModule({
  imports: [
    CommonModule,
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
    KeyFilterModule,
    SliderModule,
    OverlayPanelModule,
    CheckboxModule,
    RadioButtonModule,

    AvaliarCadastroPageRoutingModule
  ],
  declarations: [AvaliarCadastroPage]
})
export class AvaliarCadastroPageModule { }
