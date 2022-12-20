import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-educacion-modal-delete',
  templateUrl: './educacion-modal-delete.component.html',
  styleUrls: ['./educacion-modal-delete.component.css']
})
export class EducacionModalDeleteComponent implements OnInit {
//   educ:Cursos[]=[
//     {nombre:'Técnico Mecánico Industrial, Escuela Técnico Industrial Emilio Civit Maipu Mendoza 2001-2008', logo:'assets/img/educacion/etiec.jpg'},
//     {nombre:'Técnico Superior en Programacion, UTN Facultad Regional Mendoza 2010-2018',logo:'assets/img/educacion/Utn.png'},
//     {nombre:'Curso de NodeJS Codigo CódigoFacilito 2020',logo:'assets/img/educacion/codigoFacilito.png'},
//     {nombre:'Curso Profesional de Angular CódigoFacilito 2020',logo:'assets/img/educacion/codigoFacilito.png'},
//     {nombre:'Stack MEAN Fazt Code 2021',logo:'assets/img/educacion/mean2.png'},
//     {nombre:'Argentina Programa 2022',logo:'assets/img/educacion/ApLogo.png'}
// ];

educacion :any;
eliminarEducacion:FormGroup;
edu:any;
  constructor(public educSvc : EducacionService, private fb: FormBuilder, private toast: NgToastService) { 
    this.eliminarEducacion = this.fb.group({
      seleccion: ['',Validators.required],
    })
  }

  ngOnInit(): void {
    this.educSvc.getAllEducation().subscribe(data =>{
      this.educacion=data;
    })
  }

  eliminar(){
    this.educSvc.deleteEducation(this.eliminarEducacion.value.seleccion).subscribe(data =>{
      this.edu=data;
    })
    if(this.edu == "El registro ha sido eliminado"){
      setTimeout(
        function(){ 
        window.location.reload(); 
        }, 3000);
      this.toast.success({detail:'Exito',summary:'Eliminado correctamente',sticky:true,position:'tr'})
    }else{
      this.toast.error({detail:'Error',summary:'Error al eliminar',sticky:true,position:'tr'});
    }
  }

}
