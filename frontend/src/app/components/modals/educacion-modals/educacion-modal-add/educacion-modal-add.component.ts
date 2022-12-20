import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Educacion } from 'src/app/models/educacion.model';
import { EducacionService } from 'src/app/services/educacion.service';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-educacion-modal-add',
  templateUrl: './educacion-modal-add.component.html',
  styleUrls: ['./educacion-modal-add.component.css']
})
export class EducacionModalAddComponent implements OnInit {

  educacion : Educacion = new Educacion ("","","","","");
  crearEducacion:FormGroup;
  edu:any;


  constructor(private fb: FormBuilder,private educSvc:EducacionService,private toast: NgToastService) { 
    this.crearEducacion = this.fb.group({
      titulo: ['',Validators.required],
      instituto:['',Validators.required],
      logo: ['',Validators.required],
      inicio:['',Validators.required],
      fin:['',Validators.required]
    });
  }

  ngOnInit(): void {
  }

  crear(){
    const educacion:Educacion ={
      title: this.crearEducacion.value.titulo,
      institute:this.crearEducacion.value.instituto,
      logoUrl:this.crearEducacion.value.logo,
      start:this.crearEducacion.value.inicio,
      end:this.crearEducacion.value.fin,
      
    }
    
    this.educSvc.createEducation(educacion).subscribe(data =>{
      this.edu=data;
      //console.log(data);
     // console.log('Probando educacion '+ educacion)
    });
    if(this.edu == "Registro creado correctamente"){
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
