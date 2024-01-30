import { Component, Host, OnInit } from '@angular/core';
import { Input,ViewChild,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoadUserInfoService } from 'src/app/Services/load-user-info.service';
import { CurrentUser } from 'src/app/models/current-user';

@Component({
  selector: 'app-saved-address-card',
  templateUrl: './saved-address-card.component.html',
  styleUrls: ['./saved-address-card.component.css']
})

export class SavedAddressCardComponent implements OnInit{
  public optionsActive: boolean = false
  public notRemoved: boolean = false
  public currentUser$! : Observable<CurrentUser>
  @Input() test : boolean = false
  constructor(private session : LoadUserInfoService, private router : Router){

  }
  selectOptions(){
    this.optionsActive = !this.optionsActive
  }
  hideOptions(){
    this.optionsActive = false
  }
  hideCard(){
    this.notRemoved = true

  }
  removeAddress(){
    this.notRemoved = true
  }
  editAddress(){
    this.hideCard()
    this.router.navigate(["user","edit-address"])
  }
  loadUsers(){
    this.currentUser$ = this.session.loadAttributes()
   
  }
ngOnInit(): void {
  this.loadUsers()
}
}
