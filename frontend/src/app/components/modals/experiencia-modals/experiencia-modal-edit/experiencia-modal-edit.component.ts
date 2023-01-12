import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Experiencias } from 'src/app/models/experiencias.model';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-experiencia-modal-edit',
  templateUrl: './experiencia-modal-edit.component.html',
  styleUrls: ['./experiencia-modal-edit.component.css'],
})
export class ExperienciaModalEditComponent implements OnInit {
  
  experiencia: any;
  editarExperiencia: FormGroup;

  constructor(private expeSvc:ExperienciaService, private fb: FormBuilder, private toast: NgToastService) {
    this.editarExperiencia = this.fb.group({
      id: ['',Validators.required],
      nombre:['',Validators.required],
      descripcion:['',Validators.required],
      logo:['',Validators.required],
      inicio:['',Validators.required],
      fin:['',Validators.required],
    });
  }

  ngOnInit(): void {
    this.expeSvc.getAllExperiences().subscribe(data=>{
      this.experiencia=data;
    })
  }

  editar() {
  
    const experiencia : Experiencias ={
      description: this.editarExperiencia.value.descripcion,
      companyName: this.editarExperiencia.value.nombre,
      imgUrl: this.editarExperiencia.value.logo,
      start:this.editarExperiencia.value.inicio,
      end:this.editarExperiencia.value.fin
    }
    this.expeSvc.updateExperience(this.editarExperiencia.value.id, experiencia).subscribe(data=>{
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
