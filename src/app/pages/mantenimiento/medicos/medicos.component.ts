import { Component, OnDestroy, OnInit } from '@angular/core';
import { delay, Subscription } from 'rxjs';
import { Medico } from 'src/app/models/medico.model';
import { BusquedasService } from 'src/app/services/busquedas.service';
import { MedicoService } from 'src/app/services/medico.service';
import { ModalImagenService } from 'src/app/services/modal-imagen.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  
})
export class MedicosComponent implements OnInit, OnDestroy{

  public cargando: boolean = true;
  public medicos: Medico[] = [];
  private imgSubs: Subscription | undefined

  constructor(private medicoService: MedicoService, 
              private ModalImgenService: ModalImagenService,
              private busquedaService: BusquedasService) { }

  ngOnDestroy(): void {
    this.imgSubs?.unsubscribe
  }

  ngOnInit(): void {
    this.cargarMedicos()

    this.imgSubs = this.imgSubs = this.ModalImgenService.nuevaImagen

    .pipe(
      delay(100))
   
    .subscribe( (img: any) => this.cargarMedicos())

  }

  cargarMedicos(){
    this.cargando=true
    this.medicoService.cargarMedicos()
        .subscribe(medicos => {
          this.cargando = false;
          this.medicos = medicos
        })

  }

  abrirModal(medico: Medico){
    this.ModalImgenService.abrirModal('medicos', medico._id, medico.img)
  }

  buscar(termino: string){
    
    if( termino.length === 0){
      return  this.cargarMedicos()
      
    }
  
      this.busquedaService.buscar('medicos', termino)
        .subscribe( (resultados: any )=>{
          this.medicos = resultados
        }
        )
  }

  borrarMedico( medico: any ){

    Swal.fire({
      title: 'borrar medico?',
      text: `esta a punto de borrar a ${medico.nombre}`,
      icon: 'question',
      showCancelButton: true,
     
      confirmButtonText: 'si, borrar'
    }).then((result) => {
      if (result.isConfirmed) {
        
          this.medicoService.borrarHospitales(medico._id)
          .subscribe ( resp =>{
              this.cargarMedicos()
                Swal.fire(
                'usuario borrado',
                `${medico.nombre} fue eliminado correctamente` ,
                'success'
                )

              
      })
        
      }
    })

  } 


}



