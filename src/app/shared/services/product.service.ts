import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public url :string = environment.api_url
  public limit :string = environment.api_row_limit.toString()

  constructor(private httpClient: HttpClient) { }

  getSingleByBarcode(bar_code,wh_id,cc_id){    
    
    var url = this.url+ 'product_info/Barcode?barcode='+bar_code+"&wh_id="+wh_id+"&cc_id="+cc_id
    return this.httpClient.get(url);

  }
 

}
