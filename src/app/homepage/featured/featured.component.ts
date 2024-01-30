import { Component, OnInit } from '@angular/core';
import { GetItemsService } from 'src/app/Services/get-items.service';
import { Items } from 'src/app/models/items';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit{
  public featureItem! : Items
  constructor(private loadItem : GetItemsService){
  }
  loadFeaturedItem(){
    this.loadItem.getFilteredItems("Shoe",{price:"gt,100"}).subscribe((info)=>{
      let result = info
      function getRandomItem(min = 0, max:number){
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (min + max))       }
      
        this.featureItem = info[getRandomItem(0,info.length - 1)]
    })
    
  }
  ngOnInit(): void {
    this.loadFeaturedItem()
  }
}
