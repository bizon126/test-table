import {Component} from '@angular/core';
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {DataStorageService} from "../data-access/data-storage.service";
import {Sort} from "@angular/material/sort";


@Component({

  selector: 'app-app-tabe',
  templateUrl: './app-tabe.component.html',
  styleUrls: ['./app-tabe.component.scss'],
})


export class AppTabeComponent  {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(this.dataStorageService.ELEMENT_DATA.slice());


  constructor(private dataStorageService: DataStorageService) {
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  sortData(sort: Sort) {
    const data = this.dataStorageService.ELEMENT_DATA.slice();
    if (!sort.active || sort.direction === '') {
      this.dataSource.data = data;
      return;
    }

    this.dataSource.data = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return this.compare(a.name, b.name, isAsc);
        case 'position': return this.compare(a.position, b.position, isAsc);
        case 'weight': return this.compare(a.weight, b.weight, isAsc);
        case 'symbol': return this.compare(a.symbol, b.symbol, isAsc);
        default: return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }



}
