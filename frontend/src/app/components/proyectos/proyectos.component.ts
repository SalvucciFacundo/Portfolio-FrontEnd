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
    {imagen:'prueba',nombre:'prueba',descripcion:'prueba',url:'prueba'},
    {imagen:'prueba',nombre:'prueba',descripcion:'prueba',url:'prueba'},
    {imagen:'prueba',nombre:'prueba',descripcion:'prueba',url:'prueba'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
