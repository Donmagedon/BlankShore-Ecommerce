import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadUserInfoService } from 'src/app/Services/load-user-info.service';
import { UpdateInfoService } from 'src/app/Services/update-info.service';
import { CurrentUser } from 'src/app/models/current-user';
import { Items } from 'src/app/models/items';

@Component({
  selector: 'app-item-summary-card',
  templateUrl: './item-summary-card.component.html',
  styleUrls: ['../../routes/order-preview/order-preview.component.css']
})
export class ItemSummaryCardComponent implements OnInit{
  @Input() removed : boolean = false
  @Input() userInfo! : Items
  @Output() renderUpdate = new EventEmitter<any>()
  public finalPrice! : number
  public items$! : Observable<CurrentUser>
  constructor(private makeChanges: UpdateInfoService , private session: LoadUserInfoService){

  }
  updatePrices(){
    this.items$.subscribe((info)=>{
      this.finalPrice = info.shopping_cart.reduce((acc,curr)=>{
        
         return acc + curr.price
       },0)
      
     })
  }
  loadUser(){
    this.items$ = this.session.loadAttributes()
    this.updatePrices()
  
  }
  
  ngOnInit(): void {
    
  }
  remove(){
    this.makeChanges.removeFromChopin(this.userInfo.name).subscribe()
    this.removed = true
    this.renderUpdate.emit()
   
  }
}
