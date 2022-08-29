import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumps',
  templateUrl: './breadcrumps.component.html',
  styles: [
  ]
})
export class BreadcrumpsComponent implements OnDestroy  {

  public titulo: string = ''
  public tituloSubs$: Subscription

  constructor(  private router : Router, private route : ActivatedRoute) { 
    

    //console.log (route.snapshot.children[0].data)
    
    this.tituloSubs$ = this.getArgumentosRuta()
        .subscribe ( ({titulo }) => {
          this.titulo = titulo
          document.title = `admin-pro - ${titulo}`

      })
  
  }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe()
  }

  getArgumentosRuta(){

    return this.router.events
    .pipe(
      filter( (event: any) => event instanceof ActivationEnd),
      filter( (event : ActivationEnd) => event.snapshot.firstChild === null),
      map( (event : ActivationEnd) => event.snapshot.data)
    )
    
    

  }

 

}
