import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customFunctionInit(): any;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {
 

  constructor( private serviceSett : SettingsService) { }

  ngOnInit(): void {
    customFunctionInit();
    
    //./assets/css/colors/default-dark.css
  }

}
