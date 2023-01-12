import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-proyectos-modal-delete',
  templateUrl: './proyectos-modal-delete.component.html',
  styleUrls: ['./proyectos-modal-delete.component.css']
})
export class ProyectosModalDeleteComponent implements OnInit {
  elimarProyecto:FormGroup;
  proyectos:any;

  constructor(private proSvc : ProyectoService, private fb: FormBuilder, private toast: NgToastService) {
    this.elimarProyecto = this.fb.group({
      seleccion: ['',Validators.required],
    })
   }
  

  ngOnInit(): void {
    this.proSvc.getAllProject().subscribe(data=>{
      this.proyectos = data;
    })
  }
  eliminar(){
    this.proSvc.deleteProject(this.elimarProyecto.value.seleccion).subscribe(data=>{
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
