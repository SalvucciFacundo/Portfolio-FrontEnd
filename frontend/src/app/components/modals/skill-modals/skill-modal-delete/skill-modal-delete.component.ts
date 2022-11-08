import { Component, OnInit } from '@angular/core';
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
  hardSkill : Skill[]=[
    {nombre:'HTML',valor:'80%'},
    {nombre:'CSS',valor:'50%'},
    {nombre:'JavaScript',valor:'40%'},
    {nombre:'Bootstrap',valor:'55%'},
    {nombre:'Angular',valor:'75%'},
    {nombre:'Node.JS',valor:'65%'},
    {nombre:'MongoDB',valor:'45%'},
    {nombre:'Express',valor:'40%'},
  ];
  softSkill : Skill[]=[
    {nombre:'Comunicacion',valor:'90%'},
    {nombre:'Trabajo en equipo',valor:'80%'},
    {nombre:'Resolucion de problemas',valor:'75%'},
    {nombre:'Ingles',valor:'70%'},
    {nombre:'Adaptación al cambio',valor:'80%'},
    {nombre:'Resolución de problemas',valor:'60%'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
