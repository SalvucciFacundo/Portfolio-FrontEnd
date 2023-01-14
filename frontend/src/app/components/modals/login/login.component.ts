import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Users } from 'src/app/models/users';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Users ={
    email:'',
    password:''
  };
  usu:any;
  loginForm:FormGroup;
  constructor( private authService: AuthService, private fb: FormBuilder,private toast: NgToastService) {
    this.loginForm = this.fb.group({
      email: ['',Validators.required],
      password:['',Validators.required],
    });
   }

  ngOnInit(): void {
  }
  logear(){

    const user:Users={
      email:this.loginForm.value.email,
      password:this.loginForm.value.password
    }
    this.authService.login(user).subscribe(data=>{
      localStorage.setItem('logeado', 'true');
      setTimeout(
       function(){ 
         window.location.reload(); 
             },2000);
         this.toast.success({detail:'Exito',summary:'Bienvenido',sticky:true,position:'tr'})
    },err=>{
      localStorage.setItem('logeado', 'false');
      setTimeout(
       function(){ 
         window.location.reload(); 
             },2000);
         this.toast.error({detail:'Error',summary:'Usuario o password incorrectos',sticky:true,position:'tr'})
    })
   
  }


  
}
