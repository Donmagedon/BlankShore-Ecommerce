import { Component,OnInit } from '@angular/core';
import { GetItemsService } from 'src/app/Services/get-items.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Items } from 'src/app/models/items';
import { Observable } from 'rxjs';
import { UpdateInfoService } from 'src/app/Services/update-info.service';
import { LoadUserInfoService } from 'src/app/Services/load-user-info.service';

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
  public addedToCart : boolean = false
  constructor(private getItems:GetItemsService,private routeService: ActivatedRoute , private update : UpdateInfoService,private router:Router ){

  }
  getItemInfo(){
    this.itemInfo$ = this.getItems.getSingleItem(this.routeName,this.identifier.identifier)
    this.itemInfo$.subscribe((info)=>{
      this.itemAsynch = info
    })

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
  addCart(){
    this.addedToCart = true
    this.update.addToChopin(this.itemAsynch).subscribe()
    this.router.navigate(["cart"])
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
