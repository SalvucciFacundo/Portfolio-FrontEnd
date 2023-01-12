import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Experiencias } from 'src/app/models/experiencias.model';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-experiencia-modal-add',
  templateUrl: './experiencia-modal-add.component.html',
  styleUrls: ['./experiencia-modal-add.component.css']
})
export class ExperienciaModalAddComponent implements OnInit {

  experiencia : Experiencias = new Experiencias('','','','','');
  crearExperiencia:FormGroup;


  constructor(private fb: FormBuilder, private expeSvc : ExperienciaService, private toast: NgToastService) {
    this.crearExperiencia = this.fb.group({
      nombre: ['',Validators.required],
      descripcion:['',Validators.required],
      logo: ['',Validators.required],
      inicio: ['',Validators.required],
      fin: ['',Validators.required],
    });
   }

  ngOnInit(): void {
  }

  crear(){
    const experiencia:Experiencias ={
      companyName: this.crearExperiencia.value.nombre,
      description:this.crearExperiencia.value.descripcion,
      imgUrl:this.crearExperiencia.value.logo,
      start:this.crearExperiencia.value.inicio,
      end:this.crearExperiencia.value.fin
    }
    this.expeSvc.createExperience(experiencia).subscribe(data=>{
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
