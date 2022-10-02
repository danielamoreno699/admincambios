import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { catchError, map, Observable, of, tap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { RegisterForm } from '../interfaces/register-form.interface';
import { LoginForm } from '../models/login-form.interface';

declare const google: any
declare const gapi: any

const base_url = environment.base_url

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private http: HttpClient, 
    private router: Router,
    private ngZone: NgZone ) { 

    this.googleInit()
  }


  googleInit(){

    google.accounts.id.initialize({
      client_id: "241061877550-9dalmcl211nem2nkk0c8b136h28gf0n1.apps.googleusercontent.com",
      callback: (response:any) => this.handleCredentialResponse(response)
    });

  }

  handleCredentialResponse( response: any ){
    console.log("Encoded JWT ID token: " + response.credential);
      this.loginGoogle(response.credential)
        this.router.navigateByUrl('/')
        //console.log({login: resp})
      }


  logOut(){
    localStorage.removeItem('token');

    //var auth2 = gapi.auth2.getAuthInstance(); // instancia de google para evitar que cuando haga logout siga autenticado
    //auth2.signOut().then(function () {
      //console.log('User signed out.');
    //});
    

    google.accounts.id.revoke('danielamoreno699@gmail.com', ()=>{

      this.ngZone.run(()=>{ // para ejecutar librerias de terceros
        this.router.navigateByUrl('/login');
      })
      //this.router.navigateByUrl('/login');

    })

  }

  validarToken(): Observable<boolean>{
    const token = localStorage.getItem('token') || '';
    return this.http.get(`${base_url}/login/renew`, {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap((resp : any)=> {
        localStorage.setItem('token', resp.token)
      }),
      map( resp => true),
      catchError(error=> of(false) ) // of retorna un nuevo obs segun el valor que se le transmita

      )
    
  }

  crearUsuario(formData: RegisterForm){

    return this.http.post(`${base_url}/usuarios`, formData)
    //console.log('creando usuario')
    .pipe(
      tap((resp :any ) =>{
        localStorage.setItem('token', resp.token)
      })
    )
    
  }

  login(formData: Partial<LoginForm>){

    return this.http.post(`${base_url}/login`, formData)
    .pipe(
      tap((resp :any ) =>{
        localStorage.setItem('token', resp.token)
      })
    )
    //console.log('creando usuario')
    
  }

  loginGoogle(token: string){
    return this.http.post(`${base_url}/login/google`, {token})
      .pipe(
        tap((resp :any ) =>{
          localStorage.setItem('token', resp.token)
        })
      )
  }
}


