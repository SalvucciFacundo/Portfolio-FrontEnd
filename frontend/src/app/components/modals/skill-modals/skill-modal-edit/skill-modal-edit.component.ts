import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Skills } from 'src/app/models/skills.model';
import { SkillService } from 'src/app/services/skill.service';


@Component({
  selector: 'app-skill-modal-edit',
  templateUrl: './skill-modal-edit.component.html',
  styleUrls: ['./skill-modal-edit.component.css']
})
export class SkillModalEditComponent implements OnInit {
 
  editarSkill: FormGroup;
  skill:any;

  constructor(private skillSvc: SkillService, private fb: FormBuilder, private toast: NgToastService) { 
    this.editarSkill = this.fb.group({
      id: ['',Validators.required],
      nombre:['',Validators.required],
      valor:['',Validators.required],
      tipo:['',Validators.required],
      
    });
  }

  ngOnInit(): void {
    this.skillSvc.getAllSkills().subscribe(data=>{
      this.skill=data;
    })
  }
  editar(){
    const skill : Skills={
      name:this.editarSkill.value.nombre,
      value:this.editarSkill.value.valor+'%',
      type:this.editarSkill.value.tipo
    }

    this.skillSvc.updateSkill(this.editarSkill.value.id,skill).subscribe(data=>{
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
    })
  }

}
