import { Items } from "./items"

export interface CurrentUser{
    username:string,
    password:string
    first_name:string,
    last_name:string,
    favorite_song:string,
    addresses:Array<any>
    shopping_cart:Array<Items>
}