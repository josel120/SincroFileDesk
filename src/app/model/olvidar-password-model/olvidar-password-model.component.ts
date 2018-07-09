import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { PruebaService } from '../../services/prueba/prueba.service';
import { ChangePasswordModelComponent } from '../change-password-model/change-password-model.component';

@Component({
  selector: 'app-olvidar-password-model',
  templateUrl: './olvidar-password-model.component.html',
  styleUrls: ['./olvidar-password-model.component.css']
})
export class OlvidarPasswordModelComponent implements OnInit {
  public codigo;
  public password;
  public email;
  public idUser;

  constructor(
    public dialogRef: MatDialogRef<OlvidarPasswordModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public toastr: ToastrService,
    private prueba:PruebaService,public dialog: MatDialog) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  
  verificarCodigo(email){
    this.email = localStorage.getItem('email');
    this.prueba.verificarPassword({"a":"V","var1": this.email,"var2":this.codigo}).subscribe((response) =>{
        if(response){
          this.toastr.success(response['response']['message'], 'Success');
          localStorage.setItem('idUser', response['response']['id']);
          this.openDialogPassword();
          this.idUser = response['response']['id'];
        }else{
          this.toastr.error("Datos invalido", 'Error');
        }
      }
    );
    localStorage.removeItem('email');
  }

  //colocar password nuevo
  openDialogPassword(): void {
    const dialogRef = this.dialog.open(ChangePasswordModelComponent, {
      data: {password: this.password}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.password = result;
    });
  }

}
