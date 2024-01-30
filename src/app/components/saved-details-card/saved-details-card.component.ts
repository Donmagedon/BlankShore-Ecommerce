import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoadUserInfoService } from 'src/app/Services/load-user-info.service';
import { CurrentUser } from 'src/app/models/current-user';

@Component({
  selector: 'app-saved-details-card',
  templateUrl: './saved-details-card.component.html',
  styleUrls: ['./saved-details-card.component.css']
})

export class SavedDetailsCardComponent implements OnInit{
public optionsActive: boolean = false
public currentUser$! :Observable<CurrentUser>
constructor (private session: LoadUserInfoService,private router:Router){
}
ngOnInit(): void {
  this.loadUser()
}
loadUser(){
  this.currentUser$ = this.session.loadAttributes()
}
display(){
  this.optionsActive = true
}
hideOptions(){
  this.optionsActive = false
}
edit(){
  this.router.navigate(["user","edit-personal"])
}
}
