import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription} from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy  {

  public intervalSub : Subscription

  constructor() { 

   

    //this.retornaObservable().pipe(
      //    retry(2) // limitar los retry

    //).subscribe(
      //valor => console.log('subs:', valor),
      //error => console.warn( 'error ', error),
      //() => console.info( 'Obs terminado')


    //)

   this.intervalSub = this.retornaIntervalo()
        .subscribe( console.log)  // los primeros arg que reciba, mandarlos al suscribe
        
        //(valor)=> console.log(valor)

  }


  ngOnDestroy(): void {
    this.intervalSub.unsubscribe()
  }

 

  retornaIntervalo() : Observable<number>{
    return  interval(500)
                    .pipe(
                      
                      map (valor => {
                         return valor + 1
                         // return 'hola mundo' + valor
                      }),
                      filter(valor => (valor % 2 === 0)? true : false),
                      //take(10),

                      )  //cuantas emisiones del obs se necesita--take

    //return intervalo$
  }

  retornaObservable(): Observable<number> {

    let i = -1 // influye si esta en el cuerpo del observable o fuera. fuera- ignora el error

    return  new Observable<number>( observer =>{
        
      

       const intervalo = setInterval ( ()=> {

      i++;
      observer.next(i);

      if(i === 4){
          clearInterval(intervalo);
          observer.complete()
      }

      if ( i === 2){
    
         // i = 0;
         observer.error('i llego al valor de 2')

      }

        //console.log('tick')

      }, 1000)
    }) // observ que quiero almacenar

    //return obs$;

  }

 
}
