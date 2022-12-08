import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuarioLogeado:any;
  persona:Person= new Person("","","","","",0,"","","","",);

  constructor(public personSvc:PersonService) { }

  ngOnInit(): void {
    this.usuarioLogeado=localStorage.getItem('logeado');

    this.personSvc.getPerson(1).subscribe(data =>{
      this.persona=data;
      //console.log(data)
    })
  }
  logOut(){
    localStorage.removeItem('logeado');
  }

}
