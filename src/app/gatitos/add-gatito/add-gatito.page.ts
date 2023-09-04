import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-gatito',
  templateUrl: './add-gatito.page.html',
  styleUrls: ['./add-gatito.page.scss'],
})
export class AddGatitoPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  saveNewGatito (title:any, imageURL:any){
    console.log(title.value)
    //de aqui seguir el tutorial q esta en docs
    //crear un servicio que tenga un fx llamada addGatito(title,imageURL);
    //llamar desde aca la funcion
  }
}
