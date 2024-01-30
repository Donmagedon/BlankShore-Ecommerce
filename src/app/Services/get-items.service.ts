import { Injectable } from '@angular/core';
import { Items } from '../models/items';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetItemsService {
  constructor(private http:HttpClient) { 

  }
  getDefaultItems(route:string):Observable<Items[]>{
    return this.http.get<Items[]>(`/items/${route}`)
  }
 getFilteredItems(route:string,filters:any):Observable<Items[]>{
  return this.http.get<Items[]>(`/items/${route}`,{
    params:filters
  }) 
 }
 getSingleItem(route:string ,identifier:string):Observable<Items>{
  return this.http.get<Items>(`/items/${route}/${identifier}`,
)
 }
 loadCollection():Observable<Items[]>{
  return this.http.get<Items[]>("/items/collection")
 }
 
}
