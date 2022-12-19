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

  educacion : Educacion = new Educacion ("","","","","",0);
  crearEducacion:FormGroup;
  edu:any;
  per:any

  constructor(private fb: FormBuilder,private educSvc:EducacionService,private toast: NgToastService,private personSvc: PersonService) { 
    this.crearEducacion = this.fb.group({
      titulo: ['',Validators.required],
      instituto:['',Validators.required],
      logo: ['',Validators.required],
      inicio:['',Validators.required],
      fin:['',Validators.required]
    });
  }

  ngOnInit(): void {
    this.personSvc.getPerson(1).subscribe(data =>{
      this.per=data;
      console.log(data)
    })
  }

  crear(){
    const educacion:Educacion ={
      title: this.crearEducacion.value.titulo,
      institute:this.crearEducacion.value.instituto,
      logoUrl:this.crearEducacion.value.logo,
      start:this.crearEducacion.value.inicio,
      end:this.crearEducacion.value.fin,
      idPerson:this.per.id
    }
    
    this.educSvc.createEducation(educacion).subscribe(data =>{
      console.log(data);
      console.log('Probando educacion '+ educacion)
    });
  }

}
