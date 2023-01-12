import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Users } from 'src/app/models/users';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  crearUsuario:FormGroup;

  constructor(private useSvc: AuthService, private fb:FormBuilder,private toast: NgToastService) {
    this.crearUsuario = this.fb.group({
      nombre: ['',Validators.required],
      email:['',Validators.required],
      password: ['',Validators.required],
    });
   }

  ngOnInit(): void {
  }

  crear(){
    const usuario : Users ={
      nombre:this.crearUsuario.value.nombre,
      email:this.crearUsuario.value.email,
      password:this.crearUsuario.value.password,
    }
    this.useSvc.createUser(usuario).subscribe(data=>{
      localStorage.setItem('logeado', 'true');
      setTimeout(
        function(){ 
        window.location.reload(); 
        }, 2000);
      this.toast.success({detail:'Exito',summary:'Creado correctamente',sticky:true,position:'tr'})
    },err=>{
      setTimeout(
        function(){ 
        window.location.reload(); 
        }, 2000);
      this.toast.error({detail:'Error',summary:'Error al crear',sticky:true,position:'tr'});
    })
  }

}
