import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Proyectos } from 'src/app/models/proyectos.model';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-proyectos-modal-add',
  templateUrl: './proyectos-modal-add.component.html',
  styleUrls: ['./proyectos-modal-add.component.css']
})
export class ProyectosModalAddComponent implements OnInit {

  crearProyecto:FormGroup;

  constructor(private fb :FormBuilder, private proSvc: ProyectoService, private toast: NgToastService) { 
    this.crearProyecto = this.fb.group({
      titulo:['',Validators.required],
      descripcion:['',Validators.required],
      imgUrl:['',Validators.required],
      url:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  crear(){
    const proyecto :Proyectos ={
      title: this.crearProyecto.value.titulo,
      description:this.crearProyecto.value.descripcion,
      imgUrl:this.crearProyecto.value.imgUrl,
      url:this.crearProyecto.value.url
    }
    this.proSvc.createProject(proyecto).subscribe(data=>{
      setTimeout(
        function(){ 
        window.location.reload(); 
        }, 2000);
      this.toast.success({detail:'Exito',summary:'Creado correctamente',sticky:true,position:'tr'})
},err =>{
  setTimeout(
    function(){ 
    window.location.reload(); 
    }, 2000);
  this.toast.error({detail:'Error',summary:'Error al crear',sticky:true,position:'tr'});
})
}

}
