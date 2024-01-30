import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FooterComponent } from './homepage/footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ClothingComponent } from './routes/clothing/clothing.component';
import { BlogComponent } from './routes/blog/blog.component';
import { ItemPreviewComponent } from './routes/item-preview/item-preview.component';
import { OrderPreviewComponent } from './routes/order-preview/order-preview.component';
import { ContactUsComponent } from './routes/contact-us/contact-us.component';
import { LoginPageComponent } from './routes/login-page/login-page.component';
import { SavedAddressCardComponent } from './components/saved-address-card/saved-address-card.component';
import { SavedDetailsCardComponent } from './components/saved-details-card/saved-details-card.component';
import { AddPersonalDetailsFormComponent } from './components/add-personal-details-form/add-personal-details-form.component';
import { AddAddressFormComponent } from './components/add-address-form/add-address-form.component';
import { EditPersonalDetailsComponent } from './components/edit-personal-details/edit-personal-details.component';
import { EditAddressComponent } from './components/edit-address/edit-address.component';
import { UserDetailsComponent } from './routes/user-details/user-details.component';
import { ShoppingCartComponent } from './routes/shopping-cart/shopping-cart.component';

const routes: Routes = [
{  path:"",component:HomepageComponent
},{
  
  path:"clothing/Sweaters",component:ClothingComponent,data:{path:"Sweater"}
},{
  
  path:"clothing/Sweaters/:identifier",component:ItemPreviewComponent,data:{path:"Sweater"}
},{
  path:"Clothing/Sweater/:identifier", redirectTo:"clothing/Sweaters/:identifier"
},
{path:"clothing/Jeans",component:ClothingComponent,data:{path:"Jeans"}},
{path:"clothing/Jeans/:identifier",component:ItemPreviewComponent, data:{path:"Jeans"}},
{path:"clothing/Hats",component:ClothingComponent,data:{path:"Hat"}},
{
  
  path:"clothing/Hats/:identifier",component:ItemPreviewComponent,data:{path:"Hat"}
},{
  path:"Clothing/Hats/:identifier",redirectTo:"clothing/Hats/:identifier"
},
{path:"shoes",component:ClothingComponent,data:{path:"Shoe"}},
{
  
  path:"shoes/:identifier",component:ItemPreviewComponent,data:{path:"Shoe"}
},
{
  path:"Shoe/Shoe/:identifier",redirectTo:"shoes/:identifier"
},
{
  
  path:"blog",component:BlogComponent
},{
  path:"cart",component:ShoppingCartComponent
},
{
  path:"contact",component:ContactUsComponent
},
{
  path:"order/:path/:identifier",component:OrderPreviewComponent
},{
  path:"login",component:LoginPageComponent
},
{
  path:"user",component:UserDetailsComponent,children:[
    {
      path:"address",component:SavedAddressCardComponent
    },
    {
      path:"edit-address",component:EditAddressComponent,
    },
    {
      path:"personal",component:SavedDetailsCardComponent,
    
    },{
      path:"edit-personal",component:EditPersonalDetailsComponent,
    }
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
