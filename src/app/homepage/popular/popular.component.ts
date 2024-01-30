import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetItemsService } from 'src/app/Services/get-items.service';
import { Items } from 'src/app/models/items';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit{
public collectionItems$! : Observable<Items[]>
public arry! : Items[]
constructor(private LoadCollection : GetItemsService){}
load(){
  this.LoadCollection.loadCollection().subscribe((info)=>{
    this.arry = info
    console.log(info)
  })

}
ngOnInit(): void {
  this.collectionItems$ = this.LoadCollection.loadCollection()

  this.load()
  
}
}
