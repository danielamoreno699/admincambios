import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { Hospital } from '../models/hospital.model';
import { Medico } from '../models/medico.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class BusquedasService {

  constructor( private http: HttpClient) { 

  }

  get token():string{
    return  localStorage.getItem('token') || '';
  }

  get headers(){
    return{

      headers: {
        'x-token': this.token
        }

    }
  }

  private transformarUsuario(resultados:any[]): Usuario[]{

    return resultados.map(
      user => new Usuario(user.nombre, user.email, '', user.img, user.google, user.role, user.uid )
    );

  }

  private transformHospitales(resultados:any[]): Hospital[]{
    return resultados

  }

  
  private transformMedicos(resultados:any[]): Medico[]{

    return resultados

  }

  buscar(
    tipo: 'usuarios'|'medicos'|'hospitales',
    termino: string
    ){
    const url = `${base_url}/todo/coleccion/${tipo}/${termino}`;
    return this.http.get<any[]>(url, this.headers)
      .pipe(
        map( (resp: any) => {
            
          switch (tipo) {
            case 'usuarios':
              return  this.transformarUsuario(resp.resultados)

              case 'hospitales':
              return  this.transformHospitales(resp.resultados)

              case 'medicos':
              return  this.transformMedicos(resp.resultados)
          
            default:
              return [];
          }

        })
      )
  }

}
