import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';

import { RouterModule } from '@angular/router';
//import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';




@NgModule({
  declarations: [

    AppComponent,
    NotpagefoundComponent,
   
  
  
  ],
  imports: [
    BrowserModule,
     RouterModule,
    PagesModule,
    AuthModule,
    
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
