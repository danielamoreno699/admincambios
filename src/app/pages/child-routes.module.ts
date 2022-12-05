import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { GraficaComponent } from "./grafica/grafica.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { PromesasComponent } from "./promesas/promesas.component";
import { RxjsComponent } from "./rxjs/rxjs.component";
import { AuthGuard } from "../guards/auth.guard";
import { PerfilComponent } from "./perfil/perfil.component";

//mantenimiento
import { UsuariosComponent } from "./mantenimiento/usuarios/usuarios.component";
import { HospitalesComponent } from "./mantenimiento/hospitales/hospitales.component";
import { MedicosComponent } from "./mantenimiento/medicos/medicos.component";
import { MedicoComponent } from "./mantenimiento/medicos/medico.component";
import { BusquedasComponent } from "./busquedas/busquedas.component";

import { AdminGuard } from "../guards/admin.guard";

const childRoutes: Routes = [

  {path: '', component:DashboardComponent, data : { titulo : 'Dashboard'}},
  {path: 'progress', component: ProgressComponent, data : { titulo : 'progressBar'}},
  {path: 'grafica1', component: GraficaComponent, data : { titulo : 'grafica 1'}},
  { path: 'account-settings', component: AccountSettingsComponent, data : { titulo : 'ajustes de cuenta'}},
  { path: 'promesas', component: PromesasComponent, data : { titulo : 'promesas'}},
  { path: 'rxjs', component: RxjsComponent, data : { titulo : 'rxjs'}},
  { path: 'perfil', component: PerfilComponent, data : { titulo : 'perfil de usuario'}},
  { path: 'buscar/:termino', component: BusquedasComponent, data : { titulo : 'busquedas'}},
                //{path: '', redirectTo: '/dashboard', pathMatch:'full'},

                //mantenimientos
              
    { path: 'hospitales', component: HospitalesComponent, data : { titulo : 'Mantenimiento de Hospitales'}},
    { path: 'medicos', component: MedicosComponent, data : { titulo : 'Mantenimiento de Medicos'}},
    { path: 'medico/:id', component: MedicoComponent, data : { titulo : 'Mantenimiento de Medicos'}},

                //Rutas Admin

  { path: 'usuarios', canActivate: [AdminGuard], component: UsuariosComponent, data : { titulo : 'Mantenimiento de Usuarios'}},
  
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(childRoutes)],
  exports : [RouterModule]
})
export class ChildRoutesModule { }
