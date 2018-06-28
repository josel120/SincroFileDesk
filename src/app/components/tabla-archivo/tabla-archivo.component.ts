import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { PruebaService } from '../../services/prueba/prueba.service';

@Component({
  selector: 'tabla-archivo',
  templateUrl: './tabla-archivo.component.html',
  styleUrls: ['./tabla-archivo.component.css']
})
export class TablaArchivoComponent implements OnInit {
    ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  private archivos; 

  constructor(private prueba: PruebaService) {
     
  }
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['select','id','name'];

  ngOnInit() {
    this.archivos = new MatTableDataSource(this.ELEMENT_DATA);
    this.archivos.paginator = this.paginator;
    this.archivos.sort = this.sort;   
    this.getAllFiles(); 
    this.getFilesByDir();
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
  
  getAllFiles(){  
    this.prueba.getAllCats().subscribe((x) =>{
      console.log(x['cats']);
    });
  }
  getFilesByDir(){
    this.prueba.getFilesSource().subscribe((x) =>{
      console.log(x);
    })
  }

  
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



