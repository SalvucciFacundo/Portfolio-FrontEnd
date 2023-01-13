import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-nombre',
  templateUrl: './nombre-modal.component.html',
  styleUrls: ['./nombre-modal.component.css']
})
export class NombreModalComponent implements OnInit {

  persona:any;
  editarNombre:FormGroup;


  constructor(private fb: FormBuilder, private personSvc: PersonService, private toast: NgToastService) { 
    this.editarNombre = this.fb.group({
      nombre: ['',Validators.required],
      apellido: ['',Validators.required],
      titulo:['',Validators.required]
    });
  }

  ngOnInit(): void {
    this.personSvc.getPerson(1).subscribe(data =>{
      this.persona=data;
      
    })
  }

  editar(){
    
    const persona:Person ={
     name: this.editarNombre.value.nombre,
     lastName: this.editarNombre.value.apellido,
     title: this.editarNombre.value.titulo,
     birth:this.persona.birth,
     email:this.persona.email,
     phone:this.persona.phone,
     nationality:this.persona.nationality,
     aboutMe:this.persona.aboutMe,
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