import { Component, OnInit } from '@angular/core';
import { AddAddressFormComponent } from '../add-address-form/add-address-form.component';
import { LoadUserInfoService } from 'src/app/Services/load-user-info.service';
import { MiscellaneousDataService } from 'src/app/Services/miscellaneaous/miscellaneous-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GetItemsService } from 'src/app/Services/get-items.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Items } from 'src/app/models/items';
import { CurrentUser } from 'src/app/models/current-user';
import { Observable } from 'rxjs';
import { UpdateInfoService } from 'src/app/Services/update-info.service';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['../add-address-form/add-address-form.component.css']
})
export class EditAddressComponent  implements OnInit{
  public currentUser$! : Observable<CurrentUser>
  public currentUser!: CurrentUser
  public orderDetails! : FormGroup
  public formCountriesList!: Array<any>
  public route!: any
  public identifier!: any
  public currentItem!: Items
  public changes! : any
  public invalidForm: boolean = false
  constructor(private data: MiscellaneousDataService ,private theRoute: ActivatedRoute, private getItemService: GetItemsService, private session: LoadUserInfoService, private formSan:UpdateInfoService,private router:Router){
  this.orderDetails = new FormGroup({
    // firstName: new FormControl(null,[Validators.required]),
    // lastName: new FormControl(null,[Validators.required]),
    address1: new FormControl(null,[Validators.required]),
    address2: new FormControl(null,[Validators.required]),
    city: new FormControl(null,[Validators.required]),
    country: new FormControl(null,[Validators.required]),
    postalCode: new FormControl(null,{})

  })
  }
  //Planning to remove from from from First and Last Name
  // get firstName():any {
  //   return this.orderDetails.get("firstName")
  // }
  // get lastName():any{
  //   return this.orderDetails.get("lastName")
  // }
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
  detectChanges(){
    this.changes = this.formSan.modifiedForms(Object.entries(this.orderDetails.controls))
  }
  submit(){
    this.invalidForm = this.orderDetails.invalid
    if(this.invalidForm){
      return
    }else{
      if(!this.changes && this.invalidForm){
        return
      }else{
        this.formSan.makeChanges({addresses:[this.changes]}).subscribe()
        this.router.navigate(["user/address"])
      }
    }
  }
  cancel(){
    this.router.navigate(["user/address"])
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
   this.loadUser()
  }
  loadUser(){
    this.currentUser$ = this.session.loadAttributes()
    this.currentUser$.subscribe((info)=>{
      console.log(info)
      this.orderDetails.get("address1")?.setValue(info.addresses[0].address)
      this.orderDetails.get("address2")?.setValue(info.addresses[0].address2)
      this.orderDetails.get("city")?.setValue(info.addresses[0].city)

    })
  }

}
