import { Component } from '@angular/core';

import { STOCKCARDDB } from '../../../../shared/data/tables/stockcard';

@Component({

  selector: 'app-str-list',
  templateUrl: './str-list.component.html',
  styleUrls: ['./str-list.component.scss']

})

export class StrListComponent {

  public Stockcard = STOCKCARDDB;

  constructor() {
    // ****
  }

  
  ngOnInit() { }

}
