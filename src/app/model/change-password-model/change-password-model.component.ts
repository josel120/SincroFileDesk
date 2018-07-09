import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { PruebaService } from '../../services/prueba/prueba.service';

@Component({
  selector: 'app-change-password-model',
  templateUrl: './change-password-model.component.html',
  styleUrls: ['./change-password-model.component.css']
})
export class ChangePasswordModelComponent implements OnInit {
  public password;
  public idUser;

  constructor(
    public dialogRef: MatDialogRef<ChangePasswordModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public toastr: ToastrService,
    private prueba:PruebaService,public dialog: MatDialog) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }
  // colocar password nuevo
  cambiarPassword(){
    this.idUser = localStorage.getItem('idUser');
    this.prueba.changePassword({"a":"A","var1": this.idUser,"var2":this.password}).subscribe((response) =>{
        if(response){
          this.toastr.success(response['response']['message'], 'Success');
        }else{
          this.toastr.error("Datos invalido", 'Error');
        }
      }
    );
    localStorage.removeItem('idUser');
  }
}
