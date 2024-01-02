import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 

import { RpBymodelComponent } from './rp-bymodel/rp-bymodel.component'

const routes: Routes = [
  {
      path: '',
      children: [
           
          {
            path: 'rpbymodel',
            component: RpBymodelComponent
        }, 
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class InventoryRoutingModule { }
