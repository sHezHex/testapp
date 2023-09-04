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
  }
}
