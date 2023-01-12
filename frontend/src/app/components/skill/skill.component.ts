import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/services/skill.service';


@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

 
  skillHard:any;
  usuarioLogeado:any;

  skillSoft:any;

  constructor(private skillSvc:SkillService) { }

  ngOnInit(): void {
    this.usuarioLogeado=localStorage.getItem('logeado');
    this.skillSvc.getType('hard').subscribe(data=>{
      this.skillHard=data;
    })
      this.skillSvc.getType('soft').subscribe(data=>{
        this.skillSoft=data;
      })



  }

}
