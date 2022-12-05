import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficaComponent } from './grafica/grafica.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { ComponentsModule } from '../components/components.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PerfilComponent } from './perfil/perfil.component';

import { ReactiveFormsModule } from '@angular/forms';
import { UsuariosComponent } from './mantenimiento/usuarios/usuarios.component';
import { HospitalesComponent } from './mantenimiento/hospitales/hospitales.component';
import { MedicosComponent } from './mantenimiento/medicos/medicos.component';
import { PipesModule } from '../pipes/pipes.module';

import { MedicoComponent } from './mantenimiento/medicos/medico.component';
import { BusquedasComponent } from './busquedas/busquedas.component';


@NgModule({
  declarations: [
       
    DashboardComponent,
    ProgressComponent,
    GraficaComponent,
    PagesComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent,
    PerfilComponent,
    UsuariosComponent,
    HospitalesComponent,
    MedicosComponent,
     MedicoComponent,
    BusquedasComponent
    
  ],
  imports: [
    CommonModule,
     SharedModule,
     AppRoutingModule,
     ComponentsModule,
     ReactiveFormsModule,
     NgChartsModule,
     FormsModule, 
     PipesModule
     
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    GraficaComponent,
    PagesComponent,
    AccountSettingsComponent,
    MedicoComponent

  ]
})
export class PagesModule { }
