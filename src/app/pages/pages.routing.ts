import { Routes, RouterModule } from "@angular/router";
import { NgModule} from "@angular/core";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { GraficaComponent } from "./grafica/grafica.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";

const routes: Routes = [

    { path: 'dashboard', 
    component: PagesComponent,
              children:[

                {path: '', component:DashboardComponent},
                {path: 'progress', component: ProgressComponent},
                {path: 'grafica1', component: GraficaComponent},
                { path: 'account-settings', component: AccountSettingsComponent}
                //{path: '', redirectTo: '/dashboard', pathMatch:'full'},

              ]
  },

]


@NgModule({

    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})
export class PagesRoutingModule {}

