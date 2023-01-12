import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/services/experiencia.service';



@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  usuarioLogeado:any;
  experiencia:any;

  constructor(public expeSvc: ExperienciaService) { }

  ngOnInit(): void {
    this.usuarioLogeado=localStorage.getItem('logeado');
    this.expeSvc.getAllExperiences().subscribe(data =>{
      this.experiencia=data;
    })
  }

}
