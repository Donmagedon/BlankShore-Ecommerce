import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/models/items';
import { GetItemsService } from 'src/app/Services/get-items.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent implements OnInit {
  public items!: Array<Items>
  public routeName!: any
  public defaultItems: Items[] = []
  public itemsOnScreen: Items[] = []

  constructor(private getItems : GetItemsService, private routeService: ActivatedRoute){
  }

  getDefaultItems(route:string){
    this.getItems.getDefaultItems(route).subscribe((data)=>{
      this.defaultItems = data
      this.itemsOnScreen = this.defaultItems
    })
  }
  getFilteredItems(filtered:Items[]){
    this.itemsOnScreen = filtered
  }
  ngOnInit(): void {
   this.routeService.data.subscribe((data)=>{
    
      this.routeName = data["path"]
    })
    this.getDefaultItems(this.routeName)
    console.log(this.defaultItems)
    
  }
  
}
