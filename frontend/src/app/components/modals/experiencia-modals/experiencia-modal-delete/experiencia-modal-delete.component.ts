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
  // expe:Experiencia[]=[
  //   {lugar:'CiberCafe Alem',info:'Atención al público, contabilidad de caja, mantenimiento y reparación de pc. 2009 - 2013',logo:'assets/img/experiencia/ciber.jpg'},
  //   {lugar:'Ayudante electricista',info:'Ayudante de electricista domiciliario 2014 - 2016',logo:'assets/img/experiencia/electricista.jpg'},
  //   {lugar:'Servicio y mantenimiento de pc',info:' Armado, mantenimiento y reparacion de computadoras, instalación de software y sistema operativo. 2017 - Actualidad',logo:'assets/img/experiencia/mantenimiento.jpg'},
  //   {lugar:'Asociación de canaricultores MACO',info:'Inscripción , modificación de socios en el sistema, digitalización de documentos e actas,secretario de la comisión directiva. 2019 - Actualidad',logo:'assets/img/experiencia/actas.jpg'},
  //   {lugar:'Desarrollador Web Freelance',info:'Desarrollo y mantenimiento de paginas web. 2019 - Actualidad',logo:'assets/img/experiencia/freelance.jpg'},
  //   {lugar:'Soporte Técnico y QA Dubb.com',info:'Testeo de plataforma y manejo de usuarios de la plataforma. 2021 - Actualidad',logo:'assets/img/experiencia/dubbz.png'},
  // ];

  experiencia :any;
  eliminarExperiencia:FormGroup;
  expe :any;

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
      this.expe = data;
    })
    if(this.expe == "El registro ha sido eliminado"){
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
