import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    { title: '1', cols: 1, rows: 1 },
    { title: '2', cols: 1, rows: 2 },
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