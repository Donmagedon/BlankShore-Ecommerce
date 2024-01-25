import { Component,OnInit } from '@angular/core';
import { GetItemsService } from 'src/app/Services/get-items.service';
import { ActivatedRoute } from '@angular/router';
import { Items } from 'src/app/models/items';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item-preview',
  templateUrl: './item-preview.component.html',
  styleUrls: ['./item-preview.component.css']
})
export class ItemPreviewComponent implements OnInit{
  public moreDetailsArrow ="up"
  public moreDetailsState: boolean = false
  public routeName!: any
  public identifier!:any
  public itemInfo$!: Observable<Items>
  public itemAsynch!: Items

  constructor(private getItems:GetItemsService,private routeService: ActivatedRoute ){

  }
  getItemInfo(){
    this.itemInfo$ = this.getItems.getSingleItem(this.routeName,this.identifier.identifier)
    


  }
  ngOnInit(): void {
    this.routeService.data.subscribe((info)=>{
      this.routeName = info["path"]
    }
  
    )
  this.routeService.params.subscribe((info)=>{
    this.identifier = info
  })
  this.getItemInfo()
  

  }

  moreDetails(){
    this.moreDetailsState = !this.moreDetailsState
    if(this.moreDetailsState){
      this.moreDetailsArrow = "down"
    }else{
      this.moreDetailsArrow ="up"
    }
  }
}
