import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/educacion.model';
import { EducacionService } from 'src/app/services/educacion.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

 
usuarioLogeado:any;
educacion :any;

  constructor(public educSvc : EducacionService) { }

  ngOnInit(): void {
    this.usuarioLogeado=localStorage.getItem('logeado');
    this.educSvc.getAllEducation().subscribe(data =>{
      this.educacion=data;
    })
  }

}
