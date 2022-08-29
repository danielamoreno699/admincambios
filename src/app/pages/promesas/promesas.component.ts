import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getusuarios().then(usuario =>{
      console.log(usuario)
    })

    //const promesa = new Promise((resolve, reject)=> {

      //if(false){
        //resolve('hola mundo')
      //}else {
        //  reject ('algo salio mal')
      //}

      //resolve('hola mundo')

    //})

    //promesa.then((mensaje)=>{
      //console.log(mensaje)
    //})
    //.catch( error => console.log('error en mi promesa', error))

    //console.log('fin del init')
  }

  getusuarios(){
    
    return new Promise(resolve =>{


    fetch('https://reqres.in/api/users')
    .then(resp =>  resp.json())
    .then(body => console.log(body.data))
    
      //console.log(resp) // devuelve estado de response 
  })


}
}
