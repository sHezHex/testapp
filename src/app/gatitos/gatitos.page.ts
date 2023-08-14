import { Component, OnInit } from '@angular/core';

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
      color:'cafecito'
    },
    {
      id:'2',
      name:'Jorgito',
      color:'cafecito'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
