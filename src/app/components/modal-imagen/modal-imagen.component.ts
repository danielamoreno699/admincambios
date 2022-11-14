import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { ModalImagenService } from 'src/app/services/modal-imagen.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-imagen',
  templateUrl: './modal-imagen.component.html',
  styleUrls: ['./modal-imagen.component.css']
})
export class ModalImagenComponent implements OnInit {

  
  public imagenSubida!: File;
  public imgTemp: any = ''

  constructor( public modalImagenService: ModalImagenService, 
    public fileUploadService: FileUploadService
    ) { }

  ngOnInit(): void {

  }

  cerrarModal(){
    this.imgTemp = null
    this.modalImagenService.cerrarModal()
    
  }

  cambiarImagen(event: any){
    //console.log(event)
    if (this.imagenSubida = event.target.files[0]){
      console.log(this.imagenSubida)
    }else {
     this.imgTemp = null
    }

    const reader = new FileReader();
     reader.readAsDataURL(this.imagenSubida);

    reader.onloadend = ()=>{
      this.imgTemp = reader.result
      //console.log(reader.result)
    }

  }

  subirImagen(){
    const id = this.modalImagenService.id;
    const tipo = this.modalImagenService.tipo

    this.fileUploadService
        .actualizarFoto(this.imagenSubida, tipo, id)
        .then(img => {
          
          Swal.fire('Guardado', 'Imagen de usuario actualizada', 'success');

          this.modalImagenService.nuevaImagen.emit(img)
          this.cerrarModal()
        }).catch(err => {
          Swal.fire('Error', 'no se pudo subir imagen', 'error')

        })

  }

}
