import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-olvidar-password-model',
  templateUrl: './olvidar-password-model.component.html',
  styleUrls: ['./olvidar-password-model.component.css']
})
export class OlvidarPasswordModelComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<OlvidarPasswordModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
