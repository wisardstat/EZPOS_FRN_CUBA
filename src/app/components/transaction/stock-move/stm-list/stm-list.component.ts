import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';




import { Observable } from 'rxjs';
import { NgbdSortableHeader, SortEvent } from 'src/app/shared/directives/NgbdSortableHeader';
import { TableService } from 'src/app/shared/services/table.service';
import { COMPANYDB, CompanyDB } from '../../../../shared/data/tables/company';
import { STOCKCARDDB,StockcardDB } from '../../../../shared/data/tables/stockcard';


@Component({
  selector: 'app-stm-list',
  templateUrl: './stm-list.component.html',
  styleUrls: ['./stm-list.component.scss']
})
export class StmListComponent {

  
  public selected = [];

  //public Stockcard = Observable<Stockcard[]>;  Observable<CompanyDB[]>
  public tableItem$: Observable<StockcardDB[]>;
  
  //public tableItem$: Observable<CompanyDB[]>;

  public searchText;
  total$: Observable<number>;

  constructor(public service: TableService) {

    this.tableItem$ = service.tableItem$;
    this.total$ = service.total$;
    this.service.setUserData(STOCKCARDDB)
    this.service.pageSize = 10 ;

  }

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;

  }

  ngOnInit() {
  }

  deleteData(id: number){
   // this.tableItem$.subscribe((data: any)=> {      
    //  data.map((elem: any,i: any)=>{elem.id == id && data.splice(i,1)})
      
   // })
  }

}
