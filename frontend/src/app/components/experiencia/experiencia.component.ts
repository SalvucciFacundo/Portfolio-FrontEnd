import { Component, OnInit } from '@angular/core';


export interface Experiencia {
  lugar: string;
  info:string;
  logo: string;
}

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  expe:Experiencia[]=[
    {lugar:'CiberCafe Alem',info:'Atención al público, contabilidad de caja, mantenimiento y reparación de pc. 2009 - 2013',logo:'assets/img/experiencia/ciber.jpg'},
    {lugar:'Ayudante electricista',info:'Ayudante de electricista domiciliario 2014 - 2016',logo:'assets/img/experiencia/electricista.jpg'},
    {lugar:'Servicio y mantenimiento de pc',info:' Armado, mantenimiento y reparacion de computadoras, instalación de software y sistema operativo. 2017 - Actualidad',logo:'assets/img/experiencia/mantenimiento.jpg'},
    {lugar:'Asociación de canaricultores MACO',info:'Inscripción , modificación de socios en el sistema, digitalización de documentos e actas,secretario de la comisión directiva. 2019 - Actualidad',logo:'assets/img/experiencia/actas.jpg'},
    {lugar:'Desarrollador Web Freelance',info:'Desarrollo y mantenimiento de paginas web. 2019 - Actualidad',logo:'assets/img/experiencia/freelance.jpg'},
    {lugar:'Soporte Técnico y QA Dubb.com',info:'Testeo de plataforma y manejo de usuarios de la plataforma. 2021 - Actualidad',logo:'assets/img/experiencia/dubbz.png'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
