import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-sobre-mi-modal',
  templateUrl: './sobre-mi-modal.component.html',
  styleUrls: ['./sobre-mi-modal.component.css']
})
export class SobreMiModalComponent implements OnInit {

  persona:any;
  editarSobre:FormGroup;
  
  
  constructor(private fb: FormBuilder, private personSvc: PersonService, private toast: NgToastService) { 
    this.editarSobre = this.fb.group({
      sobreMi: ['',Validators.required],
      correo:['',Validators.required],
      nacimiento:['',Validators.required],
      nacionalidad:['',Validators.required],
      telefono:['',Validators.required]
    });
  }

  ngOnInit(): void {
    this.personSvc.getPerson(1).subscribe(data =>{
      this.persona=data;
      
    })
  }

  editar(){
    
    const persona:Person ={
     name: this.persona.name,
     lastName: this.persona.lastName,
     title: this.persona.title,
     birth:this.editarSobre.value.nacimiento,
     email:this.editarSobre.value.correo,
     phone:this.editarSobre.value.telefono,
     nationality:this.editarSobre.value.nacionalidad,
     aboutMe:this.editarSobre.value.sobreMi,
     bannerUrl:this.persona.bannerUrl,
     profileUrl:this.persona.profileUrl
    }
    this.personSvc.editPerson(1,persona).subscribe(data=>{
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
     });
}
}
