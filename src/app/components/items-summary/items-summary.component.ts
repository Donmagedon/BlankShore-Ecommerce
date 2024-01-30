import { Component, DoCheck, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError } from 'rxjs';
import { LoadUserInfoService } from 'src/app/Services/load-user-info.service';
import { CurrentUser } from 'src/app/models/current-user';
import { Items } from 'src/app/models/items';

@Component({
  selector: 'app-items-summary',
  templateUrl: './items-summary.component.html',
  styleUrls: ['./items-summary.component.css']
})
export class ItemsSummaryComponent implements OnInit{
  public items$! : Observable<CurrentUser>
  public totalItemsPrice!:number
  public removing : boolean = false
  public itemsCount! : number 
  @Output() changetocart = new EventEmitter<any>()
  constructor (private session : LoadUserInfoService,private router : Router){
}

loadUser(){
  this.items$ = this.session.loadAttributes()
  this.items$.pipe(catchError((err)=>{
    if(err){
      this.router.navigate(["/login"])
    }
    throw err
  })).subscribe()
  this.items$.subscribe((info)=>{
    this.totalItemsPrice = info.shopping_cart.reduce((acc,curr)=>{
       return acc + curr.price
     },0)
     
   })

}
carryItemCount(){
  this.session.loadAttributes().subscribe((info)=>{
    this.itemsCount = info.shopping_cart.length
    this.changetocart.emit(this.itemsCount)
    
  })
}

updatePrices(){
  this.items$.subscribe((info)=>{
    this.totalItemsPrice = info.shopping_cart.reduce((acc,curr)=>{
      
       return acc + curr.price
     },0)
    
   })


   }
checkPrice(e : number){
  this.updatePrices()
   this.carryItemCount()
   
   
}


ngOnInit(): void {
  this.loadUser()
  

}
}

