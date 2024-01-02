import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module'; 
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [  ],

  imports: [
    CommonModule,
    InventoryRoutingModule,
    SharedModule,
  ]
})
export class InventoryModule {


 }
