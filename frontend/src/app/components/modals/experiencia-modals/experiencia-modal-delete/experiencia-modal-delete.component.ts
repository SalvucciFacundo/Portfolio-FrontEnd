import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-experiencia-modal-delete',
  templateUrl: './experiencia-modal-delete.component.html',
  styleUrls: ['./experiencia-modal-delete.component.css']
})
export class ExperienciaModalDeleteComponent implements OnInit {
  

  experiencia :any;
  eliminarExperiencia:FormGroup;

  constructor(private expeSvc: ExperienciaService, private fb: FormBuilder, private toast: NgToastService) { 
    this.eliminarExperiencia = this.fb.group({
      seleccion: ['',Validators.required],
    })
  }

  ngOnInit(): void {
    this.expeSvc.getAllExperiences().subscribe(data=>{
      this.experiencia = data;
    })
  }

  eliminar(){
    this.expeSvc.deleteExperience(this.eliminarExperiencia.value.seleccion).subscribe(data=>{
      setTimeout(
        function(){ 
        window.location.reload(); 
        }, 2000);
      this.toast.success({detail:'Exito',summary:'Eliminado correctamente',sticky:true,position:'tr'})
    },err=>{
      setTimeout(
        function(){ 
        window.location.reload(); 
        }, 2000);
      this.toast.error({detail:'Error',summary:'Error al eliminar',sticky:true,position:'tr'});
    })
  }
}
