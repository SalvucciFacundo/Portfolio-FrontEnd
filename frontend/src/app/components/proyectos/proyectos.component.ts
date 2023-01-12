import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  
  usuarioLogeado:any;
  proyectos:any;

  constructor(private proSvc : ProyectoService) { }

  ngOnInit(): void {
    this.usuarioLogeado=localStorage.getItem('logeado');
    this.proSvc.getAllProject().subscribe(data=>{
      this.proyectos = data;
    })
  }

}
