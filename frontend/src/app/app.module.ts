import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgToastModule} from 'ng-angular-popup';
//componentes
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
import { BannerModalComponent } from './components/modals/header-modal/banner-modal/banner-modal.component';
import { ImgPerfilModalComponent } from './components/modals/header-modal/img-perfil-modal/img-perfil-modal.component';
import { NombreModalComponent } from './components/modals/header-modal/nombre-modal/nombre-modal.component';
import { SobreMiModalComponent } from './components/modals/header-modal/sobre-mi-modal/sobre-mi-modal.component';

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
import { ProyectosModalEditComponent } from './components/modals/proyectos-modals/proyectos-modal-edit/proyectos-modal-edit.component';
import { ProyectosModalAddComponent } from './components/modals/proyectos-modals/proyectos-modal-add/proyectos-modal-add.component';
import { ProyectosModalDeleteComponent } from './components/modals/proyectos-modals/proyectos-modal-delete/proyectos-modal-delete.component';
import { HomeComponent } from './components/home/home.component';




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
    ProyectosModalEditComponent,
    ProyectosModalAddComponent,
    ProyectosModalDeleteComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CarouselModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgToastModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
