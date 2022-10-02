import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2'

import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.css'
  ]
})
export class RegisterComponent  {

  public formSubmitted = false;

  public registerForm = this.fb.group({
    nombre: ['daniela', Validators.required],
    email: ['dani@gmail.com', [Validators.required, Validators.email]],
    password: ['1234', Validators.required],
    password2: ['1234', Validators.required],
    terminos: [true, Validators.required],

  
  
  }, {
    validators: this.passwordsIguales('password', 'password2')
  })

  constructor(private fb: FormBuilder, 
    private UsuarioService: UsuarioService,
    private router: Router) { }

  crearUsuario (){
    this.formSubmitted = true
    console.log(this.registerForm.value)

    //console.log(this.registerForm)

    if(this.registerForm.invalid){
      return;
      //console.log('posteando formulario')
    //}else {
      //console.log('formulario no correcto')
    }

    //realizar posteo

    this.UsuarioService.crearUsuario(this.registerForm.value)
      .subscribe(resp => {

        this.router.navigateByUrl('/')
        //console.log('usuario creado')
        //console.log(resp)

      }, (err)=> {
          Swal.fire('Error', err.error.msg, 'error')
      })
  }

  campoNovalido(campo: string): boolean{

    if(this.registerForm.get(campo)?.invalid && this.formSubmitted){
  return true
    }else return false
  }

  contrasenasNoValidas(){
    const pass1 = this.registerForm.get('password')?.value
    const pass2 = this.registerForm.get('password2')?.value

    if(  (pass1 !== pass2) && this.formSubmitted){
      return true
    }else {
      return false
    }
  }

  aceptaTerminos(){
    return !this.registerForm.get('terminos')?.value && this.formSubmitted

  }

  passwordsIguales(passName1: string, passName2: string){
    return (formGroup: FormGroup) => {
      const pass1Control = formGroup.get(passName1);
      const pass2Control = formGroup.get(passName2);

      if( pass1Control?.value === pass2Control?.value){
        pass2Control?.setErrors(null)
      }else {
        pass2Control?.setErrors({noEsIgual: true})
      }

    }


  }


}
