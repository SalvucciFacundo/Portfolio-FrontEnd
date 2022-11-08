import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillComponent } from './components/skill/skill.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { LoginComponent } from './components/modals/login/login.component';
import { RegisterComponent } from './components/modals/register/register.component';
import { BannerModalComponent } from './components/modals/banner-modal/banner-modal.component';
import { ImgPerfilModalComponent } from './components/modals/img-perfil-modal/img-perfil-modal.component';
import { NombreModalComponent } from './components/modals/nombre-modal/nombre-modal.component';
import { SobreMiModalComponent } from './components/modals/sobre-mi-modal/sobre-mi-modal.component';

//educacion modales
import { EducacionModalEditComponent } from './components/modals/educacion-modals/educacion-modal-edit/educacion-modal-edit.component'; 
import { EducacionModalAddComponent } from './components/modals/educacion-modals/educacion-modal-add/educacion-modal-add.component';
import { EducacionModalDeleteComponent } from './components/modals/educacion-modals/educacion-modal-delete/educacion-modal-delete.component';
//experiencia modales
import { ExperienciaModalEditComponent } from './components/modals/experiencia-modals/experiencia-modal-edit/experiencia-modal-edit.component';
import { ExperienciaModalAddComponent } from './components/modals/experiencia-modals/experiencia-modal-add/experiencia-modal-add.component';
import { ExperienciaModalDeleteComponent } from './components/modals/experiencia-modals/experiencia-modal-delete/experiencia-modal-delete.component';
import { SkillModalDeleteComponent } from './components/modals/skill-modals/skill-modal-delete/skill-modal-delete.component';
import { SkillModalAddComponent } from './components/modals/skill-modals/skill-modal-add/skill-modal-add.component';
import { SkillModalEditComponent } from './components/modals/skill-modals/skill-modal-edit/skill-modal-edit.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillComponent,
    ProyectosComponent,
    LoginComponent,
    RegisterComponent,
    BannerModalComponent,
    ImgPerfilModalComponent,
    NombreModalComponent,
    SobreMiModalComponent,
    EducacionModalEditComponent,
    EducacionModalAddComponent,
    EducacionModalDeleteComponent,
    ExperienciaModalEditComponent,
    ExperienciaModalAddComponent,
    ExperienciaModalDeleteComponent,
    SkillModalDeleteComponent,
    SkillModalAddComponent,
    SkillModalEditComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
