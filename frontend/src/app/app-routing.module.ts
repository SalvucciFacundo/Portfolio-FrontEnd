import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SkillComponent } from './components/skill/skill.component';

const routes: Routes = [
  {path: '',redirectTo: 'experiencia', pathMatch:'full'},
  {path: 'experiencia', component: ExperienciaComponent},
  {path: 'educacion', component: EducacionComponent},
  {path: 'skills', component: SkillComponent},
  {path: 'proyectos', component: ProyectosComponent},
  { path: '**', redirectTo: 'experiencia' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
