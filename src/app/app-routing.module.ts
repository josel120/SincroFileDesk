import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TablaArchivoComponent } from './components/tabla-archivo/tabla-archivo.component';

const appRoutes: Routes = [
  {path:'', component: DashboardComponent},
  {path:'login', component: LoginComponent},
  {path:'tabla', component: TablaArchivoComponent},
  {path:'**', component: LoginComponent},

];
export const appRoutingProviders:any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);