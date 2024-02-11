import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RpBymodelComponent } from './rp-bymodel/rp-bymodel.component'

import { RpBybrandComponent } from './rp-bybrand/rp-bybrand.component'
import { RpByitemComponent } from './rp-byitem/rp-byitem.component'
// rp-bybrand.component

const routes: Routes = [
  {
      path: '',
      children: [           
          {
            path: 'rpbymodel',
            component: RpBymodelComponent
          }, 
          {
            path: 'rpbybrand',
            component: RpBybrandComponent
          }, 
          {
            path: 'rpbyitem',
            component: RpByitemComponent
          }, 
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class InventoryRoutingModule { }
