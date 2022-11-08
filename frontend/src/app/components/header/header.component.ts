import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuarioLogeado:any;

  constructor() { }

  ngOnInit(): void {
    this.usuarioLogeado=localStorage.getItem('logeado');
  }
  logOut(){
    localStorage.removeItem('logeado');
  }

}
