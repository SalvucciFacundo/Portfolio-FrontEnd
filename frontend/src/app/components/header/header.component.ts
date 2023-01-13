import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Person } from 'src/app/models/person.model';
import { AuthService } from 'src/app/services/auth.service';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  usuarioLogeado:any;
  persona:any;

  constructor(public personSvc:PersonService, private auth: AuthService, private toast: NgToastService) { }

  ngOnInit(): void {
  this.personSvc.getPerson(1).subscribe(data=>{
    this.persona=data;
  });
  this.usuarioLogeado = localStorage.getItem('logeado');
}

  logOut(){
    localStorage.removeItem('logeado');
    setTimeout(
      function(){ 
        window.location.reload(); 
            },2000);
        this.toast.success({detail:'Exito',summary:'Sesión cerrada',sticky:true,position:'tr'})
  }

}
