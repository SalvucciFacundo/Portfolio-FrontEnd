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
