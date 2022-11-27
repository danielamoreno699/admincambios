import { Component, OnDestroy, OnInit } from '@angular/core';
import { delay, Subscription } from 'rxjs';
import { Hospital } from 'src/app/models/hospital.model';
import { BusquedasService } from 'src/app/services/busquedas.service';
import { HospitalService } from 'src/app/services/hospital.service';
import { ModalImagenService } from 'src/app/services/modal-imagen.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styleUrls: ['./hospitales.component.css']
})
export class HospitalesComponent implements OnInit, OnDestroy {

  public hospitales: Hospital[] = []
  public cargando: boolean = true
  private imgSubs: Subscription | undefined;

  constructor( private hospitalService: HospitalService, 
    private ModalImagenService:ModalImagenService,
    private busquedaService: BusquedasService) { }

  ngOnDestroy(): void {
    this.imgSubs?.unsubscribe()
  }

  ngOnInit(): void {
    this.cargarHospiatles()

    this.imgSubs = this.imgSubs = this.ModalImagenService.nuevaImagen

    .pipe(
      delay(100))
   
    .subscribe( (img: any) => this.cargarHospiatles())


    
  }

  buscar(termino: string ){

    if( termino.length === 0){
      return  this.cargarHospiatles()
      
    }
  
      this.busquedaService.buscar('hospitales', termino)
        .subscribe( (resultados: any )=>{
          this.hospitales = resultados
        }
        )
  
    }

  cargarHospiatles(){

    this.cargando = true

    this.hospitalService.cargarHospitales()
      .subscribe(hospitales => {
        this.cargando = false
        this.hospitales = hospitales
        console.log(hospitales)
      })

  }

  guardarCambios(hospital: any){

    this.hospitalService.actualizarHospitales(hospital._id, hospital.nombre)
      .subscribe( resp => {
            Swal.fire('Guardado', hospital.nombre, 'success')
      })

  }

  eliminarHospital(hospital: any){

    this.hospitalService.borrarHospitales(hospital._id)
      .subscribe( resp => {
        this.cargarHospiatles()
            Swal.fire('borrado', hospital.nombre, 'success')
      })

  }

  async abrirSweetAlert(){

    const {value = ''} = await Swal.fire<any>({
      title:'crear hospital',
      text: 'ingrese el nombre de nuevo hospital',
      input:'text',
      inputPlaceholder:'nombre del hospital',
      showCancelButton: true,
    })
    
    if( value.trim().length > 0){
    this.hospitalService.crearHospitales(value)
        .subscribe((resp:any) => {
            this.hospitales.push(resp.hospital)
        })
    }
      
    
    
  }

  abrirModal(hospital:Hospital){
      this.ModalImagenService.abrirModal('hospitales', hospital._id, hospital.img)
  }


}
