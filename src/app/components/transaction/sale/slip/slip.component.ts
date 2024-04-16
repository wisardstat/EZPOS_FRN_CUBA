import { Component } from '@angular/core';

@Component({
  selector: 'app-slip',
  templateUrl: './slip.component.html',
  styleUrls: ['./slip.component.scss']
})
export class SlipComponent {

  onPrint(){
    window.print();
}

printToCart(printSectionId: string){
  console.log('Print')
  let popupWinindow
  let innerContents = document.getElementById(printSectionId).innerHTML;
  popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
  popupWinindow.document.open();
  popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + innerContents + '</html>');
  popupWinindow.document.close();
}


}
