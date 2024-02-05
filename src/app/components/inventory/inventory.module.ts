
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../shared/shared.module';


import { InventoryRoutingModule } from './inventory-routing.module'; 
// import { RpBymodelComponents } from './rp-bymodel/rp-bymodel.component'

@NgModule({
  declarations: [   ],

  imports: [
    
    CommonModule,    
    
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    SharedModule,
    NgSelectModule,   
    FormsModule,

    InventoryRoutingModule,
  ]
})
export class InventoryModule {


 }
