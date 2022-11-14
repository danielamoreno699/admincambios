import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';
import { DonaComponent } from './dona/dona.component';
import { NgChartsModule } from 'ng2-charts';
import { ModalImagenComponent } from './modal-imagen/modal-imagen.component';



@NgModule({
  declarations: [
    IncrementadorComponent,
    DonaComponent,
    ModalImagenComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule
    
  ],
  exports :[
    IncrementadorComponent,
    DonaComponent,
    ModalImagenComponent

  ]
})
export class ComponentsModule { }
