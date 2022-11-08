import { Component, OnInit } from '@angular/core';
export interface Proyectos{
  imagen:string;
  nombre:string;
  descripcion:string;
  url:string;
}

@Component({
  selector: 'app-proyectos-modal-edit',
  templateUrl: './proyectos-modal-edit.component.html',
  styleUrls: ['./proyectos-modal-edit.component.css']
})
export class ProyectosModalEditComponent implements OnInit {
  proyec: Proyectos[]=[
    {imagen:'assets/img/imagen1.jpg',nombre:'Portafolio',descripcion:'prueba',url:'prueba'},
    {imagen:'assets/img/imagen1.jpg',nombre:'Mis Canarios',descripcion:'prueba',url:'prueba'},
    {imagen:'assets/img/imagen1.jpg',nombre:'Dubbbz',descripcion:'prueba',url:'prueba'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
