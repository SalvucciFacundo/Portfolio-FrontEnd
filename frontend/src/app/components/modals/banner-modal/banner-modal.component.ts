import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-banner-modal',
  templateUrl: './banner-modal.component.html',
  styleUrls: ['./banner-modal.component.css']
})
export class BannerModalComponent implements OnInit {
  persona:Person= new Person("","","","","",0,"","","","",);
  editarBanner:FormGroup;
  per:any;

  constructor(private fb: FormBuilder, private personSvc: PersonService, private toast: NgToastService) { 
    this.editarBanner = this.fb.group({
      imageUrl: ['',Validators.required],
    });
  }

  ngOnInit(): void {
    this.personSvc.getPerson(1).subscribe(data =>{
      this.persona=data;
      console.log(data)
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
     bannerUrl:this.editarBanner.value.imageUrl,
     profileUrl:this.persona.profileUrl
    }
     this.personSvc.editPerson(1,persona).subscribe(data=>{
      this.per=data;
       //console.log(data)
     });
    //console.log(persona);
if(this.per== "persona actualizada"){
    setTimeout(
      function(){ 
      window.location.reload(); 
      }, 3000);
    this.toast.success({detail:'Exito',summary:'Actualizado correctamente',sticky:true,position:'tr'})
  }else{
    this.toast.error({detail:'Error',summary:'Error al actualizar',sticky:true,position:'tr'});
  }
}

}
