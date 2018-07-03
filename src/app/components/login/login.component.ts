import { Component, OnInit } from '@angular/core';
import { PruebaService } from '../../services/prueba/prueba.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user;
  public identity;

  constructor(public toastr: ToastrService, private prueba:PruebaService) { 
    this.user = {
      "iduser":"",
      "password":""
    };
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.user);
    //this.prueba.login(this.user).subscribe((response) =>{
      this.prueba.loginCloud(this.user).subscribe((response) =>{
        //let identificador = response.id;
        // console.log('identificador',identificador);
      this.identity = response.id;
      console.log(response['error'] == "true");
      if(response['error']){
        this.toastr.error('everything is broken', 'Major Error', {
          timeOut: 3000,
        });
        //this.toastr.success('Hello world!', 'Toastr fun!');
      }
      //localStorage.setItem('identity', this.identity);
      }
    );
  }
  showError() {
    this.toastr.error('This is not good!', 'Oops!');
  }
}
