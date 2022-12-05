import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';
import { SidebarService } from '../services/sidebar.service';

declare function customFunctionInit(): any;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {
 

  constructor( private serviceSett : SettingsService,
              private sidebarService: SidebarService) { }

  ngOnInit(): void {
    customFunctionInit();
    this.sidebarService.cargarMenu()
    
    //./assets/css/colors/default-dark.css
  }

}
