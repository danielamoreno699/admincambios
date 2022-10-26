import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  
})
export class PerfilComponent implements OnInit {

  public usuario: any 
  public perfilForm : FormGroup
  public imagenSubida!: File;
  public imgTemp: any = ''


  constructor(private fb: FormBuilder, 
            private usuarioService:UsuarioService, 
            private fileUploadService : FileUploadService ) {
    this.usuario = usuarioService.usuario,
    this.perfilForm =  this.fb.group({
      nombre: [this.usuario.nombre, Validators.required],
      email: [this.usuario.email, [Validators.required, Validators.email]],
  });

  
  }

  ngOnInit(): void {

    this.perfilForm
  

  }

  actualizarPerfil(){
   console.log(this.perfilForm.value);
   this.usuarioService.actualizarPerfil(this.perfilForm.value )
     .subscribe( resp => {
      const {nombre, email} = this.perfilForm.value
         this.usuario.nombre = nombre
         this.usuario.email = email

         Swal.fire('Guardado', 'cambios fueron guardados', 'success')
     }, (err)=>{
      Swal.fire('Error', err.error.msg, 'error')
       
     })

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
    this.fileUploadService
        .actualizarFoto(this.imagenSubida, 'usuarios', this.usuario.uid)
        .then(img => {
          this.usuario.img = img 
          Swal.fire('Guardado', 'Imagen de usuario actualizada', 'success')
        }).catch(err => {
          Swal.fire('Error', 'no se pudo subir imagen', 'error')

        })

  }

}
