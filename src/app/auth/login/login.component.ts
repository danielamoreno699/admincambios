import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

import Swal from 'sweetalert2'
declare const google: any




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit{

  @ViewChild('googleBtn')
  googleBtn!: ElementRef;


  public loginForm = this.fb.group({
   
    email: [ localStorage.getItem('email') || '' , [Validators.required, Validators.email]],
    password: ['', Validators.required],
    remember: [false]
    
  })


  constructor( private router: Router, 
              private fb : FormBuilder,
              private UsuarioService: UsuarioService,
              private ngZone: NgZone ) { }
  
  
              
  
  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.googleInit();
  }

  googleInit(){

    
      google.accounts.id.initialize({
        client_id: "241061877550-9dalmcl211nem2nkk0c8b136h28gf0n1.apps.googleusercontent.com",
        callback: (response:any) => this.handleCredentialResponse(response)
      });

      google.accounts.id.renderButton(
        this.googleBtn.nativeElement,
        //document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" }  // customization attributes
      );

  }

  handleCredentialResponse( response: any ){
    console.log("Encoded JWT ID token: " + response.credential);
    this.UsuarioService.loginGoogle(response.credential)
      .subscribe(resp => {

          this.ngZone.run(()=>{

            this.router.navigateByUrl('/')
          })
       
        //console.log({login: resp})
      })

  }
  

  

  login(){
    const log = this.loginForm.get('email')?.value
    //const message: (string|undefined) = this.loginForm.get('email')?.value !== undefined ? this.loginForm.get('email');

    const message: (string|null|undefined) = log !== null ? log : '';

    this.UsuarioService.login(this.loginForm.value)
    .subscribe((resp) => {

      if(this.loginForm.get('remember')?.value){
        localStorage.setItem('email', (message !== undefined ? message : ''))
      }else {
        localStorage.removeItem('email')
      }

      this.router.navigateByUrl('/')



      console.log(resp)
    }, (err)=>{
      Swal.fire('Error', err.error.msg, 'error')

    })
    

  }

}
