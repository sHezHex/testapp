import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gatitos',
  templateUrl: './gatitos.page.html',
  styleUrls: ['./gatitos.page.scss'],
})
export class GatitosPage implements OnInit {

  public gatitos = [
    {
      id:'1',
      name:'Pepito',
      color:'cafecito',
      imageURL: 'https://img.freepik.com/foto-gratis/gato-rojo-o-blanco-i-estudio-blanco_155003-13189.jpg?w=2000'
    },
    {
      id:'2',
      name:'Jorgito',
      color:'cafecito',
      imageURL: 'https://img.freepik.com/foto-gratis/gato-rojo-o-blanco-i-estudio-blanco_155003-13189.jpg?w=2000'
    }
  ]

  constructor(private router:Router) { }

  ngOnInit() {
  }

  addNewGatito ( ){
    this.router.navigate(['/new-gatito']);
  }

}
