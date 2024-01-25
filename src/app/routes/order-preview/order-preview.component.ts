import { Component,OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { MiscellaneousDataService } from 'src/app/Services/miscellaneaous/miscellaneous-data.service';
import { GetItemsService } from 'src/app/Services/get-items.service';
import { Items } from 'src/app/models/items';
import { AuthenticationService } from 'src/app/Services/authentication.service';
@Component({
  selector: 'app-order-preview',
  templateUrl: './order-preview.component.html',
  styleUrls: ['./order-preview.component.css']
})
export class OrderPreviewComponent implements OnInit{
  public orderDetails! : FormGroup
  public formCountriesList!: Array<any>
  public route!: any
  public identifier!: any
  public currentItem!: Items
  constructor(private data: MiscellaneousDataService ,private theRoute: ActivatedRoute, private getItemService: GetItemsService){
  this.orderDetails = new FormGroup({
    firstName: new FormControl(null,[Validators.required]),
    lastName: new FormControl(null,[Validators.required]),
    address1: new FormControl(null,[Validators.required]),
    address2: new FormControl(null,[Validators.required]),
    city: new FormControl(null,[Validators.required]),
    country: new FormControl(null,[Validators.required]),
    postalCode: new FormControl(null,{})

  })
  }
  get firstName():any {
    return this.orderDetails.get("firstName")
  }
  get lastName():any{
    return this.orderDetails.get("lastName")
  }
  get address1():any{
    return this.orderDetails.get("address1")
  }
  get address2():any{
    return this.orderDetails.get("address2")
  }
  get city():any{
    return this.orderDetails.get("city")
  }
  get country():any{
    return this.orderDetails.get("country")
  }
  get postalCode():any{
    return this.orderDetails.get("postalCode")
  }

  countriesData(){
    this.data.allCountries().subscribe((info)=>{
     let allCountries =  info.data.map((entry:any)=>{
        return entry.name
      })
      this.formCountriesList = allCountries
      
      
    })
  }

  getItem(){
   this.getItemService.getSingleItem(this.route,this.identifier).subscribe((item)=>{
    this.currentItem = item
   })
  }
  ngOnInit(): void {
    this.countriesData()
    this.theRoute.params.subscribe((data)=>{
      this.route = data["path"]
      this.identifier = data["identifier"]
    })
   this.getItem() 
   
  }
}
