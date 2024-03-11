import { Component } from '@angular/core';

import { category_list } from '../../../../shared/services/categpry.service'
import { inventory_list } from '../../../../shared/services/inventory.service'
import { brand_list } from '../../../../shared/services/brand.service'
import { models } from '../../../../shared/services/model.service'

@Component({
  selector: 'app-str-create',
  templateUrl: './str-create.component.html',
  styleUrls: ['./str-create.component.scss']
})

export class StrCreateComponent {

  public _category_list:any;
  public _brand_list:any;
  public _model_list: any;

  public selected_category: string;
  public selected_brand: string;
  public brand_new: string;
  public selected_model: string;

  constructor(    
    private inventory_list_sv:inventory_list,
    private category_list_sv:category_list,
    private brand_list_sv:brand_list,
    private models_sv: models,
    ) {
    // this.products = productDB.product;
  }


  ngOnInit() { 
        
    this.category_list_sv.getValue().subscribe(response => {this._category_list = response;});
    this.brand_list_sv.getValue().subscribe(response => {this._brand_list = response;});
    this.models_sv.getList().subscribe(response => { this._model_list = response; });
      
  }

  onKeyDownEvent(event: any){

    //console.log(event.target.value);
    this.brand_new = event.target.value;
 
 }

}
