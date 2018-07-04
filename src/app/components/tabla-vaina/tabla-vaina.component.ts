import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { PruebaService } from '../../services/prueba/prueba.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-tabla-vaina',
  templateUrl: './tabla-vaina.component.html',
  styleUrls: ['./tabla-vaina.component.css']
})
export class TablaVainaComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  private archivos; 
  public dataVaina:PeriodicElement[] = [];

  constructor(private prueba: PruebaService, private spinner: NgxSpinnerService) { 
  }
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['select','id','nombre'];

  ngOnInit() {
    this.spinner.show();
    this.archivos = new MatTableDataSource(this.dataVaina);
    console.log('vaina loca',this.archivos);
    this.archivos.paginator = this.paginator;    
    this.archivos.sort = this.sort;
    this.listFile({"iduser": localStorage.getItem('identity')});
  }

  selection = new SelectionModel<any>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.archivos.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.archivos.data.forEach(row => this.selection.select(row));
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.archivos.filter = filterValue;
  }
  listFile(idUser){
    //this.loading = true;
    this.prueba.listFileCloud(idUser).subscribe((x:PeriodicElement) => {
      this.archivos.data = x ; 
      console.log('hry',this.archivos);     
      setTimeout(() => {
        this.spinner.hide();
      }, 2000);      
      });
  }
  
}
export interface PeriodicElement {
  nombre: string;
  tipo_rg: string;
  id: string;
  nivel:string;
  path:string;
}

