import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {


  menu: any[] = [
    {
      titulo: 'dashboard',
      icono: 'mdi mdi-gauge',
      submenu : [
        { titulo : 'Dashboard', url: '/'},
        { titulo : 'Graficas', url: 'grafica1'},
        { titulo : 'rxjs', url: 'rxjs'},
        { titulo : 'progressBar', url: 'progress'},
        { titulo : 'promesas', url: 'promesas'}
      ]

    }
  ]
  constructor() { }
}
