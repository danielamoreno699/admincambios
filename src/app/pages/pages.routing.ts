import { Routes, RouterModule } from "@angular/router";
import { NgModule} from "@angular/core";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { GraficaComponent } from "./grafica/grafica.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { PromesasComponent } from "./promesas/promesas.component";
import { RxjsComponent } from "./rxjs/rxjs.component";
import { AuthGuard } from "../guards/auth.guard";
import { PerfilComponent } from "./perfil/perfil.component";

const routes: Routes = [

    { path: 'dashboard', 
    component: PagesComponent,
              canActivate: [AuthGuard],
              children:[

                {path: '', component:DashboardComponent, data : { titulo : 'Dashboard'}},
                {path: 'progress', component: ProgressComponent, data : { titulo : 'progressBar'}},
                {path: 'grafica1', component: GraficaComponent, data : { titulo : 'grafica 1'}},
                { path: 'account-settings', component: AccountSettingsComponent, data : { titulo : 'ajustes de cuenta'}},
                { path: 'promesas', component: PromesasComponent, data : { titulo : 'promesas'}},
                { path: 'rxjs', component: RxjsComponent, data : { titulo : 'rxjs'}},
                { path: 'perfil', component: PerfilComponent, data : { titulo : 'perfil de usuario'}}
                //{path: '', redirectTo: '/dashboard', pathMatch:'full'},

              ]
  },

]


@NgModule({

    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})
export class PagesRoutingModule {}

