import { Component,OnInit, Output,EventEmitter,Input } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Items } from 'src/app/models/items';
import { GetItemsService } from 'src/app/Services/get-items.service';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.css']
})
export class FilterPanelComponent  implements OnInit{
  public toggled = false
  public filteredItems!: Array<Items>
  public filters!: FormGroup
 

  @Input() public defaultItems!: Array<Items>
  @Input() public itemsOnScreen!: Array<Items>
  @Input() public routeName!: any
  @Output() public emitfilteredItems = new EventEmitter <Items[]>()

  constructor(private getItems:GetItemsService){
    this.filters = new FormGroup(   {
      price: new FormControl(null,{}),
      season: new FormControl(null,{}),
      fit: new FormControl(null,{})

    })
  }
  ngOnInit(): void {

  }

  toggle(){
    this.toggled = !this.toggled
  }
  getActiveFilters(n:any){
    let activeFilters:object = Object.entries(this.filters.value)
    .filter((val)=> val[1] !== null)
    .reduce((acc:any,[key,value])=>{
      acc[key] = value
      return acc
    },{})
    this.getItems.getFilteredItems(this.routeName,activeFilters).subscribe((data)=>{
      this.itemsOnScreen = data
      this.emitfilteredItems.emit(data)
    })   
    
  }


  
}
