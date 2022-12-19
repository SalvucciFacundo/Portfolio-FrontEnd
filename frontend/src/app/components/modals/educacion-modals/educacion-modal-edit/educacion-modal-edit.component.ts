import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/models/educacion.model';
import { EducacionService } from 'src/app/services/educacion.service';
import { NgToastService } from 'ng-angular-popup';

// export interface Cursos {
//   nombre: string;
//   logo: string;
// }

@Component({
  selector: 'app-educacion-modal-edit',
  templateUrl: './educacion-modal-edit.component.html',
  styleUrls: ['./educacion-modal-edit.component.css']
})
export class EducacionModalEditComponent implements OnInit {
//   educ:Cursos[]=[
//     {nombre:'Técnico Mecánico Industrial, Escuela Técnico Industrial Emilio Civit Maipu Mendoza 2001-2008', logo:'assets/img/educacion/etiec.jpg'},
//     {nombre:'Técnico Superior en Programacion, UTN Facultad Regional Mendoza 2010-2018',logo:'assets/img/educacion/Utn.png'},
//     {nombre:'Curso de NodeJS Codigo CódigoFacilito 2020',logo:'assets/img/educacion/codigoFacilito.png'},
//     {nombre:'Curso Profesional de Angular CódigoFacilito 2020',logo:'assets/img/educacion/codigoFacilito.png'},
//     {nombre:'Stack MEAN Fazt Code 2021',logo:'assets/img/educacion/mean2.png'},
//     {nombre:'Argentina Programa 2022',logo:'assets/img/educacion/ApLogo.png'}
// ];
educacion :any;
//persona:any;
editarEducacion:FormGroup;
edu:any;

constructor(public educSvc : EducacionService, private fb: FormBuilder, private toast: NgToastService) {
  this.editarEducacion = this.fb.group({
    id: ['',Validators.required],
    titulo:['',Validators.required],
    instituto:['',Validators.required],
    inicio:['',Validators.required],
    fin:['',Validators.required],
    logo:['',Validators.required]
  });
 }

ngOnInit(): void {
  this.educSvc.getAllEducation().subscribe(data =>{
    this.educacion=data;
  })
  // this.persoSvc.getPerson(1).subscribe(data =>{
  //   this.persona=data;
  
  // })

}

 editar(){
  const educacion: Educacion ={

    title:this.editarEducacion.value.titulo,
    institute:this.editarEducacion.value.instituto,
    start:this.editarEducacion.value.inicio,
    end:this.editarEducacion.value.fin,
    logoUrl:this.editarEducacion.value.logo,
  }
  this.educSvc.updateEducation(this.editarEducacion.value.id,educacion).subscribe(data =>{
    this.edu=data;
  })
  if(this.edu == "Registro actualizado"){
    setTimeout(
      function(){ 
      window.location.reload(); 
      }, 3000);
    this.toast.success({detail:'Exito',summary:'Actualizado correctamente',sticky:true,position:'tr'})
  }else{
    this.toast.error({detail:'Error',summary:'Error al actualizar',sticky:true,position:'tr'});
  }
  
 }


}
