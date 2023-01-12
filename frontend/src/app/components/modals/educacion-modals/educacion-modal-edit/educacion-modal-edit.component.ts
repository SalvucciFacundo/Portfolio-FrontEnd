import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/models/educacion.model';
import { EducacionService } from 'src/app/services/educacion.service';
import { NgToastService } from 'ng-angular-popup';



@Component({
  selector: 'app-educacion-modal-edit',
  templateUrl: './educacion-modal-edit.component.html',
  styleUrls: ['./educacion-modal-edit.component.css']
})
export class EducacionModalEditComponent implements OnInit {

educacion :any;
editarEducacion:FormGroup;

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
    setTimeout(
      function(){ 
      window.location.reload(); 
      }, 2000);
    this.toast.success({detail:'Exito',summary:'Actualizado correctamente',sticky:true,position:'tr'})
  },err=>{
    setTimeout(
      function(){ 
      window.location.reload(); 
      }, 2000);
      this.toast.error({detail:'Error',summary:'Error al actualizar',sticky:true,position:'tr'});
  })
  
 }


}
