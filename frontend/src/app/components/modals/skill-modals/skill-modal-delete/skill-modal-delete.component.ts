import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { SkillService } from 'src/app/services/skill.service';
export interface Skill {
  nombre:string;
  valor:string;
}
@Component({
  selector: 'app-skill-modal-delete',
  templateUrl: './skill-modal-delete.component.html',
  styleUrls: ['./skill-modal-delete.component.css']
})
export class SkillModalDeleteComponent implements OnInit {
  
  skill:any;
  elimnarSkill:FormGroup
  ;
  constructor(private skillSvc: SkillService, private toast: NgToastService ,private fb: FormBuilder) { 
    this.elimnarSkill = this.fb.group({
      seleccion: ['',Validators.required],
    })
  }

  ngOnInit(): void {
    this.skillSvc.getAllSkills().subscribe(data=>{
      this.skill=data;
    })
  }

  eliminar(){
    this.skillSvc.deleteSkill(this.elimnarSkill.value.seleccion).subscribe(data=>{
      setTimeout(
        function(){ 
        window.location.reload(); 
        }, 2000);
      this.toast.success({detail:'Exito',summary:'Eliminado correctamente',sticky:true,position:'tr'})
    },err=>{
      setTimeout(
        function(){ 
        window.location.reload(); 
        }, 2000);
      this.toast.error({detail:'Error',summary:'Error al eliminar',sticky:true,position:'tr'});
    })
  }

}
