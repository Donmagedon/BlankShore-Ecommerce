import { Component, Input } from '@angular/core';
import { Items } from 'src/app/models/items';

@Component({
  selector: 'app-products-demonstrate',
  templateUrl: './products-demonstrate.component.html',
  styleUrls: ['./products-demonstrate.component.css']
})
export class ProductsDemonstrateComponent {
  @Input() itemName : any 
  @Input() itemPrice : any
  @Input() itemImage : any
  @Input() itemCat : any
  @Input() itemSub : any
  

}
