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
        { titulo : 'progressBar', url: 'progress'},
        { titulo : 'Graficas', url: 'grafica1'}
      ]

    }
  ]
  constructor() { }
}
