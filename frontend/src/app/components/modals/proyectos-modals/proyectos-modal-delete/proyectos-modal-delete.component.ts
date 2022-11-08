import { Component, OnInit } from '@angular/core';
export interface Proyectos{
  imagen:string;
  nombre:string;
  descripcion:string;
  url:string;
}
@Component({
  selector: 'app-proyectos-modal-delete',
  templateUrl: './proyectos-modal-delete.component.html',
  styleUrls: ['./proyectos-modal-delete.component.css']
})
export class ProyectosModalDeleteComponent implements OnInit {
  proyec: Proyectos[]=[
    {imagen:'assets/img/imagen1.jpg',nombre:'Portafolio',descripcion:'prueba',url:'prueba'},
    {imagen:'assets/img/imagen1.jpg',nombre:'Mis Canarios',descripcion:'prueba',url:'prueba'},
    {imagen:'assets/img/imagen1.jpg',nombre:'Dubbbz',descripcion:'prueba',url:'prueba'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
