import { Component,OnInit } from '@angular/core';
import { Routes } from 'src/app/models/RoutesNavBar';
import { LoadUserInfoService } from 'src/app/Services/load-user-info.service';
import { CurrentUser } from 'src/app/models/current-user';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})



export class NavbarComponent implements OnInit{
  public pagesActive = false
  public shopActive = false
  public expandableRoutes!: Array<Routes>
  public shopLinks!: Array<Routes>
  public pageLinks!: Array<Routes>
  public what = false
  public user!: Observable<CurrentUser>
  constructor(private session: LoadUserInfoService ){}
  loadUser(){
    this.user = this.session.loadAttributes()

  }
  ngOnInit(): void {
    this.loadUser()
    this.expandableRoutes = [
      {
        link: "/",
        title:"shop",
        reference: this.shopActive
      },
      {
        link: "/clothing",
        title:"clothing",
        reference:false,
      }
    ]

     this.pageLinks = [
      {
        link: "/",
        title:"shop",
        reference: this.shopActive
      },
      {
        link: "/articles",
        title:"Articles",
      },
      {
        link: "/news",
        title:"News",
      },
      {
        link: "/collections",
        title:"Collections",
        
      }]
      this.shopLinks = [
        {
          link: "/clothing",
          title:"Clothing",
          reference:false,
          deepLinks:[
            {
              link:"clothing/Jeans",
              title:"Jeans",
          },
          {
            link:"clothing/Sweaters",
            title:"Sweaters",
        },
        {
          link:"clothing/Hats",
          title:"Hats",
      }
      ]
      },
      {
        link:"shoes",
        title:"Shoes"
      }
    ]

  }
  showLinks(link:string,position:number){
    if(position !== 0){
      return
    }
    
    let currentRoutes = this.expandableRoutes.find((route:Routes)=>{
      return route.title === link
    })     
    if(currentRoutes === undefined){
      return
    }
    currentRoutes.reference = true
  }
  hideLinks(link:string){
 
    let currentRoutes = this.expandableRoutes.find((route:Routes)=>{
      return route.title === link
    })     
    if(currentRoutes === undefined){
      return
    }
    currentRoutes.reference = false
  }

}
