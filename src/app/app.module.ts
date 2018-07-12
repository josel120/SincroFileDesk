import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatDialogModule } from '@angular/material';
import { TablaArchivoComponent } from './components/tabla-archivo/tabla-archivo.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { appRoutingProviders, routing } from './/app-routing.module';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { OlvidarPasswordModelComponent } from './model/olvidar-password-model/olvidar-password-model.component';
import { ChangePasswordModelComponent } from './model/change-password-model/change-password-model.component';
import { TablaDetallesComponent } from './components/tabla-detalles/tabla-detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TablaArchivoComponent,
    LoginComponent,
    OlvidarPasswordModelComponent,
    ChangePasswordModelComponent,
    TablaDetallesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    HttpClientModule,
    routing,
    FormsModule,
    ToastrModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    MatDialogModule
  ],
  providers: [
    appRoutingProviders
  ],
  entryComponents: [
    OlvidarPasswordModelComponent,
    ChangePasswordModelComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
