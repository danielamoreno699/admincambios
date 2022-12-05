import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { BreadcrumpsComponent } from './breadcrumps/breadcrumps.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';




@NgModule({
  declarations: [
    BreadcrumpsComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule, 
    FormsModule
  ],
  exports : [

    BreadcrumpsComponent,
    SidebarComponent,
    HeaderComponent,

  ]
})
export class SharedModule { }
