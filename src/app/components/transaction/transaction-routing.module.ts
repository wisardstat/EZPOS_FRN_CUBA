import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StrCreateComponent } from './stock-receive/str-create/str-create.component'
import { StrListComponent } from './stock-receive/str-list/str-list.component'
import { StrDetailComponent } from './stock-receive/str-detail/str-detail.component'

import { SaleCreateComponent } from './sale/sale-create/sale-create.component'
import { SlipComponent } from './sale/slip/slip.component'
 
import { StmCreateComponent } from './stock-move/stm-create/stm-create.component'
import { StmListComponent } from './stock-move/stm-list/stm-list.component'

import { RpBydocComponent } from './rp-bydoc/rp-bydoc.component'
import { RpBytxnitemComponent } from './rp-bytxnitem/rp-bytxnitem.component'
 
const routes: Routes = [
  {
      path: '',
      children: [           
          {
            path: 'str_list',
            component: StrListComponent
          },           
          {
            path: 'str_create',
            component: StrCreateComponent
          },           
          {
            path: 'stm_list',
            component: StmListComponent
          }, 
          {
            path: 'stm_create',
            component: StmCreateComponent
          },  
          {
            path: 'transaction_bydoc',
            component: RpBydocComponent
          },  
          {
            path: 'transaction_byitem',
            component: RpBytxnitemComponent
          },  
          {
            path: 'str_details/:id',
            component: StrDetailComponent
          }, 
          {
            path: 'pos_sale',
            component: SaleCreateComponent
          }, 
          {
            path: 'slip',
            component: SlipComponent
          }, 
      ], }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class TransactionRoutingModule { }
