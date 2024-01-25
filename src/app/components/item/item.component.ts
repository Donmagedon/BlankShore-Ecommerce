import { Component,OnInit } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit{
  @Input() public itemName!: string
  @Input() public itemImageData!: string 
  @Input() public itemPrice!: number 
  ngOnInit(): void {
    
  }
}
