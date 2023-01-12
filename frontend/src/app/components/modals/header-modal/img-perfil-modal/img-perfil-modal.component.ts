import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-img-perfil-modal',
  templateUrl: './img-perfil-modal.component.html',
  styleUrls: ['./img-perfil-modal.component.css']
})
export class ImgPerfilModalComponent implements OnInit {
  persona:any;
  editarPerfil:FormGroup;
  per:any;

  constructor(private fb: FormBuilder, private personSvc: PersonService, private toast: NgToastService) { 
    this.editarPerfil = this.fb.group({
      imageUrl: ['',Validators.required],
    });
  }

  ngOnInit(): void {
    this.personSvc.getAllPerson().subscribe(data =>{
      this.persona=data;
      //console.log(data)
    })
  }

  editar(){
    
    const persona:Person ={
     name: this.persona.name,
     lastName: this.persona.lastName,
     title: this.persona.title,
     birth:this.persona.birth,
     email:this.persona.email,
     phone:this.persona.phone,
     nationality:this.persona.nationality,
     aboutMe:this.persona.aboutMe,
     bannerUrl:this.persona.bannerUrl,
     profileUrl:this.editarPerfil.value.imageUrl
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
