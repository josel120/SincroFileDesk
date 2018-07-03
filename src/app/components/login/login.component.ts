import { Component, OnInit } from '@angular/core';
import { PruebaService } from '../../services/prueba/prueba.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user;

  constructor(private prueba:PruebaService) { 
    this.user = {
      "email":"",
      "password":"",
      "gethash":"false"
    };
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.user);
    //this.prueba.login(this.user).subscribe((response) =>{
      this.prueba.loginCloud(this.user).subscribe((response) =>{
        let identificador = response;
        console.log(identificador);
      }
    );
  }
}
