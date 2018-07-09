import { Component, OnInit } from '@angular/core';
import { PruebaService } from '../../services/prueba/prueba.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { OlvidarPasswordModelComponent } from '../../model/olvidar-password-model/olvidar-password-model.component';
import { MatDialog } from '@angular/material';
import { ChangePasswordModelComponent } from '../../model/change-password-model/change-password-model.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user;
  public identity;
  public codigo;
  public password;

  constructor(public toastr: ToastrService, 
    private prueba:PruebaService, 
    private router:Router, 
    public dialog: MatDialog) { 
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
  // sen envia el codigo de verificacion al correo
  // se abre el model para colocar el codigo
  olvidarPassword(email){
    console.log('olvidarPassword');
    this.prueba.olvidarPassword({"a":"G", "var1":email}).subscribe((response) =>{
        if(response){
          this.toastr.success(response['response']['message'], 'Success');
          this.openDialog(email);
        }else{
          this.toastr.error("Correo invalido", 'Error');
        }
      }
    );
  }
  // abre el model colocar codigo
  openDialog(email): void {
    const dialogRef = this.dialog.open(OlvidarPasswordModelComponent, {
      data: {codigo: this.codigo}
    });    
    localStorage.setItem('email',email);
  }
}
