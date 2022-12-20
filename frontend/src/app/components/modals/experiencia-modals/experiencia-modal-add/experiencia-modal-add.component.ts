import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Experiencias } from 'src/app/models/experiencias';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-experiencia-modal-add',
  templateUrl: './experiencia-modal-add.component.html',
  styleUrls: ['./experiencia-modal-add.component.css']
})
export class ExperienciaModalAddComponent implements OnInit {

  experiencia : Experiencias = new Experiencias('','','');
  crearExperiencia:FormGroup;
  expe:any;

  constructor(private fb: FormBuilder, private expeSvc : ExperienciaService, private toast: NgToastService) {
    this.crearExperiencia = this.fb.group({
      nombre: ['',Validators.required],
      descripcion:['',Validators.required],
      logo: ['',Validators.required],
    });
   }

  ngOnInit(): void {
  }

  crear(){
    const experiencia:Experiencias ={
      companyName: this.crearExperiencia.value.nombre,
      description:this.crearExperiencia.value.descripcion,
      imgUrl:this.crearExperiencia.value.logo,
    }
this.expeSvc.createExperience(experiencia).subscribe(data=>{
  this.expe=data;
})
if(this.expe == "Registro creado correctamente"){
  setTimeout(
    function(){ 
    window.location.reload(); 
    }, 3000);
  this.toast.success({detail:'Exito',summary:'Creado correctamente',sticky:true,position:'tr'})
}else{
  this.toast.error({detail:'Error',summary:'Error al crear',sticky:true,position:'tr'});
}

  }
}
