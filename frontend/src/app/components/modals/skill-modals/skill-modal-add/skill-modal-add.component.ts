import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Skills } from 'src/app/models/skills.model';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skill-modal-add',
  templateUrl: './skill-modal-add.component.html',
  styleUrls: ['./skill-modal-add.component.css']
})
export class SkillModalAddComponent implements OnInit {

  habilidad : Skills = new Skills('','','','');
  crearSkill:FormGroup;
  

  constructor(private fb: FormBuilder, private skillSvc : SkillService, private toast: NgToastService) { 
    this.crearSkill = this.fb.group({
      nombre: ['',Validators.required],
      valor:['',Validators.required],
      tipo: ['',Validators.required],
    });
  }

  ngOnInit(): void {
  }

  crear(){
    const skill : Skills ={
      name:this.crearSkill.value.nombre,
      value:this.crearSkill.value.valor+'%',
      type:this.crearSkill.value.tipo,
    }
    this.skillSvc.createSkill(skill).subscribe(data=>{
      setTimeout(
        function(){ 
        window.location.reload(); 
        }, 2000);
      this.toast.success({detail:'Exito',summary:'Creado correctamente',sticky:true,position:'tr'})
    },err=>{
      setTimeout(
        function(){ 
        window.location.reload(); 
        }, 2000);
      this.toast.error({detail:'Error',summary:'Error al crear',sticky:true,position:'tr'});
    })
  }

}
