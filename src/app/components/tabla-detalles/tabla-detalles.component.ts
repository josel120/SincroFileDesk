import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { PruebaService } from '../../services/prueba/prueba.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { DatosArchivos } from '../../interfaces/datos-archivos';

@Component({
  selector: 'app-tabla-detalles',
  templateUrl: './tabla-detalles.component.html',
  styleUrls: ['./tabla-detalles.component.css']
})
export class TablaDetallesComponent implements OnInit {
  private element_Data: DatosArchivos[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public archivos; 

  constructor(private prueba: PruebaService, private spinner: NgxSpinnerService) { 
    this.element_Data = []; 
  }
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['select','tipo_rg','nombre'];

  ngOnInit() {
    this.spinner.show();
    this.archivos = new MatTableDataSource(this.element_Data);
    //this.listPrincipalFileCloud({"iduser": localStorage.getItem('identity')});
    this.archivos.paginator = this.paginator;
    this.archivos.sort = this.sort;   
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
  listPrincipalFileCloud(idUser){
    this.prueba.listPrincipalFileCloud(idUser).subscribe((x) => {
      this.archivos.data = x ;
      this.spinner.hide();
    });
  }

  vaina(row){    
    this.prueba.listContentFileCloud(row).subscribe((x) => {
      this.archivos.data = x ;
      console.log(x);
      //this.displayedColumns.push('vaina');
      this.spinner.hide();
    });
  }

}
