import { Component, OnInit } from '@angular/core';
import { PruebaService } from '../../services/prueba/prueba.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user;
  public identity;

  constructor(public toastr: ToastrService, private prueba:PruebaService, private router:Router) { 
    this.user = {
      "iduser":"",
      "password":""
    };
  }

  ngOnInit() {
    this.redirectIfLogin();
  }

  onSubmit(){
    this.prueba.loginCloud(this.user).subscribe((response) =>{
        this.identity = response.id;
        if(response['error']){
          this.toastr.error(response['message'], 'Error', {
            timeOut: 3000,
          });
        }else{
          this.toastr.success(response['message'], 'Success');
          localStorage.setItem('identity', response.id);
          localStorage.setItem('email', this.user['iduser']);
          this.router.navigate(['/']);
        }
      }
    );
  }

  redirectIfLogin(){
    if(localStorage.getItem('identity') != null)
      this.router.navigate(["/"]);
    
  }
}
