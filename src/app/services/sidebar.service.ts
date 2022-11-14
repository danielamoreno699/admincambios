import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {


  menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu : [
        { titulo : 'Main', url: '/'},
        { titulo : 'Graficas', url: 'grafica1'},
        { titulo : 'rxjs', url: 'rxjs'},
        { titulo : 'progressBar', url: 'progress'},
        { titulo : 'promesas', url: 'promesas'}
      ]

    },

    {
      titulo: 'mantenimientos',
      icono: 'mdi mdi-folder-lock-open',
      submenu : [
        { titulo : 'Usuarios', url: 'usuarios'},
        { titulo : 'Hospitales', url: 'hospitales'},
        { titulo : 'Medicos', url: 'medicos'},
  
      ]

    }
  ]
  constructor() { }
}
