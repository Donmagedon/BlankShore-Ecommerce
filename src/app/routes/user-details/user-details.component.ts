import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadUserInfoService } from 'src/app/Services/load-user-info.service';
import { CurrentUser } from 'src/app/models/current-user';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
public selected : boolean = false
public user$!: Observable<CurrentUser>

constructor(private session: LoadUserInfoService){

}
loadUser(){
  this.user$ = this.session.loadAttributes()
}
selectRoute(){
  this.selected = true
}
ngOnInit(): void {
  this.loadUser()
}
}
