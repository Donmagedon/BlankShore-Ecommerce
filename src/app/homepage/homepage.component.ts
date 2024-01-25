import { Component, OnInit } from '@angular/core';
import { LoadUserInfoService } from '../Services/load-user-info.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  constructor(private test: LoadUserInfoService){

  }
  test2(){    
    this.test.loadAttributes().subscribe((info)=>{
      console.log(info)
    })
  }
  ngOnInit(): void {
  }
}
