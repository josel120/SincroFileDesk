import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PruebaService } from '../../services/prueba/prueba.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{ 
  public mostrarNombre;

  constructor(private router:Router){
    this.mostrarNombre = localStorage.getItem('email');
  }
  ngOnInit(){
    this.redirectIfLogin();
    
  }
  cards = [
    { title: '', cols: 2, rows: 1 }
  ];

  redirectIfLogin(){
    if(localStorage.getItem('identity') == null)
      this.router.navigate(["/login"]);    
  }
  cerrarSesion(){
    localStorage.removeItem('email');
    localStorage.removeItem('identity');
    this.router.navigate(["/login"]);
  }
  
}