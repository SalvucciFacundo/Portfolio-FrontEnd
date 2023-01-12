import { Component, OnInit } from '@angular/core';
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
  persona:Person= new Person("","","","","",0,"","","","",);

  constructor(public personSvc:PersonService, private auth: AuthService) { }

  ngOnInit(): void {
  this.personSvc.getPerson(1).subscribe(data=>{
    this.persona=data;
  });
  this.usuarioLogeado = localStorage.getItem('logeado');
}

  logOut(){
    localStorage.removeItem('logeado');
    localStorage.removeItem('token');

  }

}
