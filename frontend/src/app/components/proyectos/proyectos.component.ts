import { Component, OnInit } from '@angular/core';

export interface Proyectos{
  imagen:string;
  nombre:string;
  descripcion:string;
  url:string;
}

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyec: Proyectos[]=[
    {imagen:'assets/img/imagen1.jpg',nombre:'Portafolio',descripcion:'prueba',url:'prueba'},
    {imagen:'assets/img/imagen1.jpg',nombre:'Mis Canarios',descripcion:'prueba',url:'prueba'},
    {imagen:'assets/img/imagen1.jpg',nombre:'Dubbbz',descripcion:'prueba',url:'prueba'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
