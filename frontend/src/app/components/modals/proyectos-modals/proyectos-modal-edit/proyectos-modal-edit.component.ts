import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Proyectos } from 'src/app/models/proyectos.model';
import { ProyectoService } from 'src/app/services/proyecto.service';


@Component({
  selector: 'app-proyectos-modal-edit',
  templateUrl: './proyectos-modal-edit.component.html',
  styleUrls: ['./proyectos-modal-edit.component.css']
})
export class ProyectosModalEditComponent implements OnInit {

editarProyecto:FormGroup;
proyectos:any;

  constructor(private fb :FormBuilder, private proSvc: ProyectoService, private toast: NgToastService) { 
    this.editarProyecto = this.fb.group({
      id:['',Validators.required],
      titulo:['',Validators.required],
      descripcion:['',Validators.required],
      imgUrl:['',Validators.required],
      url:['',Validators.required]
    })
  }

  ngOnInit(): void {
   
    this.proSvc.getAllProject().subscribe(data=>{
      this.proyectos = data;
    })
  }

  editar(){
    const proyecto :Proyectos ={
      title: this.editarProyecto.value.titulo,
      description:this.editarProyecto.value.descripcion,
      imgUrl:this.editarProyecto.value.imgUrl,
      url:this.editarProyecto.value.url
    }
    this.proSvc.updateProject(this.editarProyecto.value.id,proyecto).subscribe(data=>{
      setTimeout(
        function(){ 
        window.location.reload(); 
        }, 2000);
      this.toast.success({detail:'Exito',summary:'Actualizado correctamente',sticky:true,position:'tr'})
},err =>{
  setTimeout(
    function(){ 
    window.location.reload(); 
    }, 2000);
  this.toast.error({detail:'Error',summary:'Error al actualizar',sticky:true,position:'tr'});
})
}

}
