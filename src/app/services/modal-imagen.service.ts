import { EventEmitter, Injectable, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url



@Injectable({
  providedIn: 'root'
})
export class ModalImagenService {

  private _ocultarModal: boolean = true;
  public tipo!: 'usuarios' | 'medicos' | 'hospitales'; 
  public id: string | undefined
  public img?: string = 'no-img';

  public nuevaImagen: any= new EventEmitter<String>()
  

  //constructor() {  }


  get ocultarModal(){
    
    return this._ocultarModal
  }

  abrirModal(
        
        tipo : 'usuarios'| 'medicos'| 'hospitales', 
        id : string | undefined,
      
        
        img:string = 'no-img'
      ){
    this._ocultarModal = false;
    this.tipo = tipo;
    this.id = id;
  

    if(img.includes('https')){
      img = img
    }else {
      img = `${base_url}/upload/${tipo}/${img}`
    }
    
  }

  cerrarModal(){
    this._ocultarModal = true
  }

  constructor() { }
}
