import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-change-password-model',
  templateUrl: './change-password-model.component.html',
  styleUrls: ['./change-password-model.component.css']
})
export class ChangePasswordModelComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ChangePasswordModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
